import chalk from 'chalk';
import { hideBin } from 'yargs/helpers'; // eslint-disable-line import/extensions
import yargs from 'yargs/yargs';
import runMigration, { listMigrations } from './migrate';

export async function run() {
  // Set up the command
  const args = yargs(hideBin(process.argv))
    .command(
      ['$0 [options]'],
      'Run an EDS codemod migration on your source files',
    )
    .options({
      list: {
        describe: 'List available migrations',
        type: 'boolean',
      },
      name: {
        describe: 'The migration to run',
        type: 'string',
      },
      verbose: {
        describe: 'Print additional details for debugging purposes',
        type: 'boolean',
      },
    }).argv;

  // @ts-expect-error Typing for args isn't as good as we'd like them to be
  const { name, list, verbose: isVerbose } = args;

  if (list) {
    listMigrations().forEach((migration) => {
      console.log(`  ${migration}`);
    });
  } else if (name) {
    await runMigration(name, { isVerbose });
  } else {
    console.warn(
      chalk.red(
        'Migrate: please use --name to specify a migration name or use --list to see the list of available migrations',
      ),
    );
  }
}

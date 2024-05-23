import fs from 'node:fs';
import path from 'node:path';
import { Project } from 'ts-morph';

const MIGRATION_DIR = `${__dirname}/migrations`;

/**
 * Lists all the available migrations.
 *
 * @returns {string[]} Array of migration names.
 */
export function listMigrations() {
  return fs
    .readdirSync(MIGRATION_DIR)
    .filter((fname) => fname.endsWith('.js'))
    .map((fname) => fname.slice(0, -3));
}

/**
 * Runs the migration specified by name with given options.
 *
 * @param {string} name - The name of the migration.
 * @param {Options} options - Options for the migration.
 * @returns {Promise<void>} A Promise that resolves when the migration is complete.
 */
export default async function runMigration(
  name: string,
  options: { isVerbose?: boolean },
): Promise<void> {
  const { isVerbose } = options;

  // runMigration is called by a CLI we want the directory
  // the command is ran in and not the directory of this file
  const tsconfigPath = path.join(process.cwd(), './tsconfig.json');
  if (isVerbose) {
    console.log(`Using the following tsconfig.json file: ${tsconfigPath}`);
  }
  const project = new Project({
    tsConfigFilePath: path.join(tsconfigPath),
  });

  const pathToMigration = path.join(MIGRATION_DIR, `${name}.js`);
  try {
    console.log(`Running the following migration: "${name}"`);
    const module = await import(pathToMigration);
    // This syntax seems odd to need when the code is packaged
    module.default.default(project);
  } catch (error) {
    console.error('Error importing module:', error);
  }

  await project.save();
}

import fs from 'node:fs';
import path from 'node:path';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import runMigration, { listMigrations } from '.';

const { MockProject, save } = vi.hoisted(() => {
  const save = vi.fn().mockResolvedValue(undefined);
  const MockProject = vi.fn(function () {
    return { save };
  });
  return { MockProject, save };
});

vi.mock('ts-morph', () => ({ Project: MockProject }));

const migrationPath = path.join(__dirname, 'migrations', 'fake-migration.js');
const migrate = vi.fn();
vi.doMock(migrationPath, () => ({ default: { default: migrate } }));

describe('listMigrations', () => {
  it('lists the compiled migrations by name', () => {
    vi.spyOn(fs, 'readdirSync').mockReturnValue([
      '14-to-15.js',
      '15-to-16.js',
      '15-to-16.d.ts',
      'README.md',
    ] as unknown as ReturnType<typeof fs.readdirSync>);

    expect(listMigrations()).toEqual(['14-to-15', '15-to-16']);
  });
});

describe('runMigration', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('runs the named migration against the project in the working directory, then saves', async () => {
    await runMigration('fake-migration', {});

    const project = MockProject.mock.results.at(-1)?.value;
    expect(MockProject).toHaveBeenLastCalledWith({
      tsConfigFilePath: path.join(process.cwd(), 'tsconfig.json'),
    });
    expect(migrate).toHaveBeenCalledWith(project);
    expect(save).toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });

  it('logs the tsconfig path in verbose mode', async () => {
    await runMigration('fake-migration', { isVerbose: true });

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining(path.join(process.cwd(), 'tsconfig.json')),
    );
  });

  it('logs an error and still saves when the migration cannot be loaded', async () => {
    save.mockClear();

    await runMigration('does-not-exist', {});

    expect(console.error).toHaveBeenCalledWith(
      'Error importing module:',
      expect.anything(),
    );
    expect(save).toHaveBeenCalled();
  });
});

import {
  InMemoryFileSystemHost,
  Project,
  type ImportDeclaration,
} from 'ts-morph';

/**
 * Checks if the import declaration is for the design system.
 * @returns {boolean} - True if the import is from the design system, false otherwise.
 */
export function isDesignSystemImport(node: ImportDeclaration) {
  return node.getModuleSpecifierValue() === '@chanzuckerberg/eds';
}

/**
 * Creates an in-memory source file for testing
 */
export function createTestSourceFile(sourceFileText: string) {
  const host = new InMemoryFileSystemHost();
  const project = new Project({
    compilerOptions: undefined,
    fileSystem: host,
    skipLoadingLibFiles: true,
  });

  return project.createSourceFile('testFile.tsx', sourceFileText);
}

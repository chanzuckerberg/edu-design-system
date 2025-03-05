import type { Project } from 'ts-morph';
import editJsxProp from '../transforms/edit-jsx-prop';
import type { Change as EditJsxPropChange } from '../transforms/edit-jsx-prop';
import renameJsxImport from '../transforms/rename-jsx-import';
import type { Change as RenameJsxImportChange } from '../transforms/rename-jsx-import';

/**
 * Import paths that changed from EDS v15 to v16
 *
 * Given a component, list out the change to the component name(s).
 *
 * Take the following transform:
 * [
 *   {
 *      removeAlias: true,
 *      oldImportName: 'ButtonV2',
 *      newImportName: 'Button',
 *    },
 * ]
 *
 * Make the following transform:
 *
 * @example
 * ```
 * // Before:
 * import {ButtonV2 as Button} from '@chanzuckerberg/eds';
 *
 * // After:
 * import {Button} from '@chanzuckerberg/eds';
 * ```
 */
const ImportChanges: RenameJsxImportChange[] = [];

/**
 * Known prop changes for updated components from EDS v15 to v16
 *
 * Given a component, list out the changes of props and values.
 *
 * Take the following transform:
 * {
 *    componentName: 'ComponentName',
 *    edits: [
 *         {
 *           type: 'update_value',
 *           propName: 'propName',
 *           oldPropValue: 'valueA',
 *           newPropValue: 'valueB',
 *         }
 *    ]
 * }
 *
 * Make the following conversion
 *
 * @example
 * ```
 * // Before
 * <ComponentName propName="valueA" />
 *
 * // After
 * <ComponentName propName="valueB" />
 * ```
 */
export const PropChanges: EditJsxPropChange[] = [];

/**
 * Runs the migration to upgrade EDS from v15 to v16
 */
export default function migration(project: Project) {
  const files = project.getSourceFiles();
  const sourceFiles = files.filter((file) => !file.isDeclarationFile());

  console.debug(`Running migration on ${sourceFiles.length} file(s)`);

  sourceFiles.forEach((sourceFile) => {
    renameJsxImport({ file: sourceFile, changes: ImportChanges });
    editJsxProp({ file: sourceFile, changes: PropChanges });
  });
}

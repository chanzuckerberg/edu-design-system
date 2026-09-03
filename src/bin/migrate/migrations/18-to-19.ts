import type { Project } from 'ts-morph';
import editJsxProp from '../transforms/edit-jsx-prop';
import type { Change as EditJsxPropChange } from '../transforms/edit-jsx-prop';
import renameJsxImport from '../transforms/rename-jsx-import';
import type { Change as RenameJsxImportChange } from '../transforms/rename-jsx-import';

/**
 * Import paths that changed from EDS v18 to v19
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
 * `Text` and `Heading` no longer accept the typography presets that belong to a single
 * component (see `componentPresets` in `src/util/variant-types.ts`). Each one here maps
 * to the reusable preset whose `Text.module.css` declarations are identical, so the
 * rendered type does not change.
 *
 * Two reusable presets match `dataTable-headerCell` exactly, `title-xs` and
 * `overline-md`. We land on `title-xs`.
 */
const presetReplacements = [
  { oldPropValue: 'input-md', newPropValue: 'body-md' },
  { oldPropValue: 'input', newPropValue: 'body-md' },
  { oldPropValue: 'tab-lg-active', newPropValue: 'label-md' },
  { oldPropValue: 'tab-lg', newPropValue: 'body-sm' },
  { oldPropValue: 'tab-sm-active', newPropValue: 'label-sm' },
  { oldPropValue: 'tab-sm', newPropValue: 'body-xs' },
  { oldPropValue: 'tag', newPropValue: 'overline-sm' },
  { oldPropValue: 'appHeader-label', newPropValue: 'body-sm' },
  { oldPropValue: 'appHeader-subLabel', newPropValue: 'body-xs' },
  { oldPropValue: 'dataTable-headerCell', newPropValue: 'title-xs' },
] as const;

const presetEdits = presetReplacements.map(
  ({ oldPropValue, newPropValue }) => ({
    type: 'update_value' as const,
    propName: 'preset',
    oldPropValue,
    newPropValue,
  }),
);

/**
 * Known prop changes for updated components from EDS v18 to v19
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
export const PropChanges: EditJsxPropChange[] = [
  {
    componentName: 'Text',
    edits: presetEdits,
  },
  {
    componentName: 'Heading',
    edits: presetEdits,
  },
];

/**
 * Runs the migration to upgrade EDS from v18 to v19
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

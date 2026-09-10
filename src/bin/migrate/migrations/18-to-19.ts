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
 * The leading slot on these components is now a content slot: it still takes an EDS
 * icon name, and also takes a node. Only the prop name changed, so passing the same
 * icon name under the new name renders exactly what it did before.
 *
 * `Accordion.Row`'s `hasLeadingIcon` is the boolean companion to the renamed slot, and
 * sits beside an existing `hasTrailingContent`, so it follows to `hasLeadingContent`.
 */
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
const leadingIconToContent = [
  {
    type: 'update_name' as const,
    oldPropName: 'leadingIcon',
    newPropName: 'leadingContent',
  },
];

/**
 * `PopoverListItem` and `Menu.Item` each had a deprecated `icon` alongside
 * `leadingContent`, and both rendered into the same slot. `leadingContent` now routes a
 * string through `IconSlot` at the same 24px the `icon` prop used, so moving the icon name
 * across renders exactly what it did before.
 */
const iconToLeadingContent = [
  {
    type: 'update_name' as const,
    oldPropName: 'icon',
    newPropName: 'leadingContent',
  },
];

/**
 * The icons these props set are semantic: each marks one well-defined role (expand,
 * back), and a role only reads as itself if it looks the same everywhere it appears. They
 * are now set app-wide through `IconProvider` and no longer taken per instance, so the
 * prop is dropped rather than renamed.
 *
 * Dropping it is safe for every value it could hold. Each was typed to a single icon
 * name (`'chevron-left'` on `Breadcrumbs.Item`, `'chevron-down'` on the `Select` and
 * `Combobox` indicators) or only did anything when given a chevron, so every one of them
 * rendered what the default `IconProvider` renders now. Consumers who set one to something
 * else get the default back, and move the override into an `IconProvider`.
 *
 * Each removal covers both the v18 name and the name it briefly carried during v19
 * prereleases, so a consumer who already ran an earlier copy of this migration lands in
 * the same place.
 */
const removeSemanticIconProps = (propNames: string[]) =>
  propNames.map((propName) => ({
    type: 'remove' as const,
    propName,
  }));

export const PropChanges: EditJsxPropChange[] = [
  {
    componentName: 'Text',
    edits: presetEdits,
  },
  {
    componentName: 'Heading',
    edits: presetEdits,
  },
  {
    componentName: 'Accordion.Button',
    edits: [
      ...leadingIconToContent,
      ...removeSemanticIconProps(['trailingIcon', 'indicatorContent']),
    ],
  },
  {
    componentName: 'Accordion.Row',
    edits: [
      {
        type: 'update_name',
        oldPropName: 'hasLeadingIcon',
        newPropName: 'hasLeadingContent',
      },
    ],
  },
  {
    componentName: 'DataTable.DataCell',
    edits: leadingIconToContent,
  },
  {
    componentName: 'DataTable.HeaderCell',
    edits: leadingIconToContent,
  },
  {
    componentName: 'InputField',
    edits: leadingIconToContent,
  },
  {
    componentName: 'SelectionChip',
    edits: leadingIconToContent,
  },
  {
    componentName: 'PopoverListItem',
    edits: iconToLeadingContent,
  },
  {
    componentName: 'Menu.Item',
    edits: iconToLeadingContent,
  },
  {
    componentName: 'Menu.Button',
    edits: removeSemanticIconProps(['icon', 'trailingContent']),
  },
  {
    componentName: 'Breadcrumbs.Item',
    edits: removeSemanticIconProps(['icon']),
  },
  {
    componentName: 'Select.Button',
    edits: removeSemanticIconProps(['icon']),
  },
  {
    componentName: 'Select.ButtonWrapper',
    edits: removeSemanticIconProps(['icon']),
  },
  {
    componentName: 'Combobox.Button',
    edits: removeSemanticIconProps(['icon']),
  },
  {
    componentName: 'Combobox.Input',
    edits: removeSemanticIconProps(['icon']),
  },
  {
    componentName: 'Combobox.InputWrapper',
    edits: removeSemanticIconProps(['icon']),
  },
  {
    /**
     * `Link.icon` never took an arbitrary icon: it picked one of two roles, or none. Both
     * are now named as roles and resolved through `IconProvider`, so the value that was
     * already a role name (`open-in-new`) is unchanged, and the one that named a glyph
     * becomes `forward`.
     */
    componentName: 'Link',
    edits: [
      {
        type: 'update_value',
        propName: 'icon',
        oldPropValue: 'chevron-right',
        newPropValue: 'forward',
      },
    ],
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

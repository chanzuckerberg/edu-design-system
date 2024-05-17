import type { Project } from 'ts-morph';
import renameJsxImport from '../transforms/rename-jsx-import';
import type { Change as RenameJsxImportChange } from '../transforms/rename-jsx-import';

/**
 * Import paths that changed from EDS v14 to v15 alpha
 */
const ImportChanges: RenameJsxImportChange[] = [
  {
    alias: 'Accordion',
    oldImportName: 'Accordion',
    newImportName: 'AccordionV2',
  },
  {
    alias: 'Button',
    oldImportName: 'Button',
    newImportName: 'ButtonV2',
  },
  {
    alias: 'ButtonGroup',
    oldImportName: 'ButtonGroup',
    newImportName: 'ButtonGroupV2',
  },
  {
    alias: 'Card',
    oldImportName: 'Card',
    newImportName: 'CardV2',
  },
  {
    alias: 'Checkbox',
    oldImportName: 'Checkbox',
    newImportName: 'CheckboxV2',
  },
  {
    alias: 'FieldNote',
    oldImportName: 'FieldNote',
    newImportName: 'FieldNoteV2',
  },
  {
    alias: 'Icon',
    oldImportName: 'Icon',
    newImportName: 'IconV2',
  },
  {
    alias: 'InlineNotification',
    oldImportName: 'InlineNotification',
    newImportName: 'InlineNotificationV2',
  },
  {
    alias: 'InputField',
    oldImportName: 'InputField',
    newImportName: 'InputFieldV2',
  },
  {
    alias: 'Link',
    oldImportName: 'Link',
    newImportName: 'LinkV2',
  },
  {
    alias: 'Menu',
    oldImportName: 'Menu',
    newImportName: 'MenuV2',
  },
  {
    alias: 'Modal',
    oldImportName: 'Modal',
    newImportName: 'ModalV2',
  },
  {
    alias: 'NumberIcon',
    oldImportName: 'NumberIcon',
    newImportName: 'NumberIconV2',
  },
  {
    alias: 'PageNotification',
    oldImportName: 'PageNotification',
    newImportName: 'PageNotificationV2',
  },
  {
    alias: 'PopoverListItem',
    oldImportName: 'PopoverListItem',
    newImportName: 'PopoverListItemV2',
  },
  {
    alias: 'Radio',
    oldImportName: 'Radio',
    newImportName: 'RadioV2',
  },
  {
    alias: 'Select',
    oldImportName: 'Select',
    newImportName: 'SelectV2',
  },
  {
    alias: 'TabGroup',
    oldImportName: 'TabGroup',
    newImportName: 'TabGroupV2',
  },
  {
    alias: 'TextareaField',
    oldImportName: 'TextareaField',
    newImportName: 'TextareaFieldV2',
  },
  {
    alias: 'Toast',
    oldImportName: 'Toast',
    newImportName: 'ToastV2',
  },
  {
    alias: 'Tooltip',
    oldImportName: 'Tooltip',
    newImportName: 'TooltipV2',
  },
];

/**
 * Runs the migration to upgrade EDS from v14 to v15-alpha
 */
export default function migration(project: Project) {
  const files = project.getSourceFiles();
  const sourceFiles = files.filter((file) => !file.isDeclarationFile());

  console.debug(`Running migration on ${sourceFiles.length} file(s)`);

  sourceFiles.forEach((sourceFile) => {
    renameJsxImport({ file: sourceFile, changes: ImportChanges });
  });
}

import type { Project } from 'ts-morph';
import editJsxProp from '../transforms/edit-jsx-prop';
import type { Change as EditJsxPropChange } from '../transforms/edit-jsx-prop';

const PropChanges: EditJsxPropChange[] = [
  {
    // There were a lot of <Icon /> changes *phew*
    componentName: 'Icon',
    edits: [
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'add-circle',
        newPropValue: 'add-encircled',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'add-alarm',
        newPropValue: 'alarm-add',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'arrow-downward',
        newPropValue: 'arrow-down',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'arrow-narrow-down',
        newPropValue: 'arrow-down-narrow',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'arrow-back',
        newPropValue: 'arrow-left',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'arrow-narrow-left',
        newPropValue: 'arrow-left-narrow',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'arrow-forward',
        newPropValue: 'arrow-right',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'arrow-upward',
        newPropValue: 'arrow-up',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'arrow-narrow-up',
        newPropValue: 'arrow-up-narrow',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'autorenew',
        newPropValue: 'arrows-circular',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'notifications',
        newPropValue: 'bell',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'menu-book',
        newPropValue: 'book-open',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'campaign',
        newPropValue: 'bullhorn',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'business-center',
        newPropValue: 'business',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'check-circle',
        newPropValue: 'checkmark-encircled-filled',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'expand-more',
        newPropValue: 'chevron-down',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'expand-less',
        newPropValue: 'chevron-up',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'schedule',
        newPropValue: 'clock',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'cancel',
        newPropValue: 'close-encircled',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'cloud-done',
        newPropValue: 'cloud-favorable',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'add-comment',
        newPropValue: 'comment-add',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'feedback',
        newPropValue: 'comment-critical',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'feedback',
        newPropValue: 'conversation',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'dangerous',
        newPropValue: 'critical',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'assessment',
        newPropValue: 'data',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'description',
        newPropValue: 'document',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'insert-drive-file',
        newPropValue: 'document-blank',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'event',
        newPropValue: 'calendar',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'event-busy',
        newPropValue: 'calendar-busy',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'event-available',
        newPropValue: 'calendar-favorable',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'sentiment-satisfied',
        newPropValue: 'face-happy',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'sentiment-dissatisfied',
        newPropValue: 'face-unhappy',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'sentiment-very-satisfied',
        newPropValue: 'face-very-happy',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'create-new-folder',
        newPropValue: 'folder-add',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'school',
        newPropValue: 'grad-cap',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'timeline',
        newPropValue: 'graph',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'favorite',
        newPropValue: 'heart-filled',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'info',
        newPropValue: 'info-encircled',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'local-library',
        newPropValue: 'librarian',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'spa',
        newPropValue: 'lotus',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'create',
        newPropValue: 'pencil',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'record-voice-over',
        newPropValue: 'person-sound',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'people',
        newPropValue: 'persons',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'supervised-user-circle',
        newPropValue: 'persons-encircled',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'help',
        newPropValue: 'question-mark-encircled',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'share-custom',
        newPropValue: 'share',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'star-outline',
        newPropValue: 'star',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'swap-vert',
        newPropValue: 'swap-vertical',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'delete',
        newPropValue: 'trash',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'trending-up',
        newPropValue: 'trend-up',
      },
      {
        type: 'update_value',
        propName: 'name',
        oldPropValue: 'ondemand-video',
        newPropValue: 'video',
      },
    ],
  },
];

/**
 * Runs the migration to upgrade EDS from v14 to v15
 */
export default function migration(project: Project) {
  const files = project.getSourceFiles();
  const sourceFiles = files.filter((file) => !file.isDeclarationFile());

  console.debug(`Running migration on ${sourceFiles.length} file(s)`);

  sourceFiles.forEach((sourceFile) => {
    editJsxProp({ file: sourceFile, changes: PropChanges });
  });
}

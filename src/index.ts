// This brings the style tokens that are css custom variables into the built stylesheet so only one stylesheet for EDS has to be imported.
import './tokens-dist/css/variables.css';

/**
 * 1.x component theme exports
 */
export { default as Avatar } from './components/Avatar';
export { default as Badge } from './components/Badge';
export { default as Breadcrumbs } from './components/Breadcrumbs';
export { default as Heading } from './components/Heading';
export { default as HorizontalStepper } from './components/HorizontalStepper';
export { default as Hr } from './components/Hr';
export { default as Label } from './components/Label';
export { default as ProgressBar } from './components/ProgressBar';
export { default as SearchBar } from './components/SearchBar';
export { default as Skeleton } from './components/Skeleton';
export { default as Slider } from './components/Slider';
export { default as Table } from './components/Table';
export { default as Tag } from './components/Tag';
export { default as Text } from './components/Text';
export { default as Toggle } from './components/Toggle';

/**
 * 2.x component theme exports
 */
export { default as Accordion } from './components/Accordion';
export { default as AppNotification } from './components/AppNotification';
export { default as Button } from './components/Button';
export { default as ButtonGroup } from './components/ButtonGroup';
export { default as Card } from './components/Card';
export { default as Checkbox } from './components/Checkbox';
export { default as DataTable } from './components/DataTable';
export { utils as DataTableUtils } from './components/DataTable';
export { default as FieldLabel } from './components/FieldLabel';
export { default as FieldNote } from './components/FieldNote';
export { default as Fieldset } from './components/Fieldset';
export { default as Icon } from './components/Icon';
export { default as InlineNotification } from './components/InlineNotification';
export { default as InputChip } from './components/InputChip';
export { default as InputField } from './components/InputField';
export { default as Link } from './components/Link';
export { default as LoadingIndicator } from './components/LoadingIndicator';
export { default as Menu } from './components/Menu';
export { default as Modal } from './components/Modal';
export { default as NumberIcon } from './components/NumberIcon';
export { default as PageNotification } from './components/PageNotification';
export { default as Popover } from './components/Popover';
export { default as PopoverContainer } from './components/PopoverContainer';
export { default as PopoverListItem } from './components/PopoverListItem';
export { default as Radio } from './components/Radio';
export { default as Select } from './components/Select';
export { default as SelectionChip } from './components/SelectionChip';
export { default as TabGroup } from './components/TabGroup';
export { default as TextareaField } from './components/TextareaField';
export { default as ToastNotification } from './components/ToastNotification';
export { default as Tooltip } from './components/Tooltip';
export { default as VisualPageIndicator } from './components/VisualPageIndicator';

/**
 * 2.x prop type exports
 */
export type { IconName } from './components/Icon';
export type { ButtonProps } from './components/Button';
export type { LinkProps } from './components/Link';
export type { PageNotificationProps } from './components/PageNotification';
export type { AppNotificationProps } from './components/AppNotification';
export type {
  DataTableProps,
  DataTableRowProps,
  DataTableWithStatus,
  DataTableSortDirection,
} from './components/DataTable';

// TODO(next-major): Remove the below types at the next major release
export type { PageNotificationProps as PageNotificationV2Props } from './components/PageNotification';
export type { AppNotificationProps as AppNotificationV2Props } from './components/AppNotification';

/**
 * Utilities re-exported from dependent libraries
 */
// https://headlessui.com/v1/react/transition
export { Transition } from '@headlessui/react';

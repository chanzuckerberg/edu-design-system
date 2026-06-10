import { Transition } from '@headlessui/react';
import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';

import type { ComponentProps } from 'react';

import { ToastNotification } from './ToastNotification';

import Button from '../Button';

export default {
  title: 'Components/ToastNotification',
  component: ToastNotification,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onDismiss: { action: 'trigger dismiss' },
    timeout: { table: { disable: true } },
  },
  args: {
    title: 'A toast should not exceed two lines of text.',
  },
  tags: ['autodocs', 'version:2.1'],
} as Meta<Args>;

type Args = ComponentProps<typeof ToastNotification>;
type Story = StoryObj<Args>;

export const Default: Story = {};

/**
 * Informational toasts indicate additional information for the user, and may be related to generic notifications or reminders.
 */
export const Informational: Story = {
  args: {
    status: 'informational',
  },
};

/**
 * Favorable toasts indicate a successful completion of an action.
 */
export const Favorable: Story = {
  args: {
    status: 'favorable',
  },
};

/**
 * Warning toasts indicate an action that may have undesirable consequences.
 */
export const Warning: Story = {
  args: {
    status: 'warning',
  },
};

/**
 * Critical toasts signal failuser to the user, where an action may not have completed fully/successfully.
 */
export const Critical: Story = {
  args: {
    status: 'critical',
  },
};

/**
 * We can restrict the ability to dismiss the notification by not specifying the `onDismiss` method.
 */
export const NotDismissable: Story = {
  args: {
    ...Default.args,
    onDismiss: undefined,
  },
};

/**
 * Tooltips can be instructed to auto-close after a certain period. After the timeout, the component will call the defined
 * `onDismiss` method. The behavior of the dissmisal is left up to the user, which allows for complete control.
 */
export const AutoDismiss: Story = {
  args: {
    ...Default.args,
    dismissType: 'auto',
    timeout: 500,
    onDismiss: () => console.log('trigger onDismiss'),
  },
};

let toastId = 0;
const ToastNotificationManager = (args: Args) => {
  const [toasts, setToasts] = React.useState<
    { id: number | string; text: string; show?: boolean }[]
  >([]);

  // NOTE: clean up `toasts` after .show is set to false (using useEffect? and .debounce)
  // - In a production implementation, you can filter out any toasts where show=false

  return (
    <div className="flex h-[90vh] w-[90vw] items-center justify-center">
      <Button
        onClick={() => {
          setToasts([
            ...toasts,
            {
              id: toastId++,
              text: 'New Toast',
              show: true,
            },
          ]);
        }}
      >
        Trigger A Toast Notification
      </Button>
      <div
        className="m-spacing-size-1 gap-spacing-size-2 absolute bottom-0 right-0 flex max-h-full flex-col overflow-scroll"
        id="toast-container"
      >
        {toasts.map((toast) => (
          <Transition
            appear
            as="div"
            enter="transition-all duration-long"
            enterFrom="opacity-0 transform-gpu translate-x-[100%] h-0"
            enterTo="opacity-100 transform-gpu translate-x-[0px] h-spacing-size-9"
            key={toast.id}
            leave="ease-in-out transition-all duration-quick"
            leaveFrom="opacity-100 transform-gpu translate-x-[0px] h-spacing-size-9"
            leaveTo="opacity-0 transform-gpu translate-x-[100%] h-0"
            show={toast.show}
          >
            <ToastNotification
              {...args}
              onDismiss={() => {
                setToasts(
                  toasts.map((thisToast) => {
                    return thisToast.id === toast.id
                      ? { ...thisToast, show: false }
                      : thisToast;
                  }),
                );
              }}
              title={'You got a new toast: ' + toast.text + toast.id}
            />
          </Transition>
        ))}
      </div>
    </div>
  );
};

/**
 * This implementation example shows how you can use toasts with state to handle multiple, stacking notifications.
 *
 * For a full, production-ready implementation, clean up any toasts with show=false after the animation has completed.
 * - Consider using lodash.debounce to time the re-render, and useEffect that watches the list of toasts
 * - Any debouncing should map to whatever duration is used in `Transition`
 *
 * Here, we use `<Transition>` provided by [HeadlessUI](https://github.com/chanzuckerberg/edu-design-system/blob/main/package.json#L91-L93).
 */
export const ExampleDismissingToasts: Story = {
  args: {
    dismissType: 'auto',
  },
  render: (args) => <ToastNotificationManager {...args} />,
  parameters: {
    // For interactive use, low value in snap testing again since already covered in other stories.
    chromatic: { disableSnapshot: true },
    snapshot: { skip: true },
  },
};

import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import isChromatic from 'chromatic/isChromatic';
import React from 'react';
import { Popover } from './Popover';
import type { PopoverProps } from './Popover';
import Button from '../Button';

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    badges: ['api-3.0', 'theme-2.0'],
    chromatic: {
      // These stories are very flaky, though we're not sure why.
      // We tried delaying the snapshot just in case there's a timing issue at play here, which was not successful.
      disableSnapshot: true,
    },
  },
  args: {
    children: (
      <>
        <Popover.Button as={Button} data-testid="popover-trigger-button">
          Open Popover
        </Popover.Button>
        <Popover.Content data-testid="popover-content">
          <div className="fpo m-2 p-6">Popover Content goes here</div>
        </Popover.Content>
      </>
    ),
  },
  argTypes: {
    as: {
      description: 'Element to use for the `Popover.Button` instance',
    },
    __demoMode: {
      table: {
        disable: true,
      },
    },
    className: {
      type: 'string',
      table: {
        type: {
          detail: 'some custom classes or combination of utility classes',
          summary: 'string',
        },
      },
    },
    refName: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="m-spacing-size-5 p-spacing-size-4">{Story()}</div>
    ),
  ],
} as Meta<PopoverProps>;

type Story = StoryObj<PopoverProps>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Popover>
  <Popover.Button as={Button} data-testid="popover-trigger-button">
    Open Popover
  </Popover.Button>
  <Popover.Content data-testid="popover-content">
    <div className="fpo m-2 p-6">Popover Content goes here</div>
  </Popover.Content>
</Popover>
        `,
      },
    },
  },
  play: async ({ canvasElement }) => {
    // We want to test visual regression for the Popover.Content as well as the button,
    // but don't want the drawer open initally outside Chromatic.
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      await userEvent.click(filtersTrigger);
    }
  },
};

/**
 * You can control where the popover appears by `anchor` on `Popover.Content`. By default, `Popover` will use
 * `{to: 'bottom end', gap: 12}`, but you can specify other combinations of `'top'` and `'start'`.
 *
 * More information about the options are available here: https://headlessui.com/react/popover
 */
export const Top: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Popover>
  <Popover.Button as={Button} data-testid="popover-trigger-button">
    Open Popover
  </Popover.Button>
  <Popover.Content anchor={{ to: 'top': gap: 12 }} data-testid="popover-content">
    <div className="fpo m-2 p-6">Popover Content goes here</div>
  </Popover.Content>
</Popover>
        `,
      },
    },
  },
  render: (args) => {
    return (
      <Popover {...args}>
        <Popover.Button as={Button} data-testid="popover-trigger-button">
          Open Popover
        </Popover.Button>
        <Popover.Content
          anchor={{ to: 'top', gap: 12 }}
          data-testid="popover-content"
          focus
        >
          <div className="fpo m-2 p-6">Popover Content goes here</div>
        </Popover.Content>
      </Popover>
    );
  },
  play: async ({ canvasElement }) => {
    // We want to test visual regression for the Popover.Content as well as the button,
    // but don't want the drawer open initally outside Chromatic.
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      await userEvent.click(filtersTrigger);
    }
  },
};

/**
 * The trigger for `Popover` can receive focus, by convention.
 */
export const FocusClickableElement: Story = {
  play: async ({ canvasElement }) => {
    // We want to test visual regression for the Popover.Content as well as the button,
    // but don't want the drawer open initally outside Chromatic.
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      await userEvent.click(filtersTrigger);
    }
  },
  render: (args) => {
    return (
      <Popover {...args}>
        <Popover.Button as={Button} data-testid="popover-trigger-button">
          Open Popover
        </Popover.Button>
        <Popover.Content data-testid="popover-content" focus>
          <div className="fpo m-2 p-6">
            Popover Content goes here
            <Button>Focus on me upon open</Button>
          </div>
        </Popover.Content>
      </Popover>
    );
  },
};

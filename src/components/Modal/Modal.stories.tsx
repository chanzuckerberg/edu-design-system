import type { StoryObj, Meta } from '@storybook/react';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import { useState } from 'react';
import { Modal, ModalContent } from './Modal';
import { Button, ButtonGroup, Heading, Tooltip } from '../../';
import { chromaticViewports, storybookViewports } from '../../util/viewports';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    // The modal is initially closed for most of these stories,
    // which renders testing it for visual regressions unhelpful.
    chromatic: { disableSnapshot: true },
    badges: ['1.0'],
  },
  tags: ['autodocs'],
  argTypes: {
    // For some reason, storybook is not able to pick up the doc.s automatically. Adding manually.
    children: {
      control: {
        type: null,
      },
      description:
        'Contains the sub-components for a Modal, including `.Header` , `.Title` , `.Body` , `.Footer` , `.Stepper`',
    },
    open: {
      type: 'boolean',
      description: 'Whether or not the modal is visible.',
    },
    hideCloseButton: {
      description:
        'Hides the close button in the top right of the modal. **Default is `false`**.',
      type: 'boolean',
    },
    isScrollable: {
      description:
        'Toggles scrollable variant of the modal. If modal is scrollable, footer is not, and vice versa.',
      type: 'boolean',
    },
  },
} as Meta<typeof Modal>;

type Args = React.ComponentProps<typeof Modal>;
type Story = StoryObj<typeof Modal>;
type InteractiveArgs = Omit<Args, 'onClose' | 'open'>;

const getChildren = (
  inDialogComponent = true,
  bodyContent: ReactNode = 'Modal content.',
  showStepper = false,
) => (
  <>
    <Modal.Header
      brandAsset={<div className="fpo h-full w-full">Brand Asset</div>}
    >
      {inDialogComponent ? (
        <Modal.Title>Modal Title</Modal.Title>
      ) : (
        /* Not using Modal.Title here because it can't exist outside of the Dialog component. */
        <Heading as="h2">Modal Title</Heading>
      )}
    </Modal.Header>
    <Modal.Body>{bodyContent}</Modal.Body>
    <Modal.Footer
      className={clsx(showStepper && 'flex items-center justify-between')}
    >
      {showStepper && <Modal.Stepper activeStep={2} totalSteps={5} />}
      <ButtonGroup className="flex w-full justify-end">
        {/* This has to be manually tested since Tooltip tests are flaky in Chromatic */}
        <Button onClick={() => {}} status="neutral">
          Button 2
        </Button>
        <Tooltip text="Tooltip should spawn on top of modal">
          <Button onClick={() => {}} variant="primary">
            Button 1
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Modal.Footer>
  </>
);

function InteractiveExample(args: InteractiveArgs) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="primary">
        Open the modal
      </Button>

      <Modal {...args} onClose={() => setOpen(false)} open={open} />
    </>
  );
}

/**
 * Clicking on a trigger item (in this case `Button`) will cause a modal to open.
 *
 * **Note**: this only works from certain screens in Storybook. If it doesn't work as expected, view from the
 * "docs" sub-page.
 */
export const Default: StoryObj<Args> = {
  render: (args) => (
    <InteractiveExample {...args}>{getChildren()}</InteractiveExample>
  ),
};

type HeadingArgs = React.ComponentProps<typeof Heading>;
/**
 * Clicking on a trigger item (in this case `Button`) will cause a modal to open.
 *
 * **Note**: this only works from certain screens in Storybook. If it doesn't work as expected, view from the
 * "docs" sub-page.
 */
export const ControlHeadingInteractive: StoryObj<HeadingArgs> = {
  argTypes: {
    as: {
      control: 'select',
      name: 'title "as" prop',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
  render: ({ as, ...args }) => (
    <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title as={as}>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal Content</Modal.Body>
    </InteractiveExample>
  ),
  parameters: {
    /**
     * Purpose of this story is to have different controls for the Modal.Title but defaults to what all the other stories are.
     * Hence will snap similarly to the other stories has no value in snapping both unit and Chromatic.
     */
    snapshot: { skip: true },
  },
};

/**
 * You can disable the close button on the modal. This will require users to either click out of the modal, or hit escape to close.
 *
 * **NOTE**: this is less discoverable and should be avoided when possible.
 */
export const WithoutCloseButton: StoryObj<InteractiveArgs> = {
  render: (args) => (
    <InteractiveExample {...args} hideCloseButton>
      {getChildren()}
    </InteractiveExample>
  ),
};

const reallyLongText = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam diam
      quis dolor maximus, non tincidunt lacus facilisis. Praesent ac vestibulum
      diam. Sed ac orci fringilla, ullamcorper quam nec, elementum turpis. Orci
      varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Curabitur et vulputate leo. Phasellus convallis ante at
      augue iaculis, quis consectetur dolor placerat. Nulla ornare malesuada
      elit eu faucibus. Mauris ultricies tincidunt eleifend. Aliquam erat
      volutpat. Morbi nec ipsum sed sem facilisis tristique nec et ligula.
      Vivamus id feugiat sapien.
    </p>
    <p>
      Nam ac tincidunt arcu. Nam non metus sem. Morbi eleifend metus vel
      venenatis accumsan. Vestibulum pharetra, ante quis sollicitudin aliquam,
      orci ex pretium ipsum, congue rhoncus dui orci sed velit. Cras ac leo vel
      massa rutrum auctor eget sed orci. Aenean id nisi consectetur, dapibus
      tellus ut, finibus metus. Integer tristique est vitae lectus suscipit, ut
      vulputate est fringilla. Donec pharetra facilisis erat at venenatis. Etiam
      faucibus dignissim leo eget congue. Sed vehicula imperdiet neque id
      gravida. Proin volutpat tortor quis quam molestie, faucibus condimentum
      ante sagittis. Suspendisse sit amet luctus tellus. Suspendisse a sapien
      hendrerit eros dictum faucibus. Vivamus pretium vel sem faucibus
      tristique. Integer iaculis pellentesque nunc ac pellentesque.
    </p>
    <p>
      Integer mollis, urna eget sollicitudin laoreet, nunc elit facilisis urna,
      ut finibus est mi eu quam. Nam ac venenatis massa. Vestibulum suscipit ac
      ligula venenatis scelerisque. Fusce rutrum nulla lectus, sed dignissim
      ipsum faucibus sodales. Suspendisse id aliquet quam. Maecenas facilisis
      mauris dolor, id accumsan ex vehicula in. In nisl ligula, fringilla in
      enim nec, lobortis sollicitudin purus. Aliquam vehicula euismod enim quis
      finibus. Fusce ornare tortor malesuada, consequat magna quis, porta dolor.
      Donec quis nisl ac sem dictum semper quis vel turpis. Proin sed leo in
      ante rhoncus pellentesque a eu urna. Phasellus consequat lectus et
      hendrerit luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p>
      Suspendisse vitae eros elit. Maecenas id urna tempus, tempus turpis id,
      blandit turpis. Fusce augue quam, pellentesque et suscipit consectetur,
      pharetra in mi. Suspendisse non ultricies purus. Integer dignissim
      condimentum sem ac porta. Vivamus viverra congue massa, vitae fermentum
      est scelerisque et. Duis a urna vitae odio semper dictum a sed nisl. In
      fringilla hendrerit massa, at luctus arcu tincidunt nec. Donec gravida,
      mauris sit amet porta lobortis, justo sem vehicula ipsum, at pretium sem
      leo sed libero. Morbi tristique rhoncus suscipit. Nullam at malesuada
      sapien. Nam in egestas tellus. Nulla quis metus dui. Suspendisse sit amet
      nisi at lectus ultricies egestas.
    </p>
    <p className="mb-0">
      Integer pulvinar felis sit amet dignissim fermentum. Nulla sodales enim
      mi, varius feugiat sapien congue eget. Morbi vitae ipsum non ligula
      eleifend molestie. Aenean bibendum tortor sapien, quis volutpat ante
      ultricies id. Morbi varius dolor ac ante posuere, sit amet tincidunt
      lectus pulvinar. Proin id efficitur neque. Nullam vel feugiat dui.
      Curabitur imperdiet lacinia eros, ac iaculis odio. Praesent quis pretium
      sapien, quis posuere lectus. Proin eleifend purus nec massa aliquam
      commodo. Quisque auctor suscipit ex sed tristique. Sed eget ultrices est.
      Suspendisse nunc justo, dapibus at eros ac, rutrum vestibulum est.
    </p>
  </div>
);

/**
 * Modals can contain long, scrollable text. This is not recommended, however.
 */
export const WithLongTextScrollable: StoryObj<InteractiveArgs> = {
  args: {
    isScrollable: true,
  },
  render: (args) => (
    <InteractiveExample {...args}>
      {getChildren(true, reallyLongText)}
    </InteractiveExample>
  ),
};

/**
 * You can avoid rendering the header and footer in a modal
 */
export const WithoutHeaderAndFooter: StoryObj<InteractiveArgs> = {
  args: {
    isScrollable: true,
  },
  render: (args) => (
    <InteractiveExample
      {...args}
      aria-label="The Modal Amazing Modal You've Ever Seen"
    >
      <Modal.Body>{reallyLongText}</Modal.Body>
    </InteractiveExample>
  ),
};

export const ModalStepper: StoryObj<
  React.ComponentProps<typeof Modal.Stepper>
> = {
  args: {
    activeStep: 1,
    totalSteps: 3,
  },
  render: (args) => <Modal.Stepper {...args} data-testid="non-interactive" />,
  decorators: [(Story) => <div className="p-2">{Story()}</div>],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
/**
 * The default modal experience's Content area (the modal itself). The following stories show how the modal
 * will render in various contexts and with various props set.
 *
 * **NOTE**: The order of the buttons puts the primary to the far bottom and right of the modal, per
 * macOS conventions and style guide.
 */
export const ContentDefault: Story = {
  render: (args) => (
    <div className="flex items-center justify-center">
      <div className="absolute h-full w-full bg-body-background-inverted opacity-50" />
      <ModalContent
        {...args}
        data-testid="non-interactive"
        onClose={() => {}}
      />
    </div>
  ),
  args: {
    children: getChildren(false),
    hideCloseButton: false,
    open: true,
  },
  parameters: {
    // This story shows the modal content by default, for visual regression testing purposes.
    chromatic: { disableSnapshot: false },
  },
};

/**
 * `Modal` provides `size`, which allows control over the natural width of the modal. This does not affect the contents
 * of the modal.
 */
export const Medium: Story = {
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'md',
  },
};

/**
 * `Modal` also allows for `small`.
 */
export const Small: Story = {
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'sm',
  },
};

/**
 * The brand variant offers a catered experience with a slot for a hero image to be attached to the modal.
 */
export const Brand: Story = {
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    variant: 'brand',
  },
};

export const Mobile: Story = {
  ...ContentDefault,
  parameters: {
    ...ContentDefault.parameters,
    viewport: {
      defaultViewport: 'googlePixel2',
    },
    chromatic: {
      disableSnapshot: false,
      viewports: [chromaticViewports.googlePixel2],
    },
  },
};

export const MobileLandscape: Story = {
  ...ContentDefault,
  parameters: {
    ...ContentDefault.parameters,
    viewport: {
      defaultViewport: 'mobilelandscape',
      viewports: {
        mobilelandscape: {
          name: 'Mobile Landscape',
          styles: {
            width: '896px',
            height: '414px',
          },
        },
      },
      /**
       * Chromatic sets viewport height to 900px, hence won't snap as necessary
       */
      chromatic: { disableSnapshot: true },
    },
  },
};

export const MobileBrand: Story = {
  ...Mobile,
  args: {
    ...Mobile.args,
    variant: 'brand',
  },
};

export const MobileLandscapeBrand: Story = {
  ...MobileLandscape,
  args: {
    ...MobileLandscape.args,
    variant: 'brand',
  },
};

export const Tablet: Story = {
  ...ContentDefault,
  parameters: {
    ...ContentDefault.parameters,
    viewport: {
      defaultViewport: 'ipadMini',
      viewports: {
        mobilelandscape: storybookViewports.ipadMini,
      },
    },
    chromatic: {
      disableSnapshot: false,
      viewports: [chromaticViewports.ipadMini],
    },
  },
};

export const TabletBrand: Story = {
  ...Tablet,
  args: {
    ...Tablet.args,
    variant: 'brand',
  },
};

/**
 * `Modal` can make use of the embedded `.Stepper` sub-component, to implement wizard behavior.
 */
export const WithStepper: Story = {
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    children: getChildren(
      false,
      'Modal body content. This is an example use case with the stepper in the footer.',
      true,
    ),
  },
};

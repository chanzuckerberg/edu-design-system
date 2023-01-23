import type { StoryObj, Meta } from '@storybook/react';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import { useState } from 'react';
import { Modal, ModalContent } from './Modal';
import styles from './Modal.stories.module.css';
import { Button, ButtonGroup, Heading, Text, Tooltip } from '../../';
import { VARIANTS } from '../Heading/Heading';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    // The modal is initially closed for most of these stories,
    // which renders testing it for visual regressions unhelpful.
    chromatic: { disableSnapshot: true },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Modal>;
type InteractiveArgs = Omit<Args, 'onClose' | 'open'>;

const getChildren = (
  inDialogComponent = true,
  bodyContent: ReactNode = 'Modal content.',
  showStepper = false,
) => (
  <>
    <Modal.Header
      brandAsset={
        <div className="fpo" style={{ width: '100%', height: '100%' }}>
          Brand Asset
        </div>
      }
    >
      {inDialogComponent ? (
        <Modal.Title>Modal Title</Modal.Title>
      ) : (
        /* Not using Modal.Title here because it can't exist outside of the Dialog component. */
        <Heading size="h2">Modal Title</Heading>
      )}
    </Modal.Header>
    <Modal.Body>{bodyContent}</Modal.Body>
    <Modal.Footer
      className={clsx(showStepper && styles['footer--with-stepper'])}
    >
      {showStepper && <Modal.Stepper activeStep={2} totalSteps={5} />}
      <ButtonGroup className={styles['footer__button-group']}>
        {/* This has to be manually tested since Tooltip tests are flaky in Chromatic */}
        <Tooltip text="Tooltip should spawn on top of modal">
          <Button onClick={() => {}} status="neutral">
            Button 1
          </Button>
        </Tooltip>
        <Button onClick={() => {}} variant="primary">
          Button 2
        </Button>
      </ButtonGroup>
    </Modal.Footer>
  </>
);

export const Default: StoryObj<Args> = {
  render: (args) => (
    <div className={styles['default__wrapper']}>
      <div className={styles['default__background']} />
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

export const Medium: StoryObj<Args> = {
  ...Default,
  args: {
    ...Default.args,
    size: 'md',
  },
};

export const Small: StoryObj<Args> = {
  ...Default,
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const Brand: StoryObj<Args> = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'brand',
  },
};

export const Mobile: StoryObj<Args> = {
  ...Default,
  parameters: {
    ...Default.parameters,
    viewport: {
      defaultViewport: 'mobile2',
    },
    chromatic: { disableSnapshot: false, viewports: [414] },
  },
};

export const MobileLandscape: StoryObj<Args> = {
  ...Default,
  parameters: {
    ...Default.parameters,
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

export const MobileBrand: StoryObj<Args> = {
  ...Mobile,
  args: {
    ...Mobile.args,
    variant: 'brand',
  },
};

export const MobileLandscapeBrand: StoryObj<Args> = {
  ...MobileLandscape,
  args: {
    ...MobileLandscape.args,
    variant: 'brand',
  },
};

export const Tablet: StoryObj<Args> = {
  ...Default,
  parameters: {
    ...Default.parameters,
    viewport: {
      defaultViewport: 'mobilelandscape',
      viewports: {
        mobilelandscape: {
          name: 'Mobile Landscape',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
      },
    },
    chromatic: { disableSnapshot: false, viewports: [768] },
  },
};

export const TabletBrand: StoryObj<Args> = {
  ...Tablet,
  args: {
    ...Tablet.args,
    variant: 'brand',
  },
};

export const WithStepper: StoryObj<Args> = {
  ...Default,
  args: {
    ...Default.args,
    children: getChildren(
      false,
      'Modal body content. This is an example use case with the stepper in the footer.',
      true,
    ),
  },
};

function InteractiveExample(args: InteractiveArgs) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Text size="sm" spacing="2x" weight="bold">
        Please note: opening the modal only works in the Canvas tab.
      </Text>
      <Button onClick={() => setOpen(true)} variant="primary">
        Open the modal
      </Button>

      <Modal {...args} onClose={() => setOpen(false)} open={open} />
    </>
  );
}

export const DefaultInteractive: StoryObj<InteractiveArgs> = {
  render: (args) => (
    <InteractiveExample {...args}>{getChildren()}</InteractiveExample>
  ),
};

type HeadingArgs = React.ComponentProps<typeof Heading>;
export const ControlHeadingInteractive: StoryObj<HeadingArgs> = {
  argTypes: {
    as: {
      control: 'select',
      name: 'title "as" prop',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      control: 'select',
      name: 'title "size" prop',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'h7',
        'headline-lg',
        'headline-md',
        'headline-sm',
        'title-md',
        'title-sm',
        'body-sm',
        'body-xs',
        'title-xs',
      ],
    },
    variant: {
      control: 'select',
      name: 'title "variant" prop',
      options: VARIANTS,
    },
  },
  render: ({ as, size, variant, ...args }) => (
    <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title as={as} size={size} variant={variant}>
          Modal Title
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal Content</Modal.Body>
    </InteractiveExample>
  ),
  /**
   * Purpose of this story is to have different controls for the Modal.Title but defaults to what all the other stories are.
   * Hence will snap similarly to the other stories has no value in snapping both unit and Chromatic.
   */
  parameters: {
    snapshot: { skip: true },
  },
};

export const WithoutCloseButton: StoryObj<InteractiveArgs> = {
  render: (args) => (
    <InteractiveExample {...args} hideCloseButton={true}>
      {getChildren()}
    </InteractiveExample>
  ),
  parameters: {
    snapshot: { skip: true },
  },
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
    <p className={styles['long-text__last-paragraph']}>
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

export const WithLongText: StoryObj<InteractiveArgs> = {
  render: (args) => (
    <InteractiveExample {...args}>
      {getChildren(true, reallyLongText)}
    </InteractiveExample>
  ),
};

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

type ModalStepperArgs = React.ComponentProps<typeof Modal.Stepper>;

export const ModalStepper: StoryObj<ModalStepperArgs> = {
  args: {
    activeStep: 1,
    totalSteps: 3,
  },
  render: (args) => <Modal.Stepper {...args} data-testid="non-interactive" />,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0.5rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

const InteractiveModalStepperComponent = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Modal.Stepper activeStep={activeStep} totalSteps={5} />
      <ButtonGroup>
        {activeStep > 1 && (
          <Button
            onClick={() => setActiveStep(activeStep - 1)}
            status="neutral"
          >
            Back
          </Button>
        )}
        {activeStep < 5 && (
          <Button
            onClick={() => setActiveStep(activeStep + 1)}
            variant="primary"
          >
            Next
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
};

export const InteractiveModalStepper: StoryObj<ModalStepperArgs> = {
  ...ModalStepper,
  render: () => <InteractiveModalStepperComponent />,
  parameters: {
    /**
     * For interactive purposes only, low value in snapping or checking for visual regression since they should be covered in the other stories.
     */
    snapshot: {
      skip: true,
    },
  },
};

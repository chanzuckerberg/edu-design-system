import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import { userEvent } from '@storybook/testing-library';

import React from 'react';
import { useState } from 'react';

import { Modal } from './Modal';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import { alternativeSemanticIcons } from '../../storyUtils/semanticIconOverrides';
import { chromaticViewports, storybookViewports } from '../../util/viewports';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import { IconProvider } from '../Icon';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      subtitle:
        'Modals display content on top of the page in a separate container, blocking the content underneath. They require user action and can be used to deliver a message or help a user complete a task.',
    },
    // Using this motion preference for components where they trigger animations on mount
    chromatic: { delay: 500, prefersReducedMotion: 'reduce' },
    layout: 'fullscreen',
  },
  tags: ['autodocs', 'version:4.0.0'],
} as Meta<typeof Modal>;

type Args = React.ComponentProps<typeof Modal>;
type Story = StoryObj<typeof Modal>;
type InteractiveArgs = Omit<Args, 'onClose' | 'open'>;

/**
 * Wrapper for triggering `Modal` with a button
 * @param args
 * @returns
 */
function InteractiveExample(args: InteractiveArgs) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fpo mb-spacing-size-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa,
        quis iure eligendi voluptates delectus earum suscipit porro
        exercitationem asperiores voluptatibus repellat saepe neque nisi quidem
        repellendus temporibus accusamus ea officiis illo unde illum mollitia
        eos consectetur. Possimus, eaque nihil?
      </div>

      <div className="flex justify-center">
        <Button onClick={() => setOpen(true)} rank="primary">
          Open the modal
        </Button>
      </div>
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
export const Default: Story = {
  parameters: {
    layout: 'centered',
    snapshot: {
      skip: true,
    },
  },
  render: (args) => (
    <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
      </Modal.Header>
      <Modal.Body>
        <div className="fpo">Modal Content</div>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={() => {}} rank="primary">
            Primary
          </Button>
          <Button onClick={() => {}} rank="secondary">
            Secondary
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </InteractiveExample>
  ),
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard(' ', { delay: 150 });
  },
};

/**
 * `Modal` provides `size`, which allows control over the natural width of the modal. This does not affect the contents
 * of the modal except to wrap text.
 */
export const Full: Story = {
  args: {
    size: 'full',
  },
  parameters: Default.parameters,
  render: (args) => (
    <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Modal.SubTitle>Modal title</Modal.SubTitle>
      </Modal.Header>
      <Modal.Body>
        <div className="fpo h-full w-full">Modal Content</div>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={() => {}} rank="primary">
            Primary
          </Button>
          <Button onClick={() => {}} rank="secondary">
            Secondary
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </InteractiveExample>
  ),
};

/**
 * `Modal` manages its own height. Content taller than the space available scrolls inside the
 * body, and the header and footer stay on screen while it does, so a long modal does not run
 * its actions off the bottom of the viewport.
 *
 * Below 320px of viewport height there is no room to scroll the body within, and the modal
 * scrolls as a whole instead, which is the one case where the footer goes off screen.
 */
export const LargeScrolling: Story = {
  args: {
    size: 'lg',
  },
  parameters: Default.parameters,
  render: (args) => (
    <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
      </Modal.Header>
      <Modal.Body>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
          diam quis dolor maximus, non tincidunt lacus facilisis. Praesent ac
          vestibulum diam. Sed ac orci fringilla, ullamcorper quam nec,
          elementum turpis. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Curabitur et vulputate leo.
          Phasellus convallis ante at augue iaculis, quis consectetur dolor
          placerat. Nulla ornare malesuada elit eu faucibus. Mauris ultricies
          tincidunt eleifend. Aliquam erat volutpat. Morbi nec ipsum sed sem
          facilisis tristique nec et ligula. Vivamus id feugiat sapien.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Nam ac tincidunt arcu. Nam non metus sem. Morbi eleifend metus vel
          venenatis accumsan. Vestibulum pharetra, ante quis sollicitudin
          aliquam, orci ex pretium ipsum, congue rhoncus dui orci sed velit.
          Cras ac leo vel massa rutrum auctor eget sed orci. Aenean id nisi
          consectetur, dapibus tellus ut, finibus metus. Integer tristique est
          vitae lectus suscipit, ut vulputate est fringilla. Donec pharetra
          facilisis erat at venenatis. Etiam faucibus dignissim leo eget congue.
          Sed vehicula imperdiet neque id gravida. Proin volutpat tortor quis
          quam molestie, faucibus condimentum ante sagittis. Suspendisse sit
          amet luctus tellus. Suspendisse a sapien hendrerit eros dictum
          faucibus. Vivamus pretium vel sem faucibus tristique. Integer iaculis
          pellentesque nunc ac pellentesque.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Integer mollis, urna eget sollicitudin laoreet, nunc elit facilisis
          urna, ut finibus est mi eu quam. Nam ac venenatis massa. Vestibulum
          suscipit ac ligula venenatis scelerisque. Fusce rutrum nulla lectus,
          sed dignissim ipsum faucibus sodales. Suspendisse id aliquet quam.
          Maecenas facilisis mauris dolor, id accumsan ex vehicula in. In nisl
          ligula, fringilla in enim nec, lobortis sollicitudin purus. Aliquam
          vehicula euismod enim quis finibus. Fusce ornare tortor malesuada,
          consequat magna quis, porta dolor. Donec quis nisl ac sem dictum
          semper quis vel turpis. Proin sed leo in ante rhoncus pellentesque a
          eu urna. Phasellus consequat lectus et hendrerit luctus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Suspendisse vitae eros elit. Maecenas id urna tempus, tempus turpis
          id, blandit turpis. Fusce augue quam, pellentesque et suscipit
          consectetur, pharetra in mi. Suspendisse non ultricies purus. Integer
          dignissim condimentum sem ac porta. Vivamus viverra congue massa,
          vitae fermentum est scelerisque et. Duis a urna vitae odio semper
          dictum a sed nisl. In fringilla hendrerit massa, at luctus arcu
          tincidunt nec. Donec gravida, mauris sit amet porta lobortis, justo
          sem vehicula ipsum, at pretium sem leo sed libero. Morbi tristique
          rhoncus suscipit. Nullam at malesuada sapien. Nam in egestas tellus.
          Nulla quis metus dui. Suspendisse sit amet nisi at lectus ultricies
          egestas.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" className="mb-0" preset="body-lg">
          Integer pulvinar felis sit amet dignissim fermentum. Nulla sodales
          enim mi, varius feugiat sapien congue eget. Morbi vitae ipsum non
          ligula eleifend molestie. Aenean bibendum tortor sapien, quis volutpat
          ante ultricies id. Morbi varius dolor ac ante posuere, sit amet
          tincidunt lectus pulvinar. Proin id efficitur neque. Nullam vel
          feugiat dui. Curabitur imperdiet lacinia eros, ac iaculis odio.
          Praesent quis pretium sapien, quis posuere lectus. Proin eleifend
          purus nec massa aliquam commodo. Quisque auctor suscipit ex sed
          tristique. Sed eget ultrices est. Suspendisse nunc justo, dapibus at
          eros ac, rutrum vestibulum est.
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={() => {}} rank="primary">
            Primary
          </Button>
          <Button onClick={() => {}} rank="secondary">
            Secondary
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </InteractiveExample>
  ),
  play: Default.play,
};

/**
 * Small will always try to take up the least amount of space.
 */
export const Small: Story = {
  args: {
    size: 'sm',
  },
  parameters: Default.parameters,
  render: Default.render,
  play: Default.play,
};

/**
 * The default modal experience's Content area (the modal itself). The following stories show how the modal
 * will render in various contexts and with various props set.
 *
 * When viewing code, This will use `<Header>` directly, to demonstrate composition. When building `Modal`s, use
 * `Modal.Title` instead.
 *
 * **NOTE**: The order of the buttons puts the primary to the far bottom and right of the modal, per
 * macOS conventions and style guide.
 */
export const ContentDefault: Story = {
  render: (args) => (
    <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-[100vh] w-full opacity-50" />
      <Modal.Content
        {...args}
        data-testid="non-interactive"
        onClose={() => {}}
      />
    </div>
  ),
  args: {
    children: (
      <>
        <Modal.Header>
          <Heading
            as="h2"
            className="text-utility-default-primary"
            preset="title-lg"
          >
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button onClick={() => {}} rank="primary">
              Primary
            </Button>
            <Button onClick={() => {}} rank="secondary">
              Secondary
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>
    ),
    hideCloseButton: false,
    open: true,
  },
  parameters: {
    // This story shows the modal content by default, for visual regression testing purposes.
    chromatic: { disableSnapshot: false },
    snapshot: {
      skip: true,
    },
  },
};

/**
 * `Modal` provides `size`, which allows control over the natural width of the modal. This does not affect the contents
 * of the modal except to wrap text.
 */
export const ContentLarge: Story = {
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg',
  },
};

/**
 * `Modal` also allows for `small`.
 *
 * Unlike `lg`, `size="sm"` never goes full-bleed and has a different width at each
 * breakpoint (480px max at the smallest, 480px through `md`, 560px at `lg` and up), so this
 * snapshots at every available viewport rather than the single default width.
 */
export const ContentSmall: Story = {
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'sm',
  },
  parameters: {
    ...ContentDefault.parameters,
    chromatic: {
      disableSnapshot: false,
      viewports: [
        chromaticViewports.googlePixel2,
        chromaticViewports.ipadMini,
        chromaticViewports.ipadPro,
        chromaticViewports.chromebook,
        chromaticViewports.macbookPro,
      ],
    },
  },
};

/**
 * Buttons can have a vertical alignment in the footer. For this, use `ButtonGroup` with the `buttonLayout` = `vertical`.
 * Make sure to match the Button width style by using `isFullWidth`.
 */
export const LayoutVertical: Story = {
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg',
    children: (
      <>
        <Modal.Header>
          <Heading
            as="h2"
            className="text-utility-default-primary"
            preset="title-lg"
          >
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup buttonLayout="vertical">
            <Button isFullWidth onClick={() => {}} rank="primary">
              Primary
            </Button>
            <Button isFullWidth onClick={() => {}} rank="secondary">
              Secondary
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>
    ),
  },
  render: (args) => (
    <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50" />
      <Modal.Content
        {...args}
        data-testid="non-interactive"
        onClose={() => {}}
      />
    </div>
  ),
};

/**
 * Buttons can have a vertical alignment in the footer. For this, use `ButtonGroup` with the `buttonLayout` = `vertical`.
 * Make sure to match the Button width style by using `isFullWidth`.
 */
export const LayoutVerticalWithTertiary: Story = {
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg',
    children: (
      <>
        <Modal.Header>
          <Heading
            as="h2"
            className="text-utility-default-primary"
            preset="title-lg"
          >
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup buttonLayout="vertical">
            <Button isFullWidth onClick={() => {}} rank="primary">
              Primary
            </Button>
            <Button isFullWidth onClick={() => {}} rank="tertiary">
              Tertiary
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>
    ),
  },
  render: (args) => (
    <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50" />
      <Modal.Content
        {...args}
        data-testid="non-interactive"
        onClose={() => {}}
      />
    </div>
  ),
};

/**
 * Modals can have destructive behavior. Use the 'critical' button variant.
 */
export const WithCriticalButton: Story = {
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg',
    children: (
      <>
        <Modal.Header>
          <Heading
            as="h2"
            className="text-utility-default-primary"
            preset="title-lg"
          >
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button onClick={() => {}} rank="primary" variant="critical">
              Critical Action
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>
    ),
  },
  render: (args) => (
    <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50" />
      <Modal.Content
        {...args}
        data-testid="non-interactive"
        onClose={() => {}}
      />
    </div>
  ),
};

/**
 * This shows the responsive layout in a mobile viewport
 */
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

/**
 * This shows the responsive layout in a mobile (landscape) viewport
 */
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

/**
 * This shows the responsive layout in a tablet viewport
 */
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

/**
 * The close button comes from `IconProvider`, so it is the same affordance as every other
 * close in the app rather than something set per modal.
 *
 * Shown non-interactive, like the other `Modal.Content` stories.
 */
export const WithProvidedIcons: Story = {
  ...ContentDefault,
  decorators: [
    (Story) => (
      <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>
    ),
  ],
};

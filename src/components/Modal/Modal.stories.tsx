import type { StoryObj } from '@storybook/react';
import React, { ReactNode } from 'react';
import { useState } from 'react';
import Modal, { ModalContent } from './Modal';
import styles from './Modal.stories.module.css';
import { Button, ButtonGroup, Heading, Text } from '../../';

export default {
  title: 'Organisms/Interactive/Modal',
  component: Modal,
  parameters: {
    // The modal is initially closed for most of these stories,
    // which renders testing it for visual regressions unhelpful.
    chromatic: { disableSnapshot: true },
  },
};

type InteractiveArgs = {
  ariaLabel?: string;
  hideCloseButton?: boolean;
  children: ReactNode;
};

type TemplateArgs = {
  children: ReactNode;
  hideCloseButton?: boolean;
  size: 'small' | 'medium' | 'large';
  variant?: 'brand';
};

const getChildren = (
  inDialogComponent = true,
  bodyContent: ReactNode = 'Modal content.',
) => (
  <>
    <Modal.Header>
      {inDialogComponent ? (
        <Modal.Title>Modal Title</Modal.Title>
      ) : (
        /* Not using Modal.Title here because it can't exist outside of the Dialog component. */
        <Heading size="h2">Modal Title</Heading>
      )}
    </Modal.Header>
    <Modal.Body>{bodyContent}</Modal.Body>
    <Modal.Footer>
      <ButtonGroup className={styles['footer__button-group']}>
        <Button
          onClick={
            () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
          }
          status="neutral"
        >
          Button 1
        </Button>
        <Button
          onClick={
            () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
          }
          variant="primary"
        >
          Button 2
        </Button>
      </ButtonGroup>
    </Modal.Footer>
  </>
);

export const Default: StoryObj<TemplateArgs> = {
  render: (args) => (
    <div className={styles['default__wrapper']}>
      <div className={styles['default__background']} />
      <ModalContent
        onClose={
          () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
        }
        {...args}
      />
    </div>
  ),
  args: {
    children: getChildren(false),
    hideCloseButton: false,
    size: 'medium' as const,
  },
  parameters: {
    // This story shows the modal content by default, for visual regression testing purposes.
    chromatic: { disableSnapshot: false },
  },
};

export const Brand: StoryObj<TemplateArgs> = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'brand',
  },
};

export const Large: StoryObj<TemplateArgs> = {
  ...Default,
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const Small: StoryObj<TemplateArgs> = {
  ...Default,
  args: {
    ...Default.args,
    size: 'small',
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

      <Modal onClose={() => setOpen(false)} open={open} {...args} />
    </>
  );
}

export const DefaultInteractive = {
  render: () => <InteractiveExample>{getChildren()}</InteractiveExample>,
};

export const WithoutCloseButton = {
  render: () => (
    <InteractiveExample hideCloseButton={true}>
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

export const WithLongText = {
  render: () => (
    <InteractiveExample>{getChildren(true, reallyLongText)}</InteractiveExample>
  ),
};

export const WithoutHeaderAndFooter = {
  render: () => (
    <InteractiveExample ariaLabel="The Modal Amazing Modal You've Ever Seen">
      <Modal.Body>{reallyLongText}</Modal.Body>
    </InteractiveExample>
  ),
};

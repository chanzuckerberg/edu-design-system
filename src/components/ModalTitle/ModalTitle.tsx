import { Dialog } from '@headlessui/react';
import React, { ReactNode } from 'react';
import Heading, { HeadingSize } from '../Heading';

type HeadingProps = React.ComponentProps<typeof Heading>;

type Props = Omit<HeadingProps, 'size'> & {
  /**
   * Text for the modal title.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Modal Title Heading size. Defaults to 'headline-md'
   */
  size?: HeadingSize;
};

export const ModalTitle = ({
  children,
  className,
  size = 'headline-md',
  ...other
}: Props) => (
  <Dialog.Title as={React.Fragment}>
    <Heading className={className} size={size} {...other}>
      {children}
    </Heading>
  </Dialog.Title>
);

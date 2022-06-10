import { Dialog } from '@headlessui/react';
import React, { ReactNode } from 'react';
import Heading from '../Heading';

type Props = {
  /**
   * Text for the modal title.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

export const ModalTitle = ({ children, className, ...other }: Props) => (
  <Dialog.Title
    as={Heading}
    className={className}
    size="headline-md"
    {...other}
  >
    {children}
  </Dialog.Title>
);

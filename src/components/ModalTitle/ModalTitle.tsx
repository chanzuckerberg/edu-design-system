import { Dialog } from '@headlessui/react';
import React, { ReactNode } from 'react';
import Heading from '../Heading';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

export const ModalTitle = (props: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Dialog.Title as={Heading} className={props.className} size="h2">
      {props.children}
    </Dialog.Title>
  );
};

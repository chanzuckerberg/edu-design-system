import clsx from 'clsx';
import React, { ReactNode, useState, useRef, MutableRefObject } from 'react';
import { Modal } from './Modal';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Heading from '../Heading';
import TextPassage from '../TextPassage';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Size prop to pass into Modal
   */
  size?: 'sm' | 'lg' | 'xl';
}

/**
 * Primary UI component for user interaction
 */
export const ModalExample = ({
  children,
  className,
  size,
  ...other
}: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalButton = useRef() as MutableRefObject<HTMLButtonElement>;

  function openContinueModal() {
    setModalOpen(true);
  }

  function closeContinueModal(event: any) {
    setTimeout(() => {
      modalButton.current.focus();
    }, 1);
    if (event) {
      event.preventDefault();
    }
    setModalOpen(false);
  }
  const componentClassName = clsx('tooltip-modal', className, {});
  return (
    <div
      className={componentClassName}
      style={{ padding: '1rem', minHeight: '500px' }}
      {...other}
    >
      <Button onClick={openContinueModal} ref={modalButton} variant="primary">
        Open Modal
      </Button>

      <Modal
        ariaDescribedBy="modal-description-1"
        ariaLabelledBy="modal-heading-1"
        dismissible={true}
        isActive={modalOpen}
        onClose={closeContinueModal}
        size={size}
      >
        <Modal.Header>
          <Heading id="modal-heading-1" size="h2">
            Modal Title
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <TextPassage className="u-margin-bottom-md" id="modal-description-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </TextPassage>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button onClick={closeContinueModal} variant="primary">
              Submit
            </Button>
            <Button onClick={closeContinueModal}>Close</Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

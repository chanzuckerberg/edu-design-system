import React from 'react';

import { Button, Modal, Text } from '../../../src';

import '../../../src/components/Utilities/Alignment.css';
import '../../../src/components/Utilities/Display.css';

import CadSuccess from '../../static/cad-success.svg';

export const ModalFinalStep = () => (
  <Modal
    isScrollable
    onClose={
      () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
    }
    open
  >
    <Modal.Header>
      <div
        className="flex flex-col justify-center items-center"
        style={{ height: '25rem' }}
      >
        <img alt="a checkmark" src={CadSuccess} />
      </div>
      <Modal.Title>Simple image and headline</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Text>Supporting copy goes here</Text>
    </Modal.Body>
    <Modal.Footer className="flex justify-end">
      <Button
        onClick={
          () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
        }
        variant="primary"
      >
        Button
      </Button>
    </Modal.Footer>
  </Modal>
);

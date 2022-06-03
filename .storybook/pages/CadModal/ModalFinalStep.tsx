import React from 'react';

import { Button, Modal, Text } from '../../../src';

import '../../../src/components/Utilities/Alignment.css';
import '../../../src/components/Utilities/Display.css';

import CadSuccess from '../../static/cad-success.svg';

export const ModalFinalStep = () => (
  <Modal
    onClose={
      () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
    }
    open
  >
    <Modal.Header>
      <div
        className="u-display-flex u-flex-direction-column u-justify-content-center u-align-items-center"
        style={{ height: '25rem' }}
      >
        <img alt="cad-success" src={CadSuccess} />
      </div>
      <Modal.Title>Simple image and headline</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Text>Supporting copy goes here</Text>
    </Modal.Body>
    <Modal.Footer className="u-display-flex u-justify-content-flex-end">
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

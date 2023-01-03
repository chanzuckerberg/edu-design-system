import React from 'react';

import { Button, Modal, Text } from '../../../src';

import CadSuccess from '../../static/cad-success.svg';

export const ModalFinalStep = () => (
  <Modal isScrollable onClose={() => {}} open>
    <Modal.Header>
      <div
        className="flex flex-col items-center justify-center"
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
      <Button onClick={() => {}} variant="primary">
        Button
      </Button>
    </Modal.Footer>
  </Modal>
);

import React from 'react';

import { Button, Modal, Heading, Text } from '../../../src';

import CompassSolo from '../../static/compass-solo.svg';

export const ModalBrand = () => (
  <Modal onClose={() => {}} open variant="brand">
    <Modal.Header brandAsset={<img alt="a compass" src={CompassSolo} />}>
      <Modal.Title>Check out the new course planner</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Heading as="h3" className="mb-4" size="title-sm">
        Intro header copy
      </Heading>
      <Text>Content pieces go here</Text>
    </Modal.Body>
    <Modal.Footer className="flex justify-end">
      <Button onClick={() => {}} variant="primary">
        Button
      </Button>
    </Modal.Footer>
  </Modal>
);

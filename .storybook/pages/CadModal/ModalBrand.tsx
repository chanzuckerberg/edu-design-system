import React from 'react';

import { Button, Modal, Heading, Text } from '../../../src';

import CompassSolo from '../../static/compass-solo.svg';

export const ModalBrand = () => (
  <Modal
    onClose={
      () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
    }
    open
    variant="brand"
  >
    <Modal.Header brandAsset={<img alt="a compass" src={CompassSolo} />}>
      <Modal.Title>Check out the new course planner</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Heading as="h3" className="u-margin-bottom-md" size="title-sm">
        Intro header copy
      </Heading>
      <Text>Content pieces go here</Text>
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

import React from 'react';

import { Button, ButtonGroup, Icon, Modal, Heading } from '../../../src';

import { RadioField } from '../../../src/upcoming-components/RadioField/RadioField';

import '../../../src/components/Utilities/Alignment.css';
import '../../../src/components/Utilities/Display.css';
import '../../../src/components/Utilities/Spacing.css';

export const ModalFirstStep = () => (
  <Modal
    isScrollable
    onClose={
      () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
    }
    open
  >
    <Modal.Header>
      <Modal.Title className="u-margin-bottom-md">
        Before we start, tell us your planning needs
      </Modal.Title>
      <Heading as="h3" size="title-md">
        We’ll need to know how to set up your plan. Can you tell us how you’ll
        use the planner?
      </Heading>
    </Modal.Header>
    <Modal.Body>
      <RadioField label="Content pieces go here">
        <RadioField.Item
          name="course-planner"
          text="I need my own planner. No additional teachers will need to create a plan for this course."
          value="radio1"
        />
        <RadioField.Item
          name="course-planner"
          text="I need my own plans, but other teachers may need their own plans for this course too."
          value="radio2"
        />
        <RadioField.Item
          name="course-planner"
          text="I’ll review and use a plan set by another teacher."
          value="radio3"
        />
      </RadioField>
    </Modal.Body>
    <Modal.Footer className="u-display-flex u-justify-content-space-between u-align-items-center">
      <Modal.Stepper activeStep={1} totalSteps={3} />
      <ButtonGroup>
        <Button
          onClick={
            () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
          }
          status="neutral"
        >
          Not right now
        </Button>
        <Button
          disabled
          onClick={
            () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
          }
          variant="primary"
        >
          Next
          <Icon name="arrow-forward" purpose="decorative" />
        </Button>
      </ButtonGroup>
    </Modal.Footer>
  </Modal>
);

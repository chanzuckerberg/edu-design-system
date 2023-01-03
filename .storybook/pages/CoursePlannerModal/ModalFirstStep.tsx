import React, { useState } from 'react';

import {
  Button,
  ButtonGroup,
  Heading,
  Icon,
  Modal,
  Radio,
  Fieldset,
} from '../../../src';

export const ModalFirstStep = () => {
  const [checked, setChecked] = useState([false, false, false]);
  const handleChange = (index: number) => {
    const newChecked = [false, false, false];
    newChecked[index] = true;
    setChecked(newChecked);
  };
  return (
    <Modal isScrollable onClose={() => {}} open>
      <Modal.Header>
        <Modal.Title className="!mb-4">
          Before we start, tell us your planning needs
        </Modal.Title>
        <Heading as="h3" size="title-md">
          We’ll need to know how to set up your plan. Can you tell us how you’ll
          use the planner?
        </Heading>
      </Modal.Header>
      <Modal.Body>
        <Fieldset className="!m-0">
          <Fieldset.Legend text="Content pieces go here" />
          <Fieldset.Items>
            <Radio
              checked={checked[0]}
              label="I need my own planner. No additional teachers will need to create a plan for this course."
              name="course-planner"
              onChange={() => handleChange(0)}
              value="radio1"
            />
            <Radio
              checked={checked[1]}
              label="I need my own plans, but other teachers may need their own plans for this course too."
              name="course-planner"
              onChange={() => handleChange(1)}
              value="radio2"
            />
            <Radio
              checked={checked[2]}
              label="I’ll review and use a plan set by another teacher."
              name="course-planner"
              onChange={() => handleChange(2)}
              value="radio3"
            />
          </Fieldset.Items>
        </Fieldset>
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-between">
        <Modal.Stepper activeStep={1} totalSteps={3} />
        <ButtonGroup className="justify-end">
          <Button onClick={() => {}} status="neutral">
            Not right now
          </Button>
          <Button disabled onClick={() => {}} variant="primary">
            Next
            <Icon name="arrow-forward" purpose="decorative" />
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

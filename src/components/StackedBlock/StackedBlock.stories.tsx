import { Story, Meta } from '@storybook/react';
import React from 'react';

import { StackedBlock, Props } from './StackedBlock';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Heading from '../Heading';
import StackedBlockBody from '../StackedBlockBody';
import StackedBlockFooter from '../StackedBlockFooter';
import StackedBlockHeader from '../StackedBlockHeader';
import TextPassage from '../TextPassage';

export default {
  title: 'Molecules/Blocks/StackedBlock',
  component: StackedBlock,
} as Meta;

const Template: Story<Props> = (args) => (
  <StackedBlock>
    <StackedBlockHeader>
      <img
        // eslint-disable-next-line @chanzuckerberg/stories/no-ext-resources-in-stories
        src="https://st1.latestly.com/wp-content/uploads/2021/08/31-6.jpg"
        alt="placeholder"
      />
    </StackedBlockHeader>
    <StackedBlockBody>
      <Heading className="u-margin-bottom-md" as="h3">
        Stacked block title
      </Heading>
      <TextPassage className="u-margin-bottom-md">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </TextPassage>
    </StackedBlockBody>
    <StackedBlockFooter>
      <ButtonGroup>
        <Button variant="primary">Primary Button</Button>
        <Button>Secondary Button</Button>
      </ButtonGroup>
    </StackedBlockFooter>
  </StackedBlock>
);

export const Default = Template.bind({});
Default.args = {};

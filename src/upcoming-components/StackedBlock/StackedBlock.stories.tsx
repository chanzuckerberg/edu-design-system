import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { StackedBlock, Props } from './StackedBlock';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import StackedBlockBody from '../StackedBlockBody';
import StackedBlockFooter from '../StackedBlockFooter';
import StackedBlockHeader from '../StackedBlockHeader';

export default {
  title: 'Molecules/Blocks/StackedBlock',
  component: StackedBlock,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <StackedBlock>
    <StackedBlockHeader>
      <img
        alt="placeholder"
        // eslint-disable-next-line @chanzuckerberg/stories/no-ext-resources-in-stories
        src="https://st1.latestly.com/wp-content/uploads/2021/08/31-6.jpg"
      />
    </StackedBlockHeader>
    <StackedBlockBody>
      <Heading className="u-margin-bottom-md" size="h3">
        Stacked block title
      </Heading>
      <Text className="u-margin-bottom-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
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

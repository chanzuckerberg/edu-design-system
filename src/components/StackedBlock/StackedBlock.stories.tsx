import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StackedBlock, Props } from './StackedBlock';
import { StackedBlockHeader } from '../StackedBlockHeader/StackedBlockHeader';
import { StackedBlockBody } from '../StackedBlockBody/StackedBlockBody';
import { StackedBlockFooter } from '../StackedBlockFooter/StackedBlockFooter';
import { Heading } from '../Heading/Heading';
import { TextPassage } from '../TextPassage/TextPassage';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Button } from '../Button/Button';

export default {
  title: 'Molecules/Blocks/StackedBlock',
  component: StackedBlock,
} as Meta;

const Template: Story<Props> = (args) => (
  <StackedBlock>
    <StackedBlockHeader>
      <img src="https://placehold.it/600x400" alt="placeholder" />
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
        <Button variant="primary" text="Primary Button" />
        <Button text="Secondary Button" />
      </ButtonGroup>
    </StackedBlockFooter>
  </StackedBlock>
);

export const Default = Template.bind({});
Default.args = {};

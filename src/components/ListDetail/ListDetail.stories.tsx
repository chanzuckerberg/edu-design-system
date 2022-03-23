
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ListDetail, Props } from './ListDetail';
import { ListDetailPanel } from '../ListDetailPanel/ListDetailPanel';
import { TextPassage } from '../TextPassage/TextPassage';

export default {
	title: 'Example/ListDetail',
	component: ListDetail,
} as Meta;

const Template: Story<Props> = (args) => (
	<ListDetail {...args}>
	  <ListDetailPanel title="ListDetailPanel 1">
		<TextPassage>
		  <h3>ListDetailPanel 1</h3>
		  <p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex{' '}
		  </p>
		</TextPassage>
	  </ListDetailPanel>
  
	  <ListDetailPanel title="ListDetailPanel 2">
		<TextPassage>
		  <h3>ListDetailPanel 2</h3>
		  <p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex{' '}
		  </p>
		</TextPassage>
	  </ListDetailPanel>
  
	  <ListDetailPanel title="ListDetailPanel 3">
		<TextPassage>
		  <h3>ListDetailPanel 3</h3>
		  <p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex{' '}
		  </p>
		</TextPassage>
	  </ListDetailPanel>
	</ListDetail>
  );
  
  export const Default = Template.bind({});
  Default.args = {};

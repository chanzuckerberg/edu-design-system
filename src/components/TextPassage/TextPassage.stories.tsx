import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TextPassage, Props } from './TextPassage';

export default {
  title: 'Organisms/Text/TextPassage',
  component: TextPassage,
} as Meta;

const Template: Story<Props> = (args) => (
  <TextPassage {...args}>
    <h1>Heading 1</h1>
    <p>
      A text passage contains arbitrary text that might come from a CMS. It
      should live within a container that caps the line length of the text to
      avoid a straining reading experience.
    </p>

    <h2>Heading 2</h2>

    <p>
      This is another paragraph of text. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <ul>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
    </ul>

    <h3>Heading 3</h3>

    <ol>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
    </ol>

    <p>
      <a href="/">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </p>

    <blockquote>
      <p>This is a quotation from something.</p>
      <cite>Cite source</cite>
    </blockquote>

    <h4>Heading 4</h4>

    <p>
      This is another paragraph of text. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <hr />

    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>

    <h5>Heading 5</h5>

    <p>
      This is another paragraph of text. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <p>That is all.</p>
  </TextPassage>
);

export const Default = Template.bind({});
Default.args = {};

export const FullWidth = Template.bind({});
FullWidth.args = { capLinelength: false };

export const Inverted = () => (
  <div style={{ background: 'black' }}>
    <TextPassage inverted={true}>
      <h1>Heading 1</h1>
      <p>
        A text passage contains arbitrary text that might come from a CMS. It
        should live within a container that caps the line length of the text to
        avoid a straining reading experience.
      </p>

      <h2>Heading 2</h2>

      <p>
        This is another paragraph of text. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <ul>
        <li>Here is a unordered list item</li>
        <li>Here is a unordered list item</li>
        <li>Here is a unordered list item</li>
        <li>Here is a unordered list item</li>
      </ul>

      <h3>Heading 3</h3>

      <ol>
        <li>Here is a unordered list item</li>
        <li>Here is a unordered list item</li>
        <li>Here is a unordered list item</li>
        <li>Here is a unordered list item</li>
      </ol>

      <p>
        <a href="/">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>

      <blockquote>
        <p>This is a quotation from something.</p>
        <cite>Cite source</cite>
      </blockquote>

      <h4>Heading 4</h4>

      <p>
        This is another paragraph of text. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <hr />

      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>

      <h5>Heading 5</h5>

      <p>
        This is another paragraph of text. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <p>That is all.</p>
    </TextPassage>
  </div>
);

export const Small = Template.bind({});
Small.args = { size: 'sm' };

export const Large = Template.bind({});
Large.args = { size: 'lg' };

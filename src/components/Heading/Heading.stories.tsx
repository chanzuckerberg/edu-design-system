import { StoryObj } from '@storybook/react';
import React from 'react';
import Heading, { VARIANTS } from './Heading';
import styles from './Heading.stories.module.css';

export default {
  title: 'Atoms/Text/Heading',
  component: Heading,
};

type Args = React.ComponentProps<typeof Heading>;

export const Heading1: StoryObj<Args> = {
  args: {
    size: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: StoryObj<Args> = {
  args: {
    size: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: StoryObj<Args> = {
  args: {
    size: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: StoryObj<Args> = {
  args: {
    size: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: StoryObj<Args> = {
  args: {
    size: 'h5',
    children: 'Heading 5',
  },
};

export const Heading6: StoryObj<Args> = {
  args: {
    size: 'h6',
    children: 'Heading 6',
  },
};

export const Variants: StoryObj<Args> = {
  ...Heading1,
  render: (args) => {
    const headings = [];
    VARIANTS.forEach((variant) => {
      if (variant !== 'info')
        headings.push(
          <Heading {...args} variant={variant}>
            {variant}
          </Heading>,
        );
    });
    return (
      <div className={styles['variant__table']}>
        <div className={styles['variant--white']}>{headings}</div>
        <div className={styles['variant--light']}>{headings}</div>
        <div className={styles['variant--dark']}>{headings}</div>
      </div>
    );
  },
};

export const Sizes: StoryObj<Args> = {
  render: () => {
    const sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
    const combinations = sizes.map((as: typeof sizes[number]) => {
      const headings = sizes.map((size: typeof sizes[number]) => (
        <Heading as={as} size={size} key={`as${as}size${size}`}>
          as: {as} size: {size}
        </Heading>
      ));
      return <div key={as}>{headings}</div>;
    });
    return <div className={styles['variant__table']}>{combinations}</div>;
  },
};

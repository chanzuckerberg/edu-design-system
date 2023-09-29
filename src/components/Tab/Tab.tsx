import type { ReactNode } from 'react';

import React from 'react';
import { withoutTypes } from 'react-children-by-type';

import type { RenderProps } from '../../util/utility-types';

import { type TabContextArgs } from '../Tabs/Tabs';

export interface TabProps {
  /**
   * aria-labelledby attribute that associates a tab panel with its accompanying tab title
   */
  'aria-labelledby'?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Number passed down from Tabs to show the active index state of Tabs
   */
  isActiveIndex?: number;
  /**
   * Text used to label the tab in the tab list
   */
  title: string;
}

type TabButtonProps = RenderProps<TabContextArgs>;

/**
 * `import {Tab} from "@chanzuckerberg/eds";`
 *
 * Individual tab within the Tabs component.
 * - Use the `title` prop for text-only tab headers
 * - For more custom tab headers use `<Tab.Button>` which uses a render prop with state information
 */
export const Tab = ({
  children,
  className,
  id,
  // Destructure `title` so it is not applied to the rendered element
  title,
  'aria-labelledby': ariaLabelledBy,
  ...other
}: TabProps) => {
  return (
    <div
      aria-hidden={false}
      aria-labelledby={ariaLabelledBy}
      className={className}
      id={id}
      role="tabpanel"
      {...other}
    >
      {withoutTypes(children, TabButton)}
    </div>
  );
};

/**
 * This component is a stub, and exists to give a type to the custom Tab button.
 * It cannot be used as a standalone sub-component. See <Tabs> for where we trigger the render prop.
 */
const TabButton = (props: TabButtonProps) => {
  return <div />;
};

/**
 * Allows for control of the Tab Title contents, for custom tab handling
 *
 * ```jsx
 * <Tab.Button>
 *     {({active, title}) => (
 *         <SomeCustomComponent isActive={active} title={title} />
 *     )}
 * </Tab.Button>
 * ```
 */
Tab.Button = TabButton;

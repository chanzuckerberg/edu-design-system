import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React, { createContext } from 'react';
import styles from './Accordion.module.css';
import AccordionButton from '../AccordionButton';
import AccordionPanel from '../AccordionPanel';

type RenderProps<RenderPropArgs> = {
  children: React.ReactNode | ((args: RenderPropArgs) => React.ReactElement);
};

type Props = {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: React.ReactNode;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * Whether panel is expanded by default.
   */
  defaultOpen?: boolean;
  /**
   * Compact variant shrinks the Accordion size.
   */
  variant?: 'compact';
} & RenderProps<{
  /**
   * Render prop indicating Accordion open status.
   */
  open: boolean;
}>;

export const AccordionContext = createContext<{ variant: Props['variant'] }>({
  variant: undefined,
});

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Accordion} from "@chanzuckerberg/eds;`
 *
 * An interactive heading that reveals or hides associated content.
 * Built on 'headless UI' Disclosure.
 *
 * ```tsx
 * <Accordion>
 *   <Accordion.Button>
 *      Title
 *   </Accordion.Button>
 *   <Accordion.Panel>
 *     Content
 *   </Accordion.Panel>
 * </Accordion>
 * ```
 */
export const Accordion = ({
  className,
  defaultOpen,
  children,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['accordion'], className);
  return (
    <AccordionContext.Provider value={{ variant }}>
      <Disclosure defaultOpen={defaultOpen}>
        {({ open }) => (
          <div className={componentClassName} {...other}>
            {typeof children === 'function' ? children({ open }) : children}
          </div>
        )}
      </Disclosure>
    </AccordionContext.Provider>
  );
};

Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;

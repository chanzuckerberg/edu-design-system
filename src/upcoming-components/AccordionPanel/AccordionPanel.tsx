import clsx from 'clsx';
import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  ReactNode,
} from 'react';
import { useUID } from 'react-uid';
import styles from './AccordionPanel.module.css';
import Icon from '../../components/Icon';
import { EdsThemeColorIconNeutralStrong } from '../../tokens-dist/ts/colors';

export interface Props {
  /**
   * Thinks the aria-control attribute in the accordion panel header to the id in the accordion panel body
   */
  ariaControls?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * Accordion panel header slot for elements like heading
   */
  header?: ReactNode;
  /**
   * HTML id for aria-labelledby, which associates panel contents with the accordion title
   */
  ariaLabelledBy?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * is Active
   * 1) Panel is open when set to true. Close when set to false
   */

  isActive?: boolean;
  /**
   * Height property
   */

  height?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {AccordionPanel} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const AccordionPanel = ({
  children,
  className,
  header,
  ariaLabelledBy,
  isActive,
  height,
  ariaControls,
  ...other
}: Props) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [heightVar, setHeight] = useState('0');
  const [isActiveVar, setIsActive] = useState(isActive ? true : false);

  const generatedAriaControlsId = useUID();
  const ariaControlsVar = ariaControls || generatedAriaControlsId;

  const generatedAriaLabelledById = useUID();
  const ariaLabelledByVar = ariaLabelledBy || generatedAriaLabelledById;

  /**
   * Set panel height
   * 1) If isActive is true, set the height to panel body inner height
   * 2) If isActive is false, set the height to 0
   */
  const setPanelHeight = useCallback(() => {
    if (isActiveVar === true) {
      setHeight(
        panelRef?.current?.querySelector('[data-accordion-panel]')
          ?.scrollHeight + 'px',
      ); /* 1 */
    } else if (isActiveVar === false) {
      setHeight('0'); /* 2 */
    }
  }, [isActiveVar]);

  useEffect(() => {
    setPanelHeight();
    window.addEventListener('resize', setPanelHeight); /* 2 */
    return () => {
      window.removeEventListener('resize', setPanelHeight); /* 3 */
    };
  }, [setPanelHeight]);

  /**
   * Toggle accordion panel
   */
  function togglePanel() {
    if (isActiveVar === true) {
      setIsActive(false);
      setPanelHeight();
    } else {
      setIsActive(true);
      setPanelHeight();
    }
  }

  const componentClassName = clsx(
    styles['accordion__panel'],
    className,
    isActiveVar && styles['eds-is-active'],
  );
  return (
    <div className={componentClassName} {...other} ref={panelRef}>
      <dt className={styles['accordion__panel-header']}>
        <button
          aria-controls={ariaControlsVar}
          aria-expanded={isActive ? true : false}
          className={styles['accordion__panel-button']}
          id={ariaLabelledByVar}
          onClick={togglePanel}
        >
          {header}
          <Icon
            className={styles['accordion__panel-icon']}
            color={EdsThemeColorIconNeutralStrong}
            name="expand-more"
            purpose="decorative"
            size="2rem"
          />
        </button>
      </dt>
      <dd
        aria-labelledby={ariaLabelledByVar}
        className={styles['accordion__panel-body']}
        id={ariaControlsVar}
        style={{ height: heightVar }}
      >
        <div
          className={styles['accordion__panel-body-inner']}
          data-accordion-panel
        >
          {children}
        </div>
      </dd>
    </div>
  );
};

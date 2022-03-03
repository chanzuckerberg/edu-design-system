import React, {
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  ReactNode,
} from 'react';
import clsx from 'clsx';
import styles from './AccordionPanel.module.css';
import { nanoid } from 'nanoid';
import { Icon } from '../Icon/Icon';

export interface Props {
  /**
   * Thinks the aria-control attribute in the accordion panel header to the id in the accordion panel body
   */
  ariaControls?: any;
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
  ariaLabelledBy?: any;
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
 * Primary UI component for user interaction
 */
export const AccordionPanel: React.FC<Props> = ({
  children,
  className,
  header,
  ariaLabelledBy,
  isActive,
  height,
  ariaControls,
  ...other
}) => {
  const panelRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [heightVar, setHeight] = useState('0');
  const [isActiveVar, setIsActive] = useState(isActive ? true : false);
  const [ariaControlsVar, setAriaControls] = useState();
  const [ariaLabelledByVar, setAriaLabelledBy] = useState();

  useEffect(() => {
    setAriaControls(ariaControls || nanoid());
    setAriaLabelledBy(ariaLabelledBy || nanoid());
    setPanelHeight();
    window.addEventListener('resize', setPanelHeight); /* 2 */
    return () => {
      window.removeEventListener('resize', setPanelHeight); /* 3 */
    };
  }, [isActiveVar, ariaLabelledBy]);

  /**
   * Set panel height
   * 1) If isActive is true, set the height to panel body inner height
   * 2) If isActive is false, set the height to 0
   */
  function setPanelHeight() {
    if (isActiveVar === true) {
      setHeight(
        panelRef.current.querySelector('[data-accordion-panel]').scrollHeight +
          'px',
      ); /* 1 */
    } else if (isActiveVar === false) {
      setHeight('0'); /* 2 */
    }
  }

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

  const componentClassName = clsx(styles['accordion-panel'], className, {
    [styles['eds-is-active']]: isActiveVar === true,
  });
  return (
    <div className={componentClassName} {...other} ref={panelRef}>
      <dt className={styles['accordion-panel__header']}>
        <button
          className={styles['accordion-panel__button']}
          aria-expanded={isActive ? true : false}
          id={ariaLabelledByVar}
          aria-controls={ariaControlsVar}
          onClick={togglePanel}
        >
          {header}
          <Icon
            className={styles['accordion-panel__icon']}
            name="chevron-down"
          ></Icon>
        </button>
      </dt>
      <dd
        className={styles['accordion-panel__body']}
        aria-labelledby={ariaLabelledByVar}
        id={ariaControlsVar}
        style={{ height: heightVar }}
      >
        <div
          className={styles['accordion-panel__body-inner']}
          data-accordion-panel
        >
          {children}
        </div>
      </dd>
    </div>
  );
};

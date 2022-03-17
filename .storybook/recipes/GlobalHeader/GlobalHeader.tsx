import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './GlobalHeader.module.css';
import {
  Header,
  Logo,
  NavContainer,
  PrimaryNav,
  PrimaryNavItem,
  Button,
  Avatar,
} from '../../../src';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const GlobalHeader: React.FC<Props> = ({ className, ...other }) => {
  const [isActive, setisActive] = useState(false);

  const toggleMenu = () => {
    setisActive(!isActive);
  };

  const componentClassName = clsx(styles['global-header'], className, {
    [styles['is-active']]: isActive,
  });
  return (
    <Header behavior="sticky" className={componentClassName} {...other}>
      <div className={styles['global-header__header']}>
        <Logo href="#" />

        <Button
          className={styles['global-header__menu-button']}
          variant="bare"
          text={isActive ? 'Close' : 'Menu'}
          iconPosition="before"
          iconName={isActive ? 'x' : 'menu'}
          inverted={true}
          onClick={toggleMenu}
        />
      </div>

      <div className={styles['global-header__body']}>
        <PrimaryNav>
          <PrimaryNavItem href="#" text="Search Students" />
          <PrimaryNavItem href="#" text="Announcements" />
          <PrimaryNavItem href="#" text="Math 7 (IM)" />
          <PrimaryNavItem href="#" text="Mentoring" />
          <PrimaryNavItem href="#" text="Student Progress" />
          <PrimaryNavItem href="#" text="edscator Tools" />
          <PrimaryNavItem href="#" text="Curriculum" />
        </PrimaryNav>
      </div>

      <div className={styles['global-header__footer']}>
        <Avatar />
      </div>
    </Header>
  );
};

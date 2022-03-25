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
  AvatarBlock,
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
        <Logo className={styles['global-header__logo']} href="#" />

        <Button
          className={styles['global-header__menu-button']}
          variant="bare"
          text={isActive ? 'Close' : 'Menu'}
          iconPosition="before"
          hideText={true}
          iconName={isActive ? 'x' : 'menu'}
          inverted={true}
          onClick={toggleMenu}
        />

      <NavContainer className={styles['global-header__nav-container']}>
        <PrimaryNav>
          <PrimaryNavItem href="#" text="Search Students" iconName="search" />
          <PrimaryNavItem href="#" text="Announcements" iconName="class-copy" />
          <PrimaryNavItem href="#" text="Math 7 (IM)" iconName="mood" />
          <PrimaryNavItem href="#" text="Mentoring" iconName="account-circle" />
          <PrimaryNavItem href="#" text="Student Progress" iconName="school" />
          <PrimaryNavItem href="#" text="Educator Tools" iconName="view-module" />
          <PrimaryNavItem href="#" text="Curriculum" iconName="business-center" />
        </PrimaryNav>
        </NavContainer>
        <AvatarBlock className={styles['global-header__avatar-block']}>
          Ali S.
        </AvatarBlock>
    </Header>
  );
};

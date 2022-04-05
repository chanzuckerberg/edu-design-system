import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './GlobalHeader.module.css';
import {
  Header,
  Logo,
  PrimaryNav,
  PrimaryNavItem,
  NavContainer,
  Button,
  AvatarBlock,
  Icon,
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
export const GlobalHeader = ({ className, ...other }: Props) => {
  const [isActive, setisActive] = useState(false);

  const toggleMenu = () => {
    setisActive(!isActive);
    if (isActive) {
      document.body.classList.remove('eds-is-disabled');
    } else {
      document.body.classList.add('eds-is-disabled');
    }
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
        inverted={true}
        onClick={toggleMenu}
      >
        <Icon
          purpose="decorative"
          name={isActive ? 'x' : 'menu'}
          title={isActive ? 'Close' : 'Menu'}
        />
      </Button>

      <NavContainer
        isActive={isActive}
        className={styles['global-header__nav-container']}
      >
        <PrimaryNav>
          <PrimaryNavItem href="#" text="Search Students" iconName="search" />
          <PrimaryNavItem href="#" text="Announcements" iconName="class-copy" />
          <PrimaryNavItem href="#" text="Math 7 (IM)" iconName="mood" />
          <PrimaryNavItem href="#" text="Mentoring" iconName="account-circle" />
          <PrimaryNavItem href="#" text="Student Progress" iconName="school" />
          <PrimaryNavItem
            href="#"
            text="Educator Tools"
            iconName="view-module"
          />
          <PrimaryNavItem
            href="#"
            text="Curriculum"
            iconName="business-center"
          />
        </PrimaryNav>
      </NavContainer>
      <AvatarBlock className={styles['global-header__avatar-block']}>
        Ali S.
      </AvatarBlock>
    </Header>
  );
};

import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import styles from './GlobalHeader.module.css';
import {
  Header,
  Logo,
  PrimaryNav,
  PrimaryNavItem,
  NavContainer,
  Button,
  Avatar,
  UtilityNav,
  UtilityNavItem,
  Icon,
  Popover,
  PopoverBody,
  PopoverHeader,
  Heading,
  NotificationList,
  NotificationListItem,
} from '../../../src';
// @ts-expect-error breakpoints file must be in JS to work with postcss config
import breakpoint from '../../../src/design-tokens/tier-1-definitions/breakpoints';
import { EdsThemeColorIconNeutralDefaultInverse } from '../../../src/tokens-dist/ts/colors';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 * 1) Use the xl breakpoint to match the CSS breakpoint for the popover position change
 */
export const GlobalHeader = ({ className, ...other }: Props) => {
  const [isActive, setisActive] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const popoverBreakpoint = parseInt(breakpoint['eds-bp-xl']) * 16; /* 1 */

  const toggleMenu = () => {
    setisActive(!isActive);
    if (isActive) {
      document.body.classList.remove('eds-is-disabled');
    } else {
      document.body.classList.add('eds-is-disabled');
    }
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  });

  const updateScreenSize = () => {
    if (window.innerWidth >= popoverBreakpoint) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
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
        onClick={toggleMenu}
        variant="icon"
      >
        <Icon
          color={EdsThemeColorIconNeutralDefaultInverse}
          name={isActive ? 'close' : 'menu'}
          purpose="informative"
          title={isActive ? 'Close' : 'Menu'}
        />
      </Button>

      <NavContainer
        className={styles['global-header__nav-container']}
        isActive={isActive}
      >
        <PrimaryNav>
          <PrimaryNavItem href="#" iconName="search" text="Search Students" />
          <PrimaryNavItem href="#" iconName="class-copy" text="Announcements" />
          <PrimaryNavItem href="#" iconName="mood" text="Math 7 (IM)" />
          <PrimaryNavItem href="#" iconName="account-circle" text="Mentoring" />
          <PrimaryNavItem href="#" iconName="school" text="Student Progress" />
          <PrimaryNavItem
            href="#"
            iconName="view-module"
            text="Educator Tools"
          />
          <PrimaryNavItem
            href="#"
            iconName="business-center"
            text="Curriculum"
          />
        </PrimaryNav>
      </NavContainer>
      <UtilityNav className={styles['global-header__utility-nav']}>
        <UtilityNavItem ariaLabel="Notifications" itemBefore={<Avatar />}>
          <Popover
            ariaDescribedBy="popover-description-1"
            ariaLabelledBy="popover-heading-1"
            className={styles['global-header__popover']}
            isActive={true}
            position={isLarge === false ? 'bottom-left' : undefined}
          >
            <PopoverHeader
              titleAfter={
                <Button size="sm" variant="icon">
                  Mark All Seen
                </Button>
              }
            >
              <Heading as="h3" id="popover-heading-1" size="body-sm">
                Notifications (4)
              </Heading>
            </PopoverHeader>
            <PopoverBody>
              <NotificationList>
                <NotificationListItem
                  date="now"
                  href="#"
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                  title="English Teacher gave you feedback"
                ></NotificationListItem>
                <NotificationListItem
                  date="now"
                  href="#"
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                  title="English Teacher gave you feedback"
                ></NotificationListItem>
                <NotificationListItem
                  date="now"
                  href="#"
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                  title="English Teacher gave you feedback"
                ></NotificationListItem>
                <NotificationListItem
                  date="now"
                  href="#"
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                  title="English Teacher gave you feedback"
                ></NotificationListItem>
              </NotificationList>
              <PopoverHeader>
                <Heading as="h3" id="popover-heading-2" size="body-sm">
                  Already Seen
                </Heading>
              </PopoverHeader>
              <NotificationList>
                <NotificationListItem
                  date="now"
                  href="#"
                  markedAsRead={true}
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                  title="English Teacher gave you feedback"
                ></NotificationListItem>
                <NotificationListItem
                  date="now"
                  href="#"
                  markedAsRead={true}
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                  title="English Teacher gave you feedback"
                ></NotificationListItem>
              </NotificationList>
            </PopoverBody>
          </Popover>
        </UtilityNavItem>
      </UtilityNav>
    </Header>
  );
};

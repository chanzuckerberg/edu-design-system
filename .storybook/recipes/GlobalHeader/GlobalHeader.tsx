import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import styles from './GlobalHeader.module.css';
import breakpoint from '../../../src/design-tokens/tier-1-definitions/breakpoints.js';
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
  }, []);


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
        variant="icon"
        inverted={true}
        onClick={toggleMenu}
      >
        <Icon
          purpose="informative"
          name={isActive ? 'close' : 'menu'}
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
      <UtilityNav className={styles['global-header__utility-nav']}>
        <UtilityNavItem
          hideText={true}
          itemBefore={<Avatar />}
          text="Notifications"
        >
          <Popover
            className={styles['global-header__popover']}
            position={isLarge === false ? 'bottom-left' : undefined}
            dismissible={true}
            isActive={true}
            ariaLabelledBy="popover-heading-1"
            ariaDescribedBy="popover-description-1"
          >
            <PopoverHeader
              titleAfter={
                <Button size="sm" variant="icon">
                  Mark All Seen
                </Button>
              }
            >
              <Heading id="popover-heading-1" as="h6">
                Notifications (4)
              </Heading>
            </PopoverHeader>
            <PopoverBody>
              <NotificationList>
                <NotificationListItem
                  href="#"
                  title="English Teacher gave you feedback"
                  date="now"
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                ></NotificationListItem>
                <NotificationListItem
                  href="#"
                  title="English Teacher gave you feedback"
                  date="now"
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                ></NotificationListItem>
                <NotificationListItem
                  href="#"
                  title="English Teacher gave you feedback"
                  date="now"
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                ></NotificationListItem>
                <NotificationListItem
                  href="#"
                  title="English Teacher gave you feedback"
                  date="now"
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                ></NotificationListItem>
              </NotificationList>
              <PopoverHeader>
                <Heading id="popover-heading-2" as="h6">
                  Already Seen
                </Heading>
              </PopoverHeader>
              <NotificationList>
                <NotificationListItem
                  href="#"
                  title="English Teacher gave you feedback"
                  date="now"
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                  markedAsRead={true}
                ></NotificationListItem>
                <NotificationListItem
                  href="#"
                  title="English Teacher gave you feedback"
                  date="now"
                  source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                  markedAsRead={true}
                ></NotificationListItem>
              </NotificationList>
            </PopoverBody>
          </Popover>
        </UtilityNavItem>
      </UtilityNav>
    </Header>
  );
};

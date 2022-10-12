import clsx from 'clsx';
import React, {useState, useEffect} from 'react';
import styles from './GlobalHeader.module.css';
import {Button, Icon, Heading} from '../../../src';
// Project Overview pilot components -- not yet exported from src/index.ts
import Avatar from '../../../src/components/Avatar';
import Header from '../../../src/components/Header';
import Logo from '../../../src/components/Logo';
import NavContainer from '../../../src/components/NavContainer';
import NotificationList from '../../../src/components/NotificationList';
import Popover from '../../../src/components/Popover';
import PrimaryNav from '../../../src/components/PrimaryNav';
import PrimaryNavItem from '../../../src/components/PrimaryNavItem';
import UtilityNav from '../../../src/components/UtilityNav';

import breakpoint from '../../../src/design-tokens/tier-1-definitions/breakpoints';
import {EdsThemeColorIconNeutralDefaultInverse} from '../../../src/tokens-dist/ts/colors';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Search students primary nav item is active
   */
  searchStudentsIsActive?: boolean;
  /**
   * Announcements primary nav item is active
   */
  announcementsIsActive?: boolean;
  /**
   * Subject primary nav item is active
   */
  subjectIsActive?: boolean;
  /**
   * Mentoring primary nav item is active
   */
  mentoringIsActive?: boolean;
  /**
   * Student progress primary nav item is active
   */
  studentProgressIsActive?: boolean;
  /**
   * Search students primary nav item is active
   */
  educatorToolsIsActive?: boolean;
  /**
   * Search students primary nav item is active
   */
  curriculumIsActive?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const GlobalHeader = ({
  className,
  searchStudentsIsActive,
  announcementsIsActive,
  subjectIsActive,
  mentoringIsActive,
  studentProgressIsActive,
  educatorToolsIsActive,
  curriculumIsActive,
  ...other
}: Props) => {
  const [isActive, setisActive] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  /**
   * Use the xl breakpoint to match the CSS breakpoint for the popover position change
   */
  const popoverBreakpoint = parseInt(breakpoint['eds-bp-xl'], 10) * 16;

  const toggleMenu = () => {
    setisActive(!isActive);
    if (isActive) {
      document.body.classList.remove('body--disabled');
    } else {
      document.body.classList.add('body--disabled');
    }
  };

  // FIXME
  // eslint-disable-next-line @chanzuckerberg/edu-react/use-effect-deps-presence
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
      <Logo
        aria-label="Learning Platform Homepage"
        className={styles['global-header__logo']}
        href="#"
      >
        <svg
          className={styles['global-header__logo-image']}
          fill="none"
          height="32"
          viewBox="0 0 33 32"
          width="33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.793 10.5965C16.9627 8.21063 20.0776 2.77873 21.8258 0C23.0188 0.509711 24.1715 1.09993 25.2749 1.76608C23.8267 4.4476 20.5832 10.0699 19.2764 12.2248C21.5258 11.4714 28.3769 9.48658 31.4704 8.70481C32.0402 9.96456 32.6872 11.6496 33 12.5894C29.4138 13.4643 22.16 15.1251 19.6149 15.6638C22.6141 16.5063 27.3957 17.9403 30.9177 19.0947C30.4549 19.9737 29.3967 21.7519 28.6383 22.9549C25.729 21.922 22.1171 20.5246 19.2122 19.3661C19.9834 20.1762 25.3263 26.3696 26.6159 27.9372C25.909 28.8041 24.6065 30.2501 23.7538 31.1291C21.2773 28.0668 18.6123 24.5671 16.5086 21.7154C16.6671 23.2506 17.1256 29.1767 17.2884 31.7691C16.0673 31.8825 14.3834 31.9716 13.0038 32C12.8967 28.0425 12.8452 24.8263 12.8495 22.6228C11.727 24.243 8.0679 29.2861 7.27954 30.319C6.57258 29.7357 5.13724 28.2937 4.55453 27.7306C6.26837 25.4177 9.61036 21.3225 11.2642 19.3701C9.61465 19.9048 2.88782 21.9139 0.981174 22.4081C0.659829 21.4076 0.21423 19.7468 0 18.7261C2.05232 18.2035 8.37211 16.7737 10.9814 16.2349C9.24189 15.2182 3.91613 11.8846 1.62386 10.3291C2.48078 9.20304 3.51766 7.9757 4.46455 6.90633C6.30693 8.19038 10.5915 11.2486 12.0483 12.3058C11.0157 8.75342 10.2188 5.12 9.42184 1.02481C10.8213 0.683317 12.2444 0.435614 13.6807 0.283544C14.0578 1.88354 15.4546 9.05722 15.793 10.5965Z"
            fill="white"
            fillRule="evenodd"
          />
        </svg>
      </Logo>

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
          <PrimaryNavItem
            href="#"
            iconName="search"
            isActive={searchStudentsIsActive}
            text="Search Students"
          />
          <PrimaryNavItem
            href="#"
            iconName="class-copy"
            isActive={announcementsIsActive}
            text="Announcements"
          />
          <PrimaryNavItem
            href="#"
            iconName="mood"
            isActive={subjectIsActive}
            text="Math 7 (IM)"
          />
          <PrimaryNavItem
            href="#"
            iconName="account-circle"
            isActive={mentoringIsActive}
            text="Mentoring"
          />
          <PrimaryNavItem
            href="#"
            iconName="school"
            isActive={studentProgressIsActive}
            text="Student Progress"
          />
          <PrimaryNavItem
            href="#"
            iconName="view-module"
            isActive={educatorToolsIsActive}
            text="Educator Tools"
          />
          <PrimaryNavItem
            href="#"
            iconName="business-center"
            isActive={curriculumIsActive}
            text="Curriculum"
          />
        </PrimaryNav>
      </NavContainer>
      <UtilityNav className={styles['global-header__utility-nav']}>
        <Popover
          as={React.Fragment}
          placement={isLarge ? 'top-start' : 'bottom-end'}
        >
          <Popover.Button
            as="li"
            className={styles['global-header__avatar-button']}
          >
            <Button aria-label="Notifications" variant="icon">
              <Avatar />
            </Button>
          </Popover.Button>
          <Popover.Content
            arrowClassName={styles['popover__arrow']}
            className={styles['global-header__popover']}
            showArrow
          >
            <header className={styles['global-header__popover-header']}>
              <Heading as="h3" id="popover-heading-1" size="body-sm">
                Notifications (4)
              </Heading>
              <Button size="sm" variant="icon">
                Mark All Seen
              </Button>
            </header>
            <NotificationList>
              <NotificationList.Item
                date="now"
                href="#"
                source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                title="English Teacher gave you feedback"
              ></NotificationList.Item>
              <NotificationList.Item
                date="now"
                href="#"
                source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                title="English Teacher gave you feedback"
              ></NotificationList.Item>
              <NotificationList.Item
                date="now"
                href="#"
                source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                title="English Teacher gave you feedback"
              ></NotificationList.Item>
              <NotificationList.Item
                date="now"
                href="#"
                source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                title="English Teacher gave you feedback"
              ></NotificationList.Item>
            </NotificationList>
            <header className={styles['global-header-popover__header']}>
              <Heading as="h3" id="popover-heading-2" size="body-sm">
                Already Seen
              </Heading>
            </header>
            <NotificationList>
              <NotificationList.Item
                date="now"
                href="#"
                markedAsRead={true}
                source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                title="English Teacher gave you feedback"
              ></NotificationList.Item>
              <NotificationList.Item
                date="now"
                href="#"
                markedAsRead={true}
                source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
                title="English Teacher gave you feedback"
              ></NotificationList.Item>
            </NotificationList>
          </Popover.Content>
        </Popover>
      </UtilityNav>
    </Header>
  );
};

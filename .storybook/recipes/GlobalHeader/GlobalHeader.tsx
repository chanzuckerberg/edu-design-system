import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import styles from './GlobalHeader.module.css';
import { Button, Icon, Heading } from '../../../src';
// Project Overview pilot components -- not yet exported from src/index.ts
import Header from '../../../src/components/Header';
import Link from '../../../src/components/Link';
import NavContainer from '../../../src/components/NavContainer';
import NotificationList from '../../../src/components/NotificationList';
import Popover from '../../../src/components/Popover';
import PrimaryNav from '../../../src/components/PrimaryNav';
import PrimaryNavItem from '../../../src/components/PrimaryNavItem';
import UtilityNav from '../../../src/components/UtilityNav';

import breakpoint from '../../../src/design-tokens/tier-1-definitions/breakpoints';
import { EdsThemeColorIconNeutralDefaultInverse } from '../../../src/tokens-dist/ts/colors';

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

const Avatar = () => (
  <div className={styles['global-header__avatar-image']}>
    <svg
      className={styles['global-header__avatar-image__head']}
      fill="#96d2dc"
      viewBox="0 0 41.74 43.22"
    >
      <g>
        <path d="M41.67,20a1,1,0,0,0-.15-1c-.18-.22-.41-.41-.31-.77,0-.11-.1-.29-.19-.41a1.36,1.36,0,0,0-.3-.23c.25-.55.45-1,0-1.47a.4.4,0,0,1-.08-.2,2,2,0,0,0-.39-1.16s0-.15,0-.22c0-.38,0-.76,0-1.14,0,0,0-.07-.07-.11l-.62-.83a.27.27,0,0,1-.07-.17c.08-.45-.22-.68-.52-.92s-.56-.61-.9-.72c-.56-.19-.85-.66-1.3-1-.07,0-.08-.16-.12-.25a4.26,4.26,0,0,0-.26-.64c-.12-.2-.33-.34-.45-.54s-.24-.53-.38-.79c0-.09-.16-.15-.23-.24S35.08,7,35,6.86a5.24,5.24,0,0,0-.81-1.1,7.65,7.65,0,0,0-1.51-.82c-.18-.09-.43-.05-.61-.14-.64-.31-1.26-.66-1.9-1-.4-.2-.82-.38-1.23-.55l-2-.79c-.39-.16-.77-.34-1.17-.47-.58-.2-1.18-.37-1.77-.57-.24-.08-.46-.21-.7-.27s-.63-.1-1-.15L20.21.65,19.09.45A4.07,4.07,0,0,1,18,.27,2.1,2.1,0,0,0,16.36.1c-.11,0-.25,0-.37,0a5.58,5.58,0,0,0-1.15.07,2.75,2.75,0,0,0-.77.46.73.73,0,0,0-.2.22,2.43,2.43,0,0,1-1.61,1.32c-.11,0-.21.09-.33.12a5.46,5.46,0,0,1-.85.22c-.28,0-.58,0-.86,0a.68.68,0,0,0-.39.21A2.67,2.67,0,0,1,9,3.37c-.55.23-1.07.52-1.6.8-.16.09-.27.29-.44.35A3.66,3.66,0,0,0,5.48,5.75a13.36,13.36,0,0,0-1,1.48c-.27.39-.6.75-.87,1.13a3.92,3.92,0,0,0-.75,1.76.34.34,0,0,1-.11.22,3.13,3.13,0,0,0-.8.84c-.08.11-.14.23-.21.34.28.2.43.69.24.79s-.3.45-.4.67-.4.36-.19.64a.53.53,0,0,1-.12.85.81.81,0,0,0-.22.22C1,14.8.94,15,1,15c.26.31,0,.58-.08.81A6.88,6.88,0,0,0,.36,18.1a7.22,7.22,0,0,0,0,1.21s0,.08,0,.12a2.21,2.21,0,0,1,0,.36c0,.15-.08.3-.11.45-.07.32-.11.65-.19,1a.92.92,0,0,0,.09.87.44.44,0,0,1,.08.24c0,.33,0,.66,0,1,0,.79.19,1.57.11,2.36a.27.27,0,0,0,0,.12c.15.38.32.75.46,1.14s.25.73.38,1.09a2,2,0,0,0,.22.34,1.16,1.16,0,0,0,.08,1.11.18.18,0,0,1,0,.15c-.14.26,0,.46.11.67s.24.46.37.69l.66,1.21a.23.23,0,0,0,.07.06c.06,0,.17.08.18.14a1.06,1.06,0,0,0,.79.78c.53.17.72.57,1,1a7.76,7.76,0,0,1,.46.78c.11.22.3.48.26.67s.12.51.19.75c0,.06.09.1.15.14.25.16.51.31.76.48.06,0,.07.17.11.24.17.33.34.66.54,1a5.45,5.45,0,0,0,.35.43l.76,1s0,0,.06,0a.74.74,0,0,1,.13.26c0,.22.05.39.33.44a2.22,2.22,0,0,1,.52.26c.22-.12.31.16.48.29a4.45,4.45,0,0,0,1.82.8,3.05,3.05,0,0,1,.75.28c.16.08.29.23.45.31a19,19,0,0,0,1.92.86,1.52,1.52,0,0,0,1,0l1.73-.58c.21.24.44.47.58.42a1,1,0,0,1,1,.18s.1,0,.16,0a10.38,10.38,0,0,1,1.19.05A2.9,2.9,0,0,0,21.76,43a1.31,1.31,0,0,1,.46-.1,8.53,8.53,0,0,0,2.49-.33,1.41,1.41,0,0,0,.54-.34c.19-.16.34-.38.52-.55s.74-.23.89-.64a.74.74,0,0,1,.69-.48,5.84,5.84,0,0,0,1-.25,1.12,1.12,0,0,0,.55-.33,1.65,1.65,0,0,1,1-.6c.16,0,.39-.18.42-.31.09-.37.35-.48.66-.59a4.76,4.76,0,0,0,1.72-.64c-.34.11,0-.07.1,0l1.52-.23a.29.29,0,0,0,.2-.12,2.85,2.85,0,0,1,1.36-1.24,2.43,2.43,0,0,0,.56-.55c.1-.11.16-.26.26-.36a5.94,5.94,0,0,0,.86-.89,1.44,1.44,0,0,1,.76-.6c.29-.12.67-.24.79-.47a2.46,2.46,0,0,0,.15-1.16c0-.4,0-.62.35-.83a1.86,1.86,0,0,0,.63-1.06,5.45,5.45,0,0,0,.23-1,1.39,1.39,0,0,0,0-.42c-.06-.48-.44-.95,0-1.43,0-.06,0-.18,0-.27a2.1,2.1,0,0,1,.05-.37c.13-.4.28-.8.41-1.19l.5-1.5c0-.32-.34-.78,0-1.29-.21-.23-.21-.23-.17-.56,0,0,0-.1,0-.15a3.67,3.67,0,0,1,0-.89A7,7,0,0,1,41.67,20Z"></path>
        <path d="M33.59,39.32l.1,0Z"></path>
      </g>
    </svg>
    <svg
      className={styles['global-header__avatar-image__body']}
      fill="#508278"
      viewBox="0 0 42.64 62.94"
    >
      <g>
        <path d="M0,61.3l42.59,1.64s-.33-21.32,0-32.46S39,6.88,33.78,2.95s-18-3.93-24.9,0S-.3,24.25,0,32.44,0,61.3,0,61.3Z"></path>
      </g>
    </svg>
    <svg
      className={styles['global-header__avatar-image__legs']}
      fill="#ffd2b4"
      viewBox="0 0 34.62 61.95"
    >
      <g>
        <path d="M5.73,55.51,2.58,56H1.14l-.85.44L0,57.73s.72,1.72.91,2a15,15,0,0,0,2.26,1.51L6.72,62l5.58-.36L13.39.5,8.48,0,7.89,55.19Z"></path>
        <path d="M34.6,55.39a3.3,3.3,0,0,1-.24,1.77,13.77,13.77,0,0,1-1.46,1.35l-1.55.65-1.81.48H22.17L22.56.82,26,.74l.72,52.74a5.79,5.79,0,0,0,1,.59c.13,0,2.34,0,2.34,0l2.17.55Z"></path>
      </g>
    </svg>
  </div>
);

/**
 * Global header with primary navigation for the page.
 *
 * Appears as a sidebar on wide windows and moves to the top of the page on mobile.
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
      <Link
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
      </Link>

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

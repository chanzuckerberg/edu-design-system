import clsx from 'clsx';
import React, { useId, useState } from 'react';

import {
  Button,
  ButtonGroup,
  Dropdown,
  Heading,
  Icon,
  Label,
  Link,
  Tabs,
  Tab,
  Text,
  Tooltip,
} from '../../../src';

import AlongFooterPaper from '../../static/along-footer-paper.svg';
import AlongLogoBulb from '../../static/along-logo-bulb.svg';
import AlongUserIllustration1 from '../../static/along-user-illustration-1.png';
import AlongUserIllustration2 from '../../static/along-user-illustration-2.png';
import GoogleLogo from '../../static/google-logo.svg';
import MicrosoftLogo from '../../static/microsoft-logo.svg';
import Sprout from '../../static/sprout.svg';
import styles from './AlongDemo.module.css';
import globalStyles from './GlobalStyles.module.css';

const GlobalFooter = ({ className }: { className?: string }) => (
  <ul className={clsx(styles['wireframe-demo__footer'], className)}>
    <li className={styles['wireframe-demo__footer-link']}>
      <Link>
        Privacy Policy{' '}
        <Icon
          name="open-in-new"
          purpose="informative"
          size="0.8em"
          title="opens in a new tab"
        />
      </Link>
    </li>
    <li className={styles['wireframe-demo__footer-link']}>
      <Link>Cookie Settings</Link>
    </li>
    <li className={styles['wireframe-demo__footer-link']}>
      <Link>
        User Agreement{' '}
        <Icon
          name="open-in-new"
          purpose="informative"
          size="0.8em"
          title="opens in a new tab"
        />
      </Link>
    </li>
    <li className={styles['wireframe-demo__footer-link']}>
      <Link>
        Code of Conduct{' '}
        <Icon
          name="open-in-new"
          purpose="informative"
          size="0.8em"
          title="opens in a new tab"
        />
      </Link>
    </li>
    <li className={styles['wireframe-demo__footer-link']}>
      <Link>
        Help Center{' '}
        <Icon
          name="open-in-new"
          purpose="informative"
          size="0.8em"
          title="opens in a new tab"
        />
      </Link>
    </li>
  </ul>
);

const LoggedOutPage = ({ onLogin }: { onLogin: () => void }) => (
  <div className={styles['logged-out-page']}>
    <div className="mb-16 flex grow flex-col items-center p-8">
      <header className="flex gap-4">
        <img
          alt="A studious youth with specs smiling and looking at his laptop"
          className={styles['logged-out-page__header-img']}
          height="160"
          src={AlongUserIllustration1}
          width="177"
        />
        <div className="flex flex-col items-center gap-8">
          <img alt="along logo" className="h-[5rem]" src={AlongLogoBulb} />
          <Heading as="h1" size="h2">
            Sign in
          </Heading>
          <Text>Remember to use your school email to sign in:</Text>
        </div>
        <img
          alt="Girl with red headphones smiling and looking at mobile phone"
          className={styles['logged-out-page__header-img']}
          height="160"
          src={AlongUserIllustration2}
          width="162"
        />
      </header>
      <ButtonGroup
        className={styles['logged-out-page__button-group']}
        orientation="vertical"
      >
        <Button
          className={styles['logged-out-page__social-sign-in-button']}
          onClick={onLogin}
        >
          <img alt="" src={GoogleLogo} /> Sign in with Google
        </Button>
        <Button
          className={styles['logged-out-page__social-sign-in-button']}
          onClick={onLogin}
        >
          <span className="flex w-[20px] overflow-hidden">
            <img
              alt=""
              className="inline-block max-w-[11.35rem]"
              src={MicrosoftLogo}
            />
          </span>
          Sign in with Microsoft
        </Button>
      </ButtonGroup>

      <Heading as="h2" size="h4">
        Sign in as one of the test users:
      </Heading>
      <ButtonGroup
        className={styles['logged-out-page__button-group']}
        orientation="vertical"
      >
        {['Hogwarts', 'Cohorts', 'Demos', 'Admins'].map((buttonText) => (
          <Button
            className="w-[16rem]"
            key={`other-login-${buttonText}`}
            onClick={onLogin}
            variant="primary"
          >
            {buttonText}
          </Button>
        ))}
      </ButtonGroup>
    </div>

    <img alt="" className="w-full" src={AlongFooterPaper} />
    <div className={styles['logged-out-page__bottom-section']}>
      <div className="flex flex-col items-center">
        <img alt="" className="mb-4" src={Sprout} />
        <Heading
          as="h2"
          className={styles['logged-out-page__create-account-header']}
          size="title-sm"
        >
          Don't have an account?
        </Heading>
        <Link onClick={onLogin}>
          <Icon
            className="mr-2"
            name="account-circle"
            purpose="decorative"
            size="1rem"
          />
          Create an account
        </Link>
      </div>

      <GlobalFooter className={styles['logged-out-page__footer']} />
    </div>
  </div>
);

const StudentTab = ({
  studentName,
  avatarColor,
  active = false,
}: {
  studentName: string;
  avatarColor: 'pine' | 'sneaker' | 'carrot';
  active?: boolean;
}) => (
  <div
    className={clsx(
      styles['student-tab'],
      active && styles['student-tab--active'],
    )}
  >
    <div
      className={clsx(
        styles['watch-page__avatar'],
        styles[`watch-page__avatar--${avatarColor}`],
        'h-10 w-10',
      )}
    >
      <Text size="sm">{studentName.slice(0, 1)}</Text>
    </div>
    <Text className="!mt-2 truncate" size="xs">
      {studentName}
    </Text>
  </div>
);

const WatchPage = ({ onLogout }: { onLogout: () => void }) => {
  const responseTextareaId = useId();
  const notesTextareaId = useId();

  const ReplyIcon = (
    <svg className="h-4 min-w-[1rem]" viewBox="0 0 16 16">
      <path
        clipRule="inherit"
        d="M6.53086 5.19809V4.13809C6.53086 3.54476 5.81086 3.24476 5.39086 3.66476L2.33086 6.72476C2.07086 6.98476 2.07086 7.40476 2.33086 7.66476L5.39086 10.7248C5.81086 11.1448 6.53086 10.8514 6.53086 10.2581V9.13142C9.8642 9.13142 12.1975 10.1981 13.8642 12.5314C13.1975 9.19809 11.1975 5.86476 6.53086 5.19809Z"
        fillRule="inherit"
      ></path>
    </svg>
  );

  const studentGroupOptions = [
    {
      key: '1',
      label: 'All students',
    },
    {
      key: '2',
      label: 'Not grouped',
    },
  ];

  const [selectedOption, setSelectedOption] = useState(studentGroupOptions[0]);
  const [canSubmitResponse, setCanSubmitResponse] = useState(false);

  const handleTextareaChange = (event: any) => {
    if (event.target.value?.length >= 3 && !canSubmitResponse) {
      setCanSubmitResponse(true);
    } else if (event.target.value?.length < 3 && canSubmitResponse) {
      setCanSubmitResponse(false);
    }
  };

  return (
    <div>
      <div className={styles['watch-page__main-section']}>
        <div className="ml-10 mr-8 flex gap-4">
          <Button
            className={styles['watch-page__back-button']}
            onClick={onLogout}
            variant="secondary"
          >
            <Icon name="arrow-back" purpose="informative" title="go back" />
          </Button>
          <div>
            <Text className="!mb-2">Playing reflections in response to:</Text>
            <Heading as="h1" className="!font-normal" size="h3">
              What's something in your life, big or small, that you're proud of?
              Why are you proud of it?
            </Heading>
          </div>
        </div>

        <div className={styles['watch-page__carousel']}>
          <div className={clsx('w-[10.5rem]', styles['watch-page__dropdown'])}>
            <Dropdown
              aria-label="student groups"
              buttonText={selectedOption.label}
              onChange={setSelectedOption}
              options={studentGroupOptions}
              value={selectedOption}
            />
          </div>

          <Tabs className={clsx(styles['watch-page__tabs'], 'mt-4')}>
            <Tab title="All (3)">
              <div className="flex">
                <StudentTab active avatarColor="pine" studentName="Mikaela" />
                <StudentTab avatarColor="sneaker" studentName="Cesar" />
                <StudentTab avatarColor="carrot" studentName="Truman" />
              </div>
            </Tab>

            <Tab title="New (1)">
              <div className="flex">
                <StudentTab active avatarColor="pine" studentName="Mikaela" />
              </div>
            </Tab>

            <Tab title="Open (2)">
              <div className="flex">
                <StudentTab avatarColor="sneaker" studentName="Cesar" />
                <StudentTab avatarColor="carrot" studentName="Truman" />
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className={styles['watch-page__reflection']}>
          <div className="mt-2 w-full lg:w-[31.25rem]">
            <div className="flex cursor-pointer">
              <div
                className={clsx(
                  styles['watch-page__avatar'],
                  styles['watch-page__avatar--pine'],
                  'mr-2 h-9 w-9',
                )}
              >
                <Text size="sm">M</Text>
              </div>

              <div>
                <Text size="sm">Mikaela</Text>
                <Text className={styles['watch-page__time-stamp']} size="xs">
                  3d
                </Text>
              </div>
            </div>
            <video
              aria-label="student makes the sign for the word 'along' in american sign language"
              className="w-full"
              controls
              muted
              src="https://ia801706.us.archive.org/18/items/stringalongtagalong-accompanyASL/string%20along%2Ctag%20along-accompany.ia.mp4"
            >
              Sorry, your browser doesn't support embedded videos, but you can
              view the
              <a href="https://archive.org/details/stringalongtagalong-accompanyASL">
                video on archive.org.
              </a>
            </video>

            <div className="ml-2 mt-4 flex gap-4">
              {ReplyIcon}
              <Text>
                My greatest accomplishment this year was in math, because I
                wasn't that good at math in the first place and now I am good at
                math. It is because my teacher, Mr. S. taught me how to do math.
              </Text>
            </div>

            <div className={styles['watch-page__response']}>
              <Label htmlFor={responseTextareaId} text="Respond to Mikaela" />
              <textarea
                className={clsx(styles['watch-page__textarea'], 'h-[9.25rem')}
                id={responseTextareaId}
                onChange={handleTextareaChange}
                placeholder="Type your response to Mikaela"
              ></textarea>
              <Button
                className="mt-4"
                disabled={!canSubmitResponse}
                variant="primary"
              >
                Send and close reflection
              </Button>
              <Button
                className="mt-2"
                disabled={!canSubmitResponse}
                variant="link"
              >
                Send and continue reflection
              </Button>
            </div>
          </div>
        </div>

        <GlobalFooter className="grow items-end" />
      </div>

      <aside className={styles['watch-page__sidebar']}>
        <div
          className={clsx(
            styles['watch-page__avatar'],
            styles['watch-page__avatar--pine'],
            'm-4 h-[6.25rem] w-[6.25rem]',
          )}
        >
          <Text size="lg">M</Text>
        </div>
        <Link className="mb-4">
          <Heading as="h2" className="!font-normal" size="h3">
            Mikaela
          </Heading>
        </Link>

        <div className={styles['watch-page__student-summary-container']}>
          <table>
            <caption className={styles['watch-page__student-summary-header']}>
              <Heading as="h3" className="!mb-2 !font-normal" size="title-sm">
                Mikaela's<br></br>stats with you
              </Heading>
            </caption>
            <thead>
              <tr>
                <th>
                  <Text size="xs">Questions received</Text>
                </th>
                <th>
                  <Text size="xs">Reflections submitted</Text>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Text className="text-center" size="lg">
                    10
                  </Text>
                </td>
                <td>
                  <Text className="text-center" size="lg">
                    8
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles['watch-page__teacher-notes-heading']}>
          <label htmlFor={notesTextareaId}>
            <Text size="xs" weight="bold">
              Your personal notes
            </Text>
          </label>
          <Tooltip
            align="bottom"
            childNotInteractive
            className={styles['watch-page__tooltip-container']}
            text={
              <Text className={styles['watch-page__tooltip-content']}>
                Only you can see your notes when you review Mikaela's
                reflections.
              </Text>
            }
          >
            <div className={styles['watch-page__teacher-notes-info-icon']}>
              <Icon name="help" purpose="decorative" />
            </div>
          </Tooltip>
        </div>
        <textarea
          className={clsx(
            styles['watch-page__textarea'],
            styles['watch-page__teacher-notes-textarea'],
          )}
          id={notesTextareaId}
          placeholder="Add any notes about Mikaela here. Only you can see them."
        ></textarea>
        <Button className="mb-16 mt-2 w-full" variant="secondary">
          Save
        </Button>
      </aside>
    </div>
  );
};

/**
 * A page demoing what it looks like when you apply a mature brand theme to the EDS components. We're using the Along product as an example. Best viewed on the "canvas" tab in storybook.
 *
 * See the [theming documentation](./?path=/docs/documentation-theming--theming) for more information on the purpose of this demo.
 */
export const AlongDemo = () => {
  const [currentPage, setCurrentPage] = useState<'loggedOut' | 'watch'>(
    'loggedOut',
  );

  return (
    <div className={globalStyles.root}>
      {currentPage === 'loggedOut' ? (
        <LoggedOutPage onLogin={() => setCurrentPage('watch')} />
      ) : (
        <WatchPage onLogout={() => setCurrentPage('loggedOut')} />
      )}
    </div>
  );
};

import clsx from 'clsx';
import React, { useState } from 'react';

import {
  Button,
  ButtonGroup,
  Heading,
  Icon,
  Label,
  Link,
  Select,
  Tabs,
  Text,
  Tooltip,
} from '../../../src';
import { useId } from '../../../src/util/useId';

import PlaceholderImage from '../../static/placeholder-image.svg';
import PlaceholderVideo from '../../static/placeholder-video.svg';
import globalStyles from './GlobalStyles.module.css';
import styles from './WireframeDemo.module.css';

const GlobalFooter = () => (
  <ul className={styles['wireframe-demo__footer']}>
    <li>
      <Link>
        Privacy Policy{' '}
        <Icon
          name="open-in-new"
          purpose="informative"
          title="opens in a new tab"
        />
      </Link>
    </li>
    <li>
      <Link>Cookie Settings</Link>
    </li>
    <li>
      <Link>
        User Agreement{' '}
        <Icon
          name="open-in-new"
          purpose="informative"
          title="opens in a new tab"
        />
      </Link>
    </li>
    <li>
      <Link>
        Code of Conduct{' '}
        <Icon
          name="open-in-new"
          purpose="informative"
          title="opens in a new tab"
        />
      </Link>
    </li>
    <li>
      <Link>
        Help Center{' '}
        <Icon
          name="open-in-new"
          purpose="informative"
          title="opens in a new tab"
        />
      </Link>
    </li>
  </ul>
);

const LoggedOutPage = ({ onLogin }: { onLogin: () => void }) => (
  <div className={styles['logged-out-page']}>
    <div className="mb-16 flex flex-col items-center">
      <header className="flex gap-4">
        <img
          alt="placeholder for decorative illustration"
          className={styles['logged-out-page__header-img']}
          src={PlaceholderImage}
        />
        <div className="flex flex-col items-center gap-6">
          <Heading as="h1">Application</Heading>
          <Heading as="h2">Sign in</Heading>
          <Text>Remember to use your school email to sign in:</Text>
        </div>
        <img
          alt="placeholder for decorative illustration"
          className={styles['logged-out-page__header-img']}
          src={PlaceholderImage}
        />
      </header>
      <ButtonGroup
        className={styles['logged-out-page__button-group']}
        orientation="vertical"
      >
        {['Sign in with Google', 'Sign in with Microsoft'].map((buttonText) => (
          <Button
            className="w-[17.5rem]"
            key={`social-login-${buttonText}`}
            onClick={onLogin}
          >
            <Icon name="circle" purpose="decorative" /> {buttonText}
          </Button>
        ))}
      </ButtonGroup>

      <Text>Sign in as one of the test users:</Text>
      <ButtonGroup
        className={styles['logged-out-page__button-group']}
        orientation="vertical"
      >
        {['Hogwarts', 'Cohorts', 'Demos', 'Admins'].map((buttonText) => (
          <Button
            className="w-[14rem]"
            key={`other-login-${buttonText}`}
            onClick={onLogin}
            variant="primary"
          >
            {buttonText}
          </Button>
        ))}
      </ButtonGroup>
    </div>

    <div className="flex flex-col items-center gap-2">
      <img
        alt="placeholder for decorative illustration"
        className="mb-2 w-16"
        src={PlaceholderImage}
      />
      <Text>Don't have an account?</Text>
      <Button onClick={onLogin} variant="link">
        <Icon name="circle" purpose="decorative" />
        Create an account
      </Button>
    </div>

    <GlobalFooter />
  </div>
);

const StudentTab = ({
  studentName,
  active = false,
}: {
  studentName: string;
  active?: boolean;
}) => (
  <div
    className={clsx(
      styles['student-tab'],
      active && styles['student-tab--active'],
    )}
  >
    <div className={clsx(styles['watch-page__avatar'], 'h-10 w-10')}>
      <Text preset="body-sm">{studentName.slice(0, 1)}</Text>
    </div>
    <Text className="!mt-2 truncate" preset="body-xs">
      {studentName}
    </Text>
  </div>
);

const WatchPage = ({ onLogout }: { onLogout: () => void }) => {
  const responseTextareaId = useId();

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
    <div className={styles['watch-page']}>
      <div className={styles['watch-page__main-section']}>
        <div className="ml-10 mr-8 flex gap-4">
          <Button onClick={onLogout} variant="secondary">
            <Icon name="arrow-back" purpose="informative" title="go back" />
          </Button>
          <div>
            <Text className="mb-2">Playing reflections in response to:</Text>
            <Heading as="h1" preset="headline-sm">
              What's something in your life, big or small, that you're proud of?
              Why are you proud of it?
            </Heading>
          </div>
        </div>

        <div className={styles['watch-page__carousel']}>
          <div className="w-[10.5rem]">
            <Select
              aria-label="student groups"
              onChange={setSelectedOption}
              value={selectedOption}
            >
              <Select.Button>{selectedOption.label}</Select.Button>
              <Select.Options>
                {studentGroupOptions.map((option) => (
                  <Select.Option key={option.key} value={option}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select.Options>
            </Select>
          </div>

          <Tabs className="mt-4">
            <Tabs.Tab title="All (3)">
              <div className="flex">
                <StudentTab active studentName="Mikaela" />
                <StudentTab studentName="Cesar" />
                <StudentTab studentName="Truman" />
              </div>
            </Tabs.Tab>

            <Tabs.Tab title="New (1)">
              <div className="flex">
                <StudentTab active studentName="Mikaela" />
              </div>
            </Tabs.Tab>

            <Tabs.Tab title="Open (2)">
              <div className="flex">
                <StudentTab studentName="Cesar" />
                <StudentTab studentName="Truman" />
              </div>
            </Tabs.Tab>
          </Tabs>
        </div>

        <div className={styles['watch-page__reflection']}>
          <div className="mt-2 w-full lg:w-[31.25rem]">
            <div className="flex cursor-pointer">
              <div
                className={clsx(styles['watch-page__avatar'], 'mr-2 h-9 w-9')}
              >
                <Text preset="body-sm">M</Text>
              </div>

              <div>
                <Text preset="body-sm">Mikaela</Text>
                <Text preset="body-xs">3d</Text>
              </div>
            </div>
            <img
              alt="placeholder for video player"
              className="w-full"
              src={PlaceholderVideo}
            />

            <div className="ml-8 mt-4 flex gap-4">
              <Icon
                className="min-w-[1rem]"
                name="circle"
                purpose="decorative"
              />
              <Text className={styles['watch-page__text-reflection-text']}>
                My greatest accomplishment this year was in math, because I
                wasn't that good at math in the first place and now I am good at
                math. It is because my teacher, Mr. S. taught me how to do math.
              </Text>
            </div>

            <div className={styles['watch-page__response']}>
              <Label htmlFor={responseTextareaId} text="Respond to Mikaela" />
              <textarea
                className={clsx(styles['watch-page__textarea'], 'h-[9.25rem]')}
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

        <GlobalFooter />
      </div>

      <aside className={styles['watch-page__sidebar']}>
        <div
          className={clsx(
            styles['watch-page__avatar'],
            'm-4 h-[6.25rem] w-[6.25rem]',
          )}
        >
          <Text preset="body-lg">M</Text>
        </div>
        <Link className="mb-4">
          <Heading as="h2" preset="headline-sm">
            Mikaela
          </Heading>
        </Link>

        <div className={styles['watch-page__student-summary-container']}>
          <table>
            <caption className={styles['watch-page__student-summary-header']}>
              <Text className="!mb-2">
                Mikaela's<br></br>stats with you
              </Text>
            </caption>
            <thead>
              <tr>
                <th>
                  <Text preset="body-xs">Questions received</Text>
                </th>
                <th>
                  <Text preset="body-xs">Reflections submitted</Text>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Text className="text-center" preset="body-lg">
                    10
                  </Text>
                </td>
                <td>
                  <Text className="text-center" preset="body-lg">
                    8
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles['watch-page__teacher-notes-heading']}>
          <Text preset="body-xs">Your personal notes</Text>
          <Tooltip
            childNotInteractive
            text={
              <Text className={styles['watch-page__teacher-notes-tooltip']}>
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
 * A page demoing what a wireframe demo could look like in a pilot prototype. Best viewed on the "canvas" tab in storybook.
 *
 * See the [theming documentation](./?path=/docs/documentation-theming--theming) for more information on the purpose of this demo.
 *
 * Just for the purpose of demonstration, we're using the logged out homepage and
 * the teacher watch page in an example app.
 */
export const WireframeDemo = () => {
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

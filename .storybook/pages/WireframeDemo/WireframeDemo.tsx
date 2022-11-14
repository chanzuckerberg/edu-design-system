import clsx from 'clsx';
import React, { useState } from 'react';
import { useUID } from 'react-uid';

import globalStyles from './GlobalStyles.module.css';
import styles from './WireframeDemo.module.css';

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

import PlaceholderImage from '../../static/placeholder-image.svg';
import PlaceholderVideo from '../../static/placeholder-video.svg';

const GlobalFooter = () => (
  <div className={styles['wireframe-demo__footer']}>
    <Link>
      Privacy Policy{' '}
      <Icon
        name="open-in-new"
        purpose="informative"
        title="opens in a new tab"
      />
    </Link>
    <Link>Cookie Settings</Link>
    <Link>
      User Agreement{' '}
      <Icon
        name="open-in-new"
        purpose="informative"
        title="opens in a new tab"
      />
    </Link>
    <Link>
      Code of Conduct{' '}
      <Icon
        name="open-in-new"
        purpose="informative"
        title="opens in a new tab"
      />
    </Link>
    <Link>
      Help Center{' '}
      <Icon
        name="open-in-new"
        purpose="informative"
        title="opens in a new tab"
      />
    </Link>
  </div>
);

const LoggedOutPage = ({ onLogin }: { onLogin: () => void }) => (
  <div className={styles['logged-out-page']}>
    <div className="flex flex-col items-center mb-16">
      <header className="flex gap-4">
        <img
          alt="placeholder for decorative illustration"
          className={styles['logged-out-page__header-img']}
          src={PlaceholderImage}
        />
        <div className="flex flex-col items-center gap-6">
          <Heading size="h1">along</Heading>
          <Heading size="h2">Sign in</Heading>
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
        className="w-16 mb-2"
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
    <div className={clsx(styles['watch-page__avatar'], 'w-10 h-10')}>
      <Text size="sm">{studentName.slice(0, 1)}</Text>
    </div>
    <Text className="!mt-2 truncate" size="xs">
      {studentName}
    </Text>
  </div>
);

const WatchPage = ({ onLogout }: { onLogout: () => void }) => {
  const responseTextareaId = useUID();

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
    <div className="">
      <div className={styles['watch-page__main-section']}>
        <div className="ml-10 mr-8 flex gap-4">
          <Button onClick={onLogout} variant="secondary">
            <Icon name="arrow-back" purpose="informative" title="go back" />
          </Button>
          <div>
            <Text className="mb-2">Playing reflections in response to:</Text>
            <Heading as="h1" size="h3">
              What's something in your life, big or small, that you're proud of?
              Why are you proud of it?
            </Heading>
          </div>
        </div>

        <div className={styles['watch-page__carousel']}>
          <div className="w-[10.5rem]">
            <Dropdown
              aria-label="student groups"
              buttonText={selectedOption.label}
              // TODO: why isn't the selected styling showing up when selecting a new option?
              onChange={setSelectedOption}
              options={studentGroupOptions}
              value={selectedOption}
            />
          </div>

          <Tabs className="mt-4">
            <Tab title="All (3)">
              <div className="flex">
                <StudentTab active={true} studentName="Mikaela" />
                <StudentTab studentName="Cesar" />
                <StudentTab studentName="Truman" />
              </div>
            </Tab>

            <Tab title="New (1)">
              <div className="flex">
                <StudentTab active={true} studentName="Mikaela" />
              </div>
            </Tab>

            <Tab title="Open (2)">
              <div className="flex">
                <StudentTab studentName="Cesar" />
                <StudentTab studentName="Truman" />
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className={styles['watch-page__reflection']}>
          <div className="w-full">
            <div className="flex cursor-pointer">
              <div
                className={clsx(styles['watch-page__avatar'], 'mr-2 w-9 h-9')}
              >
                <Text size="sm">M</Text>
              </div>

              <div>
                <Text size="sm">Mikaela</Text>
                <Text size="xs">3d</Text>
              </div>
            </div>
            <img
              alt="placeholder for video player"
              className="w-full mt-2 lg:w-[31.25rem]"
              src={PlaceholderVideo}
            />
          </div>

          <div className="w-[26.8125rem]">
            <div className="flex gap-4 mt-4 ml-8">
              <Icon
                className="min-w-[1rem]"
                name="circle"
                purpose="decorative"
              />
              <Text className={styles['watch-page__text-reflection-text']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                volutpat consequat mauris nunc congue nisi vitae suscipit
                tellus. Et odio pellentesque diam volutpat commodo sed egestas
                egestas fringilla. Pretium vulputate sapien nec sagittis aliquam
                malesuada. Ut sem viverra aliquet eget sit amet tellus. Lacus
                sed turpis tincidunt id aliquet risus feugiat. Libero justo
                laoreet sit amet cursus sit amet. Luctus venenatis lectus magna
                fringilla. Vitae purus faucibus ornare suspendisse. Enim blandit
                volutpat maecenas volutpat. Bibendum arcu vitae elementum
                curabitur vitae. Condimentum mattis pellentesque id nibh tortor.
                Scelerisque in dictum non consectetur a erat nam. Ornare quam
                viverra orci sagittis eu volutpat odio. Sollicitudin nibh sit
                amet commodo nulla facilisi nullam vehicula ipsum. Diam
                vulputate ut pharetra sit amet aliquam id diam maecenas. Non
                enim praesent elementum facilisis.
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

        <GlobalFooter />
      </div>

      <aside className={styles['watch-page__sidebar']}>
        <div
          className={clsx(
            styles['watch-page__avatar'],
            'm-4 w-[6.25rem] h-[6.25rem]',
          )}
        >
          <Text size="lg">M</Text>
        </div>
        <Link className="mb-4">
          <Heading as="h2" size="h3">
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
          <Text size="xs">Your personal notes</Text>
          <Tooltip
            childNotInteractive={true}
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
          placeholder="Add any notes about Benjamin here. Only you can see them."
        ></textarea>
        <Button className="w-full mt-2 mb-16" variant="secondary">
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
 * the teacher watch page in the Along app.
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

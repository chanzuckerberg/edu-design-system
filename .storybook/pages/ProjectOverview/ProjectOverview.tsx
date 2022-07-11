import React from 'react';

import {
  PageHeader,
  Text,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  Heading,
  Hr,
  Card,
  CardBody,
  Icon,
  Section,
  TimelineNav,
  TimelineNavPanel,
} from '../../../src';
// Project Overview pilot components -- not yet exported from src/index.ts
import '../../../src/components/Utilities/Spacing.css';

import { PageShell } from '../../recipes/PageShell/PageShell';

export const ProjectOverview = () => {
  return (
    <PageShell>
      <Breadcrumbs className="u-margin-bottom-md">
        <BreadcrumbsItem href="#" text="My Courses" />
        <BreadcrumbsItem href="#" text="Disciplinary Science 7" />
      </Breadcrumbs>
      <PageHeader
        right={
          <Button variant="icon">
            View plan
            <Icon name="arrow-narrow-right" purpose="decorative" />
          </Button>
        }
        title="Feudal Honor Codes and Values"
      />
      <TimelineNav>
        <TimelineNavPanel title="Overview" variant="success">
          <Section
            description={
              <Text
                as="p"
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '15.996px',
                  color: 'rgb(93,99,105',
                }}
              >
                Estimated schedule: Days 4,5,6
              </Text>
            }
            kicker={
              <Text
                as="p"
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '15.9996px',
                  color: 'rgb(56, 60, 67)',
                }}
              >
                OVERVIEW
              </Text>
            }
            title="What is this Project About?"
          >
            <Text size="lg">
              Consectetur adipiscing elit. Ac id velit ut egestas arcu. At
              maecenas urna, risus donec praesent eu consectetur. Nunc non eu
              mattis sem turpis id dictum. Volutpat ornare turpis ultrices augue
              bibendum pellentesque. Habitasse.
            </Text>
            <Button className="u-margin-bottom-xl" variant="link">
              See More
            </Button>
            <Heading as="h3" className="u-margin-bottom-sm" size="title-md">
              Essential Questions
            </Heading>
            <Text as="div" className="u-margin-bottom-xl">
              <ul>
                <li>How are structures in the body organized?</li>
                <li>
                  How do these structures work together to support life? But
                  really need to see what it looks like if we have an extra long
                  question.
                </li>
                <li>How are structures in the body organized?</li>
              </ul>
            </Text>
            <Heading as="h3" className="u-margin-bottom-sm" size="title-md">
              Key Take Aways
            </Heading>
            <Text as="div" className="u-margin-bottom-xl">
              <ol>
                <li>
                  Groups of specialized cells make up organs and body systems,
                  which work together to support an organism’s survival.
                </li>
                <li>
                  How are structures in the body organized? More text blah blah
                  blah.
                </li>
                <li>How are structures in the body organized?</li>
              </ol>
            </Text>
            <Hr className="u-margin-bottom-none" />
            <Section
              title="Power Focus Areas"
              titleBefore={
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/32x32"
                  style={{ display: 'block', borderRadius: '50%' }}
                />
              }
            >
              <Card>
                <CardBody>
                  <Heading
                    as="h3"
                    className="u-margin-bottom-sm"
                    size="title-md"
                  >
                    What Was Medieval Japan Like?
                  </Heading>
                  <Text>
                    In this Focus Area, you explore the main question: How does
                    the structures of organisms enable lifes functions?
                  </Text>
                </CardBody>
              </Card>
            </Section>
            <Section
              title="Additional Focus Areas"
              titleBefore={
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/32x32"
                  style={{ display: 'block', borderRadius: '50%' }}
                />
              }
            >
              <Card className="u-margin-bottom-md">
                <CardBody>
                  <Heading
                    as="h3"
                    className="u-margin-bottom-sm"
                    size="title-md"
                  >
                    What Was Medieval Japan Like?
                  </Heading>
                  <Text>
                    In this Focus Area, you explore the main question: How does
                    the structures of organisms enable life’s functions?
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Heading
                    as="h3"
                    className="u-margin-bottom-sm"
                    size="title-md"
                  >
                    What Was Medieval Japan Like?
                  </Heading>
                  <Text>
                    In this Focus Area, you explore the main question: How does
                    the structures of organisms enable life’s functions?
                  </Text>
                </CardBody>
              </Card>
            </Section>
            <Section
              title="Cognitive Skills"
              titleBefore={
                <img
                  alt="placeholder"
                  src="https://via.placeholder.com/32x32"
                  style={{ display: 'block', borderRadius: '50%' }}
                />
              }
            >
              <Text as="div">
                <a href="https://go.czi.team/eds">Selecting Relevant Sources</a>
                <a href="https://go.czi.team/eds">
                  Identifying Patterns and Relationships
                </a>
                <a href="https://go.czi.team/eds">Argumentative Claim</a>
                <a href="https://go.czi.team/eds">Selection of Evidence</a>
                <a href="https://go.czi.team/eds">Explanation of Evidence</a>
                <a href="https://go.czi.team/eds">
                  Multimedia in Communication
                </a>
                <a href="https://go.czi.team/eds">Integration of Evidence</a>
              </Text>
            </Section>
          </Section>
        </TimelineNavPanel>

        <TimelineNavPanel title="Expectations of Samuri in Feudal Japan and Wars of 5th Century">
          <Section
            description={
              <Text
                as="p"
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '15.996px',
                  color: 'rgb(93,99,105',
                }}
              >
                Estimated schedule: Days 4,5,6
              </Text>
            }
            kicker="CHECKPOINT 1"
            title="Expectations of Samuri in Feudal Japan and Wars of 5th Century"
          >
            <Text as="div">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
            </Text>
          </Section>
        </TimelineNavPanel>

        <TimelineNavPanel title="Expectations of Samuri in Feudal Japan">
          <Section
            description={
              <Text
                as="p"
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '15.996px',
                  color: 'rgb(93,99,105',
                }}
              >
                Estimated schedule: Days 4,5,6
              </Text>
            }
            kicker={
              <Text
                as="p"
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '15.9996px',
                  color: 'rgb(56, 60, 67)',
                }}
              >
                CHECKPOINT 2
              </Text>
            }
            title="Expectations of Samuri in Feudal Japan"
          >
            <Text as="div">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
            </Text>
          </Section>
        </TimelineNavPanel>
        <TimelineNavPanel title="Expectations of Samuri in Feudal Japan">
          <Section
            description={
              <Text
                as="p"
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '15.996px',
                  color: 'rgb(93,99,105',
                }}
              >
                Estimated schedule: Days 4,5,6
              </Text>
            }
            kicker={
              <Text
                as="p"
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '15.9996px',
                  color: 'rgb(56, 60, 67)',
                }}
              >
                CHECKPOINT 3
              </Text>
            }
            title="Expectations of Samuri in Feudal Japan"
          >
            <Text as="div">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
            </Text>
          </Section>
        </TimelineNavPanel>
        <TimelineNavPanel title="Expectations of Samuri in Feudal Japan">
          <Section
            description={
              <Text
                as="p"
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '15.996px',
                  color: 'rgb(93,99,105',
                }}
              >
                Estimated schedule: Days 4,5,6
              </Text>
            }
            kicker={
              <Text
                as="p"
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '15.9996px',
                  color: 'rgb(56, 60, 67)',
                }}
              >
                CHECKPOINT 4
              </Text>
            }
            title="Expectations of Samuri in Feudal Japan"
          >
            <Text as="div">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
            </Text>
          </Section>
        </TimelineNavPanel>
      </TimelineNav>
    </PageShell>
  );
};

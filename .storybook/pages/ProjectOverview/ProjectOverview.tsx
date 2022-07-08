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
  DefinitionList,
  Link,
} from '../../../src';
// Project Overview pilot components -- not yet exported from src/index.ts
import '../../../src/components/Utilities/Spacing.css';
import ButtonActionCalloutCard from '../../recipes/ButtonActionCalloutCard';

import { PageShell } from '../../recipes/PageShell/PageShell';

export interface Props {
  /**
   * Passed down to initially set the activeIndex state
   */
  activeIndex?: number;
}

export const ProjectOverview = ({ activeIndex = 0 }: Props) => {
  return (
    <PageShell className="body--alternate">
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
      <TimelineNav activeIndex={activeIndex}>
        <TimelineNavPanel title="Overview" variant="success">
          <Heading as="h2" className="u-margin-bottom-xl" size="headline-lg">
            What is this Project About?
          </Heading>
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
                <Heading as="h3" className="u-margin-bottom-sm" size="title-md">
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
                <Heading as="h3" className="u-margin-bottom-sm" size="title-md">
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
                <Heading as="h3" className="u-margin-bottom-sm" size="title-md">
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
              <a href="https://go.czi.team/eds">Multimedia in Communication</a>
              <a href="https://go.czi.team/eds">Integration of Evidence</a>
            </Text>
          </Section>
        </TimelineNavPanel>

        <TimelineNavPanel title="Expectations of Samuri in Feudal Japan and Wars of 5th Century">
          <Section title="Expectations of Samuri in Feudal Japan">
            <Heading as="h3" className="u-margin-bottom-lg" size="h3">
              What to Focus on this Checkpoint
            </Heading>
            <Text as="div" className="u-margin-bottom-md">
              <p>
                Students individually develop a follow up question that builds
                from their group’s experiment and describe their follow up
                question in their conclusion. Students craft evidence-supported
                explanations of how the body is organized and functions.
              </p>
            </Text>
            <DefinitionList
              className="u-margin-bottom-lg"
              orientation="horizontal"
            >
              <DefinitionList.Item title="Term 1:">
                <Link>Constructing and Evidence based Explanation</Link>
              </DefinitionList.Item>
            </DefinitionList>

            <Text as="div" className="u-margin-bottom-md">
              <p>
                Students collaboratively develop a single group research
                question to frame their shared experiment, then describe the
                group research question in the introduction.
              </p>
            </Text>
            <DefinitionList
              className="u-margin-bottom-lg"
              orientation="horizontal"
            >
              <DefinitionList.Item title="Term 1:">
                <Link>Constructing and Evidence based Explanation</Link>
              </DefinitionList.Item>
            </DefinitionList>

            <Heading as="h3" className="u-margin-bottom-lg" size="h3">
              What to Focus on this Checkpoint
            </Heading>

            <ButtonActionCalloutCard
              actions={<Button variant="primary">Preview</Button>}
              title="Do This Checkpoint"
            >
              Develop the text of your Body Book, crafting evidence-supported
              explanations on how the body is organized and its functions.
            </ButtonActionCalloutCard>
          </Section>
        </TimelineNavPanel>

        <TimelineNavPanel title="Expectations of Samuri in Feudal Japan">
          <Text as="div">
            <h3>TimelineNavPanel 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </p>
          </Text>
        </TimelineNavPanel>
        <TimelineNavPanel title="Expectations of Samuri in Feudal Japan">
          <Text as="div">
            <h3>TimelineNavPanel 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </p>
          </Text>
        </TimelineNavPanel>
        <TimelineNavPanel title="Expectations of Samuri in Feudal Japan">
          <Text as="div">
            <h3>TimelineNavPanel 5</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </p>
          </Text>
        </TimelineNavPanel>
      </TimelineNav>
    </PageShell>
  );
};

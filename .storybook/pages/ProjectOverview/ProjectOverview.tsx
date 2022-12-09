import React from 'react';
import styles from './ProjectOverview.module.css';

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
  StackedBlock,
  Link,
  GridItem,
  Grid,
} from '../../../src';
// Project Overview pilot components -- not yet exported from src/index.ts
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
    <PageShell className="body--alternate" mentoringIsActive={true}>
      <Breadcrumbs className="!mb-4">
        <BreadcrumbsItem href="#" text="My Courses" />
        <BreadcrumbsItem href="#" text="Disciplinary Science 7" />
      </Breadcrumbs>
      <PageHeader
        headingSize="h3"
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
          <Heading
            as="h2"
            className="!mb-8"
            size="headline-md"
            variant="neutral-strong"
          >
            What is this Project About?
          </Heading>
          <Text size="lg">
            Consectetur adipiscing elit. Ac id velit ut egestas arcu. At
            maecenas urna, risus donec praesent eu consectetur. Nunc non eu
            mattis sem turpis id dictum. Volutpat ornare turpis ultrices augue
            bibendum pellentesque. Habitasse.
          </Text>

          <Heading
            as="h3"
            className="!mb-2"
            size="title-md"
            variant="neutral-strong"
          >
            Essential Questions
          </Heading>
          <Text as="div" className="!mb-8">
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
          <Heading
            as="h3"
            className="!mb-2"
            size="title-md"
            variant="neutral-strong"
          >
            Key Take Aways
          </Heading>
          <Text as="div" className="!mb-8">
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
          <Hr className="!mb-0" />

          <div className="fpo">FPO Brand asset</div>
          <Section
            headingSize="headline-sm"
            title="Power Focus Areas"
            titleAfter={
              <Button size="sm" variant="icon">
                <Icon
                  name="help"
                  purpose="informative"
                  size="1.375rem"
                  title="help"
                />
              </Button>
            }
          >
            <Card className="!mb-4">
              <CardBody>
                <Heading
                  as="h3"
                  className="!mb-2"
                  size="title-xs"
                  variant="neutral-strong"
                >
                  What Was Medieval Japan Like?
                </Heading>
                <Text>
                  In this Focus Area, you explore the main question: How does
                  the structures of organisms enable life’s functions?
                </Text>
              </CardBody>
            </Card>
            <Card className="!mb-4">
              <CardBody>
                <Heading
                  as="h3"
                  className="!mb-2"
                  size="title-xs"
                  variant="neutral-strong"
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
                  className="!mb-2"
                  size="title-xs"
                  variant="neutral-strong"
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
          <Section headingSize="headline-sm" title="Additional Focus Areas">
            <Card className="!mb-4">
              <CardBody>
                <Heading
                  as="h3"
                  className="!mb-2"
                  size="title-xs"
                  variant="neutral-strong"
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
                  className="!mb-2"
                  size="title-xs"
                  variant="neutral-strong"
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
        </TimelineNavPanel>

        <TimelineNavPanel title="Expectations of Samuri in Feudal Japan and Wars of 5th Century">
          <Section
            description={
              <Text as="p" className={styles['project-overview__text']}>
                Estimated schedule: Days 4,5,6
              </Text>
            }
            overline={
              <Text as="div" size="overline">
                Overline above title
              </Text>
            }
            title="Expectations of Samuri in Feudal Japan"
          >
            <Heading
              as="h3"
              className="!mb-6"
              size="headline-sm"
              variant="neutral-strong"
            >
              What to Focus on this Checkpoint
            </Heading>
            <Text as="div" className="!mb-4">
              <p>
                Students individually develop a follow up question that builds
                from their group’s experiment and describe their follow up
                question in their conclusion. Students craft evidence-supported
                explanations of how the body is organized and functions.
              </p>
            </Text>
            <DefinitionList className="!mb-6" orientation="horizontal">
              <DefinitionList.Item title="Term 1:">
                <Link>Constructing and Evidence based Explanation</Link>
              </DefinitionList.Item>
            </DefinitionList>

            <Text as="div" className="!mb-4">
              <p>
                Students collaboratively develop a single group research
                question to frame their shared experiment, then describe the
                group research question in the introduction.
              </p>
            </Text>
            <DefinitionList className="!mb-8" orientation="horizontal">
              <DefinitionList.Item title="Term 1:">
                <Link>Constructing and Evidence based Explanation</Link>
              </DefinitionList.Item>
            </DefinitionList>

            <ButtonActionCalloutCard
              actions={<Button variant="primary">Preview</Button>}
              className="!mb-8"
              title="Do This Checkpoint"
            >
              Develop the text of your Body Book, crafting evidence-supported
              explanations on how the body is organized and its functions.
            </ButtonActionCalloutCard>

            <Hr className="!mt-12" />

            <Heading
              as="h3"
              className="!mb-6"
              size="headline-sm"
              variant="neutral-strong"
            >
              Resources for You
            </Heading>

            <Grid className="!mb-8">
              <GridItem>
                <StackedBlock href="#" title="This is a link">
                  This is a stacked block description
                </StackedBlock>
              </GridItem>{' '}
              <GridItem>
                <StackedBlock href="#" title="This is a link">
                  This is a stacked block description
                </StackedBlock>
              </GridItem>
              <GridItem>
                <StackedBlock href="#" title="This is a link">
                  This is a stacked block description
                </StackedBlock>
              </GridItem>
              <GridItem>
                <StackedBlock href="#" title="This is a link">
                  This is a stacked block description
                </StackedBlock>
              </GridItem>
            </Grid>

            <Heading
              as="h3"
              className="!mb-6"
              size="headline-sm"
              variant="neutral-strong"
            >
              Resources for You
            </Heading>

            <Grid className="!mb-8">
              <GridItem>
                <StackedBlock href="#" title="This is a link">
                  This is a stacked block description
                </StackedBlock>
              </GridItem>{' '}
              <GridItem>
                <StackedBlock href="#" title="This is a link">
                  This is a stacked block description
                </StackedBlock>
              </GridItem>
              <GridItem>
                <StackedBlock href="#" title="This is a link">
                  This is a stacked block description
                </StackedBlock>
              </GridItem>
              <GridItem>
                <StackedBlock href="#" title="This is a link">
                  This is a stacked block description
                </StackedBlock>
              </GridItem>
            </Grid>
            <Hr className="!mt-12" />
          </Section>
        </TimelineNavPanel>

        <TimelineNavPanel title="Expectations of Samuri in Feudal Japan">
          <Section
            description={
              <Text as="p" className={styles['project-overview__text']}>
                Estimated schedule: Days 4,5,6
              </Text>
            }
            overline={
              <Text as="div" size="overline">
                Checkpoint 2
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
              <Text as="p" className={styles['project-overview__text']}>
                Estimated schedule: Days 4,5,6
              </Text>
            }
            overline={
              <Text as="div" size="overline">
                Checkpoint 3
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
              <Text as="p" className={styles['project-overview__text']}>
                Estimated schedule: Days 4,5,6
              </Text>
            }
            overline={
              <Text as="div" size="overline">
                Checkpoint 4
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

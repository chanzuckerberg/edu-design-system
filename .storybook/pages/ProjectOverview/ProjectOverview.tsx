/* eslint-disable jsx-a11y/anchor-is-valid */
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
} from '../../../src';
// Project Overview pilot components -- not yet exported from src/index.ts
import ListDetail from '../../../src/components/ListDetail';
import ListDetailPanel from '../../../src/components/ListDetailPanel';
import '../../../src/components/Utilities/Spacing.css';

import { PageShell } from '../../recipes/PageShell/PageShell';

export const ProjectOverview = () => {
  return (
    <PageShell>
      <Breadcrumbs>
        <BreadcrumbsItem href="#" text="My Courses" />
        <BreadcrumbsItem text="Disciplinary Science 7" />
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
      <ListDetail>
        <ListDetailPanel title="Overview" variant="success">
          <Heading as="h2" className="u-margin-bottom-lg" size="headline-lg">
            What is this Project About?
          </Heading>
          <Text size="lg">
            Consectetur adipiscing elit. Ac id velit ut egestas arcu. At
            maecenas urna, risus donec praesent eu consectetur. Nunc non eu
            mattis sem turpis id dictum. Volutpat ornare turpis ultrices augue
            bibendum pellentesque. Habitasse.
          </Text>
          <Button className="u-margin-bottom-lg" variant="link">
            See More
          </Button>
          <Heading as="h3" className="u-margin-bottom-sm" size="title-md">
            Essential Questions
          </Heading>
          <Text as="div" className="u-margin-bottom-lg">
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
          <Text as="div" className="u-margin-bottom-lg">
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
              <a href="#">Selecting Relevant Sources</a>
              <a href="#">Identifying Patterns and Relationships</a>
              <a href="#">Argumentative Claim</a>
              <a href="#">Selection of Evidence</a>
              <a href="#">Explanation of Evidence</a>
              <a href="#">Multimedia in Communication</a>
              <a href="#">Integration of Evidence</a>
            </Text>
          </Section>
        </ListDetailPanel>

        <ListDetailPanel title="Expectations of Samuri in Feudal Japan and Wars of 5th Century">
          <Text as="div">
            <h3>ListDetailPanel 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </p>
          </Text>
        </ListDetailPanel>

        <ListDetailPanel title="Expectations of Samuri in Feudal Japan">
          <Text as="div">
            <h3>ListDetailPanel 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </p>
          </Text>
        </ListDetailPanel>
        <ListDetailPanel title="Expectations of Samuri in Feudal Japan">
          <Text as="div">
            <h3>ListDetailPanel 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </p>
          </Text>
        </ListDetailPanel>
        <ListDetailPanel title="Expectations of Samuri in Feudal Japan">
          <Text as="div">
            <h3>ListDetailPanel 5</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </p>
          </Text>
        </ListDetailPanel>
      </ListDetail>
    </PageShell>
  );
};

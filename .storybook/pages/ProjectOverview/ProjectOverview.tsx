import React from 'react';

import {
  PageHeader,
  TextPassage,
  ListDetail,
  ListDetailPanel,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  Hr,
  Heading,
  Section,
  Card,
  CardBody,
} from '../../../src';
import utilityStyles from '../../../src/components/Utilities/Spacing.module.css';

import { PageShell } from '../../recipes/PageShell/PageShell';

export const ProjectOverview: React.FC = () => (
  <PageShell>
    <Breadcrumbs>
      <BreadcrumbsItem text="My Courses" href="#" />
      <BreadcrumbsItem text="Disciplinary Science 7" />
    </Breadcrumbs>
    <PageHeader
      title="Feudal Honor Codes and Values"
      right={
        <Button
          text="View plan"
          variant="bare"
          iconPosition="after"
          iconName="arrow-narrow-right"
        />
      }
    />
    <ListDetail>
      <ListDetailPanel title="Overview" variant="success">
        <Heading
          className={utilityStyles['u-margin-bottom-lg']}
          as="h2"
          size={1}
        >
          What is this Project About?
        </Heading>
        <TextPassage size="lg">
          Consectetur adipiscing elit. Ac id velit ut egestas arcu. At maecenas
          urna, risus donec praesent eu consectetur. Nunc non eu mattis sem
          turpis id dictum. Volutpat ornare turpis ultrices augue bibendum
          pellentesque. Habitasse.
        </TextPassage>
        <Button
          className={utilityStyles['u-margin-bottom-lg']}
          text="See More"
          variant="link"
        />
        <Heading
          className={utilityStyles['u-margin-bottom-sm']}
          as="h3"
          size={4}
        >
          Essential Questions
        </Heading>
        <TextPassage className={utilityStyles['u-margin-bottom-lg']}>
          <ul>
            <li>How are structures in the body organized?</li>
            <li>
              How do these structures work together to support life? But really
              need to see what it looks like if we have an extra long question.
            </li>
            <li>How are structures in the body organized?</li>
          </ul>
        </TextPassage>
        <Heading
          className={utilityStyles['u-margin-bottom-sm']}
          as="h3"
          size={4}
        >
          Key Take Aways
        </Heading>
        <TextPassage className={utilityStyles['u-margin-bottom-lg']}>
          <ol>
            <li>
              Groups of specialized cells make up organs and body systems, which
              work together to support an organism’s survival.{' '}
            </li>
            <li>
              How are structures in the body organized? More text blah blah
              blah.
            </li>
            <li>How are structures in the body organized?</li>
          </ol>
        </TextPassage>
        <Hr className={utilityStyles['u-margin-bottom-none']} />
        <Section
          titleBefore={
            <img
              style={{ display: 'block', borderRadius: '50%' }}
              src="https://via.placeholder.com/32x32"
              alt="placeholder"
            />
          }
          title="Power Focus Areas"
        >
          <Card href="#">
            <CardBody>
              <Heading
                className={utilityStyles['u-margin-bottom-sm']}
                as="h3"
                size={4}
              >
                What Was Medieval Japan Like?
              </Heading>
              <TextPassage>
                In this Focus Area, you explore the main question: How does the
                structures of organisms enable life's functions?
              </TextPassage>
            </CardBody>
          </Card>
        </Section>
        <Section
          titleBefore={
            <img
              style={{ display: 'block', borderRadius: '50%' }}
              src="https://via.placeholder.com/32x32"
              alt="placeholder"
            />
          }
          title="Additional Focus Areas"
        >
          <Card className={utilityStyles['u-margin-bottom-md']} href="#">
            <CardBody>
              <Heading
                className={utilityStyles['u-margin-bottom-sm']}
                as="h3"
                size={4}
              >
                What Was Medieval Japan Like?
              </Heading>
              <TextPassage>
                In this Focus Area, you explore the main question: How does the
                structures of organisms enable life's functions?
              </TextPassage>
            </CardBody>
          </Card>
          <Card href="#">
            <CardBody>
              <Heading
                className={utilityStyles['u-margin-bottom-sm']}
                as="h3"
                size={4}
              >
                What Was Medieval Japan Like?
              </Heading>
              <TextPassage>
                In this Focus Area, you explore the main question: How does the
                structures of organisms enable life's functions?
              </TextPassage>
            </CardBody>
          </Card>
        </Section>
        <Section
          titleBefore={
            <img
              style={{ display: 'block', borderRadius: '50%' }}
              src="https://via.placeholder.com/32x32"
              alt="placeholder"
            />
          }
          title="Cognitive Skills"
        >
          <TextPassage>
            <a href="#">Selecting Relevant Sources</a>,{' '}
            <a href="#">Identifying Patterns and Relationships</a>,{' '}
            <a href="#">Argumentative Claim</a>,{' '}
            <a href="#">Selection of Evidence</a>,{' '}
            <a href="#">Explanation of Evidence</a>,{' '}
            <a href="#">Multimedia in Communication</a>,{' '}
            <a href="#">Integration of Evidence</a>
          </TextPassage>
        </Section>
      </ListDetailPanel>

      <ListDetailPanel title="Expectations of Samuri in Feudal Japan and Wars of 5th Century">
        <TextPassage>
          <h3>ListDetailPanel 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </p>
        </TextPassage>
      </ListDetailPanel>

      <ListDetailPanel title="Expectations of Samuri in Feudal Japan">
        <TextPassage>
          <h3>ListDetailPanel 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </p>
        </TextPassage>
      </ListDetailPanel>
      <ListDetailPanel title="Expectations of Samuri in Feudal Japan">
        <TextPassage>
          <h3>ListDetailPanel 4</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </p>
        </TextPassage>
      </ListDetailPanel>
      <ListDetailPanel title="Expectations of Samuri in Feudal Japan">
        <TextPassage>
          <h3>ListDetailPanel 5</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </p>
        </TextPassage>
      </ListDetailPanel>
    </ListDetail>
  </PageShell>
);

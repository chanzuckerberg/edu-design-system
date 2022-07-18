import React from 'react';

import {
  PageHeader,
  Breadcrumbs,
  BreadcrumbsItem,
  Tabs,
  Tab,
  Panel,
  TimelineNav,
  TimelineNavPanel,
  Heading,
  Text,
  TableHeaderCell,
  TableRow,
  TableHeader,
  Table,
  TableBody,
  TableCell,
} from '../../../src';

import { PageShell } from '../../recipes/PageShell/PageShell';
import '../../../src/components/Utilities/Spacing.css';

export const FeedbackOverview: React.FC = () => (
  <PageShell>
    <Breadcrumbs className="u-margin-bottom-md">
      <BreadcrumbsItem href="#" text="My Courses" />
      <BreadcrumbsItem href="#" text="Modern World 2" />
    </Breadcrumbs>
    <PageHeader title="Cultural Narratives" />
    <Panel>
      <Tabs activeIndex={3}>
        <Tab title="Overview">
          <div className="fpo">Overview</div>
        </Tab>
        <Tab title="Plans">
          <div className="fpo">Learners</div>
        </Tab>
        <Tab title="Learners">
          <div className="fpo">Plans</div>
        </Tab>
        <Tab title="Feedback">
          <TimelineNav variant="ordered">
            <TimelineNavPanel title="Feedback Overview">
              <Heading as="h2" size="headline-sm">
                Checkpoint Progress
              </Heading>
              <div className="fpo">Progress bar</div>
              <div className="fpo">Progress bar</div>
              <div className="fpo u-margin-bottom-xl">Progress bar</div>
              <div className="fpo u-margin-bottom-lg">Filters</div>
              <Table
                caption="Student comments"
                hideCaption={true}
                highlightFirstCell={true}
              >
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Students</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>
                      Cog skill tagged comment feedback
                    </TableHeaderCell>
                    <TableHeaderCell>Time submitted</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell data-heading="Name">Araya, Raquel</TableCell>
                    <TableCell data-heading="Status">
                      &quot;Stop and Revise&quot;
                    </TableCell>
                    <TableCell data-heading="Cog skill tagged comment feedback">
                      3
                    </TableCell>
                    <TableCell data-heading="Time submitted">
                      2 hours ago
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-heading="Name">Jesse Banet</TableCell>
                    <TableCell data-heading="Status">
                      &quot;Stop and Revise&quot;
                    </TableCell>
                    <TableCell data-heading="Cog skill tagged comment feedback">
                      1
                    </TableCell>
                    <TableCell data-heading="Time submitted">
                      3 days ago
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-heading="Name">Julie Davis</TableCell>
                    <TableCell data-heading="Status">Working</TableCell>
                    <TableCell data-heading="Cog skill tagged comment feedback">
                      0
                    </TableCell>
                    <TableCell>3 days ago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-heading="Name">Hussain, Adnan</TableCell>
                    <TableCell data-heading="Status">
                      &quot;Review Feedback&quot;
                    </TableCell>
                    <TableCell data-heading="Cog skill tagged comment feedback">
                      0
                    </TableCell>
                    <TableCell data-heading="Time submitted">
                      3 days ago
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-heading="Name">Ilango, Megha</TableCell>
                    <TableCell data-heading="Status">
                      &quot;Needs Feedback&quot;
                    </TableCell>
                    <TableCell data-heading="Cog skill tagged comment feedback">
                      3
                    </TableCell>
                    <TableCell data-heading="Time submitted">
                      3 days ago
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-heading="Name">Jaffer, Arman</TableCell>
                    <TableCell data-heading="Status">Needs Feedback</TableCell>
                    <TableCell data-heading="Cog skill tagged comment feedback">
                      1
                    </TableCell>
                    <TableCell data-heading="Time submitted">
                      3 days ago
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-heading="Name">Kang, Michelle</TableCell>
                    <TableCell data-heading="Status">
                      &quot;Review Feedback&quot;
                    </TableCell>
                    <TableCell data-heading="Cog skill tagged comment feedback">
                      1
                    </TableCell>
                    <TableCell data-heading="Time submitted">
                      3 days ago
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-heading="Name">Lewine, Chris</TableCell>
                    <TableCell data-heading="Status">
                      &quot;Continue Working&quot;
                    </TableCell>
                    <TableCell data-heading="Cog skill tagged comment feedback">
                      2
                    </TableCell>
                    <TableCell data-heading="Time submitted">
                      3 days ago
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell data-heading="Name">Luo, Celia</TableCell>
                    <TableCell data-heading="Status">
                      &quot;Review Feedback&quot;
                    </TableCell>
                    <TableCell data-heading="Cog skill tagged comment feedback">
                      1
                    </TableCell>
                    <TableCell data-heading="Time submitted">
                      3 days ago
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TimelineNavPanel>

            <TimelineNavPanel
              title="Identifying Theme and Selecting Evidence"
              variant="number"
            >
              <Text as="div">
                <h3>TimelineNavPanel 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </Text>
            </TimelineNavPanel>

            <TimelineNavPanel
              title="Identifying Central Ideas"
              variant="number"
            >
              <Text as="div">
                <h3>TimelineNavPanel 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </Text>
            </TimelineNavPanel>
            <TimelineNavPanel title="Literature Circle" variant="number">
              <Text as="div">
                <h3>TimelineNavPanel 4</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </Text>
            </TimelineNavPanel>
            <TimelineNavPanel title="Written Portfolio" variant="incomplete">
              <Text as="div">
                <h3>TimelineNavPanel 5</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </Text>
            </TimelineNavPanel>
          </TimelineNav>
        </Tab>
      </Tabs>
    </Panel>
  </PageShell>
);

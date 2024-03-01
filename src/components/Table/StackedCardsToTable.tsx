import debounce from 'lodash/debounce';
import React, { useEffect, useState } from 'react';
import { Card, Table, Text } from '../../../src';

import breakpoint from '../../../src/design-tokens/tier-1-definitions/breakpoints';

/**
 * Demonstrates usage of stacked `<Card>` components for smaller breakpoints and `<Table>` component for larger breakpoints.
 */
export const StackedCardsToTable = () => {
  const [isTable, setIsTable] = useState(false);
  /**
   * Display data as cards if mobile, table if not.
   */
  const tableBreakpoint = parseInt(breakpoint['eds-bp-md'], 10) * 16;
  const updateScreenSize = debounce(
    () => {
      if (window.innerWidth >= tableBreakpoint && !isTable) {
        setIsTable(true);
      }
      if (window.innerWidth < tableBreakpoint && isTable) {
        setIsTable(false);
      }
    },
    200,
    { leading: true },
  );
  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [updateScreenSize]);

  const checkpointProgresses = [
    {
      student: 'Araya, Raquel',
      status: 'Stop and Revise',
      cogSkill: 3,
      timeSubmitted: '2 hours ago',
    },
    {
      student: 'Jesse Banet',
      status: 'Stop and Revise',
      cogSkill: 1,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Julie Davis',
      status: 'Working',
      cogSkill: 0,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Hussain, Adnan',
      status: 'Review Feedback',
      cogSkill: 0,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Ilango, Megha',
      status: 'Needs Feedback',
      cogSkill: 3,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Jaffer, Arman',
      status: 'Needs Feedback',
      cogSkill: 1,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Kang, Michelle',
      status: 'Review Feedback',
      cogSkill: 1,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Lewine, Chris',
      status: 'Continue Working',
      cogSkill: 2,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Luo, Celia',
      status: 'Review Feedback',
      cogSkill: 1,
      timeSubmitted: '3 days ago',
    },
  ];

  return (
    <div>
      {isTable && (
        <Table>
          <Table.Header>
            <Table.Row variant="header">
              <Table.HeaderCell>Students</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Cog skill</Table.HeaderCell>
              <Table.HeaderCell>Time submitted</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {checkpointProgresses.map((progress) => (
              <Table.Row key={`progress-${progress.student}`}>
                <Table.Cell>{progress.student}</Table.Cell>
                <Table.Cell>{progress.status}</Table.Cell>
                <Table.Cell>{progress.cogSkill}</Table.Cell>
                <Table.Cell>{progress.timeSubmitted}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
      {!isTable &&
        checkpointProgresses.map((progress) => (
          <Card className="mb-4 py-8" key={`progress-${progress.student}`}>
            <Card.Header>
              <Text as="p" preset="body-lg">
                {progress.student}
              </Text>
            </Card.Header>
            <Card.Body>
              <div className="flex justify-between">
                <Text as="p" preset="body-sm">
                  Status
                </Text>
                <Text as="p" preset="body-sm">
                  {progress.status}
                </Text>
              </div>
              <div className="flex justify-between">
                <Text as="p" preset="body-sm">
                  Cog skill
                </Text>
                <Text as="p" preset="body-sm">
                  {progress.cogSkill}
                </Text>
              </div>
              <div className="flex justify-between">
                <Text as="p" preset="body-sm">
                  Time submitted
                </Text>
                <Text as="p" preset="body-sm">
                  {progress.timeSubmitted}
                </Text>
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

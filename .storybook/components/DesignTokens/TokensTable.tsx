import React from 'react';
import { Table, Text } from '../../../src';
import tokens from '../../data/token-map.json';

export const TokensTable = () => {
  const tokensList = Object.keys(tokens);
  const map: { value?: string; tokens?: string[] } = {};
  tokensList.forEach((token) => {
    const mappedToken = getDeepValue(token);
    if (!map[mappedToken.token]) {
      map[mappedToken.token] = {
        value: mappedToken.value,
        tokens: [],
      };
    }
    if (mappedToken.depth) {
      map[mappedToken.token].tokens.push(token);
    }
  });
  return (
    <Table>
      <Table.Header>
        <Table.Row variant="header">
          <Table.HeaderCell scope="col">Token</Table.HeaderCell>
          <Table.HeaderCell scope="col">Value</Table.HeaderCell>
          <Table.HeaderCell scope="col">Mapped Tokens</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.keys(map).map((key) => (
          <Table.Row key={key}>
            <Table.Cell scope="row">
              <Text>{key}</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>{map[key].value}</Text>
            </Table.Cell>
            <Table.Cell>
              {map[key].tokens.map((token: string) => (
                <Text key={token}>{token}</Text>
              ))}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

// Recursing here in case we decide to support multiple nesting layers of multi tier tokens.
const getDeepValue = (
  key: string,
  depth = 0,
): {
  token: string;
  value: string;
  depth: number;
} => {
  if (tokens[tokens[key]]) {
    depth++;
    return getDeepValue(tokens[key], depth);
  }
  return {
    token: key,
    value: tokens[key],
    depth,
  };
};

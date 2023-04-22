import React, { useState } from 'react';
import { InputField, Table, Text } from '../../../src';
import tokens from '../../data/token-map.json';

export const TokensTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const tokensList = Object.keys(tokens);
  // get map of tokens with primary values its mapped tokens
  const map = {};
  tokensList.forEach((token) => {
    const mappedToken = getDeepValue(token);
    if (!map[mappedToken.token]) {
      map[mappedToken.token] = {
        token: mappedToken.token,
        value: mappedToken.value,
        mappedTokens: [],
      };
    }
    if (mappedToken.depth) {
      map[mappedToken.token].mappedTokens.push(token);
    }
  });
  // filter token map based on search term into a list
  const filteredTokensList = (
    Object.values(map) as {
      token: string;
      value: string;
      mappedTokens: string[];
    }[]
  ).filter(
    (item) =>
      // filter based on if token name includes search term or if one of the mapped token names includes search term
      item.token.includes(searchTerm) ||
      item.mappedTokens.join('|').includes(searchTerm),
  );
  return (
    <div>
      <InputField
        className="mb-4 w-1/2"
        fieldNote="Clear to see all"
        label="Search for Tokens"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <Table>
        <Table.Header>
          <Table.Row variant="header">
            <Table.HeaderCell scope="col">Token</Table.HeaderCell>
            <Table.HeaderCell scope="col">Value</Table.HeaderCell>
            <Table.HeaderCell scope="col">Mapped Tokens</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredTokensList.map((item) => (
            <Table.Row key={item.token}>
              <Table.Cell>
                <Text>{item.token}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text>{item.value}</Text>
              </Table.Cell>
              <Table.Cell>
                {item.mappedTokens.map((token: string) => (
                  <Text key={token}>{token}</Text>
                ))}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
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

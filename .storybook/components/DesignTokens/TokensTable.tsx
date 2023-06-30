import React, { useState } from 'react';
import { InputField, Table } from '../../../src';
import tokens from '../../data/token-map.json';

export const TokensTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const tokensList = Object.keys(tokens) as Array<keyof typeof tokens>;
  // get map of tokens with primary values its mapped tokens
  const map: {
    [key: string]: {
      token: string;
      value: string;
      mappedTokens: (keyof typeof tokens)[];
    };
  } = {};
  tokensList.forEach((token) => {
    if (token.startsWith('legacy')) {
      return;
    }
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
        type="search"
        value={searchTerm}
      />
      <Table>
        <Table.Header>
          <Table.Row variant="header">
            <Table.HeaderCell className="w-1/4" scope="col">
              Token
            </Table.HeaderCell>
            <Table.HeaderCell className="w-1/4" scope="col">
              Value
            </Table.HeaderCell>
            <Table.HeaderCell className="w-1/4" scope="col">
              Mapped Tier 2 Token
            </Table.HeaderCell>
            <Table.HeaderCell className="w-1/4" scope="col">
              Mapped Tier 3 Token
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredTokensList.map((item) => (
            <Table.Row key={item.token}>
              <Table.Cell>
                <code>{item.token}</code>
              </Table.Cell>
              <Table.Cell>
                {item.token.includes('-color-') ? (
                  <div className="flex items-center gap-1">
                    <input
                      id={item.token}
                      name={item.token}
                      type="color"
                      value={item.value}
                    />
                    <label htmlFor={item.token}>
                      <code>{item.value}</code>
                    </label>
                  </div>
                ) : (
                  <code>{item.value}</code>
                )}
              </Table.Cell>
              <Table.Cell>
                <ul>
                  {item.mappedTokens
                    .filter((token) => {
                      // String match file path to determine type of token
                      return tokens[
                        token as keyof typeof tokens
                      ].filePath.includes('tier-2');
                    })
                    .map((token: string) => (
                      <li key={token}>{token}</li>
                    ))}
                </ul>
              </Table.Cell>
              <Table.Cell>
                <ul>
                  {item.mappedTokens
                    .filter((token) => {
                      // String match file path to determine type of token
                      return tokens[
                        token as keyof typeof tokens
                      ].filePath.includes('tier-3');
                    })
                    .map((token: string) => (
                      <li key={token}>{token}</li>
                    ))}
                </ul>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

// Recursing here to grab values of nested tokens.
const getDeepValue = (
  key: keyof typeof tokens,
  depth = 0,
): {
  token: string;
  value: string;
  depth: number;
} => {
  if (tokens[key].value in tokens) {
    depth++;
    return getDeepValue(tokens[key].value as keyof typeof tokens, depth);
  }
  return {
    token: key,
    value: tokens[key].value,
    depth,
  };
};

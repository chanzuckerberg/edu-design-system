import * as React from "react";

import { styled } from "twin.macro";

type Token = {
  name: string;
  value: string;
};
type TokenTableProps = {
  tokens: Token[];
  renderExample: (name: string, value: string) => JSX.Element;
};

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 3em 0.5em;
  text-align: left;

  tbody th {
    font-weight: normal;
  }

  td {
    font-family: monospace;
  }
`;

const TokenTable = ({
  tokens,
  renderExample,
}: TokenTableProps): JSX.Element => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Value</th>
          <th scope="col">Example</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map(({ name, value }) => (
          <tr key={name}>
            <th scope="row">{name}</th>
            <td>{value}</td>
            <td>{renderExample(name, value)}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default TokenTable;

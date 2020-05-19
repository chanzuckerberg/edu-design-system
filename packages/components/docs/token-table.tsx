import "./token-table.scss";

import * as React from "react";

type Token = {
  name: string;
  value: string;
};
type TokenTableProps = {
  tokens: Token[];
  renderExample: (name: string, value: string) => JSX.Element;
};

const TokenTable = ({
  tokens,
  renderExample,
}: TokenTableProps): JSX.Element => {
  return (
    <table className="token-table">
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
    </table>
  );
};

export default TokenTable;

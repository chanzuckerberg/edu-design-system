import React from 'react';
import styles from './TokenTable.module.css';

type Token = {
  name: string;
  value: string;
};
type TokenTableProps = {
  tokens: Token[];
  renderExample: (name: string, value: string) => JSX.Element;
};

const TokenTable = ({ tokens, renderExample }: TokenTableProps) => {
  return (
    <table className={styles['token-table']}>
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

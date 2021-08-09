import classNames from "classnames/bind";
import React from "react";
import styles from "./token-table.module.css";

const cx = classNames.bind(styles);

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
    <table className={cx("token-table")}>
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

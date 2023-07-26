import React from 'react';
import styles from './ColorList.module.css';

type ListItem = {
  name: string;
  value: string;
  figmaToken?: string;
  tailwindClass?: string;
};

type Props = {
  listItems: ListItem[];
};

export const ColorList = (props: Props) => (
  <div className="flex flex-col gap-4">
    {props.listItems.map(function (listItem) {
      return (
        <div className="bg-neutral-default flex gap-4 p-4" key={listItem.name}>
          <div className="flex w-80 flex-col gap-1">
            <label
              className={styles['color-list__label']}
              htmlFor={listItem.name}
            >
              <code>{listItem.name}</code>
            </label>
            {listItem.figmaToken && <span>{listItem.figmaToken}</span>}
            {listItem.tailwindClass && <span>{listItem.tailwindClass}</span>}
            <code>{listItem.value}</code>
          </div>
          <input
            className={styles['color-list__input']}
            id={listItem.name}
            readOnly
            type="color"
            value={listItem.value}
          />
        </div>
      );
    })}
  </div>
);

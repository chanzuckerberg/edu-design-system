import React from 'react';

export interface Items {
  [key: string]: ItemType;
}

export interface ItemType {
  id?: string;
  title?: string;
  behavior?: 'hover';
  children?: React.ReactNode;
  handle?: React.ReactNode;
}

export interface Containers {
  [key: string]: ContainerType;
}

export interface ContainerType {
  id?: string;
  itemIds: string[];
  header?: React.ReactNode;
  emptyContent?: React.ReactNode;
  columnClassName?: string;
}

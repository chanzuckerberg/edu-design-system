export interface Items {
  [any: string]: ItemType;
}

export interface ItemType {
  id?: string;
  title?: string;
  children?: React.ReactNode;
}

export interface Containers {
  [any: string]: ContainerType;
}

export interface ContainerType {
  id?: string;
  itemIds: string[];
}

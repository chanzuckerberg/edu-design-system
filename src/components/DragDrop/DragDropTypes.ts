export interface Items {
  [key: string]: ItemType;
}

export interface ItemType {
  id?: string;
  title?: string;
  children?: React.ReactNode;
}

export interface Containers {
  [key: string]: ContainerType;
}

export interface ContainerType {
  id?: string;
  itemIds: string[];
}

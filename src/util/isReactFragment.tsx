import * as React from 'react';

export const isReactFragment = (node?: React.ReactNode) => {
  if (!node) return false;

  if ((node as React.ReactElement)?.type) {
    return (node as React.ReactElement)?.type === React.Fragment;
  }

  return node === React.Fragment;
};

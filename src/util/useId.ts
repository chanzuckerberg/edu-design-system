import React from 'react';

let id = 0;
function genId() {
  return ++id;
}

// Warning: probably not ssr friendly if using React <18
export const useId =
  // Prefer React's `useId` if it's available.
  React.useId ??
  function useId() {
    const id = 'eds-' + genId();
    return id;
  };

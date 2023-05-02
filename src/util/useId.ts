import React from 'react';

let id = 0;
function genId() {
  return ++id;
}

if (process.env.NODE_ENV !== 'production') {
  console.warn(
    'EDS useId is not ssr friendly if using React <18 as it uses the native React.useId hook if available https://react.dev/reference/react/useId.',
  );
}

export const useId =
  React.useId ??
  function useId() {
    const id = 'eds-' + genId();
    return id;
  };

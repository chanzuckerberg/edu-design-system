declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.md';

// TODO: improve typing for exported functions.
// Reference https://github.com/tshelburne/react-children-by-type
declare module 'react-children-by-type';

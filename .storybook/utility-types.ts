import { type ReactRenderer } from '@storybook/react-vite';
import type { Store_CSFExports } from 'storybook/internal/types' with {
  'resolution-mode': 'import',
};

export type StoryFile = Store_CSFExports<ReactRenderer>;

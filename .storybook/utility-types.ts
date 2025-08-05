import { type ReactRenderer } from '@storybook/react';
import type { Store_CSFExports } from '@storybook/types';

// TODO-AH: don't make storybook an external dependency!
export type StoryFile = Store_CSFExports<ReactRenderer>;

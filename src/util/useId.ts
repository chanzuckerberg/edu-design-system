import { useId as reachAutoId } from '@reach/auto-id';
import React from 'react';

// @ts-expect-error - 'useId' doesn't exist in React < 18.
export const useId = React.useId || reachAutoId;

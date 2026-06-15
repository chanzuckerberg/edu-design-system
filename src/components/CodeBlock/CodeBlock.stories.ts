import type { StoryObj, Meta } from '@storybook/react-webpack5';
import type React from 'react';

import { CodeBlock } from './CodeBlock';

export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  tags: ['beta', 'version:1.0'],
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof CodeBlock>;

export const Default: StoryObj<Args> = {
  args: {
    children: `~~~
This is the code block without any syntax highlighting applied
~~~`,
  },
};

/**
 * Many languages are supported, including TypeScript
 */
export const TypeScript: StoryObj<Args> = {
  args: {
    children: `~~~ts
/**
 * Sorts an array of numbers using the Bubble Sort algorithm.
 * @param arr - The array of numbers to be sorted.
 * @returns A new sorted array of numbers.
 */
export function bubbleSort(arr: number[]): number[] {
    // Create a shallow copy to keep the function pure and avoid mutating the input
    const sortedArray = [...arr];
    const n = sortedArray.length;
    let swapped: boolean;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop shrinks because the largest elements "bubble" to the end
        for (let j = 0; j < n - 1 - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                // Swap elements using destructuring assignment
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
                swapped = true;
            }
        }

        // Optimization: If no elements were swapped, the array is already sorted
        if (!swapped) {
            break;
        }
    }

    return sortedArray;
}
~~~`,
  },
};

export const TypeScriptWithCopy: StoryObj<Args> = {
  args: {
    ...TypeScript.args,
    copyStyle: 'icon',
  },
};

/**
 * Python is also supported.
 */
export const Python: StoryObj<Args> = {
  args: {
    children: `~~~python
"""
Sorts an array of numbers using the Bubble Sort Algorithm.
* @param arr - the array of numbers to be sorted.
* @returns A new sorted array of numbers
"""
def bubble_sort(arr):
  n = len(arr)
  for i in range(n - 1):
      for j in range(n - i - 1):
          if arr[j] > arr[j + 1]:
              arr[j], arr[j + 1] = arr[j + 1], arr[j]
return arr 
~~~`,
  },
};

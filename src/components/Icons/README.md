# Icons

## Adding new icons

Note: We may have another icon that fits your need that is already supported. Please check with us first to verify we want to add the icon to our set.

To add a new Material UI icon, make a new file in the icons folder (like [ArrowDownwardRounded.tsx](https://github.com/chanzuckerberg/edu-design-system/blob/main/src/components/Icons/ArrowDownwardRounded.tsx)) and paste in the path for your icon. You can find the paths of all Material UI icons here: https://github.com/mui-org/material-ui/tree/53a1655143aa4ec36c29a6063ccdf89c48a74bfd/packages/material-ui-icons/src (be sure to get the rounded version).

If you're adding an icon that does not come from Material UI, please place it in the [custom folder](https://github.com/chanzuckerberg/edu-design-system/tree/main/src/components/Icons/custom).

Then add the following line of code to the [Icons index file](https://github.com/chanzuckerberg/edu-design-system/blob/main/src/components/Icons/index.ts) for documentation in Storybook in sorted order:

```tsx
export { default as <IconName>Icon } from "./<IconName>.jsx";
```

## Using one-off icons

You can add one-off icons directly into your components by importing the generic `SvgIcon` and passing the paths/circles/etc. into the `SvgIcon`.

```tsx
import SvgIcon from '@chanzuckerberg/eds/lib/SvgIcon';
...
<SvgIcon
  purpose="informative"
  title="a meaningful title, otherwise you can use purpose='decorative'"
>
  <circle cx="15.5" cy="9.5" r="1.5" />
  <circle cx="8.5" cy="9.5" r="1.5" />
  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" />
</SvgIcon>
```

## Attribution

These are primarily sourced from [Material UI's React Icon components](https://github.com/mui-org/material-ui/tree/53a1655143aa4ec36c29a6063ccdf89c48a74bfd/packages/material-ui-icons/src). We are using the code here through permission of the MIT License, preserved in full below.

---

The MIT License (MIT)

Copyright (c) 2014 Call-Em-All

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

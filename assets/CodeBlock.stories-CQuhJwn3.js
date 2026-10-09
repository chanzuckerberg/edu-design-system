import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./CodeBlock-DK5mXEn6.js";import{n as a,t as o}from"./IconProvider-CLE0eA_m.js";import{n as s,t as c}from"./semanticIconOverrides-8zHpyBoo.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{t(),r(),s(),a(),l=n(),{userEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/CodeBlock`,component:i,tags:[`version:1.1.0`],parameters:{docs:{subtitle:`Component used to render a block of code for use alongside other components. Allows for copying code.`},a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},f={args:{children:`This is the code block without any syntax highlighting applied`}},p={args:{language:`ts`,children:`/**
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
`}},p.storyName=`TypeScript`,m={args:{...p.args,copyStyle:`icon`},play:async()=>{await u.tab()}},m.storyName=`TypeScript With Copy Icon`,h={args:{...p.args,copyStyle:`text`},play:async()=>{await u.tab()}},h.storyName=`TypeScript With Copy Text`,g={args:{children:`$ curl -X GET 'http://api.example.org/v1/testapikey' -H 'apikey: my_key'`,language:`bash`,className:`w-[350px]`,copyStyle:`icon`},tags:[`code-only`],play:async()=>{await u.tab()}},_={args:{...f.args,copyStyle:`icon`},play:async()=>{await u.tab()}},v={args:{language:`python`,children:`"""
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
`}},y={args:{...m.args},decorators:[e=>(0,l.jsx)(o,{icons:c,children:e()})]},b=[`Default`,`TypeScript`,`TypeScriptWithCopyIcon`,`TypeScriptWithCopyText`,`CurlExample`,`SingleLineWithCopyIcon`,`Python`,`WithProvidedIcons`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is the code block without any syntax highlighting applied'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'ts',
    children: \`/**
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
\`
  }
}`,...p.parameters?.docs?.source},description:{story:`Many languages are supported, including TypeScript`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...TypeScript.args,
    copyStyle: 'icon'
  },
  play: async () => {
    await userEvent.tab();
  }
}`,...m.parameters?.docs?.source},description:{story:`You can enable a copy button to show as an icon for the code block. It will copy the contents of the code block to the clipboard.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...TypeScript.args,
    copyStyle: 'text'
  },
  play: async () => {
    await userEvent.tab();
  }
}`,...h.parameters?.docs?.source},description:{story:`The copy button can also use standardized text instead of just an icon. In all cases, an accessible text marks the button to screen readers.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`$ curl -X GET 'http://api.example.org/v1/testapikey' -H 'apikey: my_key'\`,
    language: 'bash',
    className: 'w-[350px]',
    copyStyle: 'icon'
  },
  tags: ['code-only'],
  play: async () => {
    await userEvent.tab();
  }
}`,...g.parameters?.docs?.source},description:{story:`When using smaller code examples, you may resize the horizontal space of the container.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    copyStyle: 'icon'
  },
  play: async () => {
    await userEvent.tab();
  }
}`,..._.parameters?.docs?.source},description:{story:`The copy button fits within a single-line code block.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'python',
    children: \`"""
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
\`
  }
}`,...v.parameters?.docs?.source},description:{story:`Python is also supported.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...TypeScriptWithCopyIcon.args
  },
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...y.parameters?.docs?.source},description:{story:`The copy affordance comes from \`IconProvider\`, so a block's copy button carries the same
mark as every other copy button in the app.

The checkmark shown for three seconds after a copy is not part of that. It is a transient
confirmation rather than a role, so it stays a checkmark whatever the provider says.`,...y.parameters?.docs?.description}}}})))()}x();export{g as CurlExample,f as Default,v as Python,_ as SingleLineWithCopyIcon,p as TypeScript,m as TypeScriptWithCopyIcon,h as TypeScriptWithCopyText,y as WithProvidedIcons,b as __namedExportsOrder,d as default};
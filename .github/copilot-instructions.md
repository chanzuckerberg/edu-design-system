## Reusing Existing utility types

- When performing a code review, make sure that any types used in new or existing components makes use of those in src/util/variant-types.ts or src/util/utility-types.ts when possible. 
- When performing a code review, if you notice that a type on a property partially overlaps with one from src/util/variant-types.ts, suggest adding the missing value to the shared type constant, or using TypeScript's Pick<> utility type.

## Consistent, rtl-friendly prop and test naming

- When performing a code review on new components (e.g., a new directory added to src/), make sure we avoid words like "left" and "right" in prop names, prop values, and storybook tests. We prefer to use or "start" and "end" respectively. This is to match naming described on this page: https://www.w3.org/International/questions/qa-html-dir.en.html

## Package contents and structure

- When performing a code review on new components (e.g., a new directory added to src/), make sure that there is an export of that component in src/index.ts. Component exports should grouped and alphabetized together, and TypeScript `type` exports should be grouped and alphabetized together.
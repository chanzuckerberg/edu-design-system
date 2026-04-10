## Reusing Existing utility types

- When performing a code review, make sure that any types used in new or existing components makes use of those in src/util/variant-types.ts or src/util/utility-types.ts when possible. 
- When performing a code review, if you notice that a type on a property partially overlaps with one from src/util/variant-types.ts, suggest adding the missing value to the shared type constant, or using TypeScript's Pick<> utility type.

## Consistent, rtl-friendly prop and test naming

- When performing a code review on new components (e.g., a new directory added to src/), make sure we avoid words like "left" and "right" in prop names, prop values, and storybook tests. We prefer to use or "start" and "end" respectively. This is to match naming described on this page: https://www.w3.org/International/questions/qa-html-dir.en.html

## Package contents and structure

- When performing a code review on new components (e.g., a new directory added to src/), make sure that there is an export of that component in src/index.ts. Component exports should grouped and alphabetized together, and TypeScript `type` exports should be grouped and alphabetized together.

## Component Version Consistency

- When there are any changes to component code (src/**/*.tsx), make sure that the version string specified in the "tags" block of the associated story is also updated, following semver rules. For instance, if the commit message is "fix(Accordion): some change", the in the accordion's storybook file (for example Accordion.stories.tsx) should increment the patch version.

## Component API guidance

### Providing extended types for any CSS Custom Properties

- When a new or existing CSS custom property (CSS Variable) is added  to a component's CSS module code (src/**/*.module.css), make sure that this is also defined as part of that component's root node API. This should include the following: Extending the React.CSSProperties interface to include a list of any properties defined for this component, adding `style` to the props type of the component using this new interface, and at least one story demonstrating the use of each defined CSS custom property
- The documentation for the `style` prop should include a list of the CSS custom properties defined in the CSS module for the component.

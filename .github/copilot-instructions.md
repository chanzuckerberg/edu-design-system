## Reusing Existing utility types

- When performing a code review, make sure that any types used in new or existing components makes use of those in src/util/variant-types.ts or src/util/utility-types.ts when possible.
- When performing a code review, if you notice that a type on a property partially overlaps with one from src/util/variant-types.ts, suggest adding the missing value to the shared type constant, or using TypeScript's Pick<> utility type.

## Consistent, rtl-friendly prop and test naming

- When performing a code review on new components (e.g., a new directory added to src/), make sure we avoid words like "left" and "right" in prop names, prop values, and storybook tests. We prefer to use or "start" and "end" respectively. This is to match naming described on this page: https://www.w3.org/International/questions/qa-html-dir.en.html

## Package contents and structure

- When performing a code review on new components (e.g., a new directory added to src/), make sure that there is an export of that component in src/index.ts. Component exports should grouped and alphabetized together, and TypeScript `type` exports should be grouped and alphabetized together.

## Component Version Consistency

Each component carries its own version in the "tags" block of its story (for example `tags: ['autodocs', 'version:3.1.0']` in `Accordion.stories.tsx`). It tracks that component's public API, not the package version.

### Deciding whether a change needs a bump

Judge the bump from what a consumer has to do, not from the fact that a file changed:

- **Major** — a consumer's existing code breaks: a prop removed or renamed, an accepted value changed, required props added.
- **Minor** — a new capability a consumer can opt into: a new prop, a widened prop type, a new subcomponent.
- **Patch** — a defect fixed with no API change.
- **No bump** — the change is not visible to a consumer's code: internal refactors, CSS class renames, comment and documentation edits, story or test changes, or resolving a value internally that the component already rendered the same way.

The last case is the one most often gotten wrong. "Any change to `src/**/*.tsx`" is not the rule. A component that renders identical output through different internals has the same API it had before, and bumping it tells consumers something changed when nothing did.

### Deciding whether a bump has already happened on this branch

One release gets one bump per component. Before adding one, compare the story's current version against the **same file on the branch this work merges into**, not against the working tree:

```bash
# what the base branch has
git show origin/<base-branch>:src/components/<Name>/<Name>.stories.tsx | grep -oE "version:[0-9.]+"
# what this branch has
grep -oE "version:[0-9.]+" src/components/<Name>/<Name>.stories.tsx
```

Then:

- **Base and branch match** — no bump has been taken yet for this release. Apply the level the change calls for.
- **The branch already sits a level at or above what the change needs** — do not add another. A second breaking change on a branch that has already gone major rides along with the first; two majors in one release is wrong.
- **The branch sits below what the change needs** — raise it to the higher level rather than incrementing again. A branch carrying a patch that then takes a breaking change goes to the next major, not to another patch.

This matters most on long-lived release branches (for example a `v19` branch collecting breaking changes over many PRs), where a component may already have been majored by an earlier PR against the same base.

## Component API guidance

### Providing extended types for any CSS Custom Properties

- When a new or existing CSS custom property (CSS Variable) is added to a component's CSS module code (src/**/*.module.css), make sure that this is also defined as part of that component's root node API. This should include the following: Extending the React.CSSProperties interface to include a list of any properties defined for this component, adding `style` to the props type of the component using this new interface, and at least one story demonstrating the use of each defined CSS custom property
- The documentation for the `style` prop should include a list of the CSS custom properties defined in the CSS module for the component.

#### Properties held back from the documented API

A component may keep a custom property working while deliberately not advertising it, when documenting it would invite a change that breaks something the component is supposed to guarantee. Recoloring a status icon away from its status is the standing example: `ToastNotification` still honors `--toast__bg`, `--toast__fg`, and `--toast__icon`, but none are listed on its `style` prop and none has a story, because a favorable toast recolored critical misreports itself.

This is a narrow exception, not a way out of the rules above. To take it, all of the following have to hold, and a reviewer should ask for whichever is missing rather than asking for the property to be documented:

- The property is still declared on the component's `CSSProperties` interface, so existing usage keeps type-checking.
- That interface carries a doc comment saying which properties are held back and what goes wrong if they are used, so the omission reads as a decision rather than an oversight.
- Tests cover the property still taking effect, since there is no story to catch a regression.

Two things follow for review. A component in this state will fail a literal reading of the two rules above — no story, no entry in the `style` prop docs — and that is the intended state, so do not ask for either. And treat a request to document such a property as a product decision for the component's owner, not a documentation gap to close in review.

## Naming conventions

### Matching BEM-style class name to prop names

When checking naming of CSS classes note the two existing patterns:

- Classes have names that will match both the prop, and the value (e.g., if there is a prop "variant" with value "strong" expect a class selector in the CSS with suffix "--variant-strong").
- If the prop name or value has camelCase format, that should be preserved in the class name itself (e.g., if there is a prop named "subTitle", expect a class selector in the CSS for that component with "subTitle" in its text)

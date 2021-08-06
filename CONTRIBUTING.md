# Contribution Guidelines

Thank you for contributing to the Education Design System! Feel free to reach out in [#help-edu-design-system](https://chanzuckerbergteam.slack.com/archives/CTFV79JH4) or [office hours](https://www.google.com/url?q=https://docs.google.com/spreadsheets/d/1zZguiMQHQLANjfUF-LjmPkbZ29I7ZXfl8TRDAhqDL0o/edit&sa=D&source=calendar&ust=1617083817378000&usg=AOvVaw2MJp29FMPv2AD1WJFX5Q2x) if you have additional questions (_note: these resources can only be accessed by CZI employees_).

## Local Development

1. Clone the repo locally:

```
git clone git@github.com:chanzuckerberg/edu-design-system.git
```

2. Install dependencies

```
yarn install
```

3. Start a local Storybook instance, where you can browse existing components

```
yarn start
```

## Adding a new component

1. Run `npx plop` or `yarn create-component`
2. Enter your component name

This will create a new folder for your component within `packages/components/src/`, along with template files for the component, styles, stories, and tests.

3. Develop! Each component should:

   - Be written as a functional component
   - Use [TailwindCSS](https://tailwindcss.com/) and [CSS modules](https://czi.atlassian.net/wiki/spaces/ETE/pages/485916858/CSS+Modules) for styling
   - Meet accessibility guidelines and best practices ([#help-edu-accessibility](https://czi-edu.slack.com/archives/CP2UD0S5V) may be helpful)
   - Be responsive -- see our [recommendations for handling layout](https://zeroheight.com/0843bc428/p/17f0a9-layout/b/48308a).

4. When you're ready, submit a PR and add `@chanzuckerberg/edu-frontend-infra` as reviewers.

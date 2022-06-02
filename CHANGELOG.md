# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.22.0...v1.0.0) (2022-06-01)


### Features

* **cadstep1:** add cad step 1 ([#1073](https://github.com/chanzuckerberg/edu-design-system/issues/1073)) ([1a9406d](https://github.com/chanzuckerberg/edu-design-system/commit/1a9406d9e291f4952ee3dd7a28189cb5e6a14e4b))
* **cardwithnotification:** create card with notification recipe ([#1097](https://github.com/chanzuckerberg/edu-design-system/issues/1097)) ([f741ce9](https://github.com/chanzuckerberg/edu-design-system/commit/f741ce9022b5d3adac664f0fbea12b0cd50ae868))
* **tokens:** use brand colors ([391ce2d](https://github.com/chanzuckerberg/edu-design-system/commit/391ce2dad6756877cedd3bf033bb25d680579187))

## [0.22.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.21.1...v0.22.0) (2022-05-27)


### Features

* **heading:** use new heading tokens in old heading size props ([c776b38](https://github.com/chanzuckerberg/edu-design-system/commit/c776b3836f772b2286ea986e82110afbbcdfe291))
* use Graphik as primary font family ([e8b30d5](https://github.com/chanzuckerberg/edu-design-system/commit/e8b30d5ef72008144952dfa813ea6c5045ac1451))

### [0.21.1](https://github.com/chanzuckerberg/edu-design-system/compare/v0.21.0...v0.21.1) (2022-05-26)

### Features

- **inlinenotification:** add inline notification ([#1076](https://github.com/chanzuckerberg/edu-design-system/issues/1076)) ([eafb1ab](https://github.com/chanzuckerberg/edu-design-system/commit/eafb1ab0e57bf2b35714e76bb821c078f14b19c3))
- Expanded `Text` to support multiple paragraphs
- CAD Implementation updates: integrated DragDrop, OverflowList

## [0.21.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.20.0...v0.21.0) (2022-05-13)

### ⚠ BREAKING CHANGES

- **Tooltip:** ([#887](https://github.com/chanzuckerberg/edu-design-system/issues/887)) ([96799a0](https://github.com/chanzuckerberg/edu-design-system/commit/96799a0687a1dd8a9a04da96994f1ef8fb3a59ee))
  - renamed `content` prop to `text`
  - renamed `placement` prop to `align`
- **tokens:** renamed `eds-size-font-base` to `eds-font-size-base`

### Features

- **tokens:** Added new upcoming tokens for color and typography
- Updated token architecture to support theming
- Added components for CAD Implementation pilot: DataBar, HorizontalStepper, NumberIcon, DragDrop, OverflowList
- Added WIP components from Project Overview pilot: GlobalHeader, PageShell, NotificationList, ListDetail

### Bug Fixes

- useUIDSeed usage and guidelines ([50b1cda](https://github.com/chanzuckerberg/edu-design-system/commit/50b1cda0084e9b476b2ba5d632591daa197bed65))

## [0.20.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.19.0...v0.20.0) (2022-05-05)

### Features

- **tag:** rename yellow variant to yield ([#1036](https://github.com/chanzuckerberg/edu-design-system/issues/1036)) ([6eb8fe4](https://github.com/chanzuckerberg/edu-design-system/commit/6eb8fe4bc0f8935c60c87b28dcfde8b67a56604f))

## [0.19.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.18.1...v0.19.0) (2022-05-04)

### **Fieldset:** ([#1030](https://github.com/chanzuckerberg/edu-design-system/issues/1030))

- renamed `FormGroup` prop to `Fieldset`
- renamed `FormGroup.Title` prop to `Fieldset.Legend`
- renamed `FormGroup.Items` prop to `Fieldset.Items`
- removed `as` prop from `Fieldset`

### [0.18.1](https://github.com/chanzuckerberg/edu-design-system/compare/v0.18.0...v0.18.1) (2022-05-04)

## [0.18.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.17.0...v0.18.0) (2022-05-03)

### **Tag:** ([#1011](https://github.com/chanzuckerberg/edu-design-system/issues/1011))

- renamed `variant` prop to `hasOutline`
- renamed `color` prop to `variant`
- renamed `variant` "alert" option to "error"
- renamed `children` prop to `text`

## [0.17.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.16.0...v0.17.0) (2022-05-03)

### **Banner:** ([#1010](https://github.com/chanzuckerberg/edu-design-system/issues/1010))

- renamed `color` prop to `variant`
- renamed `variant` "alert" to "error"
- replaced `elevation` prop with `isFlat`
- split `textContent` prop into `title` and `description`
- removed `BannerTitle` and `BannerMessage` subcomponents
- added `titleAs` and `descriptionAs` props to specify the elements `title` and `description` should render as
- 1 rem bottom margin added to banner if `isFlat` is falesy to account for the drop shadow

## [0.16.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.15.0...v0.16.0) (2022-05-03)

### **Checkbox:** ([#1008](https://github.com/chanzuckerberg/edu-design-system/issues/1008))

- `CheckboxInput` and `CheckboxLabel` have been moved to separate component folders
- renamed `CheckboxLabel`'s `children` prop to `text`
- renamed `size` options from "small" and "medium" to "sm" and "md" (respectively)

## [0.15.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.14.0...v0.15.0) (2022-05-02)

### **Toast:** ([#1013](https://github.com/chanzuckerberg/edu-design-system/issues/1013))

- renamed `color` prop to `variant`
- renamed "alert" color/variant to "error"

### **Text:** ([#1025](https://github.com/chanzuckerberg/edu-design-system/issues/1025))

- make `size` "lg" normal weight

## [0.14.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.13.2...v0.14.0) (2022-04-29)

#### **Button/Link/ClickableStyle** ([#1000](https://github.com/chanzuckerberg/edu-design-system/issues/1000))

- renamed the following `variant` options:
  - "flat" => "primary"
  - "outline" => "secondary"
  - "plain" => "icon"
- changed the default variant in `Button` to "secondary" (previously was "flat"/"primary"; `Link`'s default variant is still "link")
- renamed `color` prop to `status`
- renamed "alert" color/status to "error"
- renamed `size` options:
  - "large" => "lg"
  - "medium" => "md"
  - "small" => "sm"

### [0.13.2](https://github.com/chanzuckerberg/edu-design-system/compare/v0.13.1...v0.13.2) (2022-04-29)

#### **Icon** ([#1024](https://github.com/chanzuckerberg/edu-design-system/issues/1024))

- added `viewBox` prop

### [0.13.1](https://github.com/chanzuckerberg/edu-design-system/compare/v0.13.0...v0.13.1) (2022-04-28)

## [0.13.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.12.0...v0.13.0) (2022-04-27)

### ⚠ BREAKING CHANGES

#### **Icon** ([#986](https://github.com/chanzuckerberg/edu-design-system/issues/986))

- renamed `block` prop to `fullWidth`
- use `import {Icon} from '@chanzuckerberg/eds'` instead of individual icon components
  - ex: `<Icon name="warning" />` instead of `<WarningRoundedIcon />`

### [0.12.1](https://github.com/chanzuckerberg/edu-design-system/compare/v0.12.0...v0.12.1) (2022-04-28)

- chore(text): reintroduce spacing variant in Text

## [0.12.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.10.0...v0.12.0) (2022-04-27)

### ⚠ BREAKING CHANGES

#### **Heading** ([#996](https://github.com/chanzuckerberg/edu-design-system/issues/996))

- renamed `color` prop to `variant`
- removed `weight` and `spacing` props (Headings should always be bold; style bottom margin through classnames instead)
- removed non-heading level `size` options
- deprecated `"info"` and `"yellow"` color variants (use "brand" or "neutral" instead)
- renamed `"alert"` color variant to `"error"`
- removed default color variant (previously set to `"base"`)

#### **Text** ([#996](https://github.com/chanzuckerberg/edu-design-system/issues/996))

- renamed `color` prop to `variant`
- removed `spacing` prop (style bottom margin through classnames instead)
- removed heading level `size` options; added `"lg"` size
- deprecated `"info"` and `"yellow"` color variants (use "brand" or "neutral" instead)
- renamed `"alert"` color variant to `"error"`
- removed default color variant (previously set to `"base"`)

## [0.11.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.10.0...v0.11.0) (2022-04-26)

## [0.10.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.9.2...v0.10.0) (2022-04-15)

### ⚠ BREAKING CHANGES

- removes color-font tokens

### Features

- add jsx-sort-props lint rule ([bff502f](https://github.com/chanzuckerberg/edu-design-system/commit/bff502f9a921841fe510d8691610ffb66fcb689f))

### build

- use standard-version, make one package, move folders ([#981](https://github.com/chanzuckerberg/edu-design-system/issues/981)) ([ccc0450](https://github.com/chanzuckerberg/edu-design-system/commit/ccc0450064a600f0a7586db20ef354c9fa442b2e)), closes [#979](https://github.com/chanzuckerberg/edu-design-system/issues/979)

## [0.10.0-alpha.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.9.0...v0.10.0-alpha.0) (2022-04-15)

### ⚠ BREAKING CHANGES

- removes color-font tokens

### Features

- add standard-version, remove lerna, update storybook ([ee6b2c8](https://github.com/chanzuckerberg/edu-design-system/commit/ee6b2c8c97ebb0a62ab8731adc9e21d714b64013))
- introduce badges addon for storybook ([#895](https://github.com/chanzuckerberg/edu-design-system/issues/895)) ([156fa72](https://github.com/chanzuckerberg/edu-design-system/commit/156fa729acdb6d141d783426ff3c1d1dc848d49e))
- lock headlessui to 1.4.3 ([3a27bf3](https://github.com/chanzuckerberg/edu-design-system/commit/3a27bf3a7e575a43a7413a8b9ddaa679ab4206f8))
- move components/Icons to src/icons ([b0314fa](https://github.com/chanzuckerberg/edu-design-system/commit/b0314fa074ba589cd4046c71149f50568b0791f7))

- publish to lib/tokens ([7aecb68](https://github.com/chanzuckerberg/edu-design-system/commit/7aecb689fd11aeba6fa5a90ebf02fa5a31478174))

## [0.9.2](https://github.com/chanzuckerberg/edu-design-system/compare/v0.9.1...v0.9.2) (2022-04-08)

### Features

- **close-button:** remove close button ([#931](https://github.com/chanzuckerberg/edu-design-system/issues/931)) ([c3c2151](https://github.com/chanzuckerberg/edu-design-system/commit/c3c215186e0c02d869573f99fb7f9f9a8bb177ad))

## [0.9.1](https://github.com/chanzuckerberg/edu-design-system/compare/v0.9.0...v0.9.1) (2022-03-30)

### Features

- **dropdown:** add compact button as option ([#905](https://github.com/chanzuckerberg/edu-design-system/issues/905)) ([34af1bc](https://github.com/chanzuckerberg/edu-design-system/commit/34af1bc77125cafb4c776d9e94179ea43c51d628))
- introduce badges addon for storybook ([#895](https://github.com/chanzuckerberg/edu-design-system/issues/895)) ([156fa72](https://github.com/chanzuckerberg/edu-design-system/commit/156fa729acdb6d141d783426ff3c1d1dc848d49e))

# [0.9.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.8.0...v0.9.0) (2022-03-08)

**Note:** Version bump only for package edu-design-system

## [0.8.1](https://github.com/chanzuckerberg/edu-design-system/compare/v0.8.0...v0.8.1) (2022-03-03)

### Chores

- disable dependabot version updates ([#873](https://github.com/chanzuckerberg/edu-design-system/issues/873)) ([90db10a](https://github.com/chanzuckerberg/edu-design-system/commit/90db10a6de924faec092efd84adcfe55f7f4d993))
- upgrade style-dictionary ([#882](https://github.com/chanzuckerberg/edu-design-system/issues/882)) ([dba4d21](https://github.com/chanzuckerberg/edu-design-system/commit/dba4d21f3fe00e5385227905a3bfbb23c4751f96))
- update deps and resolve ([#881](https://github.com/chanzuckerberg/edu-design-system/issues/881)) ([c48915f](https://github.com/chanzuckerberg/edu-design-system/commit/c48915f364fc375da8147ddbadf60839da6fec77))

### Docs

- add import example to docstring ([#880](https://github.com/chanzuckerberg/edu-design-system/issues/880)) ([78832db](https://github.com/chanzuckerberg/edu-design-system/commit/78832db2d16bf081fe104fb63d5054f1352038a1))

# [0.8.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.7.0...v0.8.0) (2022-02-28)

### Features

- add Dropdown component ([#835](https://github.com/chanzuckerberg/edu-design-system/issues/835)) ([acf54dc](https://github.com/chanzuckerberg/edu-design-system/commit/acf54dca68b784ca6718cc16927b7a97d55db6b8))
- remove unused legacy color tokens ([a953e25](https://github.com/chanzuckerberg/edu-design-system/commit/a953e256906dfee2d66cf46a9211a9149f80f29d))

# [0.7.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.6.0...v0.7.0) (2022-01-27)

### Features

- add ButtonGroup component ([#808](https://github.com/chanzuckerberg/edu-design-system/issues/808)) ([c413ac6](https://github.com/chanzuckerberg/edu-design-system/commit/c413ac674479919c2931e7dd03b5d5f08d18b43a))
- add DropdownButton ([#804](https://github.com/chanzuckerberg/edu-design-system/issues/804)) ([8b2d49f](https://github.com/chanzuckerberg/edu-design-system/commit/8b2d49f442e825e2e14ff8ad403f5a873edd5b8b))
- add FormGroup component ([#809](https://github.com/chanzuckerberg/edu-design-system/issues/809)) ([3d48a2e](https://github.com/chanzuckerberg/edu-design-system/commit/3d48a2e2ea6d08fa88297e09ebfe3d5ee10b48f6))

# [0.6.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.5.0...v0.6.0) (2022-01-26)

### Features

- migrate Tooltip component ([#801](https://github.com/chanzuckerberg/edu-design-system/issues/801)) ([9b68ee3](https://github.com/chanzuckerberg/edu-design-system/commit/9b68ee3d94e351b049baf5ce7b6776b8b018774d))

# [0.5.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.10...v0.5.0) (2022-01-19)

### Features

- add Checkbox component ([22ae1a7](https://github.com/chanzuckerberg/edu-design-system/commit/22ae1a74f796acd755b146d15d4c61f0dd3df32a))
- allow html input types, make svg inline-block ([1ff1988](https://github.com/chanzuckerberg/edu-design-system/commit/1ff19883f76d8883cf02c10bb09dda8d8b6e2876))
- **checkbox:** add data-bootstrap-override attributes ([8198352](https://github.com/chanzuckerberg/edu-design-system/commit/8198352ddfbf59529bd78357f83578d1766f293b))
- rename grading-yellow to yellow in components ([00d1892](https://github.com/chanzuckerberg/edu-design-system/commit/00d1892dcab3972de16b456dd55c16ea513adce2))
- **tokens:** rename grading-yellow to yellow ([e086161](https://github.com/chanzuckerberg/edu-design-system/commit/e0861612f0ebc218c25ebc65e964933e4fae1d6d))

## [0.4.10](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.9...v0.4.10) (2022-01-10)

**Note:** Version bump only for package edu-design-system

## [0.4.9](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.8...v0.4.9) (2021-12-09)

### Features

- **icon:** add InsertDriveFile ([b996a37](https://github.com/chanzuckerberg/edu-design-system/commit/b996a37400be86bf35c39bd11b2c230bd0e47acd))

## [0.4.8](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.7...v0.4.8) (2021-12-03)

### Features

- **colors:** update grading-yellow-500 token ([e16fb5a](https://github.com/chanzuckerberg/edu-design-system/commit/e16fb5affa65f01b5695fc72a44a01d65342e840))

## [0.4.7](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.6...v0.4.7) (2021-12-01)

### Features

- **icons:** add InfoRounded ([11c8100](https://github.com/chanzuckerberg/edu-design-system/commit/11c81005c194db91762a99954535dff2f0bbf7aa))

## [0.4.6](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.5...v0.4.6) (2021-11-18)

**Note:** Version bump only for package edu-design-system

## [0.4.5](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.4...v0.4.5) (2021-11-09)

**Note:** Version bump only for package edu-design-system

## [0.4.4](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.3...v0.4.4) (2021-11-05)

**Note:** Version bump only for package edu-design-system

## [0.4.3](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.2...v0.4.3) (2021-11-04)

**Note:** Version bump only for package edu-design-system

## [0.4.3-alpha.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.2...v0.4.3-alpha.0) (2021-11-01)

**Note:** Version bump only for package edu-design-system

## [0.4.2](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.1...v0.4.2) (2021-10-22)

### Bug Fixes

- **svgicon:** set inline-block ([fe9f5fc](https://github.com/chanzuckerberg/edu-design-system/commit/fe9f5fc46bdc2e7d94fec94b0ac9acafd3da2072))

### Features

- **tailwind:** enable Tailwind utility and component classes ([#675](https://github.com/chanzuckerberg/edu-design-system/issues/675)) ([ecedecf](https://github.com/chanzuckerberg/edu-design-system/commit/ecedecfd9798a4391a0d33aad1e4b038195724d6))

## [0.4.1](https://github.com/chanzuckerberg/edu-design-system/compare/v0.4.0...v0.4.1) (2021-10-14)

### Reverts

- Revert "chore: add unused import for testing lint warnings" ([5738a44](https://github.com/chanzuckerberg/edu-design-system/commit/5738a4413b498a95a77ef877966bef2bb479fd49))

# [0.4.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.3.0...v0.4.0) (2021-10-08)

### Features

- **clickable-style, button, link:** add extraSmall size ([8926882](https://github.com/chanzuckerberg/edu-design-system/commit/89268821c0b9e272bc78d17d90c344f1056c1f1d))
- **clickable-style:** remove large, bump remaining sizes up one level ([8664fbd](https://github.com/chanzuckerberg/edu-design-system/commit/8664fbd14f6ce72bc740e37c3498efafa2c350eb))

# [0.3.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.2.1...v0.3.0) (2021-09-22)

### Features

- **chromatic:** add accessibility testing step to chromatic job ([53f13eb](https://github.com/chanzuckerberg/edu-design-system/commit/53f13ebf86aa5d3db963ee139225d769eefe19ab))
- **chromatic:** add build script name and specify relative path for chromatic job ([ebedfce](https://github.com/chanzuckerberg/edu-design-system/commit/ebedfce0ce177a473ea18fa889c6cf6ebc04124b))
- **chromatic:** add missing runs-on ([df4cd04](https://github.com/chanzuckerberg/edu-design-system/commit/df4cd04f4ff765f501f33d5da4f3689c7d8fe7b6))
- **chromatic:** add working directory to chromatic action ([6f97ba2](https://github.com/chanzuckerberg/edu-design-system/commit/6f97ba2c407ed0ebaab4550d13070dd0de9582f0))
- **chromatic:** build storybook explicitly instead of relying on chromatic ([377d96b](https://github.com/chanzuckerberg/edu-design-system/commit/377d96b88baf9bd1bba5950a0cec5dd0a3339af2))
- **chromatic:** disable TurboSnap for Chromatic ([eb435e0](https://github.com/chanzuckerberg/edu-design-system/commit/eb435e0423d75ca75e4fd68e9c7252eb522d34d2))
- **chromatic:** downgrade from chromatic canary build ([75db293](https://github.com/chanzuckerberg/edu-design-system/commit/75db29391c2aff3c8eeb48f46804fe9e8e5a680c))
- **chromatic:** enable turbosnap ([42c64a0](https://github.com/chanzuckerberg/edu-design-system/commit/42c64a01438fd8590d73d729153dafde4ebe4d6e))
- **chromatic:** init chromatic ([4facc01](https://github.com/chanzuckerberg/edu-design-system/commit/4facc01f314600193ec61713f4e73e82daee797c))
- **chromatic:** place chromatic job in test.yml and temporarily comment out other jobs ([0267540](https://github.com/chanzuckerberg/edu-design-system/commit/026754011730093d13819dc887ad8717a6e2af4f))
- **chromatic:** separate chromatic run to another workflow ([4cc5289](https://github.com/chanzuckerberg/edu-design-system/commit/4cc5289b7981ec3f7bf3424304d35b00be260b62))
- **chromatic:** temp change default prop to test chromatic turbosnap ([ad99d48](https://github.com/chanzuckerberg/edu-design-system/commit/ad99d48e868621ed814775aa4cdeec75fd817a65))
- **chromatic:** temporarily add pwd to check working directory ([770c075](https://github.com/chanzuckerberg/edu-design-system/commit/770c0755dd600843c84680bc1e61419ceb46479c))
- **chromatic:** uncomment github action jobs except percy ([17455c8](https://github.com/chanzuckerberg/edu-design-system/commit/17455c8894422a371da04f75346727aac1be0a03))
- **chromatic:** uncomment percy job ([9ab82af](https://github.com/chanzuckerberg/edu-design-system/commit/9ab82afaf53f912602e8da2267577e3522c0e4e7))
- **clickable-style:** add plain variant ([772b13a](https://github.com/chanzuckerberg/edu-design-system/commit/772b13aa22ddd03a8916ba9c5473c2e6efed8b0f))
- **clickable-style:** set height for icons in buttons and links ([e680ca6](https://github.com/chanzuckerberg/edu-design-system/commit/e680ca691e1ce7288bee0c2a99adac090f9ceca6))

### Reverts

- **chromatic:** revert change to default prop to test chromatic turbosnap ([a628f45](https://github.com/chanzuckerberg/edu-design-system/commit/a628f45c31dbf8e99bb2d2d24b92b0d2b68e74bc))

## [0.2.1](https://github.com/chanzuckerberg/edu-design-system/compare/v0.2.0...v0.2.1) (2021-09-15)

**Note:** Version bump only for package edu-design-system

# [0.2.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.1.5...v0.2.0) (2021-09-10)

### Bug Fixes

- set line-height for NotificationIcon ([03ca81e](https://github.com/chanzuckerberg/edu-design-system/commit/03ca81e43077724a71b35eb2bf3f72f64a727203))

### Features

- **link + button:** remove 'as' prop ([d9c8db7](https://github.com/chanzuckerberg/edu-design-system/commit/d9c8db752f896c2f52ab06589f9c8762a1367adb))
- **link:** add Link component; change Button to always use button tag ([32b587a](https://github.com/chanzuckerberg/edu-design-system/commit/32b587a4b4bc03a239dbcb6b9d82ac7e06d7c99a))
- rename Clickable component to ClickableStyle ([fa0f29a](https://github.com/chanzuckerberg/edu-design-system/commit/fa0f29aa414858c6a5c7e30c5d2552f5248026bc))
- **banner:** update api to use textContent prop instead of children ([33f3249](https://github.com/chanzuckerberg/edu-design-system/commit/33f324985f01d43366997d604e9d3258f4439fd8))

## [0.1.5](https://github.com/chanzuckerberg/edu-design-system/compare/v0.1.4...v0.1.5) (2021-08-25)

### Bug Fixes

- turn off flow types for now ([6581118](https://github.com/chanzuckerberg/edu-design-system/commit/6581118e66181cc8a23d508503256ba68b00602d))

### Features

- **colors:** add level 800 success and warning colors, use in Clickable ([b314501](https://github.com/chanzuckerberg/edu-design-system/commit/b3145011769cd5c1a42edbbb2d13d0274521a676))

## [0.1.4](https://github.com/chanzuckerberg/edu-design-system/compare/v0.1.3...v0.1.4) (2021-08-19)

### Features

- update neutral button colors ([2ba82c4](https://github.com/chanzuckerberg/edu-design-system/commit/2ba82c4aa8a0514c8a213a8b936a52d3ffaf09fd))

## [0.1.3](https://github.com/chanzuckerberg/edu-design-system/compare/v0.1.2...v0.1.3) (2021-08-11)

### Features

- allow buttons to take a ref ([c606b89](https://github.com/chanzuckerberg/edu-design-system/commit/c606b89a71ca2ebdc5ed6dcba133e62be7285257))

### Reverts

- Revert "chore: use "workspace ranges" to specify dependencies between packages" ([464887f](https://github.com/chanzuckerberg/edu-design-system/commit/464887f035c66bf3a7580ec24b79f49417f7021b))

## [0.1.2](https://github.com/chanzuckerberg/edu-design-system/compare/v0.1.1...v0.1.2) (2021-08-06)

**Note:** Version bump only for package edu-design-system

## [0.1.1](https://github.com/chanzuckerberg/edu-design-system/compare/v0.1.0...v0.1.1) (2021-08-05)

### Features

- **tag:** add optional ClassName attribute ([cdfa32a](https://github.com/chanzuckerberg/edu-design-system/commit/cdfa32a52f1ec50d796a11bc71041d4cb131ae1e))
- export <SvgIcon> from @chanzuckerberg/eds-components ([fe3bd3c](https://github.com/chanzuckerberg/edu-design-system/commit/fe3bd3c59556e35f570dd6390b0fd28c5c7b2286))
- tell Webpack that eds-components has no side effects ([64cc782](https://github.com/chanzuckerberg/edu-design-system/commit/64cc782a20afefb6d326bb15d80072b8b64d23eb))
- **icons:** add custom Campaign icon ([46b8f32](https://github.com/chanzuckerberg/edu-design-system/commit/46b8f320b84c80528b7b24ecf68c03cd335e94ce))
- **icons:** add material-ui rounded icons from ui kit-alpha ([b38274b](https://github.com/chanzuckerberg/edu-design-system/commit/b38274b67c26ceef0e849b42620cbae657d8e790))

# [0.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.0.1-alpha.15...v0.1.0) (2021-08-02)

### Bug Fixes

- use aria-hidden to hide icons from screen readers ([b656013](https://github.com/chanzuckerberg/edu-design-system/commit/b656013bd9bc602d6cbc81f7da215d53cf893a8c)), closes [d7032b482f0988/lib/commons/aria/index.js#L1462-L1488](https://github.com/d7032b482f0988/lib/commons/aria/index.js/issues/L1462-L1488)

### Features

- use "informative" and "decorative" as the type of icons ([6148291](https://github.com/chanzuckerberg/edu-design-system/commit/614829143a3bbb15b443644b497f81aec7092fab))
- **icons:** add DangerousRounded for notifications ([20dac4e](https://github.com/chanzuckerberg/edu-design-system/commit/20dac4e8471c0a7665d302f7b4690975bdbe12e9))
- allow <Button> to take a data-testid prop ([2256f72](https://github.com/chanzuckerberg/edu-design-system/commit/2256f723bc90cb934389a4f75afa0d87edd47b3c))
- **banner:** copy Banner component from traject ([abe0275](https://github.com/chanzuckerberg/edu-design-system/commit/abe0275003576b59d06512f8ae5736e10b22958e))
- **svgicon:** copy over SvgIcon + 6 icons from traject ([b47b1c6](https://github.com/chanzuckerberg/edu-design-system/commit/b47b1c6a62685680bf0d323c227c8486fb4ad072))
- **tag:** copy Tag over from traject ([de30e3e](https://github.com/chanzuckerberg/edu-design-system/commit/de30e3e9efc5b96628dd089434f928497d3d4704))
- **toast:** copy Toast from traject ([d17448c](https://github.com/chanzuckerberg/edu-design-system/commit/d17448c36c5c25f2754e4ffa49d321365d51735c))

## [0.0.1-alpha.15](https://github.com/chanzuckerberg/edu-design-system/compare/v0.0.1-alpha.14...v0.0.1-alpha.15) (2021-07-23)

### Features

- **clickable:** remove animation for reduce motion setting ([9b6c593](https://github.com/chanzuckerberg/edu-design-system/commit/9b6c593a558bc9cea40f16f464721c4b371a72ee))
- **buttons:** make outline button background transparent ([2ab9428](https://github.com/chanzuckerberg/edu-design-system/commit/2ab9428262699a5f3de6d36dd16ae74f6d6abbb8))
- **colors:** add level 800 for alert and brand hues ([8a91592](https://github.com/chanzuckerberg/edu-design-system/commit/8a915925668eb08e556c71e020aeccbc46f62e7c))
- **colors:** update success and warning 500 tokens ([bbfdb63](https://github.com/chanzuckerberg/edu-design-system/commit/bbfdb635b45a5d48c65028a4749469305192d06e))

## [0.0.1-alpha.14](https://github.com/chanzuckerberg/edu-design-system/compare/v0.0.1-alpha.13...v0.0.1-alpha.14) (2021-07-08)

### Features

- add warning color and display flex ([ee12be6](https://github.com/chanzuckerberg/edu-design-system/commit/ee12be6b0f3145595f45b65b2025290225c038cf))
- **tokens:** add grading-yellow-100 and grading-yellow-500 ([39ee6e4](https://github.com/chanzuckerberg/edu-design-system/commit/39ee6e490403f9f7b02d61d7d2c76c82eee107fb))

## [0.0.1-alpha.13](https://github.com/chanzuckerberg/edu-design-system/compare/v0.0.1-alpha.12...v0.0.1-alpha.13) (2021-06-09)

### Features

- **typography:** allow color passthrough on text components ([7f73304](https://github.com/chanzuckerberg/edu-design-system/commit/7f733048b7ae81f95114d1e2b57e6637b305c2ab))
- **typography:** allow ref pass through on Text components ([b35c929](https://github.com/chanzuckerberg/edu-design-system/commit/b35c929cb49b95f53a741cd51bbae47e52295b14))
- **typography:** allow ref to pass through Heading ([1be3a56](https://github.com/chanzuckerberg/edu-design-system/commit/1be3a56fb2049e2a38b3b1d5da2bebd4ea07de42))

## [0.0.1-alpha.12](https://github.com/chanzuckerberg/edu-design-system/compare/v0.0.1-alpha.11...v0.0.1-alpha.12) (2021-04-22)

### Features

- **typography:** allow classname pass through on text components ([396d3ee](https://github.com/chanzuckerberg/edu-design-system/commit/396d3ee9cd980180c275cd2381366e3a5ddc37c1))

## [0.0.1-alpha.11](https://github.com/chanzuckerberg/edu-design-system/compare/v0.0.1-alpha.10...v0.0.1-alpha.11) (2021-04-13)

### Features

- **typography:** added spacing to typography components ([7488624](https://github.com/chanzuckerberg/edu-design-system/commit/7488624b008e0955c3be1a1b16a1b5297e13712f))

## [0.0.1-alpha.10](https://github.com/chanzuckerberg/edu-design-system/compare/v0.0.1-alpha.9...v0.0.1-alpha.10) (2021-03-29)

### Bug Fixes

- **build:** code review ([5cb6179](https://github.com/chanzuckerberg/edu-design-system/commit/5cb61796ab288bec323cefa04b5ff1bd1fac576f))
- **button:** added all variants example and fixes that came with it ([1eb9715](https://github.com/chanzuckerberg/edu-design-system/commit/1eb97152d6160681fbab8cf8d274d58f3cc2e2a2))
- **lint:** fix styleint/eslint/prettier integration ([0696cac](https://github.com/chanzuckerberg/edu-design-system/commit/0696cac8874999afedc6f9e0798ab5fadf381e18))

### Features

- **build:** dd script to generate flow types ([3d7f929](https://github.com/chanzuckerberg/edu-design-system/commit/3d7f929081cc5a9b354b22b660f9b0583e3a8118))
- **build:** ignore size limit for flow files ([c1caefe](https://github.com/chanzuckerberg/edu-design-system/commit/c1caefefdf8066ad4630fd2a65fd9550e710c3ef))
- **button:** initial testing with button variants ([f2b6a00](https://github.com/chanzuckerberg/edu-design-system/commit/f2b6a00104b52312d1bfa51f1769af4f2e0575f3))
- **button:** link button appearance ([fd87c01](https://github.com/chanzuckerberg/edu-design-system/commit/fd87c01fa39e10669445a72e56a848b2149d02eb))
- **design-review:** incorporated easy design feedback ([6f581a0](https://github.com/chanzuckerberg/edu-design-system/commit/6f581a04e29b25b0968b9596afab8421c69393e4))

## [0.0.1-alpha.9](https://github.com/chanzuckerberg/edu-design-system/compare/v0.0.1-alpha.8...v0.0.1-alpha.9) (2021-02-24)

### Bug Fixes

- show default props in storybook correctly ([26787a6](https://github.com/chanzuckerberg/edu-design-system/commit/26787a69e64b3a04a6b722968d398a33ca9d756d))

### Features

- reexport components from index.ts ([b2d77d1](https://github.com/chanzuckerberg/edu-design-system/commit/b2d77d152dc995e2472993faba2243a596a0c776))
- change legacy H3 size ([6d6b437](https://github.com/chanzuckerberg/edu-design-system/commit/6d6b4374baac645da778cbc7bafcbb07e580ebf4))

## [0.0.1-alpha.8](https://github.com/chanzuckerberg/edu-design-system/compare/v0.0.1-alpha.6...v0.0.1-alpha.8) (2021-02-20)

### Features

- allow forwarded props to heading as well ([6fe0c3a](https://github.com/chanzuckerberg/edu-design-system/commit/6fe0c3a2efe2c59b9f7618576774af59248498b2))
- **typography:** split into Heading and Text components ([899c202](https://github.com/chanzuckerberg/edu-design-system/commit/899c202a8d11405ace9feaed88fe6cc5777862ff))

## [0.0.1-alpha.7](https://github.com/chanzuckerberg/lp-design-system/compare/v0.0.1-alpha.6...v0.0.1-alpha.7) (2021-02-11)

### Features

- **typography:** split into Heading and Text components ([899c202](https://github.com/chanzuckerberg/lp-design-system/commit/899c202a8d11405ace9feaed88fe6cc5777862ff))

## [0.0.1-alpha.6](https://github.com/chanzuckerberg/lp-design-system/compare/v0.0.1-alpha.5...v0.0.1-alpha.6) (2021-01-20)

### Features

- **typography:** add Typography component ([36f5d5c](https://github.com/chanzuckerberg/lp-design-system/commit/36f5d5c9e87e3515f69391426157361c05d523dd))
- **typography:** add legacy and eds font tokens ([ddbaf64](https://github.com/chanzuckerberg/lp-design-system/commit/ddbaf648273c6780a73ff1c66ab5d7bac31191a3))
- **tokens:** add css variables export in json ([c86ac32](https://github.com/chanzuckerberg/lp-design-system/commit/c86ac32c3477cbb67028bcd7a887f1520928853e))
- **styles:** export Tailwind global styles ([66313dc](https://github.com/chanzuckerberg/lp-design-system/commit/66313dca2cfaaaee6666ef30884b3807867084d1))
- **button:** add button example with styled-components and twin.macro ([fa8069a](https://github.com/chanzuckerberg/lp-design-system/commit/fa8069ac2f94abe84863e0033488f23f20f6a253))

## [0.0.1-alpha.5](https://github.com/chanzuckerberg/lp-design-system/compare/v0.0.1-alpha.4...v0.0.1-alpha.5) (2020-10-19)

### Features

- **tokens:** replace eds token numbers ([59b3552](https://github.com/chanzuckerberg/lp-design-system/commit/59b355274973098315ba0bd531a760c2a0d9499e))

## [0.0.1-alpha.4](https://github.com/chanzuckerberg/lp-design-system/compare/v0.0.1-alpha.2...v0.0.1-alpha.4) (2020-10-07)

### Features

- **colors:** add eds colors to tokens ([c17a4fa](https://github.com/chanzuckerberg/lp-design-system/commit/c17a4fa084b7e89a587829b2a320e71f82b4a9dc))

## 0.0.1-alpha.2 (2020-09-11)

### Bug Fixes

- **pre-push:** fix pre-push tests to use lerna and stream output ([0b59873](https://github.com/chanzuckerberg/lp-design-system/commit/0b5987303ad1399c5c70ce043ba9dae65a1d73d6))
- **tokens:** replace heading sizes with t-shirt sizes ([4fb40b5](https://github.com/chanzuckerberg/lp-design-system/commit/4fb40b5cdf524c34d7ab124b153ad82628430439))

### Features

- **button:** add example button variants with tailwind ([6f6ccd5](https://github.com/chanzuckerberg/lp-design-system/commit/6f6ccd5d4b6adf76374b49cf0a6b1193bd49c4d6))
- **color:** added intermediate colors ([ee69918](https://github.com/chanzuckerberg/lp-design-system/commit/ee69918c1446bd9860b0d8ef70792790e9951ac2))
- **tokens:** add real tokens based on legacy styles ([fba7713](https://github.com/chanzuckerberg/lp-design-system/commit/fba7713f665737efde153ccf92fbe9447b2af22f))

## 0.0.1-alpha.1 (2020-07-17)

### Bug Fixes

- **pre-push:** fix pre-push tests to use lerna and stream output ([0b59873](https://github.com/chanzuckerberg/lp-design-system/commit/0b5987303ad1399c5c70ce043ba9dae65a1d73d6))
- **tokens:** replace heading sizes with t-shirt sizes ([4fb40b5](https://github.com/chanzuckerberg/lp-design-system/commit/4fb40b5cdf524c34d7ab124b153ad82628430439))

### Features

- **button:** add example button variants with tailwind ([6f6ccd5](https://github.com/chanzuckerberg/lp-design-system/commit/6f6ccd5d4b6adf76374b49cf0a6b1193bd49c4d6))
- **tokens:** add real tokens based on legacy styles ([fba7713](https://github.com/chanzuckerberg/lp-design-system/commit/fba7713f665737efde153ccf92fbe9447b2af22f))

## 0.0.1-alpha.0 (2020-06-11)

### Bug Fixes

- **pre-push:** fix pre-push tests to use lerna and stream output ([0b59873](https://github.com/chanzuckerberg/lp-design-system/commit/0b5987303ad1399c5c70ce043ba9dae65a1d73d6))
- **tokens:** replace heading sizes with t-shirt sizes ([4fb40b5](https://github.com/chanzuckerberg/lp-design-system/commit/4fb40b5cdf524c34d7ab124b153ad82628430439))

### Features

- **button:** add example button variants with tailwind ([6f6ccd5](https://github.com/chanzuckerberg/lp-design-system/commit/6f6ccd5d4b6adf76374b49cf0a6b1193bd49c4d6))
- **tokens:** add real tokens based on legacy styles ([fba7713](https://github.com/chanzuckerberg/lp-design-system/commit/fba7713f665737efde153ccf92fbe9447b2af22f))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [7.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v6.0.1...v7.0.0) (2022-11-18)


### ⚠ BREAKING CHANGES

* **table:**
  * removes `caption` and `hideCaption` prop in favor of `<TableCaption>` subcomponent and native `table` element attributes such as title
  * removes `behavior` prop and hence the `stacked` variant. Similar behavior is represented in `StackedCardsToTable` recipe
  * removes `variant` prop and hence `zebra` variant, since rows can be styled for it
  * removes `highlightFirstCell` prop 
* **table-cell:**
  * removes `align` and `verticalAlign` prop since deprecated on MDN, can be styled with CSS
  * removes `behavior` prop which was not used in the component
  * removes `wrap` prop since not native `<td>` attribute. Can be styled with CSS
* **table-row:**
  * removes `behavior`, `variant` props which were never used in the component

### Features

* **accordion:** init accordion ([4087186](https://github.com/chanzuckerberg/edu-design-system/commit/408718663ce3c4ae0a0fff48c6cacf307b7fc0cb))
* **accordionrow:** init accordionrow ([d6df05f](https://github.com/chanzuckerberg/edu-design-system/commit/d6df05fe0d4412e7992608943b047434f454739b))
* **studentrefinementpage:** add student refinement page ([4c1c6b0](https://github.com/chanzuckerberg/edu-design-system/commit/4c1c6b0753c102773b6d333181615623f3d05ed2))
* **tablecaption:** add TableCaption component ([f063dae](https://github.com/chanzuckerberg/edu-design-system/commit/f063dae0ba4d5b41c927588439bee4bac7b39809))


### Bug Fixes

* **readme:** update workflow badge directory ([12cd9f4](https://github.com/chanzuckerberg/edu-design-system/commit/12cd9f4a606b6b8905134b870aab24d8c19ce2d3))


* **table:** don't require caption ([2ff8dcc](https://github.com/chanzuckerberg/edu-design-system/commit/2ff8dcc749f35c5695dbac61f0a72f13e75ec266))

### [6.0.1](https://github.com/chanzuckerberg/edu-design-system/compare/v6.0.0...v6.0.1) (2022-11-03)

## [6.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v5.2.1...v6.0.0) (2022-10-28)


### ⚠ BREAKING CHANGES

* **projectcard:** add metaIconName to allow custom meta icons and remove if not present

### Features

* **ClickableStyle:** use type check on status and variant ([488784b](https://github.com/chanzuckerberg/edu-design-system/commit/488784b46b96ff41eb0a18d21e0fe0ae90a9a201))


### Bug Fixes

* address PR comments ([10332d4](https://github.com/chanzuckerberg/edu-design-system/commit/10332d460259e381ec40e2e83a6434c601fa2f61))
* **icons:** remove mask from play icon ([425822f](https://github.com/chanzuckerberg/edu-design-system/commit/425822fbf0e67c3fc95f3d7fc7575163bf3d3ce5))
* **icons:** remove play-arrow hard-coded fill color ([7cdbf89](https://github.com/chanzuckerberg/edu-design-system/commit/7cdbf897b7a91e94b5eb707e50071809ba4eb187))


* **projectcard:** add metaIconName to allow custom meta icons and remove if not present ([fa6787d](https://github.com/chanzuckerberg/edu-design-system/commit/fa6787dabe43aeec7e8c4f84307bfcae732824f2))

### [5.3.1](https://github.com/chanzuckerberg/edu-design-system/compare/v5.3.0...v5.3.1) (2022-10-20)


### Bug Fixes

* **icons:** remove play-arrow hard-coded fill color ([7cdbf89](https://github.com/chanzuckerberg/edu-design-system/commit/7cdbf897b7a91e94b5eb707e50071809ba4eb187))

## [5.3.0](https://github.com/chanzuckerberg/edu-design-system/compare/v5.1.1...v5.3.0) (2022-10-17)


### Features

* **ClickableStyle:** use type check on status and variant ([488784b](https://github.com/chanzuckerberg/edu-design-system/commit/488784b46b96ff41eb0a18d21e0fe0ae90a9a201))
* remove inverted variants from existing components ([dd6c550](https://github.com/chanzuckerberg/edu-design-system/commit/dd6c5504a291f0b77716daad31f862c6782f10c9)), closes [Shortcut#213036](https://github.com/chanzuckerberg/Shortcut/issues/213036)
* remove overflow inversion from TimelineNav ([b8e0c55](https://github.com/chanzuckerberg/edu-design-system/commit/b8e0c55bc7ae691258757d9268c09ec2fe08cf0f))
* **Tabs:** remove and clean up props for Tabs (sub-)components ([1e5bfa5](https://github.com/chanzuckerberg/edu-design-system/commit/1e5bfa59b345a4d852163a9d5d8c30ee85627592))


### Bug Fixes

* address PR comments ([10332d4](https://github.com/chanzuckerberg/edu-design-system/commit/10332d460259e381ec40e2e83a6434c601fa2f61))
* apply stricter types to refs and hooks ([24a3363](https://github.com/chanzuckerberg/edu-design-system/commit/24a3363c78d3f31c42eda43e5ab72cbfcc286c02))
* don't generate <Tab> ids from the <Tabs>'s aria-labelledby ([99a1a12](https://github.com/chanzuckerberg/edu-design-system/commit/99a1a12d4eedddcad64d290e4ac74f0fe378fb76))
* don't generate <Tab> ids from the <Tabs>'s aria-labelledby ([20859e9](https://github.com/chanzuckerberg/edu-design-system/commit/20859e9d020f3f9afb25b6b6b33b6cbf84123b90))
* **icons:** remove mask from play icon ([425822f](https://github.com/chanzuckerberg/edu-design-system/commit/425822fbf0e67c3fc95f3d7fc7575163bf3d3ce5))
* omit title from rest on Tab ([97c0d89](https://github.com/chanzuckerberg/edu-design-system/commit/97c0d89ec4ad51c5ca2c6d57eb1e798dc5ad32c4))
* put aria-labelledby on the tablist, instead of a random <div> ([164cd46](https://github.com/chanzuckerberg/edu-design-system/commit/164cd4601bd9862567f687073c5e6472abd6c7da))
* put aria-labelledby on the tablist, instead of a random <div> ([f2fc07f](https://github.com/chanzuckerberg/edu-design-system/commit/f2fc07f94e66d95d0248af7b70d1f7302809a994))
* remove Tabs scroll styling ([2d212f3](https://github.com/chanzuckerberg/edu-design-system/commit/2d212f3f897435fff74d85c2b2fb9d88917a684a))
* remove Tabs scroll styling ([38cdaa2](https://github.com/chanzuckerberg/edu-design-system/commit/38cdaa28eed42606d862471673de28cfda789833))
* use Tab id if present ([5961658](https://github.com/chanzuckerberg/edu-design-system/commit/59616585f433f2ca07c95fc8be5ef7cf586f3479))
* use Tab id if present ([0cd797a](https://github.com/chanzuckerberg/edu-design-system/commit/0cd797a2a1e36d7b06110d84bbe09d1795c158a3))

### [5.2.1](https://github.com/chanzuckerberg/edu-design-system/compare/v5.2.0...v5.2.1) (2022-10-07)


### Chores

* clean up types and onclick, forward ref ([fd5b65d](https://github.com/chanzuckerberg/edu-design-system/commit/fd5b65d68b745e532eeb876efe557e77fb174a62))

## [5.2.0](https://github.com/chanzuckerberg/edu-design-system/compare/v5.1.1-alpha.0...v5.2.0) (2022-10-06)


### Features

* remove inverted variants from existing components ([dd6c550](https://github.com/chanzuckerberg/edu-design-system/commit/dd6c5504a291f0b77716daad31f862c6782f10c9)), closes [Shortcut#213036](https://github.com/chanzuckerberg/Shortcut/issues/213036)
* remove overflow inversion from TimelineNav ([b8e0c55](https://github.com/chanzuckerberg/edu-design-system/commit/b8e0c55bc7ae691258757d9268c09ec2fe08cf0f))
* **Tabs:** remove and clean up props for Tabs (sub-)components ([1e5bfa5](https://github.com/chanzuckerberg/edu-design-system/commit/1e5bfa59b345a4d852163a9d5d8c30ee85627592))


### Bug Fixes

* apply stricter types to refs and hooks ([24a3363](https://github.com/chanzuckerberg/edu-design-system/commit/24a3363c78d3f31c42eda43e5ab72cbfcc286c02))
* don't generate <Tab> ids from the <Tabs>'s aria-labelledby ([99a1a12](https://github.com/chanzuckerberg/edu-design-system/commit/99a1a12d4eedddcad64d290e4ac74f0fe378fb76))
* don't generate <Tab> ids from the <Tabs>'s aria-labelledby ([20859e9](https://github.com/chanzuckerberg/edu-design-system/commit/20859e9d020f3f9afb25b6b6b33b6cbf84123b90))
* omit title from rest on Tab ([97c0d89](https://github.com/chanzuckerberg/edu-design-system/commit/97c0d89ec4ad51c5ca2c6d57eb1e798dc5ad32c4))
* put aria-labelledby on the tablist, instead of a random <div> ([164cd46](https://github.com/chanzuckerberg/edu-design-system/commit/164cd4601bd9862567f687073c5e6472abd6c7da))
* put aria-labelledby on the tablist, instead of a random <div> ([f2fc07f](https://github.com/chanzuckerberg/edu-design-system/commit/f2fc07f94e66d95d0248af7b70d1f7302809a994))
* **tag:** allow data attributes on tag ([5aeaa9c](https://github.com/chanzuckerberg/edu-design-system/commit/5aeaa9ce2b0985e608bfc91aadae46dc60f8fbad))
* **tag:** remove max-width ([6f787a5](https://github.com/chanzuckerberg/edu-design-system/commit/6f787a5e4c5f6d60b51a604d5f3aae1c8d80bbdc))
* use Tab id if present ([5961658](https://github.com/chanzuckerberg/edu-design-system/commit/59616585f433f2ca07c95fc8be5ef7cf586f3479))
* use Tab id if present ([0cd797a](https://github.com/chanzuckerberg/edu-design-system/commit/0cd797a2a1e36d7b06110d84bbe09d1795c158a3))

### [5.1.1](https://github.com/chanzuckerberg/edu-design-system/compare/v5.1.1-alpha.0...v5.1.1) (2022-09-22)


### Bug Fixes

* **tag:** allow data attributes on tag ([5aeaa9c](https://github.com/chanzuckerberg/edu-design-system/commit/5aeaa9ce2b0985e608bfc91aadae46dc60f8fbad))
* **tag:** remove max-width ([6f787a5](https://github.com/chanzuckerberg/edu-design-system/commit/6f787a5e4c5f6d60b51a604d5f3aae1c8d80bbdc))

## [5.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v5.0.1...v5.1.0) (2022-09-20)


### Features

* **filterspopover:** add filters popover ([541e226](https://github.com/chanzuckerberg/edu-design-system/commit/541e2262a3980098f3a97785a39eeaede02391ba))


### Bug Fixes

* **baseline-card:** stop clicks outside visible card area ([7913e4b](https://github.com/chanzuckerberg/edu-design-system/commit/7913e4bf0440482b28aebdabf3c3ec12acffa84d))

### [5.0.1](https://github.com/chanzuckerberg/edu-design-system/compare/v5.0.0...v5.0.1) (2022-09-13)

## [5.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v4.0.0...v5.0.0) (2022-09-08)


### ⚠ BREAKING CHANGES

* **tooltip:** rename childDisabled to childNotInteractive

### Bug Fixes

* **dropdownmenu:** make up and down key to navigate work 1/n ([2b40a5b](https://github.com/chanzuckerberg/edu-design-system/commit/2b40a5b74d892ccfdc4bfd37179f0c4be2b88bcf))
* **dropdownmenu:** make up and down key to navigate work 2/n ([4c0d449](https://github.com/chanzuckerberg/edu-design-system/commit/4c0d449fe703a6b97b41107281883b847f18d3b3))
* **notification-list:** add focus state to button ([766f928](https://github.com/chanzuckerberg/edu-design-system/commit/766f9281e4661526c310cb17685dce1bd2ae882a))


* **tooltip:** rename childDisabled to childNotInteractive ([393b640](https://github.com/chanzuckerberg/edu-design-system/commit/393b640498d08e6e0d661706b008f4ac9d5e7d3c))

## [4.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v3.2.0...v4.0.0) (2022-09-02)

### ⚠ BREAKING CHANGES

- **inputfield:** rename textinput to inputfield
- **inputlabel:** accepts children instead of text prop

### Features

- add back tailwind utilities for stories ([5e836b6](https://github.com/chanzuckerberg/edu-design-system/commit/5e836b6f39d7d018ea98adebf7ee69ad8e0f0d2b))
- **datasummarycard:** adds DataSummaryCard recipe ([abd6054](https://github.com/chanzuckerberg/edu-design-system/commit/abd60546b7b51e9f8218db7737ce00a28bcbba5f))
- **datasummarycard:** adds DataSummaryCard recipe ([03961b2](https://github.com/chanzuckerberg/edu-design-system/commit/03961b2b027faf22c39df7571371f1ac7f68bec2))
- **inputlabel:** create inputlabel and use in radio and checkbox ([d935ffc](https://github.com/chanzuckerberg/edu-design-system/commit/d935ffc380cc481b80d0ab12f8ef1bab2c3a744a))
- **radio:** migrate import radio from EDSCandidates ([f56bdc4](https://github.com/chanzuckerberg/edu-design-system/commit/f56bdc4fbb74aa26c51f1b0fbeb01149a3af9fda))
- **radio:** migrate radio from EDScandidates and match mocks ([b7f25a5](https://github.com/chanzuckerberg/edu-design-system/commit/b7f25a5b88007f144fa05b5c2e09eaa714723835))
- **searchbar:** add SearchBar component ([70457d8](https://github.com/chanzuckerberg/edu-design-system/commit/70457d8a43e446cce6453ae8d71bcc9aa81a2ddc))
- **searchbar:** componentize and export under searchbar ([ff19761](https://github.com/chanzuckerberg/edu-design-system/commit/ff1976193f88597c83bc1952e0580bcbbeb3b84e))
- **searchfield:** add searchfield component ([e11f2e7](https://github.com/chanzuckerberg/edu-design-system/commit/e11f2e7ea826b2fb644d732c7beae56a1158dc4a))
- **textfield:** matches mocks, update snaps, update dependent components, add stories ([b6ffe70](https://github.com/chanzuckerberg/edu-design-system/commit/b6ffe701059cf82aa29f2660f4c87f4a05fcb063))
- **textinput, textfield:** migrate components from EDSCandidates ([a337a40](https://github.com/chanzuckerberg/edu-design-system/commit/a337a401101500e5b0f6039c79f484c1243f44d8))
- **tooltip:** add childDisabled prop ([ab3610e](https://github.com/chanzuckerberg/edu-design-system/commit/ab3610ed29c5526379e242391ec6dc44f4368ece))

### Bug Fixes

- **checkbox:** make checkbox sizes variants match ui kit ([5c5d663](https://github.com/chanzuckerberg/edu-design-system/commit/5c5d6635cb07baf806458219c0c1d0f7471be280))
- **fieldnote:** match error icon color to mocks ([2c11e61](https://github.com/chanzuckerberg/edu-design-system/commit/2c11e61c0ccc1ca81070fb03360729e8854a0947))
- **fieldnote:** match error icon color to mocks ([19e4f2e](https://github.com/chanzuckerberg/edu-design-system/commit/19e4f2e29d8db3af424123ac2d8201d1952fc779))
- **inputfield:** rename textinput to inputfield ([34cdbe4](https://github.com/chanzuckerberg/edu-design-system/commit/34cdbe444ee7ca2b4db4ce552a311600db45cc98))
- **inputfield:** rename textinput to inputfield ([4ef5f9e](https://github.com/chanzuckerberg/edu-design-system/commit/4ef5f9e41f72c904d293b57532cbcc5079bafa69))
- **inputlabel:** accepts children instead of text prop ([1932fb9](https://github.com/chanzuckerberg/edu-design-system/commit/1932fb9e8e4fbfe0eec8f917cedb8f7d0e7f602a))

## [3.2.0](https://github.com/chanzuckerberg/edu-design-system/compare/v3.1.2...v3.2.0) (2022-08-23)

### Features

- **filters:** make filters components controlled ([e589c46](https://github.com/chanzuckerberg/edu-design-system/commit/e589c468c62ddae44c63f9136355edf570d1c4ec))
- **filters:** make filters components controlled ([799e904](https://github.com/chanzuckerberg/edu-design-system/commit/799e904eba5444cf464b45bbc7d0426a93d4fd37))
- **score:** add score component ([2941cea](https://github.com/chanzuckerberg/edu-design-system/commit/2941cea097a105caa03411cc904bcb159f22b7d2))
- **score:** init score component ([4424c97](https://github.com/chanzuckerberg/edu-design-system/commit/4424c97d4f0e00a268794836e9cae936cc3743b0))

### Bug Fixes

- **checkbox:** require onChange for checkbox ([39c1353](https://github.com/chanzuckerberg/edu-design-system/commit/39c135385e1995032376e6cdcf97c6059428b9b3))
- **pageheader:** remove wrapping div for overline ([a604dad](https://github.com/chanzuckerberg/edu-design-system/commit/a604dad582cd11499ead073b063b1b3a512570a1))
- **pageheader:** remove wrapping div for overline ([515660c](https://github.com/chanzuckerberg/edu-design-system/commit/515660cd233809f8b57ce9d8e5cb9cc3272aa7ec))

### [3.1.2](https://github.com/chanzuckerberg/edu-design-system/compare/v3.1.1...v3.1.2) (2022-08-16)

### Chores

- **checkbox** update styles to match library ([c94e2ca]https://github.com/chanzuckerberg/edu-design-system/commit/c94e2caee24c675e81eab6f9cff44d17a04dfcad)

### [3.1.1](https://github.com/chanzuckerberg/edu-design-system/compare/v3.1.0...v3.1.1) (2022-08-12)

### Bug Fixes

- **drawerheader:** correctly refer to color token ([a92c92b](https://github.com/chanzuckerberg/edu-design-system/commit/a92c92b1df000737839bb2473cc60c8563549b1e))
- **drawerheader:** correctly refer to color token ([84409b3](https://github.com/chanzuckerberg/edu-design-system/commit/84409b372e2c0c84014bae52747a336b167eb1c1))

## [3.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v1.5.1...v3.1.0) (2022-08-12)

### Features

- added getting started. removed examples nav ([3a722ba](https://github.com/chanzuckerberg/edu-design-system/commit/3a722baefaa04e5b6454da9a97c55393ce1493e4))
- buttonactioncalloutcard addition ([eb193d5](https://github.com/chanzuckerberg/edu-design-system/commit/eb193d5e089ca6e9c3dbaadff9858eb69ec460f6))
- **filters:** add filters component 1/n ([dcb7714](https://github.com/chanzuckerberg/edu-design-system/commit/dcb77148fe89b56d3e01671d1c8cb64e4933c16e))
- **filters:** add filters logic ([48f3d1b](https://github.com/chanzuckerberg/edu-design-system/commit/48f3d1b79b7d67009d1ce57c37cf59ed9322a9e3))
- **filters:** add overflow detection ([a3e6c79](https://github.com/chanzuckerberg/edu-design-system/commit/a3e6c790fa71886918afbabdd8999cb9c07c2b0c))
- **filters:** complete styling pass 1 of filters ([09c2c4f](https://github.com/chanzuckerberg/edu-design-system/commit/09c2c4f44cd90892197282d19d42cdd1f653086d))
- **filters:** init filters, filterscheckboxfield ([404b463](https://github.com/chanzuckerberg/edu-design-system/commit/404b46328f356d6e2369ade70f432321835ce3c8))
- **filters:** style filter toggle button ([5591c5f](https://github.com/chanzuckerberg/edu-design-system/commit/5591c5fca82c8146098741bbafc64b4edb9c4ae8))
- getting started page ([13c2ab6](https://github.com/chanzuckerberg/edu-design-system/commit/13c2ab69bbb4362124a47f424dd41a83c2cdd24b))
- overflow table functionality ([74c8b5c](https://github.com/chanzuckerberg/edu-design-system/commit/74c8b5cd878e1020982c9d604ebc92580cbc53cd))
- roughly populate getting started ([7099a1e](https://github.com/chanzuckerberg/edu-design-system/commit/7099a1e550af156a6ff258cded1fd7c06d8d4e20))
- scaffold out feedback overview checkpoint ([1a8ce07](https://github.com/chanzuckerberg/edu-design-system/commit/1a8ce07cd320d6fb2ea7098f49d3c4fbee313b6f))
- stacked block. active primary nav items ([cf95896](https://github.com/chanzuckerberg/edu-design-system/commit/cf95896184983ae104db9c533002e9475940c693))
- **table:** comments ([7ef4996](https://github.com/chanzuckerberg/edu-design-system/commit/7ef4996ed7072cfbb02c7704a7c8b8b9dac5243a))
- **table:** icon ([1150f21](https://github.com/chanzuckerberg/edu-design-system/commit/1150f21af74138cecd813ade0d42ebfac128e0c9))
- **table:** nit spacing ([caf42a6](https://github.com/chanzuckerberg/edu-design-system/commit/caf42a663ca60f05f910cee862e44483349d1348))
- **tables:** sortable ([7551b72](https://github.com/chanzuckerberg/edu-design-system/commit/7551b72a1cf3a164760887e79c302dd7eef12542))
- **table:** test ([7bb0f93](https://github.com/chanzuckerberg/edu-design-system/commit/7bb0f938dd6e7591d454186822ba0d15e05830c2))
- **table:** tests ([ef7fe62](https://github.com/chanzuckerberg/edu-design-system/commit/ef7fe625c6d25c929c5c59d152a8f52eb2922063))
- **text, heading:** allow all 3 neutral text colors via variant prop ([01b2250](https://github.com/chanzuckerberg/edu-design-system/commit/01b2250cf4b1d96f1881a4c96b6f48a5f2fbe9f6))

### Bug Fixes

- active primary nav items pass down ([c79fabc](https://github.com/chanzuckerberg/edu-design-system/commit/c79fabc561b2a1fed08678f858ddc24b5de498a3))
- adjust table header cell padding table body ([6d8fba7](https://github.com/chanzuckerberg/edu-design-system/commit/6d8fba711156c2f0572c40c9da4544e9394ade16))
- adjusted alignment of tooltip section ([9e2a28c](https://github.com/chanzuckerberg/edu-design-system/commit/9e2a28c34ba37b5c41a930ab8dc4de57722b81ba))
- adjusted section/page header spacing ([c45076d](https://github.com/chanzuckerberg/edu-design-system/commit/c45076d6fadde1b1cfe32abffe08de715af3339d))
- **banner, page-level-banner:** darken content text to base ([625a7a5](https://github.com/chanzuckerberg/edu-design-system/commit/625a7a599c2edf6e8d48f0e5d9ba555ce9d43d01))
- **banner:** move close button to end of content ([7e3da1d](https://github.com/chanzuckerberg/edu-design-system/commit/7e3da1d0e08c0d985d4e3fa5f5829ceba043d5a4))
- change kicker to overline to align teams ([d17c267](https://github.com/chanzuckerberg/edu-design-system/commit/d17c2676cd7520b81b1b061271fb7f335745425c))
- changed stacked variant to lined between rows ([ff9a507](https://github.com/chanzuckerberg/edu-design-system/commit/ff9a507eb9e40f0a51ee3a8235d4c12d8c6f263a))
- descriptions and cleanup in proj checkpoint ([6b46dac](https://github.com/chanzuckerberg/edu-design-system/commit/6b46dac37210e5f7208a36ea1a4d6be1347cab50))
- **drawer:** make on click outside to close work ([4ef99a4](https://github.com/chanzuckerberg/edu-design-system/commit/4ef99a4896ba16aef5eea67f5389b49eb268f024))
- inline styles ([a3a0f6a](https://github.com/chanzuckerberg/edu-design-system/commit/a3a0f6a6e8f2f697c3adb3937d4f8345fd3586e2))
- optional meta in project card ([c004c49](https://github.com/chanzuckerberg/edu-design-system/commit/c004c4970130cd8740d34124da9a12b1a53ddabf))
- project overview typography sizes ([ce7e425](https://github.com/chanzuckerberg/edu-design-system/commit/ce7e425d8920ac3380a37b687b63fe3be3906a2b))
- **projectcard:** make numberAriaLabel optional but warn ([43b369b](https://github.com/chanzuckerberg/edu-design-system/commit/43b369b68401532bbc21d882c0f63e226bf38ede))
- remove unused class name from stacked block ([14aa47c](https://github.com/chanzuckerberg/edu-design-system/commit/14aa47c94c57683b54a5d0486ea158b1c1e693c6))
- replaced section indentation ([ad0d7e8](https://github.com/chanzuckerberg/edu-design-system/commit/ad0d7e8e741030cd6ff3c6a6e4e40287de9d8a54))
- spacing and positioning table header cell ([f6012dd](https://github.com/chanzuckerberg/edu-design-system/commit/f6012dd9c5c34ddc2de95b74b2d03dbef19e0588))
- stacked block location. plopfile change ([2871f1d](https://github.com/chanzuckerberg/edu-design-system/commit/2871f1d6ba5b6e8fd2d866f220ae7185b7935806))
- storybook page cleanup ([31f41e1](https://github.com/chanzuckerberg/edu-design-system/commit/31f41e16c0fd5accc2015653bec58c3178455b6b))
- test and lint fixes ([2ab2741](https://github.com/chanzuckerberg/edu-design-system/commit/2ab2741bc809dd82d5724f054d48b0a0c3a847c2))
- ts error for getting started ([8d6caef](https://github.com/chanzuckerberg/edu-design-system/commit/8d6caefb9d50d5ac33e5f6f69ea92ced50ad74af))
- update stacked block tests ([5baf891](https://github.com/chanzuckerberg/edu-design-system/commit/5baf8916a41ab5dd5a0164e50c936243b51a6520))
- update table styles stacked ([30e0707](https://github.com/chanzuckerberg/edu-design-system/commit/30e0707213c8d6b291c76aed709fce2d97564594))
- update tests ([fadd955](https://github.com/chanzuckerberg/edu-design-system/commit/fadd955b66a66a4d03abe397cd614cdc4a15ea6f))
- yarn test addition table object ([1a6904e](https://github.com/chanzuckerberg/edu-design-system/commit/1a6904e08dd192f88f7b7dfe837fa7bb7a97804b))

## [3.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v2.0.0...v3.0.0) (2022-07-27)

### ⚠ BREAKING CHANGES

- **text, heading:** allow all 3 neutral text colors via variant prop ([01b2250](https://github.com/chanzuckerberg/edu-design-system/commit/01b2250cf4b1d96f1881a4c96b6f48a5f2fbe9f6))

### Bug Fixes

- **banner, page-level-banner:** darken content text to base ([625a7a5](https://github.com/chanzuckerberg/edu-design-system/commit/625a7a599c2edf6e8d48f0e5d9ba555ce9d43d01))
- **banner:** move close button to end of content ([7e3da1d](https://github.com/chanzuckerberg/edu-design-system/commit/7e3da1d0e08c0d985d4e3fa5f5829ceba043d5a4))
- **table:** add extra padding beneath first cell when the highlight-first-cell variant and stacked behavior are used together ([1647e0e](1647e0e4069f0012dc66d7065d3df62b550ce47f))

## [2.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v1.6.1...v2.0.0) (2022-07-22)

### ⚠ BREAKING CHANGES

- made neutral variant in Text component lighter ([06d66c4](06d66c43200a984aab695f77d0347938544bd3c6))

### Features

- added getting started page in storybook; removed examples section ([3a722ba](https://github.com/chanzuckerberg/edu-design-system/commit/3a722baefaa04e5b6454da9a97c55393ce1493e4))
- added ButtonActionCalloutCard ([eb193d5](https://github.com/chanzuckerberg/edu-design-system/commit/eb193d5e089ca6e9c3dbaadff9858eb69ec460f6))
- scaffold out feedback overview checkpoint ([1a8ce07](https://github.com/chanzuckerberg/edu-design-system/commit/1a8ce07cd320d6fb2ea7098f49d3c4fbee313b6f))
- added StackedBlock, exported TableCell and TableFooter, and added active state to PrimaryNav ([cf95896](https://github.com/chanzuckerberg/edu-design-system/commit/cf95896184983ae104db9c533002e9475940c693))

### Bug Fixes

- adjusted section/page header spacing ([c45076d](https://github.com/chanzuckerberg/edu-design-system/commit/c45076d6fadde1b1cfe32abffe08de715af3339d))
- renamed overline prop to kicker ([d17c267](https://github.com/chanzuckerberg/edu-design-system/commit/d17c2676cd7520b81b1b061271fb7f335745425c))
- updated project overview typography sizes ([ce7e425](https://github.com/chanzuckerberg/edu-design-system/commit/ce7e425d8920ac3380a37b687b63fe3be3906a2b))
- update table styles stacked ([30e0707](https://github.com/chanzuckerberg/edu-design-system/commit/30e0707213c8d6b291c76aed709fce2d97564594))

### [1.6.1](https://github.com/chanzuckerberg/edu-design-system/compare/v1.6.0...v1.6.1) (2022-07-20)

### Bug Fixes

- adjust table header cell padding table body ([6d8fba7](https://github.com/chanzuckerberg/edu-design-system/commit/6d8fba711156c2f0572c40c9da4544e9394ade16))

### [1.6.0](https://github.com/chanzuckerberg/edu-design-system/compare/v1.5.1...v1.6.0) (2022-07-19)

### Features

- added clickable behavior to BaselineCard ([3df4ada](https://github.com/chanzuckerberg/edu-design-system/commit/3df4ada7cd8f20527ea4ffed73da04e83b708c64))
- added TableObject, TableObjectBody, TableObjectFooter, and TableObjectHeader components ([01ad741](https://github.com/chanzuckerberg/edu-design-system/commit/01ad741279e663938c61fca766cd8dbd7eeb6147#diff-a2a171449d862fe29692ce031981047d7ab755ae7f84c707aef80701b3ea0c80))

### Bug Fixes

- improved screen reader description for close button in banner components ([23284e6](https://github.com/chanzuckerberg/edu-design-system/commit/23284e6806f488df8e68c0cf85dd7ad309dcc7d3))
- made meta prop optional in ProjectCard ([986ec95](https://github.com/chanzuckerberg/edu-design-system/commit/986ec95bab304fdbe71da165fbd784dd12c88efb))

### [1.5.1](https://github.com/chanzuckerberg/edu-design-system/compare/v1.4.0...v1.5.1) (2022-07-13)

### Features

- added columnClassName drag drop styles ([63e7d8c](https://github.com/chanzuckerberg/edu-design-system/commit/63e7d8ccdd522ecfb26d76b60a78621b7b460a33))
- optional dropdown items project card ([4fb073a](https://github.com/chanzuckerberg/edu-design-system/commit/4fb073afb677b59aa78bed0005978e4c84201d8b))

### Bug Fixes

- consistent string array type column class ([264655e](https://github.com/chanzuckerberg/edu-design-system/commit/264655eaef9ff57f70451f5ad02057080d34ff53))
- numberAriaLabel conditional project card ([48f5e23](https://github.com/chanzuckerberg/edu-design-system/commit/48f5e237fdc8de3e8d0084c59ded44463e739a20))
- snapshot dragdrop update ([de921bd](https://github.com/chanzuckerberg/edu-design-system/commit/de921bd639b01dfee7d46c03c9974f78b8bba197))
- snapshot test project card ([53817b6](https://github.com/chanzuckerberg/edu-design-system/commit/53817b662ef4c26098d225b1bd26dd4481e0703e))
- type on drag drop container column class ([17b13c4](https://github.com/chanzuckerberg/edu-design-system/commit/17b13c440c86700dc5ce274e59b36268641ad4c3))
- use clsx for classnames column class ([534aa08](https://github.com/chanzuckerberg/edu-design-system/commit/534aa08e08ee4c3f315c13d35504f36e086a02be))

## [1.5.0](https://github.com/chanzuckerberg/edu-design-system/compare/v1.4.0...v1.5.0) (2022-07-07)

### Bug Fixes

- **clickablestyle:** downgrade error to warning for invalid combos ([1b8441a](https://github.com/chanzuckerberg/edu-design-system/commit/1b8441ac55b8222b9e4e7f48e902a0b2aa7c9ed6))
- **link:** translateY 101% so the focus bg is fully offscreen ([809d783](https://github.com/chanzuckerberg/edu-design-system/commit/809d78310c22de0d6f80db984e89d31024875360))
- **link:** lower spacing specificity ([0c1385c](https://github.com/chanzuckerberg/edu-design-system/commit/0c1385c584c0320a35fc300e6bf5e56a8ef7aabd))

### Features

- **horizontalstepper:** allow line class names and change dot color ([1a65f82](https://github.com/chanzuckerberg/edu-design-system/commit/1a65f825e284eda39859b6d9080b1d899911555a))

### [1.4.0](https://github.com/chanzuckerberg/edu-design-system/compare/v1.3.1...v1.4.0) (2022-07-05)

### Bug Fixes

- **modal:** render tooltips on top of modal ([0965c28](https://github.com/chanzuckerberg/edu-design-system/commit/0965c2891284cb2fcc417fe8bcb7c3de24e32a80))

### Features

- **link:** give focus state solid background color ([619ba19](https://github.com/chanzuckerberg/edu-design-system/commit/619ba19c926d408ddeb2cae8801b55a3ec024a8d))

### [1.3.1](https://github.com/chanzuckerberg/edu-design-system/compare/v1.3.0-alpha.1...v1.3.1) (2022-06-29)

### Features

- **baselinecard:** create baseline card recipe ([0099602](https://github.com/chanzuckerberg/edu-design-system/commit/00996029a199aa7808dca85d0ccf05fdf191178d))
- **baselinecard:** create baseline card recipe ([2834882](https://github.com/chanzuckerberg/edu-design-system/commit/2834882fd707d4bec394f67ee822c91f827cf574))
- timeline nav responsive ([89e7b86](https://github.com/chanzuckerberg/edu-design-system/commit/89e7b868107fcad04f2a0e34e412ce828487035a))
- **timelinenav:** acc changes ([fff121b](https://github.com/chanzuckerberg/edu-design-system/commit/fff121b86b51bf67621dda26beaecbbb98c1eaca))
- **timelinenav:** accessibility ([7e14241](https://github.com/chanzuckerberg/edu-design-system/commit/7e1424182aebb188ad7cc8d2ed94bb7ef1259c60))
- **timelinenav:** add transition-property ([5d37f09](https://github.com/chanzuckerberg/edu-design-system/commit/5d37f09d62dd869b56d32b8a0257b0e11acf2870))
- **timelinenav:** cr changes ([8afc63d](https://github.com/chanzuckerberg/edu-design-system/commit/8afc63de277fb8ff271ccd134d4a0bf3f1686010))
- **timelinenav:** edge case title overflow ([9893529](https://github.com/chanzuckerberg/edu-design-system/commit/9893529c0d63dffe4d84cfd8acb840e0f1c1e04c))
- **timelinenav:** excl < lg bp ([cf9d46d](https://github.com/chanzuckerberg/edu-design-system/commit/cf9d46d8423c07fa26fcd80dba39267dda766a92))
- **timelinenav:** handle long title ([eafbf11](https://github.com/chanzuckerberg/edu-design-system/commit/eafbf116f532417edc74136ff1b23e1f4838a986))
- **timelinenav:** minor - comm ([41965db](https://github.com/chanzuckerberg/edu-design-system/commit/41965db27e860bd33998e28ecf0fee0f79fe5327))
- **timelinenav:** minor - comment ([185c72b](https://github.com/chanzuckerberg/edu-design-system/commit/185c72bc1b15634286d3dd45345b742eef572d39))
- **timelinenav:** move trans to container ([4ae3d87](https://github.com/chanzuckerberg/edu-design-system/commit/4ae3d8727d499e0a489604dd9f68047d44676a33))
- **timelinenav:** rm unused tests ([66637c9](https://github.com/chanzuckerberg/edu-design-system/commit/66637c93e76a0583502dc2127d585e01d560053b))
- **timelinenav:** set focus to back btn ([55f54c8](https://github.com/chanzuckerberg/edu-design-system/commit/55f54c80f7be6b9050babddb9311056a41b3f96e))
- **timelinenav:** tests ([53d9289](https://github.com/chanzuckerberg/edu-design-system/commit/53d9289f0a48bf39ee3bc0ab1698a83047452fee))
- **timelinenav:** undo rm outline ([f0a9116](https://github.com/chanzuckerberg/edu-design-system/commit/f0a911665714dfb2bb5e27a4f1a5e827dbe0f1a8))
- **timelinenav:** use size var ([fb38917](https://github.com/chanzuckerberg/edu-design-system/commit/fb38917ebd905a05cfc5498487e60f5eeffd997e))

### Bug Fixes

- **table-object:** fix behavior type updated in Table ([5277456](https://github.com/chanzuckerberg/edu-design-system/commit/5277456bca5d1084d39a4b6275c912a8b5631899))
- timeline nav comment tweak to trigger commit ([3e4491b](https://github.com/chanzuckerberg/edu-design-system/commit/3e4491bbaf25d8db6fbfb61fbcaae767fe5cb9ac))
- timeline nav tweaks and sticky behavior ([7d999ac](https://github.com/chanzuckerberg/edu-design-system/commit/7d999ac0ab1de5bfaf3b90e48b1460d2d4282d57))

## [1.3.0](https://github.com/chanzuckerberg/edu-design-system/compare/v1.3.0-alpha.1...v1.3.0) (2022-06-17)

### Features

- **CalendarCard**: add recipe ([25e3899](https://github.com/chanzuckerberg/edu-design-system/commit/25e3899bd71eabbe436ecc757adfeff9bbff7699))
- **PageLevelBanner**: add component ([5c7809e](https://github.com/chanzuckerberg/edu-design-system/commit/5c7809ead3f32a86987f9b549b23edd0a68151f4))
- **TextField**: add data-bootstrap-override ([e92a3c5](https://github.com/chanzuckerberg/edu-design-system/commit/e92a3c553a15d6e6812393dd4e02ba6d4cda2d33))

### Bug Fixes

- **Popover**: close on escape key press ([089e70e](https://github.com/chanzuckerberg/edu-design-system/commit/089e70ed4736feb2e9c12953af1556be134cdb6d))

## [1.2.0](https://github.com/chanzuckerberg/edu-design-system/compare/v1.1.1...v1.2.0) (2022-06-14)

### Features

- add 60-40 layout for cad edit page ([8237c63](https://github.com/chanzuckerberg/edu-design-system/commit/8237c63a73447f34ec7abb4e2363aad98ba53870))
- add error status to DropdownMenuItem ([b4a4695](https://github.com/chanzuckerberg/edu-design-system/commit/b4a4695d13e36131fe632a365298203876c01df1))
- add project card dragdrop stories ([fecb1e8](https://github.com/chanzuckerberg/edu-design-system/commit/fecb1e86668d159ec5b9ba4f3c0daa64adadaa87))
- add target prop ([97ce94f](https://github.com/chanzuckerberg/edu-design-system/commit/97ce94f8a3cd67447b9b822d2862d895bb6f6e56))
- added detailed comments around numbericon ([dc1a49d](https://github.com/chanzuckerberg/edu-design-system/commit/dc1a49d5bb5d688dc3fdb64906f27958262a72e5))
- cad tightening up. table card addition ([9254765](https://github.com/chanzuckerberg/edu-design-system/commit/9254765d5b58af632c0821855fb3efe08e788685))
- **cadmodal:** create cad modal pages ([4b12f8a](https://github.com/chanzuckerberg/edu-design-system/commit/4b12f8a70ee134e19a92e00d3948b86712ace45d))
- change lg util to xl. use 1.5rem as lg ([8a676e9](https://github.com/chanzuckerberg/edu-design-system/commit/8a676e90a29d7a840b397e7e812c5bd7480e9a00))
- expose drag drop to outside components ([fc7e76d](https://github.com/chanzuckerberg/edu-design-system/commit/fc7e76dfc69ed44970a8495cdd5420fa29a127f7))
- index number switch container 1 to 2 ([1c1c826](https://github.com/chanzuckerberg/edu-design-system/commit/1c1c8262f80f6f14ba38b299c9130b67c70b2187))
- **modal:** add core modal ([15c222e](https://github.com/chanzuckerberg/edu-design-system/commit/15c222e94e17cf45c680817377586cc8b59a8d32))
- move project card to components ([ba17797](https://github.com/chanzuckerberg/edu-design-system/commit/ba177973499d037905a692018c40046c8e3b4f4f))
- number icon list story ([2f320a7](https://github.com/chanzuckerberg/edu-design-system/commit/2f320a7f2441b80095513fed0966f43a80e7fbd1))
- remove third stepper item cad edit ([c5dcd88](https://github.com/chanzuckerberg/edu-design-system/commit/c5dcd88780770a6c79633e7adad4763403819fd1))
- standards coverage wip ([3cd202d](https://github.com/chanzuckerberg/edu-design-system/commit/3cd202d85b442cf2dfb9e89d27add1bef20f5765))
- util for if children is fragment logic ([18140e9](https://github.com/chanzuckerberg/edu-design-system/commit/18140e90853e5157412d71da9d134e3b25fdb0d2))

### Bug Fixes

- accessibility primary nav/utility nav stories ([4c3428e](https://github.com/chanzuckerberg/edu-design-system/commit/4c3428e92d21b88322e78581653001e9b67717cb))
- accessibility test fixes ([c5e950e](https://github.com/chanzuckerberg/edu-design-system/commit/c5e950e7f126a85ba6065fc85bef939963d4ab13))
- add buttondropdownitems to projectcard ([1a98e3b](https://github.com/chanzuckerberg/edu-design-system/commit/1a98e3b039c5b6c13d8a3e70423fc7400db4a859))
- add empty content as variables ([3a849d4](https://github.com/chanzuckerberg/edu-design-system/commit/3a849d4e8334144c219b664cc943089937025162))
- added ? diedra mentioned isReactFragment ([5e26bb9](https://github.com/chanzuckerberg/edu-design-system/commit/5e26bb9eb7bf5903c8c32618df095be2a34b8371))
- cad project card feedback ([b085787](https://github.com/chanzuckerberg/edu-design-system/commit/b08578777da402e1b3db5a35337fdc3adb94da7a))
- change base and neutral heading to strong ([170fb7b](https://github.com/chanzuckerberg/edu-design-system/commit/170fb7b4745c74c4a3bb4d559bd92221ac6e5305))
- change class names of table card elements ([33afbe0](https://github.com/chanzuckerberg/edu-design-system/commit/33afbe06f40e66e5e78e34aa62673fb337d267da))
- classname cleanup tablecard ([ac889a8](https://github.com/chanzuckerberg/edu-design-system/commit/ac889a88f3836054c2b48d3a4f22d048c6121100))
- comments. remove non-tier 2 tokens docs ([6e033a8](https://github.com/chanzuckerberg/edu-design-system/commit/6e033a8e2ee2d0e24441504da7d4908c8644f05c))
- drag drop newstate types ([f87e58b](https://github.com/chanzuckerberg/edu-design-system/commit/f87e58bc1316696937fbb7d7a4e3a30aca35fc33))
- dragdrop snapshot test ([214ae43](https://github.com/chanzuckerberg/edu-design-system/commit/214ae4364c4dbe1981fbf08ffe1aae0d65ed9556))
- dropdown menu transition ([47d4bb0](https://github.com/chanzuckerberg/edu-design-system/commit/47d4bb0cab24bf2b14b08cec4031d66204f0280a))
- dropdownmenu children fragment addition ([ebd59c7](https://github.com/chanzuckerberg/edu-design-system/commit/ebd59c726c3e227098b2537c14ca032a4c522edb))
- horizontal stepper self closing ([ab18d0a](https://github.com/chanzuckerberg/edu-design-system/commit/ab18d0af5785794093d6814f50c391512f93320a))
- lint fix ([d72205b](https://github.com/chanzuckerberg/edu-design-system/commit/d72205b25408e36967048e3ba83278f70516318f))
- lint fix. remove console logs ([8adc40e](https://github.com/chanzuckerberg/edu-design-system/commit/8adc40ee34473eb9371e1a413652fcba319cc906))
- lint prop order fix project card ([856e54d](https://github.com/chanzuckerberg/edu-design-system/commit/856e54d2edbd2358d5ea3091034e78fa38f26815))
- number icon story string ([a5bea3c](https://github.com/chanzuckerberg/edu-design-system/commit/a5bea3cabb9dc2af729d7057a8ca4367b42457bf))
- number icon tests. lint. ([cfd2e80](https://github.com/chanzuckerberg/edu-design-system/commit/cfd2e80ae196c8e940a1fcff64d7b8b0bb3d1697))
- numbericonlist classname cleanup ([8d6dc7a](https://github.com/chanzuckerberg/edu-design-system/commit/8d6dc7ae70071eabd16bffb37748e09627488470))
- refactor numbericon story csf ([89fc37a](https://github.com/chanzuckerberg/edu-design-system/commit/89fc37ab8674b0d1dd55225639978776c7dfd6f6))
- remove border from panel ([c1a09dd](https://github.com/chanzuckerberg/edu-design-system/commit/c1a09dd12baec366a617941692cf575e34dd7cc5))
- remove button logic cad. lint fix ([d15f1b7](https://github.com/chanzuckerberg/edu-design-system/commit/d15f1b7697475d12ffd265c65f992b14545ff290))
- remove commented out code table stories ([c3047fb](https://github.com/chanzuckerberg/edu-design-system/commit/c3047fb4c165a948b1389602a4e2af2cd48001ff))
- remove unused import page header ([22b9e2a](https://github.com/chanzuckerberg/edu-design-system/commit/22b9e2a14b0a1f52f2bba8654f53429e80c4d173))
- removed extra line numbericon ([ebee667](https://github.com/chanzuckerberg/edu-design-system/commit/ebee6673ebed02276168f24da55a44672fd1571c))
- right sidebar always placed after main layout ([2ede056](https://github.com/chanzuckerberg/edu-design-system/commit/2ede0565c37d13c6170b84d28ae27adffedb5fb9))
- self closing projectcard ([4f88b23](https://github.com/chanzuckerberg/edu-design-system/commit/4f88b239ec24c9cc8c467f455593093facb6ff12))
- slight padding on dd container for borders ([2bcfef5](https://github.com/chanzuckerberg/edu-design-system/commit/2bcfef5c72fde186e5927c71db9baa4c5be3071b))
- space out number icon list css title ([c16d1b6](https://github.com/chanzuckerberg/edu-design-system/commit/c16d1b697638aafc80438ff76a15ee32d9b85ebd))
- storybook story decorator ([e9bbfe3](https://github.com/chanzuckerberg/edu-design-system/commit/e9bbfe39763553d9386bcb20add08c60c302f0b9))
- table card csf story ([4f096b6](https://github.com/chanzuckerberg/edu-design-system/commit/4f096b6adeed6013d5249a6b161e45d9dc4f8fd7))
- table component descriptions ([83cc522](https://github.com/chanzuckerberg/edu-design-system/commit/83cc5224d35f8625dd354ca4065e3b6befc673d2))
- test changing card to article tag ([a0c05f4](https://github.com/chanzuckerberg/edu-design-system/commit/a0c05f47ece6f0531312de5157ebbe462bc320ab))
- test onclick change of items ([5e9c19c](https://github.com/chanzuckerberg/edu-design-system/commit/5e9c19c845432db53087483bbebebf5250ec2a8d))
- test removing footer and using div CardFooter ([b1dceb0](https://github.com/chanzuckerberg/edu-design-system/commit/b1dceb0560036a49d16d7276cff0a7df2bccb099))
- test unique landmark card footer ([3514909](https://github.com/chanzuckerberg/edu-design-system/commit/35149093a58902b846256863e67458f97daa8b6f))
- use tier 1 border radius box shadows ([60cf2a1](https://github.com/chanzuckerberg/edu-design-system/commit/60cf2a11667adc818f4e8afe84de8b9c8513aebe))
- variablize project card menu items ([c1016b9](https://github.com/chanzuckerberg/edu-design-system/commit/c1016b9330f03fb748c9b921078ae9deac971979))

### [1.1.1](https://github.com/chanzuckerberg/edu-design-system/compare/v1.2.0-alpha.0...v1.1.1) (2022-06-08)

## [1.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v1.0.0...v1.1.0) (2022-06-02)

### Features

- use Material Sharp icons ([#1104](https://github.com/chanzuckerberg/edu-design-system/issues/1104))
- add deprecation warning to older status icons ([#1104](https://github.com/chanzuckerberg/edu-design-system/issues/1104))

## [1.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.22.0...v1.0.0) (2022-06-01)

### Features

- **cadstep1:** add cad step 1 ([#1073](https://github.com/chanzuckerberg/edu-design-system/issues/1073)) ([1a9406d](https://github.com/chanzuckerberg/edu-design-system/commit/1a9406d9e291f4952ee3dd7a28189cb5e6a14e4b))
- **cardwithnotification:** create card with notification recipe ([#1097](https://github.com/chanzuckerberg/edu-design-system/issues/1097)) ([f741ce9](https://github.com/chanzuckerberg/edu-design-system/commit/f741ce9022b5d3adac664f0fbea12b0cd50ae868))
- **tokens:** use brand colors ([391ce2d](https://github.com/chanzuckerberg/edu-design-system/commit/391ce2dad6756877cedd3bf033bb25d680579187))

## [0.22.0](https://github.com/chanzuckerberg/edu-design-system/compare/v0.21.1...v0.22.0) (2022-05-27)

### Features

- **heading:** use new heading tokens in old heading size props ([c776b38](https://github.com/chanzuckerberg/edu-design-system/commit/c776b3836f772b2286ea986e82110afbbcdfe291))
- use Graphik as primary font family ([e8b30d5](https://github.com/chanzuckerberg/edu-design-system/commit/e8b30d5ef72008144952dfa813ea6c5045ac1451))

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

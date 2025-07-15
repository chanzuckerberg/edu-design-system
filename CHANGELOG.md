# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [16.2.0](https://github.com/chanzuckerberg/edu-design-system/compare/v16.1.1...v16.2.0) (2025-07-15)


### Features

* **Avatar:** add in 2.0 component ([1473cd2](https://github.com/chanzuckerberg/edu-design-system/commit/1473cd26e8b24bcd747cc024a5fc5ecffc6a81cf))
* **Toggle:** update toggle component to match render design ([#2207](https://github.com/chanzuckerberg/edu-design-system/issues/2207)) ([5ccee24](https://github.com/chanzuckerberg/edu-design-system/commit/5ccee246d01b67f43c59d74c7fcf9b71701994f2))


### Bug Fixes

* **AppNotification:** add in dynamic updates to children based on variant ([#2208](https://github.com/chanzuckerberg/edu-design-system/issues/2208)) ([7ca7cae](https://github.com/chanzuckerberg/edu-design-system/commit/7ca7cae12c5cea832840bc1fb16a11552fbd093d))
* **Link:** update font size handling to only use standalone context ([#2206](https://github.com/chanzuckerberg/edu-design-system/issues/2206)) ([26f322d](https://github.com/chanzuckerberg/edu-design-system/commit/26f322d2a1aa3c3376a0fe49274c74016069a42b))
* **Modal:** adjust handling of borders for modal content ([#2211](https://github.com/chanzuckerberg/edu-design-system/issues/2211)) ([1a794da](https://github.com/chanzuckerberg/edu-design-system/commit/1a794daf6a97c9f3c225e6a5ee98093b85f5b57c))
* **Modal:** handle heights and widths for size:large modals ([#2205](https://github.com/chanzuckerberg/edu-design-system/issues/2205)) ([71b0edc](https://github.com/chanzuckerberg/edu-design-system/commit/71b0edc3108d1e65448ec5e22649f7941ac704b0))

### [16.1.1](https://github.com/chanzuckerberg/edu-design-system/compare/v16.1.0...v16.1.1) (2025-07-01)


### Bug Fixes

* **scripts:** update script wrapper to use proper tier 1 mode ([#2201](https://github.com/chanzuckerberg/edu-design-system/issues/2201)) ([d945c8a](https://github.com/chanzuckerberg/edu-design-system/commit/d945c8ae83c8c657b1e719c9448820580b7a21a1))

## [16.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v16.0.1...v16.1.0) (2025-06-10)


### Features

* **InputField:** add support for sublabel ([bc8efbf](https://github.com/chanzuckerberg/edu-design-system/commit/bc8efbf141bd96cdad06c5965440fec10500a5a1))
* **script:** add interactive options for selecting token tier information ([#2195](https://github.com/chanzuckerberg/edu-design-system/issues/2195)) ([f31ce26](https://github.com/chanzuckerberg/edu-design-system/commit/f31ce26b11484cff6fb802a532961ffd2895179d))
* **Select:** add support for sublabel ([88ceaaf](https://github.com/chanzuckerberg/edu-design-system/commit/88ceaaf3c47f3602485c677241fb9781105e0575))
* **TextareaField:** add support for sublabel ([1c9bc42](https://github.com/chanzuckerberg/edu-design-system/commit/1c9bc42e88777e131ff19b10bc1090600f55df0c))
* **UnorderedList,OrderedList:** add in list components 1.0 ([#2194](https://github.com/chanzuckerberg/edu-design-system/issues/2194)) ([33ac1ce](https://github.com/chanzuckerberg/edu-design-system/commit/33ac1ce3bb25a23cc104d4315c2d25af39a28b6f))


### Bug Fixes

* **accessibility:** handle aria descriptions properly ([bf8df4a](https://github.com/chanzuckerberg/edu-design-system/commit/bf8df4a56de234a4fd23002cd9ebea59981d5ac8))
* **deps:** update all non-major dependencies ([#2192](https://github.com/chanzuckerberg/edu-design-system/issues/2192)) ([b032094](https://github.com/chanzuckerberg/edu-design-system/commit/b0320940375dd969c020bbd2f63ca7f462394f2d))
* **storybook:** add support for additional component versions ([9bcc1a1](https://github.com/chanzuckerberg/edu-design-system/commit/9bcc1a17a46a455714144541d0409bf2a5abb5e1))

### [16.0.1](https://github.com/chanzuckerberg/edu-design-system/compare/v16.0.0...v16.0.1) (2025-05-26)


### Bug Fixes

* **Button:** update minimum width for medium button ([#2188](https://github.com/chanzuckerberg/edu-design-system/issues/2188)) ([86395a2](https://github.com/chanzuckerberg/edu-design-system/commit/86395a262b70fc08a724d5438e1c4bb10133747b))
* **scripts:** add in checks for unknown types ([#2186](https://github.com/chanzuckerberg/edu-design-system/issues/2186)) ([0ce0c28](https://github.com/chanzuckerberg/edu-design-system/commit/0ce0c28f08c17a828dba8cff475dd3a2453e3f9c))
* **scripts:** address handling of color types ([#2190](https://github.com/chanzuckerberg/edu-design-system/issues/2190)) ([b81e0dc](https://github.com/chanzuckerberg/edu-design-system/commit/b81e0dcb72bf419dd3de357325fec00a96cced6c))
* **tailwind:** adjust config creation to avoid TypeScript issues ([#2189](https://github.com/chanzuckerberg/edu-design-system/issues/2189)) ([14f4225](https://github.com/chanzuckerberg/edu-design-system/commit/14f4225cf977c45cbabc85c01ac80c3bb7f227ea))

## [16.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.12.0...v16.0.0) (2025-05-12)


### ⚠ BREAKING CHANGES

* **Avatar:** remove 1.x component export
* **typography:** introduce 2.0 tokens and component updates (#2167)
* apply changes from next-major comments in code (#2164)
* remove items marked as deprecated [EDS-1543] (#2156)
* **deps:** update dependency ts-morph to v25 (#2158)
* remove horizontalstepper component [EDS-1539] (#2153)
* update HeadlessUI to 2.x (#2148)
* remove progressbar component [EDS-1538] (#2152)
* remove searchbar component [EDS-1537] (#2151)
* remove Badge component [EDS-1536] (#2150)
* remove Slider component [EDS-1534] (#2149)

### Features

* apply changes from next-major comments in code ([#2164](https://github.com/chanzuckerberg/edu-design-system/issues/2164)) ([55b8351](https://github.com/chanzuckerberg/edu-design-system/commit/55b83512bd03fa7eee983a28d62eba580456f8e5))
* **Avatar:** remove 1.x component export ([9e9919e](https://github.com/chanzuckerberg/edu-design-system/commit/9e9919e71e9141790c8d64fd973325219a2469a7))
* remove Badge component [EDS-1536] ([#2150](https://github.com/chanzuckerberg/edu-design-system/issues/2150)) ([13eb4e2](https://github.com/chanzuckerberg/edu-design-system/commit/13eb4e2b1376ff26aa07c8d52d492bdb2803cb00))
* remove horizontalstepper component [EDS-1539] ([#2153](https://github.com/chanzuckerberg/edu-design-system/issues/2153)) ([75ba3f0](https://github.com/chanzuckerberg/edu-design-system/commit/75ba3f029e22f45bd7f7c82df5673d56fcd8be24))
* remove items marked as deprecated [EDS-1543] ([#2156](https://github.com/chanzuckerberg/edu-design-system/issues/2156)) ([cd03452](https://github.com/chanzuckerberg/edu-design-system/commit/cd03452533f7f5fb26f774d677f70cdd5acc41e4))
* remove progressbar component [EDS-1538] ([#2152](https://github.com/chanzuckerberg/edu-design-system/issues/2152)) ([0af4e55](https://github.com/chanzuckerberg/edu-design-system/commit/0af4e5505f247e2d87be08fdca9eec50d502814d))
* remove searchbar component [EDS-1537] ([#2151](https://github.com/chanzuckerberg/edu-design-system/issues/2151)) ([af943be](https://github.com/chanzuckerberg/edu-design-system/commit/af943bed8182ff631d706b648d0a1c2763405358))
* remove Slider component [EDS-1534] ([#2149](https://github.com/chanzuckerberg/edu-design-system/issues/2149)) ([c4e7617](https://github.com/chanzuckerberg/edu-design-system/commit/c4e7617ccb271a83af7542e670cfb9bff480a7d5))
* **Typography:** add in full set of Graphik fonts and weights ([#2181](https://github.com/chanzuckerberg/edu-design-system/issues/2181)) ([c83e3ff](https://github.com/chanzuckerberg/edu-design-system/commit/c83e3ffe366fa6ee55ab822bbde0a19d7ddaaf84))
* **typography:** introduce 2.0 tokens and component updates ([#2167](https://github.com/chanzuckerberg/edu-design-system/issues/2167)) ([71f05e6](https://github.com/chanzuckerberg/edu-design-system/commit/71f05e6dbb501e72297d427d00847a50cecc8254))
* update HeadlessUI to 2.x ([#2148](https://github.com/chanzuckerberg/edu-design-system/issues/2148)) ([f01a838](https://github.com/chanzuckerberg/edu-design-system/commit/f01a838c5bed840c5e4b1a4b6a0aa575bc370900))


### Bug Fixes

* **deps:** update dependency ts-morph to v25 ([#2158](https://github.com/chanzuckerberg/edu-design-system/issues/2158)) ([c4aac68](https://github.com/chanzuckerberg/edu-design-system/commit/c4aac68d817c8f6117f077d7a2c4889e9d709b9c))
* **InputChip:** add padding to inside left edge to match design ([#2182](https://github.com/chanzuckerberg/edu-design-system/issues/2182)) ([f29c5dc](https://github.com/chanzuckerberg/edu-design-system/commit/f29c5dc038c1b1cc186cbdfeb694a4cd3c85f0e7))
* set background token for text selection in reset file ([b722237](https://github.com/chanzuckerberg/edu-design-system/commit/b7222372ee9e2608426ae8da18a67a598f509a69))
* **storybook:** set default foreground/background colors for story pages ([#2163](https://github.com/chanzuckerberg/edu-design-system/issues/2163)) ([bdf1c48](https://github.com/chanzuckerberg/edu-design-system/commit/bdf1c4882130e2a4aaa28b1c20ca8166187ae5ed))
* **TabGroup:** use proper tier 2+ tokens with component ([#2180](https://github.com/chanzuckerberg/edu-design-system/issues/2180)) ([a35515d](https://github.com/chanzuckerberg/edu-design-system/commit/a35515deb2e4710a392b3badb5e8b15e2a77d21c))

## [15.12.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.11.2...v15.12.0) (2025-04-25)


### Features

* **AppNotification:** add variant prop with assert ([#2162](https://github.com/chanzuckerberg/edu-design-system/issues/2162)) ([f3c4228](https://github.com/chanzuckerberg/edu-design-system/commit/f3c4228e22b0603bea6bb92cee655a7b8394e728))


### Bug Fixes

* **Button:** add token usage for primary default button on hover ([#2168](https://github.com/chanzuckerberg/edu-design-system/issues/2168)) ([8ab81da](https://github.com/chanzuckerberg/edu-design-system/commit/8ab81da0a5aabbde45c429bd07c9de3da3ed79dd))
* **tokens:** update background, border, text tokens ([#2165](https://github.com/chanzuckerberg/edu-design-system/issues/2165)) ([2ea9658](https://github.com/chanzuckerberg/edu-design-system/commit/2ea965891b1518a8381953f7a3cc1b22c90164f9))

### [15.11.2](https://github.com/chanzuckerberg/edu-design-system/compare/v15.11.1...v15.11.2) (2025-03-31)


### Bug Fixes

* **scripts:** add locality check to value pre-validation ([#2154](https://github.com/chanzuckerberg/edu-design-system/issues/2154)) ([5f2ad71](https://github.com/chanzuckerberg/edu-design-system/commit/5f2ad710d1ba407db94e7a0ccf47a340d36ee449))

### [15.11.1](https://github.com/chanzuckerberg/edu-design-system/compare/v15.11.0...v15.11.1) (2025-03-14)


### Bug Fixes

* apply token and script fixes to sync with design ([ae1988e](https://github.com/chanzuckerberg/edu-design-system/commit/ae1988ec9232f086f9698898f44f2a33ede73e26))
* **Button:** use proper token for border-radius ([974f787](https://github.com/chanzuckerberg/edu-design-system/commit/974f7875467eba1776c7ab1a417ee56773d01134))
* remove typo ([e6dcadf](https://github.com/chanzuckerberg/edu-design-system/commit/e6dcadfbf97de97487fea8ab7e8fe8556a6a6284))
* **scripts:** address bug for internal tier 2 references w/ tests ([cf50066](https://github.com/chanzuckerberg/edu-design-system/commit/cf50066345cb086341608aec886ef957b65c1a01))

## [15.11.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.10.2...v15.11.0) (2025-02-28)


### Features

* **DataTable:** export sort direction enum with types ([#2133](https://github.com/chanzuckerberg/edu-design-system/issues/2133)) ([a0948d6](https://github.com/chanzuckerberg/edu-design-system/commit/a0948d6fbe10677cea9196d5784b4d3b790e3e0b))
* **icon:** add thumb-up-and-down ([#2136](https://github.com/chanzuckerberg/edu-design-system/issues/2136)) ([2c2202a](https://github.com/chanzuckerberg/edu-design-system/commit/2c2202ae33cbb4f274900f93e191036ff34e786c))
* **scripts:** add local mode ([#2135](https://github.com/chanzuckerberg/edu-design-system/issues/2135)) ([965a579](https://github.com/chanzuckerberg/edu-design-system/commit/965a579b75c9681bbaf9067236c80381ab1e2255))
* **scripts:** allow import script to pull using Figma API ([#2132](https://github.com/chanzuckerberg/edu-design-system/issues/2132)) ([5919b30](https://github.com/chanzuckerberg/edu-design-system/commit/5919b30558028dfa690d85f2cdc87f50d14a1e66))


### Bug Fixes

* **Fieldset:** fix label typography ([#2137](https://github.com/chanzuckerberg/edu-design-system/issues/2137)) ([624b757](https://github.com/chanzuckerberg/edu-design-system/commit/624b75797b1a8068ccc205bba1260e468eceb796))

### [15.10.2](https://github.com/chanzuckerberg/edu-design-system/compare/v15.10.1...v15.10.2) (2025-02-15)


### Bug Fixes

* **button:** update button sizes in icon only to have a minimum width ([#2130](https://github.com/chanzuckerberg/edu-design-system/issues/2130)) ([8a312e8](https://github.com/chanzuckerberg/edu-design-system/commit/8a312e8c0e6acbe9e9b0aeeb5325bf97761b0298))

### [15.10.1](https://github.com/chanzuckerberg/edu-design-system/compare/v15.10.0...v15.10.1) (2025-02-03)

## [15.10.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.9.0...v15.10.0) (2025-01-21)


### Features

* **TabGroup:** update handling for tab item hover states ([#2124](https://github.com/chanzuckerberg/edu-design-system/issues/2124)) ([8b6cb4e](https://github.com/chanzuckerberg/edu-design-system/commit/8b6cb4e151766ae1dbec2f098fd9407d452b1939))


### Bug Fixes

* **ToastNotification:** fix typo in prop name ([#2122](https://github.com/chanzuckerberg/edu-design-system/issues/2122)) ([8c70d28](https://github.com/chanzuckerberg/edu-design-system/commit/8c70d281a711a9c9099e56155e7023c3650caaa6))

## [15.9.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.8.0...v15.9.0) (2024-12-20)


### Features

* **VisualPageIndicator:** introduce 1.0 component ([#2118](https://github.com/chanzuckerberg/edu-design-system/issues/2118)) ([3df98a3](https://github.com/chanzuckerberg/edu-design-system/commit/3df98a3d21f246c7e56b2a6f8d280baba2b2e5c3))

## [15.8.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.7.0...v15.8.0) (2024-12-11)


### Features

* **SelectionChip:** introduce 1.0 component ([#2112](https://github.com/chanzuckerberg/edu-design-system/issues/2112)) ([6d4a3f4](https://github.com/chanzuckerberg/edu-design-system/commit/6d4a3f42b0473306dd69a27a160df47c6a57baf1))

## [15.7.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.6.0...v15.7.0) (2024-11-18)


### Features

* **InputChip:** add 1.0 component ([#2097](https://github.com/chanzuckerberg/edu-design-system/issues/2097)) ([2f68041](https://github.com/chanzuckerberg/edu-design-system/commit/2f68041191bffd02f5843839eac7a18c96079dd7))
* **Tag:** update to 2.0 styles ([#2087](https://github.com/chanzuckerberg/edu-design-system/issues/2087)) ([a344222](https://github.com/chanzuckerberg/edu-design-system/commit/a3442228991c866ca3c8c62137085cf1ca2a3b48))


### Bug Fixes

* **deps:** update dependency ts-morph to v24 ([#2102](https://github.com/chanzuckerberg/edu-design-system/issues/2102)) ([350c72b](https://github.com/chanzuckerberg/edu-design-system/commit/350c72b244a85a053fc943224f019227d1bf4729))

## [15.6.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.5.0...v15.6.0) (2024-11-05)


### Features

* **DataTable:** allow for pinning columns ([#2084](https://github.com/chanzuckerberg/edu-design-system/issues/2084)) ([86d7d07](https://github.com/chanzuckerberg/edu-design-system/commit/86d7d0716ad9dc7af6bfd56c98166b1cf931e571))


### Bug Fixes

* **deps:** update dependency lilconfig to v3 ([#2079](https://github.com/chanzuckerberg/edu-design-system/issues/2079)) ([6f720a4](https://github.com/chanzuckerberg/edu-design-system/commit/6f720a452a0c2e6982ad1f42175c4fc62a9268bc))
* **Select:** pull z-index of select options to top ([#2081](https://github.com/chanzuckerberg/edu-design-system/issues/2081)) ([6f73cfb](https://github.com/chanzuckerberg/edu-design-system/commit/6f73cfb57dbcd95be2f62e51d463ab442a3cacb7))

## [15.5.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.4.1...v15.5.0) (2024-10-18)


### Features

* **DataTable:** add support for table row statuses ([#2073](https://github.com/chanzuckerberg/edu-design-system/issues/2073)) ([c109f52](https://github.com/chanzuckerberg/edu-design-system/commit/c109f52e3f0f3c1aaa16a1cfd698a649aa962290))
* re-export HeadlessUI's Transition component ([#2069](https://github.com/chanzuckerberg/edu-design-system/issues/2069)) ([a4a5fc8](https://github.com/chanzuckerberg/edu-design-system/commit/a4a5fc825f876c8e2e63f1c2bc1952976b949575))


### Bug Fixes

* **DataTable:** fix cell size and border in FF ([#2072](https://github.com/chanzuckerberg/edu-design-system/issues/2072)) ([7ffbd56](https://github.com/chanzuckerberg/edu-design-system/commit/7ffbd5631b86b137aabe4d91284cb5e230297b85))
* **Select:** remove label checks from component ([#2068](https://github.com/chanzuckerberg/edu-design-system/issues/2068)) ([8ede09d](https://github.com/chanzuckerberg/edu-design-system/commit/8ede09d24cccc9fdd2a1824a3142b630d10cedc0))

### [15.4.1](https://github.com/chanzuckerberg/edu-design-system/compare/v15.4.0...v15.4.1) (2024-10-04)


### Bug Fixes

* **Button:** specify size for enabled/disabled buttons ([#2063](https://github.com/chanzuckerberg/edu-design-system/issues/2063)) ([39f3af6](https://github.com/chanzuckerberg/edu-design-system/commit/39f3af648f0389433b139239e66d29afe5523bf2))

## [15.4.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.3.1...v15.4.0) (2024-09-26)


### Features

* **Button:** support for not-allowed cursor when disabled ([#2052](https://github.com/chanzuckerberg/edu-design-system/issues/2052)) ([46cb9f6](https://github.com/chanzuckerberg/edu-design-system/commit/46cb9f61b75e3fee77813e574c09bf220c625151))
* **DataTable:** introduce 1.0 component ([#2050](https://github.com/chanzuckerberg/edu-design-system/issues/2050)) ([ffd0e82](https://github.com/chanzuckerberg/edu-design-system/commit/ffd0e82ae0baf1762888afc925d10b1201435f1e)), closes [#2055](https://github.com/chanzuckerberg/edu-design-system/issues/2055)


### Bug Fixes

* **Button:** apply external styles when disabled ([#2060](https://github.com/chanzuckerberg/edu-design-system/issues/2060)) ([e762d8b](https://github.com/chanzuckerberg/edu-design-system/commit/e762d8b5356dc5d5e2c7b4e72358c92ba5226836))

### [15.3.1](https://github.com/chanzuckerberg/edu-design-system/compare/v15.3.0...v15.3.1) (2024-08-26)


### Bug Fixes

* **tailwind:** update animation token export types ([#2047](https://github.com/chanzuckerberg/edu-design-system/issues/2047)) ([0f95301](https://github.com/chanzuckerberg/edu-design-system/commit/0f9530114f7f323b065688c4b5472ce2f041d64d))

## [15.3.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.2.1...v15.3.0) (2024-08-23)


### Features

* **config:** add transition durations for tailwind ([#2036](https://github.com/chanzuckerberg/edu-design-system/issues/2036)) ([aed0f09](https://github.com/chanzuckerberg/edu-design-system/commit/aed0f0941d9d09f8a7b96f2219f6801eefa4ee50))
* **Popover:** update theming to 2.0 ([#2031](https://github.com/chanzuckerberg/edu-design-system/issues/2031)) ([c5ab351](https://github.com/chanzuckerberg/edu-design-system/commit/c5ab3515e1bfe8eafde89ec308547b6d34e0b44d))
* **tokens:** add in additional table tokens ([#2035](https://github.com/chanzuckerberg/edu-design-system/issues/2035)) ([a698a5b](https://github.com/chanzuckerberg/edu-design-system/commit/a698a5b4a65af8a7dffa7da908be9d7e05ffc570))
* **tokens:** update visited tokens ([#2034](https://github.com/chanzuckerberg/edu-design-system/issues/2034)) ([df84c87](https://github.com/chanzuckerberg/edu-design-system/commit/df84c87ecd2ad34b37b90d6774bea284da50d045))


### Bug Fixes

* **Card:** add spacing between eyebrow and title ([#2040](https://github.com/chanzuckerberg/edu-design-system/issues/2040)) ([d6ee15d](https://github.com/chanzuckerberg/edu-design-system/commit/d6ee15d71d9f3df76fe68f1639ac1e442e6cd686))
* **Link:** handle inverse variant for standalone links ([#2042](https://github.com/chanzuckerberg/edu-design-system/issues/2042)) ([351d7fd](https://github.com/chanzuckerberg/edu-design-system/commit/351d7fd850196c44da17985b82d8f150fd37a62b))
* **Popover:** update component version number ([#2038](https://github.com/chanzuckerberg/edu-design-system/issues/2038)) ([9940d76](https://github.com/chanzuckerberg/edu-design-system/commit/9940d76d6ac60e112dee2e39d227bbb695057564))

### [15.2.1](https://github.com/chanzuckerberg/edu-design-system/compare/v15.2.0...v15.2.1) (2024-08-09)


### Bug Fixes

* **Button:** update button padding to match design ([#2027](https://github.com/chanzuckerberg/edu-design-system/issues/2027)) ([15644d3](https://github.com/chanzuckerberg/edu-design-system/commit/15644d38935d32a8660fb5ed47c404d68c8f36ff))
* **Checkbox:** specify a font size for the checked glyph ([#2030](https://github.com/chanzuckerberg/edu-design-system/issues/2030)) ([6777316](https://github.com/chanzuckerberg/edu-design-system/commit/6777316b10ae772fe70e4821536c6e9d8d61b30a))
* **Menu:** remove style overrides to Menu.Button ([#2029](https://github.com/chanzuckerberg/edu-design-system/issues/2029)) ([2ad7b4c](https://github.com/chanzuckerberg/edu-design-system/commit/2ad7b4c3380da2e3572646c75df455d53a13e504))

## [15.2.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.1.0...v15.2.0) (2024-07-25)


### Features

* **Fieldset:** update styles to support new 2.0 components ([#2023](https://github.com/chanzuckerberg/edu-design-system/issues/2023)) ([e542b32](https://github.com/chanzuckerberg/edu-design-system/commit/e542b32a5e205236baf02597d1595b71185cccd7))


### Bug Fixes

* **Button:** update typography tokens to match design ([#2019](https://github.com/chanzuckerberg/edu-design-system/issues/2019)) ([3b94114](https://github.com/chanzuckerberg/edu-design-system/commit/3b9411443323050ef829e509443b2bde6db135e4))
* **InputField:** align text content with inputWithin spacing ([#2020](https://github.com/chanzuckerberg/edu-design-system/issues/2020)) ([e87767b](https://github.com/chanzuckerberg/edu-design-system/commit/e87767bd00bd81828b67a8e651e16df0b955e585))

## [15.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.1...v15.1.0) (2024-07-15)


### Features

* add runtime warning/errors to components ([#2007](https://github.com/chanzuckerberg/edu-design-system/issues/2007)) ([661130b](https://github.com/chanzuckerberg/edu-design-system/commit/661130b6917d3f80831863f6e3e447a35b048795))
* **InputField:** add show/hide button for password field type ([#2006](https://github.com/chanzuckerberg/edu-design-system/issues/2006)) ([52d9ca0](https://github.com/chanzuckerberg/edu-design-system/commit/52d9ca04dd2ecf9b0c492e4b541e787cf8fd9860))
* **Modal:** add height property to modal API ([#2011](https://github.com/chanzuckerberg/edu-design-system/issues/2011)) ([8d0c68f](https://github.com/chanzuckerberg/edu-design-system/commit/8d0c68f6d91910590872e10e9dd5fe4671f4807b))


### Bug Fixes

* **Icon:** update pencil icon to latest design ([#2016](https://github.com/chanzuckerberg/edu-design-system/issues/2016)) ([cb8d1a7](https://github.com/chanzuckerberg/edu-design-system/commit/cb8d1a787f33e6ecb659f79ee38b2933df18a247))
* **Link:** apply font weight to standalone sizes ([#2015](https://github.com/chanzuckerberg/edu-design-system/issues/2015)) ([2e47271](https://github.com/chanzuckerberg/edu-design-system/commit/2e47271d110735102ebd00daf7bf95a5a0cdf237))
* **Select:** expose generic types to allow by to pass type checks ([#2008](https://github.com/chanzuckerberg/edu-design-system/issues/2008)) ([421c91b](https://github.com/chanzuckerberg/edu-design-system/commit/421c91b41d2691441f94bd71801bbfdeca529d5f))

### [15.0.1](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0...v15.0.1) (2024-07-02)


### Bug Fixes

* P in P ([#1999](https://github.com/chanzuckerberg/edu-design-system/issues/1999)) ([7566e2c](https://github.com/chanzuckerberg/edu-design-system/commit/7566e2c627f56792bcc6dd8858458425ea7b35a7))
* **Table:** allow nodes in header cells ([#2001](https://github.com/chanzuckerberg/edu-design-system/issues/2001)) ([e471fad](https://github.com/chanzuckerberg/edu-design-system/commit/e471fadee83c07fdb784e9c15ae46f3f2a285be7))

## [15.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.18...v15.0.0) (2024-06-20)


### ⚠ BREAKING CHANGES

* pre-cleanup changes to prepare for v15 (#1992)

### Features

* pre-cleanup changes to prepare for v15 ([#1992](https://github.com/chanzuckerberg/edu-design-system/issues/1992)) ([dbce0d2](https://github.com/chanzuckerberg/edu-design-system/commit/dbce0d27ddba515248658b0708f1cb1f8af82052))


### Bug Fixes

* **Button:** allow as prop on button ([#1994](https://github.com/chanzuckerberg/edu-design-system/issues/1994)) ([37d1f5b](https://github.com/chanzuckerberg/edu-design-system/commit/37d1f5b0d95cb47b2eaa1d81234f576f283122e4))
* **FieldNote:** fix icon alignment and size issues ([367717e](https://github.com/chanzuckerberg/edu-design-system/commit/367717ebb16c01890ac240b53899d530368f72da))

## [15.0.0-alpha.18](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.17...v15.0.0-alpha.18) (2024-06-13)


### Features

* **Typography:** add typography-overline-lg ([#1993](https://github.com/chanzuckerberg/edu-design-system/issues/1993)) ([36eb3c9](https://github.com/chanzuckerberg/edu-design-system/commit/36eb3c9986214d0cda7039aba6b0fca7e740c94e))


### Bug Fixes

* handle required disabled field hints ([#1990](https://github.com/chanzuckerberg/edu-design-system/issues/1990)) ([11c0883](https://github.com/chanzuckerberg/edu-design-system/commit/11c088329494b173cce8bce65dea46fbd1aa4be4))
* **Select:** allow attachment of headlessUI props to label ([#1991](https://github.com/chanzuckerberg/edu-design-system/issues/1991)) ([c3ce70f](https://github.com/chanzuckerberg/edu-design-system/commit/c3ce70f555903d8061bca62cfd53095e126cb980))

## [15.0.0-alpha.17](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.16...v15.0.0-alpha.17) (2024-06-12)


### Features

* **Tooltip:** add inverse variant ([#1984](https://github.com/chanzuckerberg/edu-design-system/issues/1984)) ([d6ccc8d](https://github.com/chanzuckerberg/edu-design-system/commit/d6ccc8d7911ea297c4b5bce4924c56291aa7495b))


### Bug Fixes

* **Button:** align button icons and text with layouts ([#1988](https://github.com/chanzuckerberg/edu-design-system/issues/1988)) ([33fbd51](https://github.com/chanzuckerberg/edu-design-system/commit/33fbd5162f79e62a44d6215d0703c6276c2d86ae))
* remove circular dependency for radio/checkbox ([dffed3c](https://github.com/chanzuckerberg/edu-design-system/commit/dffed3c4ba4b45012d4cdcdea7a859b327fb4b7b))
* use aria-disabled when disabled prop is applied ([#1987](https://github.com/chanzuckerberg/edu-design-system/issues/1987)) ([1fe3b0f](https://github.com/chanzuckerberg/edu-design-system/commit/1fe3b0f08ecec651634840d3bd4a8aafa1b900e6))

## [15.0.0-alpha.16](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.15...v15.0.0-alpha.16) (2024-06-07)


### Features

* **Icon:** add new and updated icons ([#1981](https://github.com/chanzuckerberg/edu-design-system/issues/1981)) ([fc7f842](https://github.com/chanzuckerberg/edu-design-system/commit/fc7f8424935554b1e4768fab8f59d2377a4b9d22))
* **Link:** add inverse text visited color token and apply ([#1982](https://github.com/chanzuckerberg/edu-design-system/issues/1982)) ([98dec99](https://github.com/chanzuckerberg/edu-design-system/commit/98dec9936a4377834c8c0241f670bf6dbe83fb23))
* **ToastNotification:** add dismissType with automated dismissing ([#1980](https://github.com/chanzuckerberg/edu-design-system/issues/1980)) ([8545f14](https://github.com/chanzuckerberg/edu-design-system/commit/8545f144589d5f7ae38f857428770b3620978553))


### Bug Fixes

* **Button:** add in missing inverse disabled treatments ([#1976](https://github.com/chanzuckerberg/edu-design-system/issues/1976)) ([8389f35](https://github.com/chanzuckerberg/edu-design-system/commit/8389f35a8820c2e5c5823b31b3a9f2dd512263d9))
* **Button:** mark disable usage as invalid ([#1977](https://github.com/chanzuckerberg/edu-design-system/issues/1977)) ([99a70d3](https://github.com/chanzuckerberg/edu-design-system/commit/99a70d3bd5027f6bceb149c206bce4ce8412c8bc))
* **Button:** use text-utility-default state tokens ([#1979](https://github.com/chanzuckerberg/edu-design-system/issues/1979)) ([e754588](https://github.com/chanzuckerberg/edu-design-system/commit/e754588af113cad67309b63825310427791499ac))
* **Link:** address problems with link color inheritance ([#1975](https://github.com/chanzuckerberg/edu-design-system/issues/1975)) ([78d173e](https://github.com/chanzuckerberg/edu-design-system/commit/78d173e6366e60180685cbe85a096d88912e1f27))
* **Link:** align icons in flexed standalone container ([#1978](https://github.com/chanzuckerberg/edu-design-system/issues/1978)) ([3a6a20d](https://github.com/chanzuckerberg/edu-design-system/commit/3a6a20dfe9322622475e9572f653a20963ddde25))

## [15.0.0-alpha.15](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.14...v15.0.0-alpha.15) (2024-06-05)


### ⚠ BREAKING CHANGES

* move from isWarning and isError to status prop (#1973)

### Features

* **Link:** add inverse variant (with variant prop) ([#1972](https://github.com/chanzuckerberg/edu-design-system/issues/1972)) ([bdbf9df](https://github.com/chanzuckerberg/edu-design-system/commit/bdbf9dffd0abcea31c4c003d2be0187db84fdbca))
* move from isWarning and isError to status prop ([#1973](https://github.com/chanzuckerberg/edu-design-system/issues/1973)) ([56066ae](https://github.com/chanzuckerberg/edu-design-system/commit/56066ae6246cef5af05b8d4a621e76dce07b25ee))

## [15.0.0-alpha.14](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.13...v15.0.0-alpha.14) (2024-05-31)


### ⚠ BREAKING CHANGES

* update tier 1 and 2 typography tokens (#1969)

### Features

* **Button:** update interactive styles for tertiary buttons ([#1970](https://github.com/chanzuckerberg/edu-design-system/issues/1970)) ([288da8c](https://github.com/chanzuckerberg/edu-design-system/commit/288da8cb2b781894a64092c13b5209d7202aa2f3))
* update tier 1 and 2 typography tokens ([#1969](https://github.com/chanzuckerberg/edu-design-system/issues/1969)) ([9dea463](https://github.com/chanzuckerberg/edu-design-system/commit/9dea4632abb40d77cc2dc79d74900988bc005154))

## [15.0.0-alpha.13](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.10...v15.0.0-alpha.13) (2024-05-28)


### ⚠ BREAKING CHANGES

* **LoadingIndicator:** introduce 2.0 component (#1963)

### Features

* add `eds-migrate` script for running codemods on major version upgrades ([#1951](https://github.com/chanzuckerberg/edu-design-system/issues/1951)) ([109a0e5](https://github.com/chanzuckerberg/edu-design-system/commit/109a0e583198e79a4ae819e2be5ba67b83b2264a))
* **LoadingIndicator:** introduce 2.0 component ([#1963](https://github.com/chanzuckerberg/edu-design-system/issues/1963)) ([26faab7](https://github.com/chanzuckerberg/edu-design-system/commit/26faab7c27d8adf5d97fbb33068cf0ec3c66f5b4))
* **LoadingIndicator:** update stroke width in Button ([#1964](https://github.com/chanzuckerberg/edu-design-system/issues/1964)) ([bac3594](https://github.com/chanzuckerberg/edu-design-system/commit/bac35945124906ac26c1508c0154aab25a4146d9))
* **Menu:** set new default for menu trigger ([#1965](https://github.com/chanzuckerberg/edu-design-system/issues/1965)) ([24815c2](https://github.com/chanzuckerberg/edu-design-system/commit/24815c276d5e8f4698a84dcc21f6fdd6b6b44d09))
* **Select:** support horizontal labels ([#1962](https://github.com/chanzuckerberg/edu-design-system/issues/1962)) ([675ad5f](https://github.com/chanzuckerberg/edu-design-system/commit/675ad5fa45f4127bedf38722273f3e7bb83c8a53))
* **TabGroup:** add inverse variant treatment ([#1960](https://github.com/chanzuckerberg/edu-design-system/issues/1960)) ([402e433](https://github.com/chanzuckerberg/edu-design-system/commit/402e433ae3358c3d9326d48ebba9c5a4019bcd35))
* **tokens:** add border-utility-inteactive-secondary tokens ([#1959](https://github.com/chanzuckerberg/edu-design-system/issues/1959)) ([72daa0b](https://github.com/chanzuckerberg/edu-design-system/commit/72daa0b137b674272fe14a23c49bacc0700b2187))


### Bug Fixes

* **FieldNote:** adjust layout for icon and text lockup ([5788fe5](https://github.com/chanzuckerberg/edu-design-system/commit/5788fe509bee8123150a4a0ee7333ae7398f7b22))

## [15.0.0-alpha.12](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.11...v15.0.0-alpha.12) (2024-05-23)


### Bug Fixes

* handle more cases ([a7e5830](https://github.com/chanzuckerberg/edu-design-system/commit/a7e5830cf1a831e6df3f79a42e8c49003f11a538))

## [15.0.0-alpha.11](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.10...v15.0.0-alpha.11) (2024-05-23)


### Features

* add eds-migrate command ([b45061e](https://github.com/chanzuckerberg/edu-design-system/commit/b45061ec8dfb322ac569b842a4b24da91e741c3c))
* **tokens:** add border-utility-inteactive-secondary tokens ([#1959](https://github.com/chanzuckerberg/edu-design-system/issues/1959)) ([72daa0b](https://github.com/chanzuckerberg/edu-design-system/commit/72daa0b137b674272fe14a23c49bacc0700b2187))

## [15.0.0-alpha.10](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.9...v15.0.0-alpha.10) (2024-05-22)


### ⚠ BREAKING CHANGES

* **FieldLabel:** introduce 2.0 component (#1953)

### Features

* allow react nodes on subtitle ([#1954](https://github.com/chanzuckerberg/edu-design-system/issues/1954)) ([fc6bb78](https://github.com/chanzuckerberg/edu-design-system/commit/fc6bb7862cde9a7cf5ff611e60ec521a6b9a5eb0))
* **FieldLabel:** introduce 2.0 component ([#1953](https://github.com/chanzuckerberg/edu-design-system/issues/1953)) ([6198b9e](https://github.com/chanzuckerberg/edu-design-system/commit/6198b9e17c5e3209b53b3da86156883b48e0cf7f))


### Bug Fixes

* **Card:** address QA design and eng feedback ([#1958](https://github.com/chanzuckerberg/edu-design-system/issues/1958)) ([14c73fe](https://github.com/chanzuckerberg/edu-design-system/commit/14c73feed267bc3bf2f64e6558bf50a7bd33c318))
* **Modal:** address QA updates ([#1957](https://github.com/chanzuckerberg/edu-design-system/issues/1957)) ([0d5a414](https://github.com/chanzuckerberg/edu-design-system/commit/0d5a414c7dfa8c9ab8f3cb42e8232ef8f3dfd42f))

## [15.0.0-alpha.9](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.8...v15.0.0-alpha.9) (2024-05-17)


### Features

* **Link:** allow nodes to be used in link body ([#1950](https://github.com/chanzuckerberg/edu-design-system/issues/1950)) ([01970a2](https://github.com/chanzuckerberg/edu-design-system/commit/01970a2ada87de05d016ff4adee86fdcd260689a))


### Bug Fixes

* **Accordion:** address QA updates from design ([#1948](https://github.com/chanzuckerberg/edu-design-system/issues/1948)) ([56fa437](https://github.com/chanzuckerberg/edu-design-system/commit/56fa437e69d47d5bda5e624d4ff2aa2ffc70cc1d))
* **AppNotification:** apply usage feedback ([#1949](https://github.com/chanzuckerberg/edu-design-system/issues/1949)) ([06cc194](https://github.com/chanzuckerberg/edu-design-system/commit/06cc194bcbb57b8067f0cd16188578abbecfeaf1))
* **NumberIcon:** address QA design notes ([#1947](https://github.com/chanzuckerberg/edu-design-system/issues/1947)) ([007d757](https://github.com/chanzuckerberg/edu-design-system/commit/007d757e16245dbc945c84b7ffd9c2053fff9a42))

## [15.0.0-alpha.8](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.7...v15.0.0-alpha.8) (2024-05-16)


### ⚠ BREAKING CHANGES

* **AppNotification:** introduce 2.0 component (#1945)
* **ToastNotification:** rename from Toast to ToastNotification (#1944)
* **typography:** update typography tokens and fonts (#1942)

### Features

* **AppNotification:** introduce 2.0 component ([#1945](https://github.com/chanzuckerberg/edu-design-system/issues/1945)) ([489e8d9](https://github.com/chanzuckerberg/edu-design-system/commit/489e8d96a5da49d13c0f62c2bfe4baba2fb380d4))
* **ToastNotification:** rename from Toast to ToastNotification ([#1944](https://github.com/chanzuckerberg/edu-design-system/issues/1944)) ([07284c2](https://github.com/chanzuckerberg/edu-design-system/commit/07284c265ef630c1ef6edb61ce7f187b60cb976f))
* **typography:** update typography tokens and fonts ([#1942](https://github.com/chanzuckerberg/edu-design-system/issues/1942)) ([3140996](https://github.com/chanzuckerberg/edu-design-system/commit/3140996e697358aa4a89063c60416cbf611ebe20))


### Bug Fixes

* **Button:** address QA design feedback ([#1940](https://github.com/chanzuckerberg/edu-design-system/issues/1940)) ([1e431b4](https://github.com/chanzuckerberg/edu-design-system/commit/1e431b4fa0dd5106f57000ca83ff9cf669a96023))
* **ButtonGroup:** address QA design updates ([#1943](https://github.com/chanzuckerberg/edu-design-system/issues/1943)) ([1595a18](https://github.com/chanzuckerberg/edu-design-system/commit/1595a18090954aa46c114c979553393e3ca26454))
* **InlineNotification:** address QA updates ([#1937](https://github.com/chanzuckerberg/edu-design-system/issues/1937)) ([d96ab79](https://github.com/chanzuckerberg/edu-design-system/commit/d96ab79ca29fe8c356f424f66f61a71d0cb5ea4a))
* **TabGroup:** address QA comments and designs ([#1938](https://github.com/chanzuckerberg/edu-design-system/issues/1938)) ([48e92d4](https://github.com/chanzuckerberg/edu-design-system/commit/48e92d481ab73d5d438956c1ab67c15e1aab084c))
* **TextareaField:** address QA updates ([#1936](https://github.com/chanzuckerberg/edu-design-system/issues/1936)) ([3aa5c94](https://github.com/chanzuckerberg/edu-design-system/commit/3aa5c9454706c9029b7a50cf73fdf9590afdef09))
* update token and theming ([#1946](https://github.com/chanzuckerberg/edu-design-system/issues/1946)) ([5546205](https://github.com/chanzuckerberg/edu-design-system/commit/5546205996edfdc7fdc744180f07375fecc96c64))

## [15.0.0-alpha.7](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.6...v15.0.0-alpha.7) (2024-05-13)


### ⚠ BREAKING CHANGES

* adjust responsive and spacing tokens/config (#1933)

### Features

* adjust responsive and spacing tokens/config ([#1933](https://github.com/chanzuckerberg/edu-design-system/issues/1933)) ([b19e453](https://github.com/chanzuckerberg/edu-design-system/commit/b19e453db72ddf2e5863e4bf1cb4011847f4d151))


### Bug Fixes

* **Button:** align disabled treatment to latest design ([#1931](https://github.com/chanzuckerberg/edu-design-system/issues/1931)) ([01a9d71](https://github.com/chanzuckerberg/edu-design-system/commit/01a9d7108946c7840646ab03e11e5b809a70a24a))
* sync color tokens with design ([#1929](https://github.com/chanzuckerberg/edu-design-system/issues/1929)) ([146df70](https://github.com/chanzuckerberg/edu-design-system/commit/146df70565f82a1093f255cfd465af6c1df22d2d))

## [15.0.0-alpha.6](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.5...v15.0.0-alpha.6) (2024-05-06)

## [15.0.0-alpha.5](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.4...v15.0.0-alpha.5) (2024-04-30)


### ⚠ BREAKING CHANGES

* **Icon:** introduce 2.0 component (#1925)

### Features

* **Icon:** introduce 2.0 component ([#1925](https://github.com/chanzuckerberg/edu-design-system/issues/1925)) ([3e40638](https://github.com/chanzuckerberg/edu-design-system/commit/3e40638e869929eda64cabcc9c6cfde5e4fb8166))

## [15.0.0-alpha.4](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.3...v15.0.0-alpha.4) (2024-04-29)

## [15.0.0-alpha.3](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.2...v15.0.0-alpha.3) (2024-04-26)


### ⚠ BREAKING CHANGES

* **tokens:** remove units from design system tokens (#1912)

### Features

* **tokens:** remove units from design system tokens ([#1912](https://github.com/chanzuckerberg/edu-design-system/issues/1912)) ([ab666cf](https://github.com/chanzuckerberg/edu-design-system/commit/ab666cfafd2d4fcfedddbaf49799f21b58da04a4))

## [15.0.0-alpha.2](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.1...v15.0.0-alpha.2) (2024-04-22)


### Features

* add support for extended nav and action components ([#1918](https://github.com/chanzuckerberg/edu-design-system/issues/1918)) ([f4a541e](https://github.com/chanzuckerberg/edu-design-system/commit/f4a541e84a8fb91a2a5261eb5542323b30391233))

## [15.0.0-alpha.1](https://github.com/chanzuckerberg/edu-design-system/compare/v15.0.0-alpha.0...v15.0.0-alpha.1) (2024-04-05)


### Bug Fixes

* disambiguate old token colors ([#1913](https://github.com/chanzuckerberg/edu-design-system/issues/1913)) ([758eb2d](https://github.com/chanzuckerberg/edu-design-system/commit/758eb2d06a2851a895198998e788fff2f60ec302))

## [15.0.0-alpha.0](https://github.com/chanzuckerberg/edu-design-system/compare/v14.0.0...v15.0.0-alpha.0) (2024-04-04)


### ⚠ BREAKING CHANGES

* **TextareaField:** introduce 2.0 component (#1911)
* **Card:** introduce 2.0 component (#1908)
* **Modal:** introduce 2.0 component (#1907)
* **Toast:** introduce 2.0 component (#1906)
* **Tooltip:** introduce 2.0 component (#1905)
* **BannerNotification:** introduce 2.0 component (#1904)
* **InlineNotification:** introduce 2.0 component (#1903)
* **Accordion:** introduce 2.0 component (#1901)
* **Select:** introduce 2.0 component (#1899)
* **config:** use literal values in style-dictionary config (#1900)
* **InputField:** introduce 2.0 component (#1898)
* **Checkbox:** introduce 2.0 component (#1897)
* **Radio:** introduce 2.0 component (#1895)
* **Menu:** introduce 2.0 component (#1894)
* **TabGroup:** introduce 2.0 component (#1892)
* **NumberIcon:** introduce 2.0 component (#1891)
* **Link:** introduce v2.0 component (#1890)
* **Button:** introduce v2.0 component (#1889)

### Features

* **Accordion:** introduce 2.0 component ([#1901](https://github.com/chanzuckerberg/edu-design-system/issues/1901)) ([cf2086b](https://github.com/chanzuckerberg/edu-design-system/commit/cf2086b52607cb4a04fbdd57d173adece1082fe1))
* add new v2.0 component tokens ([#1888](https://github.com/chanzuckerberg/edu-design-system/issues/1888)) ([3607a5d](https://github.com/chanzuckerberg/edu-design-system/commit/3607a5d16828331f611a6cc75ccd33c05faea2b7))
* **BannerNotification:** introduce 2.0 component ([#1904](https://github.com/chanzuckerberg/edu-design-system/issues/1904)) ([cda9e4b](https://github.com/chanzuckerberg/edu-design-system/commit/cda9e4bda52ea994cc1a78d3579c00bd6db5400b))
* **Button:** introduce v2.0 component ([#1889](https://github.com/chanzuckerberg/edu-design-system/issues/1889)) ([a6b446f](https://github.com/chanzuckerberg/edu-design-system/commit/a6b446f73d9d0c399f5dadecd94fe5dcb69c7003))
* **Card:** introduce 2.0 component ([#1908](https://github.com/chanzuckerberg/edu-design-system/issues/1908)) ([cd21b49](https://github.com/chanzuckerberg/edu-design-system/commit/cd21b494e007dba90b635b607f7f42d149996292))
* **Checkbox:** introduce 2.0 component ([#1897](https://github.com/chanzuckerberg/edu-design-system/issues/1897)) ([f3fc767](https://github.com/chanzuckerberg/edu-design-system/commit/f3fc7672c870f69c9efde2db0f2af9463664329f))
* **config:** use literal values in style-dictionary config ([#1900](https://github.com/chanzuckerberg/edu-design-system/issues/1900)) ([e470f4b](https://github.com/chanzuckerberg/edu-design-system/commit/e470f4b150f86bad058231198530efc6ef08d37b))
* **InlineNotification:** introduce 2.0 component ([#1903](https://github.com/chanzuckerberg/edu-design-system/issues/1903)) ([7bff52d](https://github.com/chanzuckerberg/edu-design-system/commit/7bff52d90489e7b15ee5373c0d1c12c95c6ddf38))
* **InputField:** introduce 2.0 component ([#1898](https://github.com/chanzuckerberg/edu-design-system/issues/1898)) ([a3d3984](https://github.com/chanzuckerberg/edu-design-system/commit/a3d3984555ca76f228a0d8e02744137983025d24))
* **Link:** introduce v2.0 component ([#1890](https://github.com/chanzuckerberg/edu-design-system/issues/1890)) ([bdce10a](https://github.com/chanzuckerberg/edu-design-system/commit/bdce10a700950ab7c8e16e04aa5f4e49b35f88cb))
* **Menu:** introduce 2.0 component ([#1894](https://github.com/chanzuckerberg/edu-design-system/issues/1894)) ([3f540f9](https://github.com/chanzuckerberg/edu-design-system/commit/3f540f9dc25cd99b4ae21363e3772220024f985b))
* **Modal:** introduce 2.0 component ([#1907](https://github.com/chanzuckerberg/edu-design-system/issues/1907)) ([d14c963](https://github.com/chanzuckerberg/edu-design-system/commit/d14c963f9e94454982afcdc5b0ab90f484e47834))
* **NumberIcon:** introduce 2.0 component ([#1891](https://github.com/chanzuckerberg/edu-design-system/issues/1891)) ([cc7e140](https://github.com/chanzuckerberg/edu-design-system/commit/cc7e14094e4d553cfc4cd46a27f509c2ce03d9c5))
* **Radio:** introduce 2.0 component ([#1895](https://github.com/chanzuckerberg/edu-design-system/issues/1895)) ([8ef797f](https://github.com/chanzuckerberg/edu-design-system/commit/8ef797f40c3eaefddb58ee62a9274617238704e8))
* **Select:** introduce 2.0 component ([#1899](https://github.com/chanzuckerberg/edu-design-system/issues/1899)) ([1164b90](https://github.com/chanzuckerberg/edu-design-system/commit/1164b90d6a0a49b8aa26bc24e08e600daf7131d8))
* **TabGroup:** introduce 2.0 component ([#1892](https://github.com/chanzuckerberg/edu-design-system/issues/1892)) ([e952d33](https://github.com/chanzuckerberg/edu-design-system/commit/e952d33cd59b7d87d886408e1819d4d1498b7c7d))
* **TextareaField:** introduce 2.0 component ([#1911](https://github.com/chanzuckerberg/edu-design-system/issues/1911)) ([a68a255](https://github.com/chanzuckerberg/edu-design-system/commit/a68a2557829dc3288bb4ec1a4af8d063d36d2c58))
* **Toast:** introduce 2.0 component ([#1906](https://github.com/chanzuckerberg/edu-design-system/issues/1906)) ([8bce819](https://github.com/chanzuckerberg/edu-design-system/commit/8bce819fa8ca035de488d5e3ad9684fe19aadc63))
* **Tooltip:** introduce 2.0 component ([#1905](https://github.com/chanzuckerberg/edu-design-system/issues/1905)) ([ded98b2](https://github.com/chanzuckerberg/edu-design-system/commit/ded98b27751f90ce859c206fa80ef78aa78866fc))

## [14.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.12.0...v14.0.0) (2024-03-05)


### ⚠ BREAKING CHANGES

* remove Grid and Section from exports (#1876)
* **Text:** remove deprecated props (#1873)
* **Heading:** remove deprecated props and refactor usages (#1872)
* **Link:** remove and reset deprecated props (#1871)
* **Select:** remove deprecated props (#1870)
* **Label:** remove deprecated props (#1868)
* **InputField:** remove unused prop requiredLabel (#1869)
* **InlineNotification:** remove deprecated props from component (#1867)
* **Card:** deprecate orientation prop (#1866)
* **Badge:** deprecate name prop on component (#1865)
* **Skeleton:** deprecate .Rect subcomponent mapping (#1864)
* **Tag:** remove deprecated props and update API (#1862)
* **Tooltip:** remove deprecated props (#1861)
* **Tabs:** combine Tab sub-component into Tabs
* remove deprecated components
* output a single, cjs build

### Features

* **Badge:** deprecate name prop on component ([#1865](https://github.com/chanzuckerberg/edu-design-system/issues/1865)) ([cff5d5e](https://github.com/chanzuckerberg/edu-design-system/commit/cff5d5e2d88e5414a821756db5b31e4fe1c4873e))
* **Card:** deprecate orientation prop ([#1866](https://github.com/chanzuckerberg/edu-design-system/issues/1866)) ([bb160c1](https://github.com/chanzuckerberg/edu-design-system/commit/bb160c14e3a8a26ec2d4ff24a31b6d2f9fca3a98))
* **Heading:** remove deprecated props and refactor usages ([#1872](https://github.com/chanzuckerberg/edu-design-system/issues/1872)) ([a5d6f76](https://github.com/chanzuckerberg/edu-design-system/commit/a5d6f76a333426ef84a68febf337cec5cdb8d1b9))
* **InlineNotification:** remove deprecated props from component ([#1867](https://github.com/chanzuckerberg/edu-design-system/issues/1867)) ([efc6b43](https://github.com/chanzuckerberg/edu-design-system/commit/efc6b430dec5440789e35382707b574f5372e30f))
* **InputField:** remove unused prop requiredLabel ([#1869](https://github.com/chanzuckerberg/edu-design-system/issues/1869)) ([f9d73dd](https://github.com/chanzuckerberg/edu-design-system/commit/f9d73dd2806448a01a4d452fa7bcfc4347a56309))
* **Label:** remove deprecated props ([#1868](https://github.com/chanzuckerberg/edu-design-system/issues/1868)) ([907cc39](https://github.com/chanzuckerberg/edu-design-system/commit/907cc3966be4e519050c2a16c6f0cfb12509308e))
* **Link:** remove and reset deprecated props ([#1871](https://github.com/chanzuckerberg/edu-design-system/issues/1871)) ([552945a](https://github.com/chanzuckerberg/edu-design-system/commit/552945a6ee161f0359f9db48123dbb94bec704ba))
* remove deprecated components ([2538aa6](https://github.com/chanzuckerberg/edu-design-system/commit/2538aa67dc0605210812c9597ce1548bba41070f))
* remove Grid and Section from exports ([#1876](https://github.com/chanzuckerberg/edu-design-system/issues/1876)) ([a0ec79a](https://github.com/chanzuckerberg/edu-design-system/commit/a0ec79a017bacb70f8c9043c3dcb72eb4da2ec31))
* **Select:** remove deprecated props ([#1870](https://github.com/chanzuckerberg/edu-design-system/issues/1870)) ([e0ad463](https://github.com/chanzuckerberg/edu-design-system/commit/e0ad4632aacee1d107e658c977c77a5e733843d1))
* **Skeleton:** deprecate .Rect subcomponent mapping ([#1864](https://github.com/chanzuckerberg/edu-design-system/issues/1864)) ([9d3ffec](https://github.com/chanzuckerberg/edu-design-system/commit/9d3ffecbf8a117a6b6534c2076275f4f1ea5e797))
* **Tabs:** combine Tab sub-component into Tabs ([0479863](https://github.com/chanzuckerberg/edu-design-system/commit/0479863fd27a362aa16db701d96028c2f9a33b9d))
* **Tag:** remove deprecated props and update API ([#1862](https://github.com/chanzuckerberg/edu-design-system/issues/1862)) ([dbfbaa3](https://github.com/chanzuckerberg/edu-design-system/commit/dbfbaa3c04369c7c144d724f3f2ff644b0130a33))
* **Text:** remove deprecated props ([#1873](https://github.com/chanzuckerberg/edu-design-system/issues/1873)) ([13fbc18](https://github.com/chanzuckerberg/edu-design-system/commit/13fbc1808e3cb742ddabc33faa1b30516cde275c))
* **Tooltip:** remove deprecated props ([#1861](https://github.com/chanzuckerberg/edu-design-system/issues/1861)) ([d444607](https://github.com/chanzuckerberg/edu-design-system/commit/d444607ad42bf6779d14fdf1b7f76d7ad316a285))


### Bug Fixes

* output a single, cjs build ([523130e](https://github.com/chanzuckerberg/edu-design-system/commit/523130ed29e411e6ef5d9add27f8b78c2736f88a))
* remove unnecessary type definitions script ([be341c0](https://github.com/chanzuckerberg/edu-design-system/commit/be341c00d6114afbd06191053fa4411676c60eb2))

## [13.12.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.11.0...v13.12.0) (2024-03-04)


### Features

* export ClickableStyleProps ([#1860](https://github.com/chanzuckerberg/edu-design-system/issues/1860)) ([0d1b49e](https://github.com/chanzuckerberg/edu-design-system/commit/0d1b49e525492539a198f97bd98f67c2f8065537))
* **Select:** add support for required in overline ([#1855](https://github.com/chanzuckerberg/edu-design-system/issues/1855)) ([6e44566](https://github.com/chanzuckerberg/edu-design-system/commit/6e445669e53224274bd7edc9f8d9c9cb6210a0e4))


### Bug Fixes

* lodash tree shaking ([#1852](https://github.com/chanzuckerberg/edu-design-system/issues/1852)) ([f55f9cb](https://github.com/chanzuckerberg/edu-design-system/commit/f55f9cb16db9c145ac9d4061f4b714c937888123))
* **Select:** add max height for Select.Options ([#1858](https://github.com/chanzuckerberg/edu-design-system/issues/1858)) ([24ed8bc](https://github.com/chanzuckerberg/edu-design-system/commit/24ed8bc3c9e93312b53ee9b93f982659842a0bfc))

## [13.11.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.11.0-alpha.0...v13.11.0) (2024-02-20)


### Features

* **Select:** add handling for long text in select field ([7c79a6e](https://github.com/chanzuckerberg/edu-design-system/commit/7c79a6e57c9fd0056cc5ec6223a4fd1439a7b210))


### Bug Fixes

* **PopoverListItem:** adjust size of list item when selected ([0496f56](https://github.com/chanzuckerberg/edu-design-system/commit/0496f5608923ae674054d1dad40a232bb0def659))

## [13.11.0-alpha.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.10.0...v13.11.0-alpha.0) (2024-02-15)


### Features

* **script:** add import from figma script ([#1844](https://github.com/chanzuckerberg/edu-design-system/issues/1844)) ([9ed90e5](https://github.com/chanzuckerberg/edu-design-system/commit/9ed90e5bf1a42ce55c7c2b0f3cad1add3c71057c))
* **Select:** enable multi-select ([ced70d5](https://github.com/chanzuckerberg/edu-design-system/commit/ced70d59b653e5132e145e9361c0bc2b358d1b48))


### Bug Fixes

* **Select:** set trigger type to button to prevent submits ([#1843](https://github.com/chanzuckerberg/edu-design-system/issues/1843)) ([d7ea037](https://github.com/chanzuckerberg/edu-design-system/commit/d7ea0370e698a09516eacb9de61af3a63e8c1432))

## [13.10.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.9.0...v13.10.0) (2024-02-01)


### Features

* **Select:** add ability to handle click and change event handlers ([#1839](https://github.com/chanzuckerberg/edu-design-system/issues/1839)) ([54a3de8](https://github.com/chanzuckerberg/edu-design-system/commit/54a3de8e5d1e9416b1ff24a18499ee5f02db3888))
* **Select:** add support for label prop ([#1837](https://github.com/chanzuckerberg/edu-design-system/issues/1837)) ([c032ff2](https://github.com/chanzuckerberg/edu-design-system/commit/c032ff2b35f074076237aab0786325cc7237fa3a))

## [13.9.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.8.1...v13.9.0) (2024-01-19)


### Features

* **Avatar:** adjust typography usages and sizing for icons ([#1830](https://github.com/chanzuckerberg/edu-design-system/issues/1830)) ([7da31e6](https://github.com/chanzuckerberg/edu-design-system/commit/7da31e6d8f9dc973ae03b9337c33bbe00bf7a666))
* **InlineNotification:** remove deprecated variants ([#1833](https://github.com/chanzuckerberg/edu-design-system/issues/1833)) ([cfcf1fa](https://github.com/chanzuckerberg/edu-design-system/commit/cfcf1fae674215cac8fb3ca2101ef77758ecb3c8))
* **Label:** mark optional as deprecated ([#1832](https://github.com/chanzuckerberg/edu-design-system/issues/1832)) ([8067082](https://github.com/chanzuckerberg/edu-design-system/commit/806708291d9dc8733eee3b782c29cb1409f1cb95))
* **tokens:** output token literal values in a new tailwind config file ([#1828](https://github.com/chanzuckerberg/edu-design-system/issues/1828)) ([08fa1c4](https://github.com/chanzuckerberg/edu-design-system/commit/08fa1c4783651d815939f735d4ed55d360b473aa))


### Bug Fixes

* **InputField:** mark unused prop as deprecated ([#1831](https://github.com/chanzuckerberg/edu-design-system/issues/1831)) ([622abfb](https://github.com/chanzuckerberg/edu-design-system/commit/622abfb0e5a29ab5aaf38a8f9ea08c1bf76308b1))
* **Select:** update incorrect documentation ([#1825](https://github.com/chanzuckerberg/edu-design-system/issues/1825)) ([94aace5](https://github.com/chanzuckerberg/edu-design-system/commit/94aace5ecda613600de23566c85304bb415b3765))

### [13.8.1](https://github.com/chanzuckerberg/edu-design-system/compare/v13.8.0...v13.8.1) (2024-01-04)

## [13.8.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.7.1...v13.8.0) (2023-12-06)


### Features

* separate ClickableStyles from core components ([#1759](https://github.com/chanzuckerberg/edu-design-system/issues/1759)) ([c7fc2af](https://github.com/chanzuckerberg/edu-design-system/commit/c7fc2afd989dfbb256279ca2766f18d660bab918))
* **Tag:** mark yield color variant as deprecated ([#1815](https://github.com/chanzuckerberg/edu-design-system/issues/1815)) ([bd14083](https://github.com/chanzuckerberg/edu-design-system/commit/bd1408348dfc30a0b892301aea800b378b7ca9b4))


### Bug Fixes

* remove duplicate addon-docs loading ([#1816](https://github.com/chanzuckerberg/edu-design-system/issues/1816)) ([42a634c](https://github.com/chanzuckerberg/edu-design-system/commit/42a634cb0c934735052afbd742b2cef086b4d827))

### [13.7.1](https://github.com/chanzuckerberg/edu-design-system/compare/v13.7.0...v13.7.1) (2023-11-16)


### Bug Fixes

* update Node types for Node 20 ([115ef19](https://github.com/chanzuckerberg/edu-design-system/commit/115ef19ccef4d9615d9ddaabc298eeee4bfcbbe7))

## [13.7.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.6.1...v13.7.0) (2023-11-06)


### Features

* **Heading:** add preset typography prop and values ([5732144](https://github.com/chanzuckerberg/edu-design-system/commit/57321449504e0bedded8affc93d5f127fcb3807c))
* **Text:** add preset typography prop ([4422e8e](https://github.com/chanzuckerberg/edu-design-system/commit/4422e8eaf0b3460ef78f8342642581e9a6a24401))


### Bug Fixes

* **Select:** ensure name prop gets to Listbox ([#1795](https://github.com/chanzuckerberg/edu-design-system/issues/1795)) ([a7eae60](https://github.com/chanzuckerberg/edu-design-system/commit/a7eae60dbee1a1057e7240bf592a5f9086e949c9))

### [13.6.1](https://github.com/chanzuckerberg/edu-design-system/compare/v13.6.0...v13.6.1) (2023-10-23)


### Bug Fixes

* add .displayName to components ([#1785](https://github.com/chanzuckerberg/edu-design-system/issues/1785)) ([dd202d8](https://github.com/chanzuckerberg/edu-design-system/commit/dd202d8a7d2dc50b82587dc4bf1e7223ed41dd37))

## [13.6.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.5.0...v13.6.0) (2023-10-13)


### Features

* **Menu:** allow href and onClick to co-exist on a menu item ([#1779](https://github.com/chanzuckerberg/edu-design-system/issues/1779)) ([971f189](https://github.com/chanzuckerberg/edu-design-system/commit/971f189aff4a8e08de7a73df4c44332e12dcd6e3))
* **Popover:** allow focus upon popover panel open ([#1782](https://github.com/chanzuckerberg/edu-design-system/issues/1782)) ([76ddbc6](https://github.com/chanzuckerberg/edu-design-system/commit/76ddbc6447658d92219430278ac0eb0ed8d5aa91))


### Bug Fixes

* **Accordion:** handle multi-line text in headers ([#1783](https://github.com/chanzuckerberg/edu-design-system/issues/1783)) ([0b3c3e6](https://github.com/chanzuckerberg/edu-design-system/commit/0b3c3e6f3528c238e3695d55773d9b7636057f99))
* **Select:** expose render prop and default value param.s ([#1781](https://github.com/chanzuckerberg/edu-design-system/issues/1781)) ([f21e2b6](https://github.com/chanzuckerberg/edu-design-system/commit/f21e2b686ab159b498633d8c1cad9f0028988752))

## [13.5.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.4.0...v13.5.0) (2023-10-06)


### Features

* **Tabs:** add variant for controlling tab header alignment ([#1774](https://github.com/chanzuckerberg/edu-design-system/issues/1774)) ([e9b6658](https://github.com/chanzuckerberg/edu-design-system/commit/e9b6658941c27ffed87c52b61fd7305a62b0935b))
* **Tailwind:** add config to expose primary and secondary fonts ([#1775](https://github.com/chanzuckerberg/edu-design-system/issues/1775)) ([ccab923](https://github.com/chanzuckerberg/edu-design-system/commit/ccab923eee1f6eb557a136162e8fbbc08eb98272))


### Bug Fixes

* **Typography:** set line height for preset 004 to 28px ratio ([#1776](https://github.com/chanzuckerberg/edu-design-system/issues/1776)) ([5b6c400](https://github.com/chanzuckerberg/edu-design-system/commit/5b6c4001e2c5a04c9d0b87e8fe39e3f74d9c4c27))

## [13.4.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.3.0...v13.4.0) (2023-10-03)


### Features

* **Accordion:** allow empty or hidden accordion rows ([#1767](https://github.com/chanzuckerberg/edu-design-system/issues/1767)) ([e044a85](https://github.com/chanzuckerberg/edu-design-system/commit/e044a8549a9427feb2e908cac2f4f3c2f0f2549f))
* **Icons:** allow component icon usages to be headless ([#1761](https://github.com/chanzuckerberg/edu-design-system/issues/1761)) ([ba454bf](https://github.com/chanzuckerberg/edu-design-system/commit/ba454bf840a4f7f4e1aa1e7ec164a11d05973d7c))
* **InputField:** support recommendedMaxLength prop for display-only errors ([#1771](https://github.com/chanzuckerberg/edu-design-system/issues/1771)) ([cc84a20](https://github.com/chanzuckerberg/edu-design-system/commit/cc84a20be4670a431598a58cdf980e2d59f3a2c3))
* **Tabs:** add ability to customize tab button headers ([#1768](https://github.com/chanzuckerberg/edu-design-system/issues/1768)) ([f231ad4](https://github.com/chanzuckerberg/edu-design-system/commit/f231ad4717bf49aa02840acf065a856998632898))
* **TextareaField:** support recommendedMaxLength prop for display-only errors ([#1769](https://github.com/chanzuckerberg/edu-design-system/issues/1769)) ([0852356](https://github.com/chanzuckerberg/edu-design-system/commit/085235603e5ff7b11d0ecf712281da537d28e407))

## [13.3.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.2.0...v13.3.0) (2023-09-22)


### Features

* add event hooks to existing components ([#1757](https://github.com/chanzuckerberg/edu-design-system/issues/1757)) ([9045cf5](https://github.com/chanzuckerberg/edu-design-system/commit/9045cf539f46e0022373faec7c3b6ea32ca37190))
* **Icons:** add 'edit' icon to spritemap ([#1760](https://github.com/chanzuckerberg/edu-design-system/issues/1760)) ([f56983a](https://github.com/chanzuckerberg/edu-design-system/commit/f56983a87b844abc2367cd48286885a6a2fbec42))
* **Select:** add warning when name is missing from component props ([#1756](https://github.com/chanzuckerberg/edu-design-system/issues/1756)) ([e3f2bc1](https://github.com/chanzuckerberg/edu-design-system/commit/e3f2bc1bf780b0a614c6896c7d9c03d29c0dd800))


### Bug Fixes

* remove deprecated tokens from wireframe page ([#1752](https://github.com/chanzuckerberg/edu-design-system/issues/1752)) ([5e388fa](https://github.com/chanzuckerberg/edu-design-system/commit/5e388faf7396b3851cccbbdd704b5040be2c3da5))

## [13.2.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.1.1...v13.2.0) (2023-09-07)


### Features

* **Avatar:** add in expanded size range ([#1734](https://github.com/chanzuckerberg/edu-design-system/issues/1734)) ([7af6e5e](https://github.com/chanzuckerberg/edu-design-system/commit/7af6e5ecb6b79bfdece58643faeac1b741194964))
* **tokens:** add tooling for EDS theming ([#1738](https://github.com/chanzuckerberg/edu-design-system/issues/1738)) ([91497bf](https://github.com/chanzuckerberg/edu-design-system/commit/91497bf2f0c334566c1144607b7d4b27a9677a30))


### Bug Fixes

* opt our rollup CJS build into TS's module interop behavior ([#1747](https://github.com/chanzuckerberg/edu-design-system/issues/1747)) ([2b0855e](https://github.com/chanzuckerberg/edu-design-system/commit/2b0855eee3d236931eb0ae2e68ffeceedf3a2cbe))

### [13.1.1](https://github.com/chanzuckerberg/edu-design-system/compare/v13.1.0...v13.1.1) (2023-09-01)


### Bug Fixes

* generate valid tab ids ([#1737](https://github.com/chanzuckerberg/edu-design-system/issues/1737)) ([d1493ea](https://github.com/chanzuckerberg/edu-design-system/commit/d1493ea6b1e55f608701c32900c5089fb19f01e3))
* update deploy docs for storybook 7.x ([#1733](https://github.com/chanzuckerberg/edu-design-system/issues/1733)) ([b3a091e](https://github.com/chanzuckerberg/edu-design-system/commit/b3a091ed6a3636c61e7df926eba98b20ecbaaf20))

## [13.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v13.0.0...v13.1.0) (2023-08-23)


### Features

* update component statuses ([#1731](https://github.com/chanzuckerberg/edu-design-system/issues/1731)) ([586a0cb](https://github.com/chanzuckerberg/edu-design-system/commit/586a0cbb653685107519e76c891c0503b021c711))


### Bug Fixes

* **Avatar:** improve support for generating initials ([#1727](https://github.com/chanzuckerberg/edu-design-system/issues/1727)) ([eadeb75](https://github.com/chanzuckerberg/edu-design-system/commit/eadeb756ee18fc1fd024aa8fbd0adfc386070fce))
* **deps:** update all non-major dependencies ([#1730](https://github.com/chanzuckerberg/edu-design-system/issues/1730)) ([c574755](https://github.com/chanzuckerberg/edu-design-system/commit/c574755903eb789f8c46fc11943c07f807a55fc3))

## [13.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v12.4.2...v13.0.0) (2023-08-14)


### ⚠ BREAKING CHANGES

* **link:** remove text-link tokens for link t3 tokens (#1639)
* **colors:** remove old colors and convert to input and show figma token (#1711)
* remove deprecated dropdown (#1657)
* **banner:** remove component (#1702)
* remove legacy tokens and typography mixins (#1709)
* **Grid:** remove top-level sub-component(s) (#1703)
* **dragdrop:** remove top level subcomponents (#1697)
* **Fieldset:** remove top-level sub-component(s) (#1695)
* **HorizontalStepper:** remove top-level sub-component(s) (#1696)
* **Card:** remove top-level sub-component(s) (#1692)
* **checkbox:** remove top level subcomponents (#1693)
* **radio:** remove top level subcomponents (#1690)
* **DataBar:** remove top-level sub-component(s) (#1686)
* **Modal:** remove top-level sub-component(s) (#1689)
* **searchbar:** remove top level subcomponents (#1687)
* **table:** remove top-level sub-components (#1685)
* **toolbar:** remove component (#1683)
* **Breadcrumbs:** remove top-level sub-component (#1680)
* **timelinenav:** remove top-level sub-component (#1681)

### Features

* **Breadcrumbs:** remove top-level sub-component ([#1680](https://github.com/chanzuckerberg/edu-design-system/issues/1680)) ([669081d](https://github.com/chanzuckerberg/edu-design-system/commit/669081dce402c0f84799ef17af6c8e05ccc4c37a))
* **Card:** remove top-level sub-component(s) ([#1692](https://github.com/chanzuckerberg/edu-design-system/issues/1692)) ([7ec01f4](https://github.com/chanzuckerberg/edu-design-system/commit/7ec01f434e5c2d58bc0b95f5f3c7ebc318393bf2))
* **checkbox:** remove top level subcomponents ([#1693](https://github.com/chanzuckerberg/edu-design-system/issues/1693)) ([87b12e8](https://github.com/chanzuckerberg/edu-design-system/commit/87b12e8ee5237ae99b037b3285364a363d4f2749))
* **DataBar:** remove top-level sub-component(s) ([#1686](https://github.com/chanzuckerberg/edu-design-system/issues/1686)) ([b4b9276](https://github.com/chanzuckerberg/edu-design-system/commit/b4b9276fb5115542a1e659d4d13a830aa5e7d4b0))
* **dragdrop:** remove top level subcomponents ([#1697](https://github.com/chanzuckerberg/edu-design-system/issues/1697)) ([b4fd00c](https://github.com/chanzuckerberg/edu-design-system/commit/b4fd00ca3daea679099a7fe073c03b476e9fbde2))
* **Fieldset:** remove top-level sub-component(s) ([#1695](https://github.com/chanzuckerberg/edu-design-system/issues/1695)) ([0c8280d](https://github.com/chanzuckerberg/edu-design-system/commit/0c8280d18b18f684d772a9fe3346ede375fdbefe))
* **Grid:** remove top-level sub-component(s) ([#1703](https://github.com/chanzuckerberg/edu-design-system/issues/1703)) ([c8925c9](https://github.com/chanzuckerberg/edu-design-system/commit/c8925c96fd219b145d56dbe270020b26e7ff97d0))
* **HorizontalStepper:** remove top-level sub-component(s) ([#1696](https://github.com/chanzuckerberg/edu-design-system/issues/1696)) ([188fd99](https://github.com/chanzuckerberg/edu-design-system/commit/188fd992c28c34c370debd59b4db8cb82ca9752b))
* **Layout:** mark layout components as deprecated ([#1700](https://github.com/chanzuckerberg/edu-design-system/issues/1700)) ([930a369](https://github.com/chanzuckerberg/edu-design-system/commit/930a369143abca25728d0f03e236aeb244781d6e))
* **Modal:** remove top-level sub-component(s) ([#1689](https://github.com/chanzuckerberg/edu-design-system/issues/1689)) ([8743e62](https://github.com/chanzuckerberg/edu-design-system/commit/8743e627bb70eed44f13b56efcbe1c77deac0a21))
* **radio:** remove top level subcomponents ([#1690](https://github.com/chanzuckerberg/edu-design-system/issues/1690)) ([82da617](https://github.com/chanzuckerberg/edu-design-system/commit/82da6178bd61657e31595788249a53c69aef6b56))
* remove legacy tokens and typography mixins ([#1709](https://github.com/chanzuckerberg/edu-design-system/issues/1709)) ([ec3e819](https://github.com/chanzuckerberg/edu-design-system/commit/ec3e81972e7d6952a227f6c01cedcc25aee5f9c4))
* **searchbar:** remove top level subcomponents ([#1687](https://github.com/chanzuckerberg/edu-design-system/issues/1687)) ([d13bb6c](https://github.com/chanzuckerberg/edu-design-system/commit/d13bb6cd643b4ed87fadbe0f168cf763f07157c3))
* **table:** remove top-level sub-components ([#1685](https://github.com/chanzuckerberg/edu-design-system/issues/1685)) ([742a530](https://github.com/chanzuckerberg/edu-design-system/commit/742a530babe97f507582f31b84bcbf6eb78591e8))
* **timelinenav:** remove top-level sub-component ([#1681](https://github.com/chanzuckerberg/edu-design-system/issues/1681)) ([f46eca7](https://github.com/chanzuckerberg/edu-design-system/commit/f46eca76ba44088d23050fde7f659f3f7e23e1e8))


### Bug Fixes

* **Avatar:** support display names using emoji and multi-byte ([#1716](https://github.com/chanzuckerberg/edu-design-system/issues/1716)) ([1294022](https://github.com/chanzuckerberg/edu-design-system/commit/1294022658b48e709413b5080fc45a0bbc126268))
* update token exports ([#1722](https://github.com/chanzuckerberg/edu-design-system/issues/1722)) ([982c55f](https://github.com/chanzuckerberg/edu-design-system/commit/982c55f122f96cf68bddd77955540dd236a000cc))


* **banner:** remove component ([#1702](https://github.com/chanzuckerberg/edu-design-system/issues/1702)) ([356550c](https://github.com/chanzuckerberg/edu-design-system/commit/356550c699a3fd549315f06fccdd569932032c4e))
* **colors:** remove old colors and convert to input and show figma token ([#1711](https://github.com/chanzuckerberg/edu-design-system/issues/1711)) ([c9a5079](https://github.com/chanzuckerberg/edu-design-system/commit/c9a5079ab2b3b61abf431d859f1ecb4a068272f9))
* **link:** remove text-link tokens for link t3 tokens ([#1639](https://github.com/chanzuckerberg/edu-design-system/issues/1639)) ([d35cfe4](https://github.com/chanzuckerberg/edu-design-system/commit/d35cfe44be0fa618f45fe2051d240e27c55f5199))
* remove deprecated dropdown ([#1657](https://github.com/chanzuckerberg/edu-design-system/issues/1657)) ([26d1694](https://github.com/chanzuckerberg/edu-design-system/commit/26d16942f9e2393312db773eb06e72fc7ab54620))
* **toolbar:** remove component ([#1683](https://github.com/chanzuckerberg/edu-design-system/issues/1683)) ([bd47899](https://github.com/chanzuckerberg/edu-design-system/commit/bd478996207ff59e4dd43c06da9711e14ecd09b4))

### [12.4.2](https://github.com/chanzuckerberg/edu-design-system/compare/v12.4.1...v12.4.2) (2023-07-20)


### Bug Fixes

* **Avatar:** add responsive image handling to component ([#1679](https://github.com/chanzuckerberg/edu-design-system/issues/1679)) ([7ff27ff](https://github.com/chanzuckerberg/edu-design-system/commit/7ff27ff05973d9a0ba9b84c90b46915959da75f9))

### [12.4.1](https://github.com/chanzuckerberg/edu-design-system/compare/v12.4.0...v12.4.1) (2023-07-18)


### Bug Fixes

* make sure all var properties exist on one line ([1fecab5](https://github.com/chanzuckerberg/edu-design-system/commit/1fecab5789132f0f7dbe0cdaf74dec3f30444c83))

## [12.4.0](https://github.com/chanzuckerberg/edu-design-system/compare/v12.3.0...v12.4.0) (2023-07-06)


### Features

* **focus:** create t1 outline and t3 focus tokens ([#1675](https://github.com/chanzuckerberg/edu-design-system/issues/1675)) ([6ab9857](https://github.com/chanzuckerberg/edu-design-system/commit/6ab9857c9cd71d1b258e613371c6de7f5c7a1e0f))
* **Typography:** force sync and simplify typography ([#1671](https://github.com/chanzuckerberg/edu-design-system/issues/1671)) ([c30fc5b](https://github.com/chanzuckerberg/edu-design-system/commit/c30fc5b056f324d35bf3ffe0057b5e2ec3e0ea77))

## [12.3.0](https://github.com/chanzuckerberg/edu-design-system/compare/v12.2.0...v12.3.0) (2023-06-29)


### Features

* **breadcrumbs:** allow custom separators ([#1663](https://github.com/chanzuckerberg/edu-design-system/issues/1663)) ([1fe0e6c](https://github.com/chanzuckerberg/edu-design-system/commit/1fe0e6cc3cf6542f4d58b03aaa1aeafefee76145))
* **button:** create t3 token for border radius ([#1665](https://github.com/chanzuckerberg/edu-design-system/issues/1665)) ([eadd005](https://github.com/chanzuckerberg/edu-design-system/commit/eadd005a67d2fc3980d3d2400705deda4a2d5994))
* **icons:** make icons rounded outline and add send, mail ([#1669](https://github.com/chanzuckerberg/edu-design-system/issues/1669)) ([669d01c](https://github.com/chanzuckerberg/edu-design-system/commit/669d01c61792f9dba520e089714a8af3b8a594b5))
* **tokens:** add t2 color bg-brand-primary-subtle ([#1668](https://github.com/chanzuckerberg/edu-design-system/issues/1668)) ([7137da6](https://github.com/chanzuckerberg/edu-design-system/commit/7137da6c424e49e033098c1c0136726f2eba425f))
* **typography:** support typography theming ([#1664](https://github.com/chanzuckerberg/edu-design-system/issues/1664)) ([3148751](https://github.com/chanzuckerberg/edu-design-system/commit/31487514a8c3e20bbad5560cdccf1dbb1ceae2b8))

## [12.2.0](https://github.com/chanzuckerberg/edu-design-system/compare/v12.1.0...v12.2.0) (2023-06-21)


### Features

* deprecate color-other-eraser token ([#1640](https://github.com/chanzuckerberg/edu-design-system/issues/1640)) ([55a78e2](https://github.com/chanzuckerberg/edu-design-system/commit/55a78e2f26c9d5cc025d01a906fcf21b5a6e2543))
* **Text:** add support for caption-md and caption-lg ([53fd4e0](https://github.com/chanzuckerberg/edu-design-system/commit/53fd4e04ea1845d614b505ef1da25d288b13543f))


### Bug Fixes

* allow all valid input types ([#1648](https://github.com/chanzuckerberg/edu-design-system/issues/1648)) ([e674741](https://github.com/chanzuckerberg/edu-design-system/commit/e674741bb3d8116fb9d21d9f7fb7c68356203bb4))
* **InputField:** fix alignment and color for required marker ([#1654](https://github.com/chanzuckerberg/edu-design-system/issues/1654)) ([1c3b1db](https://github.com/chanzuckerberg/edu-design-system/commit/1c3b1dbd54e3e0df835494a41db413f2380eb1e4))
* make menu, popover, select ssr friendly ([#1660](https://github.com/chanzuckerberg/edu-design-system/issues/1660)) ([eac8829](https://github.com/chanzuckerberg/edu-design-system/commit/eac882976f07d2a5d3bede0888c7415fbb9afabe))
* **Menu:** reset menu item hover and defer to popover ([#1653](https://github.com/chanzuckerberg/edu-design-system/issues/1653)) ([f329e4d](https://github.com/chanzuckerberg/edu-design-system/commit/f329e4df810873bab9117a28c44a24a765e6e469))
* **ProgressBar:** align label and caption with design ([#1655](https://github.com/chanzuckerberg/edu-design-system/issues/1655)) ([9de0d6b](https://github.com/chanzuckerberg/edu-design-system/commit/9de0d6bfdeb5c906bfa5a48fe536582635292ef2))
* **Tooltip:** use caption-lg for tooltip text ([f0772c7](https://github.com/chanzuckerberg/edu-design-system/commit/f0772c7e148051fd3c3b16af874bcb74831e1b4f))

## [12.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v12.0.3...v12.1.0) (2023-05-30)


### Features

* add tier-3 tokens to DataBar and ProgressBar ([#1628](https://github.com/chanzuckerberg/edu-design-system/issues/1628)) ([ca9da5b](https://github.com/chanzuckerberg/edu-design-system/commit/ca9da5b97102e6c61bcfb0123f2b7b0c87ca4c4e))
* apply advanced popover handling to select components ([#1613](https://github.com/chanzuckerberg/edu-design-system/issues/1613)) ([b74b046](https://github.com/chanzuckerberg/edu-design-system/commit/b74b046a36b2d3d47a31f35b1837eb8075d6f1cc))
* deprecate color highlight tokens ([#1636](https://github.com/chanzuckerberg/edu-design-system/issues/1636)) ([8975315](https://github.com/chanzuckerberg/edu-design-system/commit/89753158266b63eea1afbfdf073f4235745aa197))
* **Typography:** add light weight type ramp entries ([#1634](https://github.com/chanzuckerberg/edu-design-system/issues/1634)) ([1bb2b67](https://github.com/chanzuckerberg/edu-design-system/commit/1bb2b67d9757ef320ba71ce2d69c9d14483f12bd))


### Bug Fixes

* align token name with design ([#1630](https://github.com/chanzuckerberg/edu-design-system/issues/1630)) ([cfd928a](https://github.com/chanzuckerberg/edu-design-system/commit/cfd928a39e82f6c3e0941a0b4ac68832b0520f2c))
* **Avatar:** adjust the tier 2 token used in size 'sm' ([#1627](https://github.com/chanzuckerberg/edu-design-system/issues/1627)) ([6d174d0](https://github.com/chanzuckerberg/edu-design-system/commit/6d174d0ba2f8bb64a89d4955c84f312d2a2f224e))
* **build:** build type declarations separately ([#1633](https://github.com/chanzuckerberg/edu-design-system/issues/1633)) ([4db2d74](https://github.com/chanzuckerberg/edu-design-system/commit/4db2d74adaf6304b80f05d79617fd139c1d8d821))
* **drawer:** handle clickoutside on slower active boolean ([#1621](https://github.com/chanzuckerberg/edu-design-system/issues/1621)) ([c61508b](https://github.com/chanzuckerberg/edu-design-system/commit/c61508b8675016c33551e8ccd868dddd803fb49a))
* link deprecated border token to new token value ([#1631](https://github.com/chanzuckerberg/edu-design-system/issues/1631)) ([e198667](https://github.com/chanzuckerberg/edu-design-system/commit/e198667526fa0951df3fe36c23d2eada83775f33))
* use token name from design ([#1629](https://github.com/chanzuckerberg/edu-design-system/issues/1629)) ([01b2ea8](https://github.com/chanzuckerberg/edu-design-system/commit/01b2ea8693c28550fcf4e2cd315f47cccba8ea38))

### [12.0.3](https://github.com/chanzuckerberg/edu-design-system/compare/v12.0.2...v12.0.3) (2023-05-19)


### Bug Fixes

* clean component statuses and tokens ([#1616](https://github.com/chanzuckerberg/edu-design-system/issues/1616)) ([ebc2b36](https://github.com/chanzuckerberg/edu-design-system/commit/ebc2b360aa6664ec9fcfa665cef5654f6c55b438))
* correct misspelled color token names ([#1618](https://github.com/chanzuckerberg/edu-design-system/issues/1618)) ([88b1f8b](https://github.com/chanzuckerberg/edu-design-system/commit/88b1f8b20fc58858b1f29bc6f34896a993485bd6))
* group all font imports together ([#1615](https://github.com/chanzuckerberg/edu-design-system/issues/1615)) ([405027a](https://github.com/chanzuckerberg/edu-design-system/commit/405027acdd0c5386983bd340f8be4ff714b822ca))

### [12.0.2](https://github.com/chanzuckerberg/edu-design-system/compare/v12.0.1...v12.0.2) (2023-05-11)


### Bug Fixes

* add missing token updates ([#1608](https://github.com/chanzuckerberg/edu-design-system/issues/1608)) ([734863f](https://github.com/chanzuckerberg/edu-design-system/commit/734863f7b43719c0e10895ca3fa04bbc898423e1))
* ensure [@import](https://github.com/import) rules are before any other styles ([#1611](https://github.com/chanzuckerberg/edu-design-system/issues/1611)) ([855f691](https://github.com/chanzuckerberg/edu-design-system/commit/855f691642cd7346c002a330db884eba1e49736a))

### [12.0.1](https://github.com/chanzuckerberg/edu-design-system/compare/v12.0.0...v12.0.1) (2023-05-02)


### Bug Fixes

* polyfill for useid for react <18 ([#1595](https://github.com/chanzuckerberg/edu-design-system/issues/1595)) ([4d32194](https://github.com/chanzuckerberg/edu-design-system/commit/4d321945c5e64c6e8a2a64f10cf25dcad00a4d03))
* restore check for undefined any types ([#1600](https://github.com/chanzuckerberg/edu-design-system/issues/1600)) ([214cd88](https://github.com/chanzuckerberg/edu-design-system/commit/214cd88e237d43c58def3cd458e8cbb4c68ae452))
* suppress warnings from useId imports and prop usage ([#1606](https://github.com/chanzuckerberg/edu-design-system/issues/1606)) ([c875d9d](https://github.com/chanzuckerberg/edu-design-system/commit/c875d9dcb44b1d94f30df381575dde96eded0ec2))
* **Typography:** update type ramp to sync with design  ([#1601](https://github.com/chanzuckerberg/edu-design-system/issues/1601)) ([be5b868](https://github.com/chanzuckerberg/edu-design-system/commit/be5b8685f9c25b8e9a50ccff6317508ee322d4ce))

## [12.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v11.1.1...v12.0.0) (2023-04-17)


### ⚠ BREAKING CHANGES

* use rollup (#1555)

### Features

* export some subcomponents ([#1579](https://github.com/chanzuckerberg/edu-design-system/issues/1579)) ([2857ae4](https://github.com/chanzuckerberg/edu-design-system/commit/2857ae456bd1fe593bf3ba4941fca58039ff8e61))
* **TextareaField:** add character length counter ([#1580](https://github.com/chanzuckerberg/edu-design-system/issues/1580)) ([ff6226f](https://github.com/chanzuckerberg/edu-design-system/commit/ff6226f18df3104fae8f65d1ba8c774f45c0b65a))


### Bug Fixes

* restore check for undefined any types ([#1585](https://github.com/chanzuckerberg/edu-design-system/issues/1585)) ([c7fae07](https://github.com/chanzuckerberg/edu-design-system/commit/c7fae07b587f018ed7b479ec3e06ca4e351b6804))
* **Skeleton:** mark .Rect as deprecated ([#1586](https://github.com/chanzuckerberg/edu-design-system/issues/1586)) ([405f81b](https://github.com/chanzuckerberg/edu-design-system/commit/405f81b96b5b6ad38aaa4023b4b12753c35d5f14))
* sync typography presets to documentation ([#1592](https://github.com/chanzuckerberg/edu-design-system/issues/1592)) ([b56eadb](https://github.com/chanzuckerberg/edu-design-system/commit/b56eadbfacb549f2339a050a9b394bec076c8bb5))
* **typography:** add missing eds-font-size-20 ([#1591](https://github.com/chanzuckerberg/edu-design-system/issues/1591)) ([de5dd03](https://github.com/chanzuckerberg/edu-design-system/commit/de5dd03cd45d765eaebbe10945e7007387d43361))


### build

* use rollup ([#1555](https://github.com/chanzuckerberg/edu-design-system/issues/1555)) ([d794696](https://github.com/chanzuckerberg/edu-design-system/commit/d794696f07c039ed5c497fa954d1bd56ad1d5485)), closes [#1558](https://github.com/chanzuckerberg/edu-design-system/issues/1558) [#1572](https://github.com/chanzuckerberg/edu-design-system/issues/1572) [#1581](https://github.com/chanzuckerberg/edu-design-system/issues/1581) [#1582](https://github.com/chanzuckerberg/edu-design-system/issues/1582)

## [12.0.0-alpha.1](https://github.com/chanzuckerberg/edu-design-system/compare/v12.0.0-alpha.0...v12.0.0-alpha.1) (2023-04-04)

## [12.0.0-alpha.0](https://github.com/chanzuckerberg/edu-design-system/compare/v11.0.0...v12.0.0-alpha.0) (2023-04-04)


### ⚠ BREAKING CHANGES

* generate cjs and type declarations (#1572)

### Features

* add utility types to enforce either label or aria-label ([#1554](https://github.com/chanzuckerberg/edu-design-system/issues/1554)) ([2313063](https://github.com/chanzuckerberg/edu-design-system/commit/2313063f10944c90a38df85fd512717acd70ee7e))
* **Button:** use LoadingIndicator for loading state ([#1552](https://github.com/chanzuckerberg/edu-design-system/issues/1552)) ([2406d01](https://github.com/chanzuckerberg/edu-design-system/commit/2406d019c5010fbdd74049f53f12fdc739abb51a))
* **Card:** add card variant updates ([#1565](https://github.com/chanzuckerberg/edu-design-system/issues/1565)) ([87dbef7](https://github.com/chanzuckerberg/edu-design-system/commit/87dbef72d79f6aedec0d2b6a56c69429b5abafa7))
* **Menu:** update centering with plain button ([#1566](https://github.com/chanzuckerberg/edu-design-system/issues/1566)) ([d4ddfd5](https://github.com/chanzuckerberg/edu-design-system/commit/d4ddfd5c0d9f476e799c7face94467643bd79587))
* **Slider:** add alignment styles and recipes ([#1567](https://github.com/chanzuckerberg/edu-design-system/issues/1567)) ([900d102](https://github.com/chanzuckerberg/edu-design-system/commit/900d102a4af36ef4b466c3c0a66864a14b4c3e1e))
* **slider:** add tooltip ([#1571](https://github.com/chanzuckerberg/edu-design-system/issues/1571)) ([fa7c5a2](https://github.com/chanzuckerberg/edu-design-system/commit/fa7c5a2f212b70a31e0812c2cab78d55a0245f54))


### Bug Fixes

* include tailwind config in package ([#1576](https://github.com/chanzuckerberg/edu-design-system/issues/1576)) ([4f66b35](https://github.com/chanzuckerberg/edu-design-system/commit/4f66b352a2225a20895f818fc4ea57642745cd7a))
* **InputField:** apply bottom margin only with fieldNote ([#1573](https://github.com/chanzuckerberg/edu-design-system/issues/1573)) ([430522f](https://github.com/chanzuckerberg/edu-design-system/commit/430522fb0773505a1b643c0c82c02c100fe49961))


### build

* generate cjs and type declarations ([#1572](https://github.com/chanzuckerberg/edu-design-system/issues/1572)) ([5efbba3](https://github.com/chanzuckerberg/edu-design-system/commit/5efbba3a84efada0b8f043d78e037030e018987c))

### [11.1.1](https://github.com/chanzuckerberg/edu-design-system/compare/v11.1.0...v11.1.1) (2023-04-03)


### Bug Fixes

* include tailwind config in package ([#1576](https://github.com/chanzuckerberg/edu-design-system/issues/1576)) ([4f66b35](https://github.com/chanzuckerberg/edu-design-system/commit/4f66b352a2225a20895f818fc4ea57642745cd7a))

## [11.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v11.0.0...v11.1.0) (2023-03-31)


### Features

* add utility types to enforce either label or aria-label ([#1554](https://github.com/chanzuckerberg/edu-design-system/issues/1554)) ([2313063](https://github.com/chanzuckerberg/edu-design-system/commit/2313063f10944c90a38df85fd512717acd70ee7e))
* **Button:** use LoadingIndicator for loading state ([#1552](https://github.com/chanzuckerberg/edu-design-system/issues/1552)) ([2406d01](https://github.com/chanzuckerberg/edu-design-system/commit/2406d019c5010fbdd74049f53f12fdc739abb51a))
* **Card:** add card variant updates ([#1565](https://github.com/chanzuckerberg/edu-design-system/issues/1565)) ([87dbef7](https://github.com/chanzuckerberg/edu-design-system/commit/87dbef72d79f6aedec0d2b6a56c69429b5abafa7))
* **Menu:** update centering with plain button ([#1566](https://github.com/chanzuckerberg/edu-design-system/issues/1566)) ([d4ddfd5](https://github.com/chanzuckerberg/edu-design-system/commit/d4ddfd5c0d9f476e799c7face94467643bd79587))
* **Slider:** add alignment styles and recipes ([#1567](https://github.com/chanzuckerberg/edu-design-system/issues/1567)) ([900d102](https://github.com/chanzuckerberg/edu-design-system/commit/900d102a4af36ef4b466c3c0a66864a14b4c3e1e))
* **slider:** add tooltip ([#1571](https://github.com/chanzuckerberg/edu-design-system/issues/1571)) ([fa7c5a2](https://github.com/chanzuckerberg/edu-design-system/commit/fa7c5a2f212b70a31e0812c2cab78d55a0245f54))


### Bug Fixes

* **InputField:** apply bottom margin only with fieldNote ([#1573](https://github.com/chanzuckerberg/edu-design-system/issues/1573)) ([430522f](https://github.com/chanzuckerberg/edu-design-system/commit/430522fb0773505a1b643c0c82c02c100fe49961))

## [11.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v10.0.0...v11.0.0) (2023-03-17)


### ⚠ BREAKING CHANGES

* add `indeterminate` prop to <Checkbox> that's separate from `checked` (#1520)

### Features

* add `indeterminate` prop to <Checkbox> that's separate from `checked` ([#1520](https://github.com/chanzuckerberg/edu-design-system/issues/1520)) ([d8e2cc4](https://github.com/chanzuckerberg/edu-design-system/commit/d8e2cc4bbf0c378a641d129ecbb8e2aa52c424f1))
* **LoadingIndicator:** extract and use SVG animation directly ([#1540](https://github.com/chanzuckerberg/edu-design-system/issues/1540)) ([6e315ea](https://github.com/chanzuckerberg/edu-design-system/commit/6e315ea1402938682169d4b060f2e0039e3e8e63))
* **menu:** add Menu.PlainButton as a minimally styled Menu button ([#1516](https://github.com/chanzuckerberg/edu-design-system/issues/1516)) ([8268d8e](https://github.com/chanzuckerberg/edu-design-system/commit/8268d8e5d21038410e632141f0c1fa1f28090ab9))


### Bug Fixes

* actually use our shared prettier config ([c98ea51](https://github.com/chanzuckerberg/edu-design-system/commit/c98ea5130929fd8852f3dcbff2acffead01a0044))
* **Avatar:** loosen props for avatar aria-label component ([#1544](https://github.com/chanzuckerberg/edu-design-system/issues/1544)) ([4ab9183](https://github.com/chanzuckerberg/edu-design-system/commit/4ab918312739677bdfd5d30c3d2e1eb03290955a))
* markdown story styling ([#1536](https://github.com/chanzuckerberg/edu-design-system/issues/1536)) ([89eba6b](https://github.com/chanzuckerberg/edu-design-system/commit/89eba6b255a34c47ca4c4a1edf4897c9085dcc55))

## [10.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v9.1.0...v10.0.0) (2023-03-02)


### ⚠ BREAKING CHANGES

* remove data-bootstrap-override EDS-850

### Features

* **Avatar:** add avatar component ([#1510](https://github.com/chanzuckerberg/edu-design-system/issues/1510)) ([bc21f85](https://github.com/chanzuckerberg/edu-design-system/commit/bc21f85baf6d906d40d24da7e7108d60aaadc2b5))
* **slider:** create slider ([#1503](https://github.com/chanzuckerberg/edu-design-system/issues/1503)) ([e7ced34](https://github.com/chanzuckerberg/edu-design-system/commit/e7ced34ff5c80c0776682ba912b5a69fac4507d8))
* **TextareaField:** add TextArea base component and TextareaField ([#1493](https://github.com/chanzuckerberg/edu-design-system/issues/1493)) ([f2ba31d](https://github.com/chanzuckerberg/edu-design-system/commit/f2ba31df82322e589c98b337da2cdde7184639a8))


### Bug Fixes

* remove data-bootstrap-override EDS-850 ([3b5d59b](https://github.com/chanzuckerberg/edu-design-system/commit/3b5d59b3cdf4abf2af1c6c6b5c765a2e7f4cdf70))
* remove old, outdated, unnecessary snapshot ([fb63a34](https://github.com/chanzuckerberg/edu-design-system/commit/fb63a341872cac5c95a4b2800e6da714f6f520ab))
* **Select:** sync label design with form fields ([#1506](https://github.com/chanzuckerberg/edu-design-system/issues/1506)) ([efe9330](https://github.com/chanzuckerberg/edu-design-system/commit/efe9330952180018cddf69de0463f76336d63640))
* update deps ([9a80e7f](https://github.com/chanzuckerberg/edu-design-system/commit/9a80e7f6849d351c215ecda44b6102b9a6ebce6c))
* upgrade axe-core from 4.4.3 to 4.6.3 ([af3f9c5](https://github.com/chanzuckerberg/edu-design-system/commit/af3f9c5ab47409e75dc16ddbecf0d3a3e74cc479))

## [9.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v9.0.0...v9.1.0) (2023-02-16)


### Features

* bump to React 18 ([#1497](https://github.com/chanzuckerberg/edu-design-system/issues/1497)) ([d44b3db](https://github.com/chanzuckerberg/edu-design-system/commit/d44b3db4a1f683538daf74b0434e69d6df80620a))
* bump to user-event v14 ([#1497](https://github.com/chanzuckerberg/edu-design-system/issues/1497)) ([d44b3db](https://github.com/chanzuckerberg/edu-design-system/commit/d44b3db4a1f683538daf74b0434e69d6df80620a))
* remove reach/auto-id ([#1497](https://github.com/chanzuckerberg/edu-design-system/issues/1497)) ([d44b3db](https://github.com/chanzuckerberg/edu-design-system/commit/d44b3db4a1f683538daf74b0434e69d6df80620a))

## [9.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v8.0.0...v9.0.0) (2023-02-14)


### ⚠ BREAKING CHANGES

* **text:** fully remove spacing and text passage variants ([#1492](https://github.com/chanzuckerberg/edu-design-system/issues/1492)) ([07c4406](https://github.com/chanzuckerberg/edu-design-system/commit/07c440648e200b5d038b1786bff18206d7879a52))
* **preflight:** turn on TW preflight ([#1490](https://github.com/chanzuckerberg/edu-design-system/issues/1490)) ([a5c3966](https://github.com/chanzuckerberg/edu-design-system/commit/a5c39661a81fa1b4b9dcd6a8c32f59e5667fad62))
* rename inputfield to input and textfield to inputfield ([#1485](https://github.com/chanzuckerberg/edu-design-system/issues/1485)) ([8d6c120](https://github.com/chanzuckerberg/edu-design-system/commit/8d6c1202b15dfcf45876c7f6217b9b7ba8dce057))
* remove unused components 3/3 ([#1483](https://github.com/chanzuckerberg/edu-design-system/issues/1483)) ([8856c21](https://github.com/chanzuckerberg/edu-design-system/commit/8856c217b4415087cf41ab86382e8ce5d5fa5227))

### Features

* **preflight:** turn on TW preflight ([#1490](https://github.com/chanzuckerberg/edu-design-system/issues/1490)) ([a5c3966](https://github.com/chanzuckerberg/edu-design-system/commit/a5c39661a81fa1b4b9dcd6a8c32f59e5667fad62))
* support Remix SSR ([9549383](https://github.com/chanzuckerberg/edu-design-system/commit/9549383c3e6052ecf3b8532e3caa874197ded3ea))


### Bug Fixes

* **build:** add css files as having side effects ([#1481](https://github.com/chanzuckerberg/edu-design-system/issues/1481)) ([ab07cee](https://github.com/chanzuckerberg/edu-design-system/commit/ab07cee267de31153c36004be68ebbad9fc3756b))
* specify that the EDS package does not have side effects ([#1473](https://github.com/chanzuckerberg/edu-design-system/issues/1473)) ([c4a0cfb](https://github.com/chanzuckerberg/edu-design-system/commit/c4a0cfb6438f1cba234f0aa275a871cfb0694fa7))

## [8.0.0](https://github.com/chanzuckerberg/edu-design-system/compare/v7.2.1...v8.0.0) (2023-01-23)


### ⚠ BREAKING CHANGES

* remove export of ProjectCard from EDS (#1470)
* remove unused components 2/n (#1463)
* **Popover:** remove showArrow from popover (#1461)
* remove unused components 1/n (#1460)

### Features

* **tailwind:** prettify class order ([b1ae6b7](https://github.com/chanzuckerberg/edu-design-system/commit/b1ae6b766450c4b99591bb9186d37d0cdef00a25))


### Bug Fixes

* **deps:** update all non-major dependencies ([e7627a6](https://github.com/chanzuckerberg/edu-design-system/commit/e7627a6cfa9b07a7d65cd386430e84d5d1df6e3e))
* **lint:** reorders tailwind class ([17648fa](https://github.com/chanzuckerberg/edu-design-system/commit/17648fa82291437165cb916e6214a9a9987c0974))
* **TimelineNav:** remove unused props and styles ([4d48892](https://github.com/chanzuckerberg/edu-design-system/commit/4d4889277ad5ae14dcb412ed6b140064a3b32e63))


* **Popover:** remove showArrow from popover ([#1461](https://github.com/chanzuckerberg/edu-design-system/issues/1461)) ([07396ff](https://github.com/chanzuckerberg/edu-design-system/commit/07396ffc169aac91c71caab43764a499f9b59e96))
* remove export of ProjectCard from EDS ([#1470](https://github.com/chanzuckerberg/edu-design-system/issues/1470)) ([080c376](https://github.com/chanzuckerberg/edu-design-system/commit/080c376004d814449a79281186d1089eb7baa28a))
* remove unused components 1/n ([#1460](https://github.com/chanzuckerberg/edu-design-system/issues/1460)) ([c26b8f6](https://github.com/chanzuckerberg/edu-design-system/commit/c26b8f6b4f559e5123530e3e8a8fd7a1fb74001c))
* remove unused components 2/n ([#1463](https://github.com/chanzuckerberg/edu-design-system/issues/1463)) ([23d58e9](https://github.com/chanzuckerberg/edu-design-system/commit/23d58e9dc1beaf23bab9d2f95a32b4852948bb9d))

### [7.2.1](https://github.com/chanzuckerberg/edu-design-system/compare/v7.2.0...v7.2.1) (2023-01-05)


### Bug Fixes

* don't ship theming demo fonts in the package ([a0d6143](https://github.com/chanzuckerberg/edu-design-system/commit/a0d61431d04def96e554933629b77cb7eee4a0a8))
* pin @headlessui/react to 1.7.5 ([9539229](https://github.com/chanzuckerberg/edu-design-system/commit/95392290273bb4b84f5a4b76d0a671a416430958))

## [7.2.0](https://github.com/chanzuckerberg/edu-design-system/compare/v7.1.1...v7.2.0) (2023-01-03)


### Features

* **badge:** add badge component ([45ffbab](https://github.com/chanzuckerberg/edu-design-system/commit/45ffbab24814009f36ad3799de0a8cc2f4600516))
* **badge:** clarify empty state and place stories in folder ([5e390a4](https://github.com/chanzuckerberg/edu-design-system/commit/5e390a4e2228fab97952b051bb978d412fef98ab))
* **LoadingIndicator:** add loading indicator component ([cf32129](https://github.com/chanzuckerberg/edu-design-system/commit/cf32129bcb953c4c1249f09bdf1d4a00042b6ba2))
* **progressbar:** init progress bar ([9ae77fd](https://github.com/chanzuckerberg/edu-design-system/commit/9ae77fdb626bb809eba42e271dc9ae4168a10ea6))
* **Skeleton:** add skeleton components ([4516e7e](https://github.com/chanzuckerberg/edu-design-system/commit/4516e7e12173601fdbf440c326d862fb9b8a416e))
* **toggle:** init toggle ([7ed06c0](https://github.com/chanzuckerberg/edu-design-system/commit/7ed06c01691593f67e1b2eff373694dde766a65b))
* **toggle:** provide toggle functionality and add stories ([c2c58e8](https://github.com/chanzuckerberg/edu-design-system/commit/c2c58e8c2d8e392773846d0cc101c5212fba4dc3))


### Bug Fixes

* apply consistency updates to popovers ([61cae9d](https://github.com/chanzuckerberg/edu-design-system/commit/61cae9dc4c88d319319ecf4c9a24d703373d94bb))
* **colors:** align link color with figma ([0dc461f](https://github.com/chanzuckerberg/edu-design-system/commit/0dc461fe072c30fdac4ef627bc719ed79593a1d1))
* **icons:** get icons from .js instead of .svg files to support SSR ([9fcc875](https://github.com/chanzuckerberg/edu-design-system/commit/9fcc875495d5ca26ceeb5dc86a8462cf480536c0))
* **LoadingIndicator:** add reduced motion behavior ([b3342b5](https://github.com/chanzuckerberg/edu-design-system/commit/b3342b519ae40f90f21043fadd8b55014a6d187b))
* **progressbar:** account for gap in segment width ([4331e9a](https://github.com/chanzuckerberg/edu-design-system/commit/4331e9a09aa1038744943c1c55ce4aefb965f35c))
* **renovate:** reviewers option not working, using codeowners ([0999fe0](https://github.com/chanzuckerberg/edu-design-system/commit/0999fe0fb4146a9703fd6230e1d17efe0f12a782))
* **select, dropdown:** default value to null ([74693b5](https://github.com/chanzuckerberg/edu-design-system/commit/74693b5b414a97c070ade84710d87f6f7b9c0542))
* set axe-core to 4.4.3 due to stories timing out with 4.5 ([4862f03](https://github.com/chanzuckerberg/edu-design-system/commit/4862f030fb8340221d03661179cbbf04cfaa9525))
* set czi/eslint-plugin-stories to 3.2.2 until ts stories supported ([281ffb1](https://github.com/chanzuckerberg/edu-design-system/commit/281ffb1622d58b909f11faba3e8cf148c9887939))
* **toggle:** add transparent borders ([94a21aa](https://github.com/chanzuckerberg/edu-design-system/commit/94a21aa6761b019d46c3452e32514cb94519652b))
* **toggle:** sync width and color with mocks ([c6e92c8](https://github.com/chanzuckerberg/edu-design-system/commit/c6e92c83218f2183b14fd2d27a37744d2b7ee213))

### [7.1.1](https://github.com/chanzuckerberg/edu-design-system/compare/v7.1.0...v7.1.1) (2022-12-09)


### Bug Fixes

* **deploy:** apply workaround for node 18 ([ccb3517](https://github.com/chanzuckerberg/edu-design-system/commit/ccb3517fbad0d4e93507d2512e4eb4f3d6764473))

## [7.1.0](https://github.com/chanzuckerberg/edu-design-system/compare/v7.0.0...v7.1.0) (2022-12-08)


### Features

* **menu,select:** add HeadlessUI-based menu and select components ([c70f59b](https://github.com/chanzuckerberg/edu-design-system/commit/c70f59b3b7d2a686ed7d79ff19b449fb68b5b621))
* **renovate:** introduce renovate for keeping deps upto date ([027f4dc](https://github.com/chanzuckerberg/edu-design-system/commit/027f4dceb2fa4f0640a1c41d79b1610650d740dd))
* **Select:** add select component ([21390cf](https://github.com/chanzuckerberg/edu-design-system/commit/21390cfced4681caa5e493dd98ec54a5f10de800))


### Bug Fixes

* add test for disabled Select ([de528be](https://github.com/chanzuckerberg/edu-design-system/commit/de528bedefde88665d06866e3e6b155de974f358))
* add updates from design self-review ([08ddc3b](https://github.com/chanzuckerberg/edu-design-system/commit/08ddc3ba897c7c741b1377e4fd6a618705a4f74f))
* address PR comments ([e543e5b](https://github.com/chanzuckerberg/edu-design-system/commit/e543e5b32af9e700a965a6827360bafc564b4628))
* address PR comments ([a5bca10](https://github.com/chanzuckerberg/edu-design-system/commit/a5bca105ffa294b83f76bc4883527e657aa83bba))
* address PR comments ([41448f3](https://github.com/chanzuckerberg/edu-design-system/commit/41448f302c3a279f3b3de2b61f03540e1c75a6de))
* address PR comments ([f47f4c8](https://github.com/chanzuckerberg/edu-design-system/commit/f47f4c8fcc8c1621e8f103f2e8a830dfcd1ede8e))
* adjust exports from component ([1e3c640](https://github.com/chanzuckerberg/edu-design-system/commit/1e3c640f857e3decf2fa939f3924eb25988cb2f4))
* adopt new class names in storybook ([8ae43cc](https://github.com/chanzuckerberg/edu-design-system/commit/8ae43ccb6d57791cde896252aa19019a708bfb2a))
* **banner, page-level-banner:** use aside instead of article ([43d1b39](https://github.com/chanzuckerberg/edu-design-system/commit/43d1b39f0bb997f28ade775b7d3217d041d49a4e))
* **databar:** make height a calc and correct label size ([303e307](https://github.com/chanzuckerberg/edu-design-system/commit/303e307b1ea7d9425d94402877458d7278a50b36))
* **databar:** make label margin bottom 0 ([b9d9d02](https://github.com/chanzuckerberg/edu-design-system/commit/b9d9d02ca3863782d3e3a9720bf01199eff5ee65))
* **databar:** sync data bar styles with mocks ([c3ba9f9](https://github.com/chanzuckerberg/edu-design-system/commit/c3ba9f9ae1a259f1557f4fdeb2fcc8f95f52d46f))
* **Menu:** add and test CSS changes ([8177327](https://github.com/chanzuckerberg/edu-design-system/commit/8177327b7cac61bc1dc93089dee465b46ed016aa))
* **Menu:** sync width of trigger and popover ([0f330d1](https://github.com/chanzuckerberg/edu-design-system/commit/0f330d1f8e9348ff2241daa3acd0211aa8200aae))
* **renovate:** remove remnant disable ([93375f6](https://github.com/chanzuckerberg/edu-design-system/commit/93375f60a28d1ea5c371bc737e6fdc43f4b60716))
* respect options props in tests ([162dcbd](https://github.com/chanzuckerberg/edu-design-system/commit/162dcbd909c43eeffcf5486513c1e98954414c56))
* **style-dictionary:** delete empty object in css-variables-nested ([38e67aa](https://github.com/chanzuckerberg/edu-design-system/commit/38e67aa2590eff5a19929a72e233d2b13a9baa30))
* update snapshots ([d3701fe](https://github.com/chanzuckerberg/edu-design-system/commit/d3701fec852287ee26780b6026f1f6575c552712))

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
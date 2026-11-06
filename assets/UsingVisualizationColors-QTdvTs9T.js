import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,p as n}from"./blocks-BjY7-UTM.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,r as a}from"./react-BJryJUio.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Documentation/Guidelines/Using Visualization Colors`}),`
`,(0,c.jsx)(n.h1,{id:`visualization-colors`,children:`Visualization Colors`}),`
`,(0,c.jsxs)(n.p,{children:[`EDS provides tier 2 color tokens for data visualization: charts, graphs, heatmaps, and any view where a color stands for a value in the data rather than a role in the interface. Fills live under `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-`}),` and label colors under `,(0,c.jsx)(n.code,{children:`eds-theme-color-text-visualization-`}),`. Every one of them is an alias to an existing tier 1 primitive, so they follow the theme like any other tier 2 token.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:`#overview`,children:`Overview`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#visualization-colors-versus-utility-colors`,children:`Visualization colors versus utility colors`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#the-three-palettes`,children:`The three palettes`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#rules-that-apply-to-every-palette`,children:`Rules that apply to every palette`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#token-naming`,children:`Token naming`})}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#categorical-palette`,children:`Categorical palette`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#scalar-palette`,children:`Scalar palette`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#divergent-palette`,children:`Divergent palette`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#text-on-visualization-colors`,children:`Text on visualization colors`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#overlaps-with-utility-colors`,children:`Overlaps with utility colors`})}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`overview`,children:`Overview`}),`
`,(0,c.jsx)(n.h3,{id:`visualization-colors-versus-utility-colors`,children:`Visualization colors versus utility colors`}),`
`,(0,c.jsx)(n.p,{children:`A utility color answers "what role does this element play in the interface": a favorable Tag, a critical Button, a disabled control. A visualization color answers "what does this color tell the reader about the data": which group a bar belongs to, how large a value is, or how far it sits from a target.`}),`
`,(0,c.jsx)(n.p,{children:`Utility colors are tuned for a label sitting on a background, not for telling adjacent fills apart. The favorable and critical low-emphasis backgrounds are nearly the same color, which is fine behind a labeled Tag and unreadable as two segments of a stacked bar. Utility colors also carry a verdict. Coloring a series with the favorable green says that series is good, and the first time someone charts something that is neither good nor bad, the chart lies.`}),`
`,(0,c.jsx)(n.p,{children:`Use this table to decide which set of tokens to reach for:`}),`
`,(0,c.jsxs)(n.p,{children:[`| What the color needs to say | Use |
| --- | --- |
| A judgement about health or progress: on track, at risk, complete, error | Utility status tokens (`,(0,c.jsx)(n.code,{children:`favorable`}),`, `,(0,c.jsx)(n.code,{children:`warning`}),`, `,(0,c.jsx)(n.code,{children:`critical`}),`, `,(0,c.jsx)(n.code,{children:`informational`}),`) on Tags, badges, legend chips and borders. Never as series fills. |
| Which group a mark belongs to, where the groups have no natural order | `,(0,c.jsx)(n.a,{href:`#categorical-palette`,children:`Categorical palette`}),` |
| How much, where more should look like more | `,(0,c.jsx)(n.a,{href:`#scalar-palette`,children:`Scalar palette`}),` |
| How far above or below a reference value, or how much something changed | `,(0,c.jsx)(n.a,{href:`#divergent-palette`,children:`Divergent palette`}),` |
| Edges in a graph, gridlines, axes | `,(0,c.jsx)(n.code,{children:`eds-theme-color-border-utility-default-low-emphasis`}),`, `,(0,c.jsx)(n.code,{children:`-medium-emphasis`}),` and `,(0,c.jsx)(n.code,{children:`-high-emphasis`}),` |
| That there is no value to show | No fill, plus a dash or hatch. See `,(0,c.jsx)(n.a,{href:`#absence-of-data`,children:`Absence of data`}),`. |
| A label sitting on any of the fills above | `,(0,c.jsx)(n.code,{children:`eds-theme-color-text-visualization-default`}),` or `,(0,c.jsx)(n.code,{children:`-inverse`}),`. See `,(0,c.jsx)(n.a,{href:`#text-on-visualization-colors`,children:`Text on visualization colors`}),`. |`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: Status is the most common reason to use utility colors inside a chart. Status in a chart means the same thing as status in a Tag, so it uses the same tokens. If you need color-coded marks that are not tied to a status, that is the categorical palette.`]}),`
`,(0,c.jsx)(n.h3,{id:`the-three-palettes`,children:`The three palettes`}),`
`,(0,c.jsxs)(n.p,{children:[`| Palette | Token prefix | Shape | For |
| --- | --- | --- | --- |
| Categorical | `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-`}),` | 8 ordered slots plus an overflow slot, each with a high-emphasis value; the first 6 also have a low-emphasis value | Unordered groups: products, regions, cohorts, subject areas |
| Scalar | `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-scalar-`}),` | A neutral basis plus 4 green steps, light to dark | Ordered magnitude: counts, coverage, density, bands |
| Divergent | `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-divergent-`}),` | 3 blue steps, a neutral basis, 3 orange steps | Distance from a reference: deltas, variance against plan, above or below target |`]}),`
`,(0,c.jsxs)(n.p,{children:[`Two text tokens, `,(0,c.jsx)(n.code,{children:`eds-theme-color-text-visualization-default`}),` and `,(0,c.jsx)(n.code,{children:`eds-theme-color-text-visualization-inverse`}),`, cover labels that sit on any fill from any palette. See `,(0,c.jsx)(n.a,{href:`#text-on-visualization-colors`,children:`Text on visualization colors`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`rules-that-apply-to-every-palette`,children:`Rules that apply to every palette`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Color is never the only channel.`}),` Every chart needs a legend, direct labels, or both. The palettes are checked for color-blind readers, but that is not a substitute for a label.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`One palette per encoding channel.`}),` Series fills in a plot area come from one palette. A chart can use categorical fills for its series and utility status tokens for Tags in its legend, but it should not use two palettes as fills inside the same plot area. Green appears in more than one palette because it is the brand color, and this rule is what keeps that from being ambiguous.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Use the steps as given.`}),` Each palette has a fixed number of steps, and those numbers are ceilings. Do not add a ninth categorical color, interpolate between scalar steps, or reach past the tokens to a tier 1 primitive. Past the ceiling, the fix is a different chart (direct labels, small multiples, pattern fills), not a different color.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Put labels outside the mark where you can.`}),` When text must sit on a fill, follow `,(0,c.jsx)(n.a,{href:`#text-on-visualization-colors`,children:`Text on visualization colors`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`token-naming`,children:`Token naming`}),`
`,(0,c.jsx)(n.p,{children:`The same token has three spellings depending on where you use it. The visualization tokens follow the same pattern as every other tier 2 color token.`}),`
`,(0,c.jsxs)(n.p,{children:[`| Where | Spelling | Example |
| --- | --- | --- |
| Figma variable and token source | camelCase segments | `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-1-highEmphasis`}),` |
| CSS custom property | kebab-case, with a `,(0,c.jsx)(n.code,{children:`--`}),` prefix | `,(0,c.jsx)(n.code,{children:`--eds-theme-color-background-visualization-categorical-1-high-emphasis`}),` |
| Tailwind utility class | The CSS property is folded into the class prefix (`,(0,c.jsx)(n.code,{children:`bg-`}),`, `,(0,c.jsx)(n.code,{children:`text-`}),`, `,(0,c.jsx)(n.code,{children:`border-`}),`) and `,(0,c.jsx)(n.code,{children:`eds-theme-color-`}),` is dropped. Segments keep their camelCase. | `,(0,c.jsx)(n.code,{children:`bg-visualization-categorical-1-highEmphasis`}),` |`]}),`
`,(0,c.jsxs)(n.p,{children:[`The tables on this page use the CSS custom property spelling, without the leading `,(0,c.jsx)(n.code,{children:`--`}),`, which matches the Design Tokens pages in this Storybook. In application code, prefer the Tailwind class and fall back to the CSS custom property when no class exists, as described in `,(0,c.jsx)(n.a,{href:`?path=/docs/documentation-theming-using-eds-theming--docs`,children:`Using EDS Theming`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`// HTML elements such as a legend swatch: Tailwind utility class
<span className="bg-visualization-categorical-1-highEmphasis" />

// SVG marks, where Tailwind background classes do not apply: CSS custom property
<rect fill="var(--eds-theme-color-background-visualization-categorical-1-high-emphasis)" />
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: Charting libraries often take a color string rather than a class name. In that case read the CSS custom property at runtime with `,(0,c.jsx)(n.code,{children:`getComputedStyle`}),` rather than copying the hex value, so the chart follows the theme.`]}),`
`,(0,c.jsx)(n.h2,{id:`categorical-palette`,children:`Categorical palette`}),`
`,(0,c.jsxs)(n.p,{children:[`Use the categorical palette when the reader needs to tell one group from another and the groups have no natural order. Eight ordered slots are provided, plus an overflow slot named `,(0,c.jsx)(n.code,{children:`other`}),`. Slots carry no meaning on their own: slot 1 can be a region in one chart and a subject area in the next.`]}),`
`,(0,c.jsx)(n.h3,{id:`when-to-use-it`,children:`When to use it`}),`
`,(0,c.jsx)(n.p,{children:`✅ Series in a line, bar, or area chart where each series is a different group`}),`
`,(0,c.jsx)(n.p,{children:`✅ Segments of a stacked bar or a donut`}),`
`,(0,c.jsx)(n.p,{children:`✅ Node fills in a graph where nodes are grouped`}),`
`,(0,c.jsxs)(n.p,{children:[`✅ Calling out one mark against the rest: use slot 1 for the called-out mark and `,(0,c.jsx)(n.code,{children:`other`}),` for everything else`]}),`
`,(0,c.jsxs)(n.p,{children:[`❌ Categories that have an order. Bands, tiers, grades and score ranges are magnitude, and the `,(0,c.jsx)(n.a,{href:`#scalar-palette`,children:`scalar palette`}),` will read correctly where eight unrelated hues will not.`]}),`
`,(0,c.jsx)(n.p,{children:`❌ Status. A "complete" or "at risk" category is a judgement, and it belongs on the utility status tokens.`}),`
`,(0,c.jsx)(n.p,{children:`❌ Two or more called-out marks against a context. That is an ordinary categorical chart with two slots, not a call-out.`}),`
`,(0,c.jsx)(n.h3,{id:`how-to-use-it`,children:`How to use it`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Take the slots in order.`}),` Three series means slots 1, 2 and 3. The order is optimized so that the first few slots are the most distinct from each other, and skipping around undoes that. Never cherry-pick a slot because its hue suits the subject.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Do not assign a fixed meaning to a slot.`}),` If an application needs "Math is always slot 2," that mapping belongs in the application, not in the design system.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Past eight, stop adding color.`}),` Group the tail into `,(0,c.jsx)(n.code,{children:`other`}),`, or switch to direct labels or pattern fills. The `,(0,c.jsx)(n.code,{children:`other`}),` slot is an overflow bucket, not a ninth color: it should never carry an identity the reader is expected to remember.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Green holds two slots, 1 and 3,`}),` so that most charts read as EDS. They are the closest pair in the set, which is why they sit two slots apart rather than next to each other.`]}),`
`,(0,c.jsx)(n.h3,{id:`tokens`,children:`Tokens`}),`
`,(0,c.jsx)(n.p,{children:`High-emphasis values are the series fills. Use them for bars, areas, lines, points, donut segments and node fills.`}),`
`,(0,c.jsxs)(n.p,{children:[`| Token | Primitive | Hex |
| --- | --- | --- |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-1-high-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`green-450`}),` | `,(0,c.jsx)(n.code,{children:`#19955D`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-2-high-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`blue-550`}),` | `,(0,c.jsx)(n.code,{children:`#4D63CB`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-3-high-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`green-750`}),` | `,(0,c.jsx)(n.code,{children:`#0E442B`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-4-high-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`yellow-250`}),` | `,(0,c.jsx)(n.code,{children:`#CDB825`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-5-high-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`purple-650`}),` | `,(0,c.jsx)(n.code,{children:`#6E3A88`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-6-high-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`orange-550`}),` | `,(0,c.jsx)(n.code,{children:`#B8470F`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-7-high-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`blue-200`}),` | `,(0,c.jsx)(n.code,{children:`#98CDFF`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-8-high-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`red-250`}),` | `,(0,c.jsx)(n.code,{children:`#FF9C99`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-other`}),` | `,(0,c.jsx)(n.code,{children:`neutral-250`}),` | `,(0,c.jsx)(n.code,{children:`#BCB9B6`}),` |`]}),`
`,(0,c.jsx)(n.p,{children:`Low-emphasis values exist for slots 1 through 6 only.`}),`
`,(0,c.jsxs)(n.p,{children:[`| Token | Primitive | Hex |
| --- | --- | --- |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-1-low-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`green-100`}),` | `,(0,c.jsx)(n.code,{children:`#C2ECD9`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-2-low-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`blue-100`}),` | `,(0,c.jsx)(n.code,{children:`#D3EAFF`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-3-low-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`neutral-100`}),` | `,(0,c.jsx)(n.code,{children:`#E6E2DE`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-4-low-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`yellow-050`}),` | `,(0,c.jsx)(n.code,{children:`#FFFC93`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-5-low-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`purple-100`}),` | `,(0,c.jsx)(n.code,{children:`#F3E5FA`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-categorical-6-low-emphasis`}),` | `,(0,c.jsx)(n.code,{children:`orange-100`}),` | `,(0,c.jsx)(n.code,{children:`#FFDCCA`}),` |`]}),`
`,(0,c.jsx)(n.h3,{id:`low-emphasis-categorical-colors`,children:`Low-emphasis categorical colors`}),`
`,(0,c.jsx)(n.p,{children:`Use the low-emphasis values sparingly. The only approved use today is the background of a Tag that labels a category, so that a Tag reading "Region 2" can share a slot with the series it describes. The Tag's text carries the meaning; the tint only reinforces the link to the chart.`}),`
`,(0,c.jsxs)(n.p,{children:[`❌ Do not use low-emphasis values as series fills, area bands, table row tints or hover states. They are not distinct enough from each other to tell groups apart on their own, and slots 7, 8 and `,(0,c.jsx)(n.code,{children:`other`}),` have no low-emphasis value at all, so a chart that relied on them would break at the seventh series.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: Slot 3's low-emphasis value is a neutral rather than a light green, so that it is not a second light green beside slot 1's tint. Under red-green color blindness the two tints are still nearly identical, which is one more reason the Tag label, not the tint, carries the meaning.`]}),`
`,(0,c.jsx)(n.h3,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Separation is checked for color-blind readers.`}),` Every pair of high-emphasis slots was tested in normal vision, deuteranopia and protanopia, and the slot order was chosen on the worst case of the three. Two series are very far apart; three and four series stay clearly separated; the gap narrows from five series on and is at its tightest at eight. That is why eight is the ceiling and why order matters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`The palette is not grayscale-safe.`}),` Slots 2 and 6 have the same lightness, as do slots 4, 8 and `,(0,c.jsx)(n.code,{children:`other`}),`. In black and white print or for readers with no color perception, a legend or direct labels are what distinguish them. Slots 1 and 2, the two most-used, were deliberately pulled apart in lightness so that the common two-series chart does survive grayscale.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Slot 8 and `,(0,c.jsx)(n.code,{children:`other`}),` are close under red-green color blindness.`]}),` When a chart runs to eight series plus an overflow bucket, label the overflow bucket directly rather than relying on the legend.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Four slots are light.`}),` Slots 4, 7, 8 and `,(0,c.jsx)(n.code,{children:`other`}),` sit below 3:1 against a white surface. They are fine as bar and area fills next to a legend. As a 1px line or a small scatter point they are weak, so give those marks extra stroke weight or a larger point size.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Text on a categorical fill`}),` follows the rule in `,(0,c.jsx)(n.a,{href:`#text-on-visualization-colors`,children:`Text on visualization colors`}),`. Every low-emphasis value takes `,(0,c.jsx)(n.code,{children:`text-visualization-default`}),`, which also works for a Tag label.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`scalar-palette`,children:`Scalar palette`}),`
`,(0,c.jsx)(n.p,{children:`Use the scalar palette when the data is an ordered magnitude and more of something should look like more of something. It is a single green ramp of four steps over a neutral basis. Lightness runs in one direction, so the order survives grayscale printing and a poor projector.`}),`
`,(0,c.jsx)(n.h3,{id:`when-to-use-it-1`,children:`When to use it`}),`
`,(0,c.jsx)(n.p,{children:`✅ Heatmaps and calendar grids of counts, volume, coverage or density`}),`
`,(0,c.jsx)(n.p,{children:`✅ Choropleth-style fills where a region's shade is its value`}),`
`,(0,c.jsx)(n.p,{children:`✅ Ordered bands, tiers or score ranges`}),`
`,(0,c.jsxs)(n.p,{children:[`❌ Data with a meaningful middle. If the interesting fact is distance above or below a reference, use the `,(0,c.jsx)(n.a,{href:`#divergent-palette`,children:`divergent palette`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`❌ Unordered groups. Five tiers of green mean "more and less," never "this one and that one."`}),`
`,(0,c.jsx)(n.p,{children:`❌ A second scalar ramp in the same view. EDS provides one ramp on purpose: every hue family is equally even, so a second hue would be chosen by what is left over rather than by what it means. If a single view genuinely needs two ramps side by side, raise it with the EDS team rather than reaching for primitives.`}),`
`,(0,c.jsx)(n.h3,{id:`how-to-use-it-1`,children:`How to use it`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Bin the data to the step count.`}),` The ramp is discrete. Divide the range into four bins and assign one step per bin. Interpolating between steps to make a continuous scale loses the guarantee that adjacent bands are distinguishable, and shows the reader precision that is not in the data.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:[`A measured zero is `,(0,c.jsx)(n.code,{children:`basis`}),`.`]}),` The neutral basis marks the floor of the scale. A grid that is mostly zeroes should read as mostly empty, not as a wall of light green, and spending step 1 on zero would make "none" and "a little" the same color.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Do not reuse green as a categorical fill in the same view.`}),` A green ramp beside a green categorical series reads as though the ramp is about that series.`]}),`
`,(0,c.jsx)(n.h3,{id:`tokens-1`,children:`Tokens`}),`
`,(0,c.jsxs)(n.p,{children:[`| Token | Primitive | Hex | Meaning |
| --- | --- | --- | --- |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-scalar-basis`}),` | `,(0,c.jsx)(n.code,{children:`neutral-050`}),` | `,(0,c.jsx)(n.code,{children:`#F4F1EF`}),` | A measured value of zero |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-scalar-1`}),` | `,(0,c.jsx)(n.code,{children:`green-150`}),` | `,(0,c.jsx)(n.code,{children:`#A1E1C4`}),` | Lowest non-zero bin |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-scalar-2`}),` | `,(0,c.jsx)(n.code,{children:`green-350`}),` | `,(0,c.jsx)(n.code,{children:`#1DB470`}),` | |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-scalar-3`}),` | `,(0,c.jsx)(n.code,{children:`green-550`}),` | `,(0,c.jsx)(n.code,{children:`#177A4D`}),` | |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-scalar-4`}),` | `,(0,c.jsx)(n.code,{children:`green-750`}),` | `,(0,c.jsx)(n.code,{children:`#0E442B`}),` | Highest bin |`]}),`
`,(0,c.jsx)(n.h3,{id:`absence-of-data`,children:`Absence of data`}),`
`,(0,c.jsx)(n.p,{children:`A zero you measured and a value you never had are different facts, and only the first one is data. There is no visualization token for missing data, because absence is shown by the lack of a fill plus a second, non-color channel:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`No data:`}),` leave the mark unfilled and print a dash. Never render it as `,(0,c.jsx)(n.code,{children:`basis`}),`, as step 1, or as a 0.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Restricted:`}),` when a value exists but the reader lacks access, leave the mark unfilled, draw a 45° hatch using `,(0,c.jsx)(n.code,{children:`eds-theme-color-border-utility-default-low-emphasis`}),`, and add a lock icon.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: The dash is not optional. An unfilled cell is only a few steps from `,(0,c.jsx)(n.code,{children:`basis`}),` on color alone, so without the dash a reader cannot tell "nothing here" from "very little here." Getting this wrong is what makes a view look broken when it is only incomplete.`]}),`
`,(0,c.jsx)(n.h3,{id:`accessibility-1`,children:`Accessibility`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Order survives grayscale.`}),` Lightness drops by a similar amount at each step, so the ramp stays ordered for readers with no color perception and in black and white print.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Adjacent steps are distinguishable because the ramp is discrete.`}),` Every neighboring pair is well separated. That guarantee only holds if you bin the data rather than interpolate.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Basis against step 1 is the weakest link in grayscale.`}),` A neutral and a light green differ mostly by hue. Order still holds, but if a mostly-zero view must survive print, give zero cells a dash as well, the same treatment as no data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Text on a scalar fill`}),` follows the rule in `,(0,c.jsx)(n.a,{href:`#text-on-visualization-colors`,children:`Text on visualization colors`}),`. Only heatmap cells usually need it; label bars outside the mark.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`divergent-palette`,children:`Divergent palette`}),`
`,(0,c.jsx)(n.p,{children:`Use the divergent palette when the reader's question is "how far from the reference" or "what changed." It runs from blue through a neutral basis to orange, three steps on each side. The basis is the reference value, not the middle of your data.`}),`
`,(0,c.jsx)(n.h3,{id:`when-to-use-it-2`,children:`When to use it`}),`
`,(0,c.jsx)(n.p,{children:`✅ Change since a previous period, positive and negative`}),`
`,(0,c.jsx)(n.p,{children:`✅ Variance against a plan, budget or target`}),`
`,(0,c.jsx)(n.p,{children:`✅ Any measure with a true reference point where both directions matter`}),`
`,(0,c.jsxs)(n.p,{children:[`❌ Data with no true reference point. A score with no defined threshold is magnitude, and the `,(0,c.jsx)(n.a,{href:`#scalar-palette`,children:`scalar palette`}),` is the honest encoding. Forcing a divergent scale onto it invents a midpoint and tells the reader something you do not know.`]}),`
`,(0,c.jsx)(n.p,{children:`❌ Good versus bad. The two arms are positions on a scale, not verdicts. If the chart is meant to say "this is a problem," that is a utility status token on a Tag or a border.`}),`
`,(0,c.jsx)(n.h3,{id:`how-to-use-it-2`,children:`How to use it`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Anchor the basis at the reference, not at the median.`}),` If the target is 7 days and the data runs from 3 to 30, `,(0,c.jsx)(n.code,{children:`basis`}),` goes at 7. Centering on the median produces a chart that looks balanced and says nothing.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Bin each arm to three steps.`}),` As with the scalar palette, the ramp is discrete.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Blue is below the reference and orange is above it, by default.`}),` Keep that direction consistent within a product. If the domain reads the other way, say which direction is which in the legend.`]}),`
`,(0,c.jsx)(n.h3,{id:`tokens-2`,children:`Tokens`}),`
`,(0,c.jsxs)(n.p,{children:[`| Token | Primitive | Hex | Meaning |
| --- | --- | --- | --- |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-divergent-minus-3`}),` | `,(0,c.jsx)(n.code,{children:`blue-650`}),` | `,(0,c.jsx)(n.code,{children:`#3C4D9D`}),` | Furthest below the reference |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-divergent-minus-2`}),` | `,(0,c.jsx)(n.code,{children:`blue-450`}),` | `,(0,c.jsx)(n.code,{children:`#5C76F3`}),` | |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-divergent-minus-1`}),` | `,(0,c.jsx)(n.code,{children:`blue-200`}),` | `,(0,c.jsx)(n.code,{children:`#98CDFF`}),` | Just below the reference |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-divergent-basis`}),` | `,(0,c.jsx)(n.code,{children:`neutral-050`}),` | `,(0,c.jsx)(n.code,{children:`#F4F1EF`}),` | The reference value |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-divergent-plus-1`}),` | `,(0,c.jsx)(n.code,{children:`orange-200`}),` | `,(0,c.jsx)(n.code,{children:`#FFB38D`}),` | Just above the reference |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-divergent-plus-2`}),` | `,(0,c.jsx)(n.code,{children:`orange-450`}),` | `,(0,c.jsx)(n.code,{children:`#D0622C`}),` | |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-visualization-divergent-plus-3`}),` | `,(0,c.jsx)(n.code,{children:`orange-650`}),` | `,(0,c.jsx)(n.code,{children:`#92380C`}),` | Furthest above the reference |`]}),`
`,(0,c.jsx)(n.h3,{id:`accessibility-2`,children:`Accessibility`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Blue and orange, not red and green.`}),` Red and green is the least readable divergent pair for color-blind readers, and it delivers a verdict: a reader who sees red concludes they failed rather than reading a position on a scale. Blue and orange stay far apart under deuteranopia and protanopia at every step.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`The arms are symmetric in lightness.`}),` Step 1 on each side is equally light, step 3 equally dark, so neither direction looks more important than the other, in color or in grayscale.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mirror steps are not distinguishable in grayscale.`}),` Minus 2 and plus 2 have the same lightness by design. In black and white print, the legend and direct labels carry the direction.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Text on a divergent fill`}),` follows the rule in `,(0,c.jsx)(n.a,{href:`#text-on-visualization-colors`,children:`Text on visualization colors`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`text-on-visualization-colors`,children:`Text on visualization colors`}),`
`,(0,c.jsxs)(n.p,{children:[`Put labels outside the mark whenever the chart allows it. Bars, lines and points take their label beside the mark, in `,(0,c.jsx)(n.code,{children:`eds-theme-color-text-utility-default-primary`}),`. Only heatmap cells, donut segments and graph node labels genuinely need text sitting on a visualization color.`]}),`
`,(0,c.jsx)(n.p,{children:`When text must sit on a fill, EDS provides two text tokens. Which one to use depends on the grade of the primitive behind the fill, and the rule is the same across all three palettes:`}),`
`,(0,c.jsxs)(n.p,{children:[`| Fill | Text token |
| --- | --- |
| Primitive at grade 450 or lighter: every low-emphasis categorical value, `,(0,c.jsx)(n.code,{children:`basis`}),`, scalar steps 1 and 2, divergent steps minus 1, minus 2, plus 1 and plus 2, and categorical slots 1, 4, 7, 8 and `,(0,c.jsx)(n.code,{children:`other`}),` | `,(0,c.jsx)(n.code,{children:`eds-theme-color-text-visualization-default`}),` |
| Primitive at grade 550 or darker: categorical slots 2, 3, 5 and 6, scalar steps 3 and 4, and divergent steps minus 3 and plus 3 | `,(0,c.jsx)(n.code,{children:`eds-theme-color-text-visualization-inverse`}),` |`]}),`
`,(0,c.jsxs)(n.p,{children:[`| Token | Primitive | Hex |
| --- | --- | --- |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-text-visualization-default`}),` | `,(0,c.jsx)(n.code,{children:`black`}),` | `,(0,c.jsx)(n.code,{children:`#000000`}),` |
| `,(0,c.jsx)(n.code,{children:`eds-theme-color-text-visualization-inverse`}),` | `,(0,c.jsx)(n.code,{children:`white`}),` | `,(0,c.jsx)(n.code,{children:`#FFFFFF`}),` |`]}),`
`,(0,c.jsx)(n.p,{children:`Every pairing in the table meets 4.5:1. The tightest is the default text on divergent step minus 2.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: `,(0,c.jsx)(n.code,{children:`text-visualization-default`}),` is black rather than the default primary text color, because the primary text color does not reach 4.5:1 on the mid-tone fills: categorical slot 1, scalar step 2, and divergent steps minus 2 and plus 2. Use the primary text color for labels beside a mark and the visualization text tokens for labels on a fill.`]}),`
`,(0,c.jsx)(n.p,{children:`Three constraints apply to any text on a fill:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`No opacity.`}),` The contrast margin on the mid-tone fills is thin, and text at 80% opacity drops below 4.5:1.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data labels are normal text.`}),` An 11px number needs 4.5:1 and cannot borrow the 3:1 allowance for large text.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Do not straddle two steps`}),` with one label.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`overlaps-with-utility-colors`,children:`Overlaps with utility colors`}),`
`,(0,c.jsx)(n.p,{children:`Some visualization tokens resolve to the same primitive as a utility token. This is expected, because both layers alias the same small set of primitives, and the one-palette-per-channel rule is what keeps them from being confused.`}),`
`,(0,c.jsxs)(n.p,{children:[`| Visualization token | Shares a primitive with | Why it is acceptable |
| --- | --- | --- |
| `,(0,c.jsx)(n.code,{children:`categorical-4-high-emphasis`}),` (`,(0,c.jsx)(n.code,{children:`yellow-250`}),`) | `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-utility-warning-high-emphasis`}),` | A slot 4 Tag or fill only ever appears beside slots 1 through 3, because slots are taken in order, so the context makes it a category rather than a warning. Do not place warning Tags inside a plot area that uses slot 4. |
| `,(0,c.jsx)(n.code,{children:`categorical-1-high-emphasis`}),` (`,(0,c.jsx)(n.code,{children:`green-450`}),`) | `,(0,c.jsx)(n.code,{children:`eds-theme-color-border-utility-focus`}),` | A focused slot 1 mark gets a ring the color of its own fill. Charts should draw a two-tone focus ring, an inner white stroke inside the focus color. |
| `,(0,c.jsx)(n.code,{children:`scalar-3`}),` (`,(0,c.jsx)(n.code,{children:`green-550`}),`) | `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-utility-favorable-high-emphasis`}),` | A scalar ramp is never used in the same plot area as status fills. |
| `,(0,c.jsx)(n.code,{children:`categorical-3-high-emphasis`}),` and `,(0,c.jsx)(n.code,{children:`scalar-4`}),` (`,(0,c.jsx)(n.code,{children:`green-750`}),`) | Each other | Categorical and scalar fills never share a plot area. |
| `,(0,c.jsx)(n.code,{children:`scalar-basis`}),` and `,(0,c.jsx)(n.code,{children:`divergent-basis`}),` (`,(0,c.jsx)(n.code,{children:`neutral-050`}),`) | Each other | Deliberate. One value means "the reference point" in both palettes. |
| `,(0,c.jsx)(n.code,{children:`categorical-other`}),` (`,(0,c.jsx)(n.code,{children:`neutral-250`}),`) | Close to `,(0,c.jsx)(n.code,{children:`eds-theme-color-background-utility-disabled-medium-emphasis`}),` | Gray means "present, not the subject" in a chart. Axis labels and values resolve the question before color has to. |`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),n()})))()}l();export{s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./FpoBlock-DB6Mv5jR.js";import{n as a,t as o}from"./Button-Byx35aD3.js";import{n as s,t as c}from"./InputField-GOUebNm6.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{t(),s(),r(),a(),l=n(),{userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/InputField`,component:c,parameters:{docs:{subtitle:`Input fields are used to gather text-based input. They are represented by a rectangular box where the user can enter and edit their input.`},layout:`centered`,backgrounds:{default:`background-utility-inverse-high-emphasis`}},args:{className:`w-[384px]`,subLabel:`Additional descriptive text for the field.`},argTypes:{type:{control:`select`,options:[`text`,`password`,`datetime-local`,`date`,`month`,`time`,`week`,`number`,`email`,`url`,`search`,`tel`]}},decorators:[e=>(0,l.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})],tags:[`autodocs`,`version:3.0.0`]},p={args:{label:`Default input field`,subLabel:``}},m={args:{label:`Default input field`,fieldNote:`Field validation description.`}},h={args:{label:`Default input field`,fieldNote:`This is a fieldnote.`,defaultValue:`Text value`}},g={args:{label:`Default input field`}},_={args:{label:`Error input field`,status:`critical`,fieldNote:`This is a fieldnote with an error.`}},v={args:{label:`Warning input field`,status:`warning`,fieldNote:`This uses the warning treatment and also applies to the field note`}},y={args:{label:`Read-only field`,readOnly:!0,defaultValue:`some read-only information`,fieldNote:`This will show up like text, but not be interactive`}},b={args:{label:`Disabled input field`,disabled:!0,fieldNote:`This InputField is disabled`,defaultValue:`Text in disabled field`},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},x={args:{leadingContent:`search`,"aria-label":`search field`,placeholder:`Search...`}},S={args:{label:`Input field with fieldNote`,showHint:!0,required:!0,fieldNote:`This is a fieldnote for a required input field.`}},C={args:{label:`Input field with fieldNote`,showHint:!0,required:!0,disabled:!0,fieldNote:`This is a fieldnote for a required input field.`},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},w={args:{"aria-label":`Input for no visible label`,fieldNote:`This input field has no visible label`,required:!0}},T={args:{label:`Password`,type:`password`,defaultValue:`secret123`},parameters:{snapshot:{skip:!0}}},E={args:{...T.args},parameters:{...T.parameters},play:async({canvasElement:e})=>{let t=await d(e).findByRole(`button`);await u.click(t)}},D={args:{...p.args,type:`date`},argTypes:{type:{control:`select`,options:[`datetime-local`,`date`,`month`,`time`,`week`]}}},O={args:{...p.args,type:`time`},argTypes:{type:{control:`select`,options:[`datetime-local`,`date`,`month`,`time`,`week`]}}},k={args:{label:`Field with Optional Hint`,showHint:!0}},A={parameters:{chromatic:{disableSnapshot:!0},docs:{source:{type:`dynamic`}}},render:()=>(0,l.jsx)(c,{inputWithin:(0,l.jsx)(o,{rank:`secondary`,size:`sm`,children:`Copy`}),label:`Input field with button inside`,type:`text`})},j={parameters:{chromatic:{disableSnapshot:!0},docs:{source:{type:`dynamic`}}},render:()=>(0,l.jsx)(c,{defaultValue:`Text that runs up against the button`,inputWithin:(0,l.jsx)(o,{icon:`open-in-new`,iconLayout:`left`,rank:`secondary`,size:`sm`,children:`Button with extra text`}),label:`Input field with button inside`,type:`text`})},M={parameters:{chromatic:{disableSnapshot:!0},docs:{source:{type:`dynamic`}}},render:()=>(0,l.jsx)(c,{defaultValue:`Text that stops at the reserved space`,inputWithin:(0,l.jsx)(o,{rank:`secondary`,size:`sm`,children:`Copy`}),label:`Input field with a fixed reservation`,style:{"--input-field__input-within-width":`120px`},type:`text`})},N={args:{defaultValue:`Some initial text`,label:`Test Label`,maxLength:30,required:!0}},P={args:{value:`Some initial text`,defaultValue:void 0,label:`Test Label`,maxLength:30,required:!0}},F={args:{defaultValue:`Some initial text`,label:`test label`,maxLength:15,required:!0},render:e=>(0,l.jsx)(c,{...e})},I={args:{defaultValue:`Some initial text`,label:`Shortened Length Field`,recommendedMaxLength:15,required:!0},render:e=>(0,l.jsx)(c,{...e})},L={args:{label:`test label`,defaultValue:`Some initial text`,fieldNote:`Longer Field Description`,maxLength:20,recommendedMaxLength:15,required:!0},render:e=>(0,l.jsx)(c,{...e})},R={args:{leadingContent:(0,l.jsx)(i,{size:24}),"aria-label":`assignee field`,placeholder:`Assign to...`}},z=`Default.WithFullDescription.WithText.NoFieldnote.Error.Warning.ReadOnly.Disabled.LeadingIcon.Required.RequiredDisabled.NoVisibleLabel.Password.PasswordWithShownText.DateHandling.TimeHandling.ShowHint.InputWithin.LongInputWithin.InputWithinFixedWidth.WithinMaxLength.ControlledWithinMaxLength.WithAMaxLength.WithARecommendedLength.WithBothMaxAndRecommendedLength.LeadingContent`.split(`.`),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default input field',
    subLabel: ''
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default input field',
    fieldNote: 'Field validation description.'
  }
}`,...m.parameters?.docs?.source},description:{story:`An input field can have both a footnote (describing how the field is validated), and a subLabel
(a longer description to elaborate on the label)`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default input field',
    fieldNote: 'This is a fieldnote.',
    defaultValue: 'Text value'
  }
}`,...h.parameters?.docs?.source},description:{story:`Fields, when containing text, have a theme matching the rest of the UI.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default input field'
  }
}`,...g.parameters?.docs?.source},description:{story:"Fields do not required a `fieldNote`.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Error input field',
    status: 'critical',
    fieldNote: 'This is a fieldnote with an error.'
  }
}`,..._.parameters?.docs?.source},description:{story:`Fields can have an error state.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Warning input field',
    status: 'warning',
    fieldNote: 'This uses the warning treatment and also applies to the field note'
  }
}`,...v.parameters?.docs?.source},description:{story:`Fields can have a warning state.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read-only field',
    readOnly: true,
    defaultValue: 'some read-only information',
    fieldNote: 'This will show up like text, but not be interactive'
  }
}`,...y.parameters?.docs?.source},description:{story:`Read-only fields can have a value and are not editable, but are different from disabled fields.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled input field',
    disabled: true,
    fieldNote: 'This InputField is disabled',
    defaultValue: 'Text in disabled field'
  },
  parameters: {
    a11y: {
      config: {
        rules: [
        // Disabled input does not need to meet color contrast
        {
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`Fields can be marked as disabled (and contain a value in such cases).`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    leadingContent: 'search',
    'aria-label': 'search field',
    placeholder: 'Search...'
  }
}`,...x.parameters?.docs?.source},description:{story:`Fields can have a leading icon, indicating what kind of content can go into the field.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input field with fieldNote',
    showHint: true,
    required: true,
    fieldNote: 'This is a fieldnote for a required input field.'
  }
}`,...S.parameters?.docs?.source},description:{story:'Fields can be marked as required. When required, consumers should implement error state handling on the associated `<form>` element. This should\nmake use of the `status="critical"` and `fieldNote` properties to signal that the field requirement is unmet.\n\nConsumers must implement this to avoid the fallback tooltip which can show up in some browsers upon submit.\n\nSee <https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/noValidate> for a possible method of suppressing this behavior.',...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input field with fieldNote',
    showHint: true,
    required: true,
    disabled: true,
    fieldNote: 'This is a fieldnote for a required input field.'
  },
  parameters: {
    a11y: {
      config: {
        rules: [
        // Disabled input does not need to meet color contrast
        {
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...C.parameters?.docs?.source},description:{story:`Fields can be marked as required.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Input for no visible label',
    fieldNote: 'This input field has no visible label',
    required: true
  }
}`,...w.parameters?.docs?.source},description:{story:"When not using a visible label with `InputField`, you must apply some time of ARIA label to the component, like `aria-label`.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    defaultValue: 'secret123'
  },
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...T.parameters?.docs?.source},description:{story:`Password fields show dots instead of characters, to help with security. They allow for show/hide of the field
contents.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Password.args
  },
  parameters: {
    ...Password.parameters
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const showHideButton = await canvas.findByRole('button');
    await userEvent.click(showHideButton);
  }
}`,...E.parameters?.docs?.source},description:{story:`Password fields show dots instead of characters, to help with security. They allow for show/hide of the field
contents, and resetting.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'date'
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['datetime-local', 'date', 'month', 'time', 'week']
    }
  }
}`,...D.parameters?.docs?.source},description:{story:`You can specify dates of varying details (including full date, month and year, etc.).
It uses the built-in browser UI to handle date/time input.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'time'
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['datetime-local', 'date', 'month', 'time', 'week']
    }
  }
}`,...O.parameters?.docs?.source},description:{story:`You can specify time as well, which uses a different internal glyph to trigger the browser UI.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Field with Optional Hint',
    showHint: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Fields can have an optional field hint added, for extra clarity.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  },
  render: () => <InputField inputWithin={<Button rank="secondary" size="sm">
          Copy
        </Button>} label="Input field with button inside" type="text" />
}`,...A.parameters?.docs?.source},description:{story:`You can render certain components **within** an \`InputField\`, such as a button, icon, or other
small component. This facility is used to implement controls that should appear visibly nested
within the field, at the trailing edge.

The field measures the content you pass and reserves matching space, so the text area always
clears it.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  },
  render: () => <InputField defaultValue="Text that runs up against the button" inputWithin={<Button icon="open-in-new" iconLayout="left" rank="secondary" size="sm">
          Button with extra text
        </Button>} label="Input field with button inside" type="text" />
}`,...j.parameters?.docs?.source},description:{story:`Content in the slot is free to be as wide as it needs. The text area shrinks to match, so a
longer button label is not trimmed.

Very wide content is still bounded, so that some usable text area always remains.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  },
  render: () => <InputField defaultValue="Text that stops at the reserved space" inputWithin={<Button rank="secondary" size="sm">
          Copy
        </Button>} label="Input field with a fixed reservation" style={{
    '--input-field__input-within-width': '120px'
  }} type="text" />
}`,...M.parameters?.docs?.source},description:{story:`The measured width can be overridden with the \`--input-field__input-within-width\` CSS custom
property, for cases where a fixed reservation is preferred (for instance, to keep a set of fields
aligned when their embedded buttons have differing labels).`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Some initial text',
    label: 'Test Label',
    maxLength: 30,
    required: true
  }
}`,...N.parameters?.docs?.source},description:{story:`Fields can show a counter displaying the maximum allowed character length. This will update as users enter more data. Once the
maximum is reached, further input is not allowed.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Some initial text',
    defaultValue: undefined,
    label: 'Test Label',
    maxLength: 30,
    required: true
  }
}`,...P.parameters?.docs?.source},description:{story:`Character counting is also true when the field is controlled.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Some initial text',
    label: 'test label',
    maxLength: 15,
    required: true
  },
  render: args => <InputField {...args} />
}`,...F.parameters?.docs?.source},description:{story:"You can lock the maximum length of the text content of `InputField`. When setting `maxLength`,\nthe field will reuse the browser's [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)\nbehavior (e.g., prevent further text from being typed, prevent keydown events, etc.).",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Some initial text',
    label: 'Shortened Length Field',
    recommendedMaxLength: 15,
    required: true
  },
  render: args => <InputField {...args} />
}`,...I.parameters?.docs?.source},description:{story:"If you want to signal that a field has reached a maximum length but want to allow more text to be typed, you can use\n`recommendedMaxLength`. This will show a similar UI to using `maxLength` but will allow more text to be typed, and\nemit any appropriate events.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'test label',
    defaultValue: 'Some initial text',
    fieldNote: 'Longer Field Description',
    maxLength: 20,
    recommendedMaxLength: 15,
    required: true
  },
  render: args => <InputField {...args} />
}`,...L.parameters?.docs?.source},description:{story:"Both `maxLength` and `recommendedMaxLength` can be specified at the same time. Text length between `recommendedMaxLength`\nand `maxLength` will show the treatment warning the user about the text length being violated.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    leadingContent: <FpoBlock size={24} />,
    'aria-label': 'assignee field',
    placeholder: 'Assign to...'
  }
}`,...R.parameters?.docs?.source},description:{story:`The leading slot also takes arbitrary content, for cases an EDS icon does not cover.
The block below stands in for whatever you supply, so the slot itself is the subject
rather than the component that happened to be picked.`,...R.parameters?.docs?.description}}}})))()}B();export{P as ControlledWithinMaxLength,D as DateHandling,p as Default,b as Disabled,_ as Error,A as InputWithin,M as InputWithinFixedWidth,R as LeadingContent,x as LeadingIcon,j as LongInputWithin,g as NoFieldnote,w as NoVisibleLabel,T as Password,E as PasswordWithShownText,y as ReadOnly,S as Required,C as RequiredDisabled,k as ShowHint,O as TimeHandling,v as Warning,F as WithAMaxLength,I as WithARecommendedLength,L as WithBothMaxAndRecommendedLength,m as WithFullDescription,h as WithText,N as WithinMaxLength,z as __namedExportsOrder,f as default};
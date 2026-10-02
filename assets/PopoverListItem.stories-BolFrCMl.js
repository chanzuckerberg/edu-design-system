import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{t as r}from"./Icon-BK9TF5-o.js";import{t as i}from"./Icon-DJYKhM6X.js";import{t as a}from"./Avatar-hC3bJcIQ.js";import{t as o}from"./Avatar-BForYq0Z.js";import{n as s,t as c}from"./PopoverListItem-1jWLpWtF.js";import{n as l,t as u}from"./FpoBlock-D0PLXBg0.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{n(),s(),l(),o(),i(),d=t(),f={title:`Components/PopoverListItem`,component:c,parameters:{docs:{subtitle:`Structure and styles for an individual item in a popover that contains a list of items.`},layout:`centered`},tags:[`autodocs`,`version:2.1.1`],argTypes:{leadingContent:{control:!1},__type:{table:{disable:!0}},trailingContent:{control:!1}}},p={args:{children:`Favorite`,leadingContent:(0,d.jsx)(r,{name:`heart-filled`,purpose:`decorative`,size:`24px`}),subLabel:`Save posts for later`}},m={args:{children:`Favorite`,leadingContent:(0,d.jsx)(r,{name:`heart-filled`,purpose:`decorative`,size:`24px`}),trailingContent:`5`,subLabel:`Save posts for later`}},h={args:{...p.args,leadingContent:void 0,children:`Favorite`,subLabel:`Save posts for later`,__type:`listitem`}},g={args:{children:`Print`,leadingContent:(0,d.jsx)(r,{name:`print`,purpose:`decorative`,size:`24px`}),isDisabled:!0,__type:`listitem`}},_={args:{children:`Delete`,leadingContent:(0,d.jsx)(r,{name:`trash`,purpose:`decorative`,size:`24px`}),isDestructiveAction:!0}},v={args:{...g.args,..._.args,subLabel:`Permanently remove this item`}},y={args:{children:`Switch account`,leadingContent:(0,d.jsx)(a,{icon:`arrows-circular`,size:`sm`,variant:`icon`})}},b={args:{children:`Add comment`,leadingContent:(0,d.jsx)(r,{name:`document-blank`,purpose:`decorative`,size:`24px`}),trailingContent:`5`}},x={args:{children:`Add comment`,leadingContent:(0,d.jsx)(r,{name:`document-blank`,purpose:`decorative`,size:`24px`}),trailingContent:(0,d.jsx)(r,{name:`check`,purpose:`decorative`,size:`24px`})}},S={args:{...b.args,trailingContent:`⌘K`}},C={args:{__type:`separator`}},w={args:{__type:`caption`,children:`Copyright 2005 Logo Ipsum Inc. All rights reserved.`}},T={args:{__type:`label`,children:`Account`}},E={args:{...x.args,leadingContent:(0,d.jsx)(u,{size:24}),trailingContent:(0,d.jsx)(u,{size:24})}},D=[`Default`,`DefaultWithTrailingContent`,`WithNoIcon`,`Disabled`,`Destructive`,`DisabledAndDestructive`,`WithLeadingAvatar`,`WithLeadingAndTrailingContent`,`WithLeadingAndTrailingIcons`,`WithKeyboardShortcut`,`Separator`,`Caption`,`Label`,`WithFpoContentSlots`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Favorite',
    leadingContent: <Icon name={'heart-filled'} purpose="decorative" size="24px" />,
    subLabel: 'Save posts for later'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Favorite',
    leadingContent: <Icon name={'heart-filled'} purpose="decorative" size="24px" />,
    trailingContent: '5',
    subLabel: 'Save posts for later'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leadingContent: undefined,
    children: 'Favorite',
    subLabel: 'Save posts for later',
    __type: 'listitem'
  }
}`,...h.parameters?.docs?.source},description:{story:"Note: using `__type` list item b/c there is no leading content to display. Other types preserve that space for checkboxes.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Print',
    leadingContent: <Icon name={'print'} purpose="decorative" size="24px" />,
    isDisabled: true,
    __type: 'listitem'
  }
}`,...g.parameters?.docs?.source},description:{story:`Popover list items can be disabled, and ignore all user interaction.

Note: using \`__type\` list item b/c there is no leading content to display`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    leadingContent: <Icon name="trash" purpose="decorative" size="24px" />,
    isDestructiveAction: true
  }
}`,..._.parameters?.docs?.source},description:{story:`Popover list items can be marked as destructive, with support for all of the other options.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Disabled.args,
    ...Destructive.args,
    subLabel: 'Permanently remove this item'
  }
}`,...v.parameters?.docs?.source},description:{story:`Popover list items can be marked as destructive while disabled. In such cases, it should appear as disabled.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Switch account',
    leadingContent: <Avatar icon="arrows-circular" size="sm" variant="icon" />
  }
}`,...y.parameters?.docs?.source},description:{story:"Leading content is a flexible slot, and can contain many elements, including `Avatar`s.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Add comment',
    leadingContent: <Icon name="document-blank" purpose="decorative" size="24px" />,
    trailingContent: '5'
  }
}`,...b.parameters?.docs?.source},description:{story:`List items can also have trailing content. By default this is plain text, but can also function as a flexible slot.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Add comment',
    leadingContent: <Icon name="document-blank" purpose="decorative" size="24px" />,
    trailingContent: <Icon name="check" purpose="decorative" size="24px" />
  }
}`,...x.parameters?.docs?.source},description:{story:`List items can also have trailing content. By default this is plain text, but can also function as a flexible slot.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLeadingAndTrailingContent.args,
    trailingContent: '⌘K'
  }
}`,...S.parameters?.docs?.source},description:{story:`This includes displaying keyboard shortcuts using system glyphs.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    __type: 'separator'
  }
}`,...C.parameters?.docs?.source},description:{story:`Separators exist to improve the appearance of related/grouped menu items.

Note: uses \`__type="separator"\`.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    __type: 'caption',
    children: 'Copyright 2005 Logo Ipsum Inc. All rights reserved.'
  }
}`,...w.parameters?.docs?.source},description:{story:`Captions can be used to display non-interactive, supplementary text in a menu (e.g., a copyright footer).

Note: uses \`__type="caption"\`.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    __type: 'label',
    children: 'Account'
  }
}`,...T.parameters?.docs?.source},description:{story:`Labels can help label the content within a popover list item section.

Note: uses \`__type="label"\`.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLeadingAndTrailingIcons.args,
    leadingContent: <FpoBlock size={24} />,
    trailingContent: <FpoBlock size={24} />
  }
}`,...E.parameters?.docs?.source},description:{story:`Both slots take arbitrary content, not only an icon. The blocks below stand in for
whatever you supply, so the slot itself is the subject rather than the icon that
happened to be picked.`,...E.parameters?.docs?.description}}}}))();export{w as Caption,p as Default,m as DefaultWithTrailingContent,_ as Destructive,g as Disabled,v as DisabledAndDestructive,T as Label,C as Separator,E as WithFpoContentSlots,S as WithKeyboardShortcut,b as WithLeadingAndTrailingContent,x as WithLeadingAndTrailingIcons,y as WithLeadingAvatar,h as WithNoIcon,D as __namedExportsOrder,f as default};
import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{r as n}from"./react-DYrPrLM4.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,r as a}from"./iframe-P4Dbp05h.js";import{i as o,n as s,r as c,t as l}from"./Modal-C71UT-ez.js";import{n as u}from"./isChromatic-kEXqBFHh.js";import{n as d,t as f}from"./Button-DbzocW5C.js";import{n as p,t as m}from"./ButtonGroup-idF4k8g9.js";import{n as h,t as g}from"./InputField-B8UQHt8m.js";function _(e){let[t,n]=(0,v.useState)(!1);return(0,y.jsxs)(`div`,{className:`p-spacing-size-3 flex justify-center`,children:[(0,y.jsx)(f,{onClick:()=>n(!0),rank:`primary`,children:`Open the dialog`}),(0,y.jsx)(c,{...e,onCancel:()=>n(!1),onConfirm:()=>n(!1),open:t})]})}var v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{v=e(n()),o(),a(),d(),p(),h(),s(),y=r(),{userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Dialog`,component:c,parameters:{docs:{subtitle:`Dialogs ask the user to confirm or cancel a single action. They replace the browser’s built-in confirm prompt.`},chromatic:{delay:500,prefersReducedMotion:`reduce`},layout:`fullscreen`},args:{children:`Your edits to this lesson plan haven’t been saved. If you leave now, they’ll be lost.`,confirmLabel:`Discard changes`,title:`Discard your changes?`},tags:[`autodocs`,`beta`,`version:1.0.0`]},C=async({canvasElement:e})=>{if(u()){let t=x(e);await b.click(await t.findByRole(`button`))}},w={layout:`centered`,snapshot:{skip:!0}},T={parameters:{...w,chromatic:{viewports:[i.googlePixel2,i.ipadMini,i.ipadPro,i.chromebook,i.macbookPro]}},render:e=>(0,y.jsx)(_,{...e}),play:C},E={args:{children:`This removes the file for everyone in your class.`,confirmLabel:`Delete file`,confirmVariant:`critical`,title:`Delete “Unit 3 notes”?`},parameters:w,render:T.render,play:C},D={args:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`strong`,{children:`3 students`}),` haven’t submitted yet. Closing the assignment marks their work as missing.`]}),confirmLabel:`Close assignment`,title:`Close this assignment?`},parameters:w,render:T.render,play:C},O={args:{cancelLabel:`Keep editing`},parameters:w,render:T.render,play:C},k=async({canvasElement:e})=>{if(u()){let t=x(e);await b.click(await t.findByRole(`button`,{name:`Open the modal`}));let n=x(document.body);await b.type(await n.findByLabelText(`Note`),`Follow up with the team`),await b.click(n.getByRole(`button`,{name:`close`})),await n.findByRole(`alertdialog`)}},A={parameters:w,render:()=>{function e(){let[e,t]=(0,v.useState)(!1),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(``),o=()=>{r(!1),t(!1),a(``)},s=()=>i===``?o():r(!0);return(0,y.jsxs)(`div`,{className:`p-spacing-size-3 flex justify-center`,children:[(0,y.jsx)(f,{onClick:()=>t(!0),rank:`primary`,children:`Open the modal`}),(0,y.jsxs)(l,{onClose:s,open:e,size:`sm`,children:[(0,y.jsx)(l.Header,{children:(0,y.jsx)(l.Title,{children:`Add a note`})}),(0,y.jsxs)(l.Body,{children:[(0,y.jsx)(g,{label:`Note`,onChange:e=>a(e.target.value),value:i}),(0,y.jsx)(c,{confirmLabel:`Discard note`,confirmVariant:`critical`,onCancel:()=>r(!1),onConfirm:o,open:n,title:`Discard your note?`,children:`Closing clears the note you started.`})]}),(0,y.jsx)(l.Footer,{children:(0,y.jsxs)(m,{children:[(0,y.jsx)(f,{onClick:o,rank:`primary`,children:`Save note`}),(0,y.jsx)(f,{onClick:s,rank:`secondary`,children:`Cancel`})]})})]})]})}return(0,y.jsx)(e,{})},play:k},j=[`Default`,`Critical`,`FormattedBody`,`CustomCancelLabel`,`ConfirmingModalClose`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...sharedParameters,
    chromatic: {
      viewports: [chromaticViewports.googlePixel2, chromaticViewports.ipadMini, chromaticViewports.ipadPro, chromaticViewports.chromebook, chromaticViewports.macbookPro]
    }
  },
  render: args => <InteractiveExample {...args} />,
  play: openInChromatic
}`,...T.parameters?.docs?.source},description:{story:`Clicking on a trigger item (in this case \`Button\`) opens the dialog. Focus starts on the
primary button, so Enter takes the default action. The secondary button, ESC, and a click on
the overlay all cancel.

In Chromatic this snapshots at every available viewport: the dialog fills the viewport at the
smallest breakpoint, floats at half the viewport width at tablet widths, and a quarter at
desktop widths.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This removes the file for everyone in your class.',
    confirmLabel: 'Delete file',
    confirmVariant: 'critical',
    title: 'Delete “Unit 3 notes”?'
  },
  parameters: sharedParameters,
  render: Default.render,
  play: openInChromatic
}`,...E.parameters?.docs?.source},description:{story:'Use `confirmVariant="critical"` when the default action destroys something or can\'t be undone.',...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <strong>3 students</strong> haven’t submitted yet. Closing the
        assignment marks their work as missing.
      </>,
    confirmLabel: 'Close assignment',
    title: 'Close this assignment?'
  },
  parameters: sharedParameters,
  render: Default.render,
  play: openInChromatic
}`,...D.parameters?.docs?.source},description:{story:`The body takes any React node, so it can carry formatted text.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    cancelLabel: 'Keep editing'
  },
  parameters: sharedParameters,
  render: Default.render,
  play: openInChromatic
}`,...O.parameters?.docs?.source},description:{story:"`cancelLabel` relabels the secondary button, for example to translate it.",...O.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: sharedParameters,
  render: () => {
    function ConfirmingModalCloseExample() {
      const [modalOpen, setModalOpen] = useState(false);
      const [dialogOpen, setDialogOpen] = useState(false);
      const [draft, setDraft] = useState('');
      const closeModal = () => {
        setDialogOpen(false);
        setModalOpen(false);
        // closing discards the draft, which is what makes the dialog worth showing
        setDraft('');
      };
      // the close button, ESC, overlay clicks, and the footer's Cancel all ask first
      const requestClose = () => draft === '' ? closeModal() : setDialogOpen(true);
      return <div className="p-spacing-size-3 flex justify-center">
          <Button onClick={() => setModalOpen(true)} rank="primary">
            Open the modal
          </Button>
          <Modal onClose={requestClose} open={modalOpen} size="sm">
            <Modal.Header>
              <Modal.Title>Add a note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputField label="Note" onChange={event => setDraft(event.target.value)} value={draft} />
              <Dialog confirmLabel="Discard note" confirmVariant="critical" onCancel={() => setDialogOpen(false)} onConfirm={closeModal} open={dialogOpen} title="Discard your note?">
                Closing clears the note you started.
              </Dialog>
            </Modal.Body>
            <Modal.Footer>
              <ButtonGroup>
                <Button onClick={closeModal} rank="primary">
                  Save note
                </Button>
                <Button onClick={requestClose} rank="secondary">
                  Cancel
                </Button>
              </ButtonGroup>
            </Modal.Footer>
          </Modal>
        </div>;
    }
    return <ConfirmingModalCloseExample />;
  },
  play: openNoteAndClose
}`,...A.parameters?.docs?.source},description:{story:"A `Dialog` in place of `Modal`'s `warnOnClose`. Type in the field, then try to close the modal\nwith the close button, ESC, or a click on the overlay. Closing clears the note, so the modal\nasks first while there's one to lose; an empty modal closes straight away.\n\n`warnOnClose` stays off. The modal's `onClose` decides instead, and the footer's Cancel\nbutton goes through the same check. The `Dialog` renders inside `Modal.Body` so it stacks\nabove the modal.",...A.parameters?.docs?.description}}}})))()}M();export{A as ConfirmingModalClose,E as Critical,O as CustomCancelLabel,T as Default,D as FormattedBody,j as __namedExportsOrder,S as default};
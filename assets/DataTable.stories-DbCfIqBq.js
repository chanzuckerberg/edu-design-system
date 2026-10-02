import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r,n as i,t as a}from"./iframe-CxYcUItw.js";import{n as o,t as s}from"./Icon-DJYKhM6X.js";import{t as c}from"./Button-B9L7vEj2.js";import{t as l}from"./Button-Czofd_Br.js";import{t as u}from"./Menu-JUw5tcxL.js";import{t as d}from"./Menu-DngLwsWN.js";import{t as f}from"./Checkbox-D0WLzxnw.js";import{t as p}from"./Checkbox-BJsrBMyB.js";import{a as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./DataTable-0VECo8sc.js";import{n as x,t as S}from"./FpoBlock-D0PLXBg0.js";import{n as C,t as w}from"./semanticIconOverrides-CAkf2_aJ.js";var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;t((()=>{T=e(r()),v(),b(),x(),C(),i(),l(),p(),s(),d(),E=n(),D={title:`Components/DataTable`,component:g,parameters:{docs:{subtitle:`Tables display and organize data in a structured format. They include customizations for size, style, interactivity, and data presentation.`},chromatic:{viewports:[a.ipadMini,a.chromebook,a.googlePixel2]}},argTypes:{actions:{control:!1},children:{control:!1}},tags:[`autodocs`,`version:3.0.0`]},O=[{firstName:`Joe`,lastName:`Dirte`,age:45,visits:20,progress:10},{firstName:`Tandy`,lastName:`Miller`,age:40,visits:40,progress:80,status:`warning`},{firstName:`Tanner`,lastName:`Lindsey`,age:24,visits:100,progress:50},{firstName:`Joe`,lastName:`Dirte`,age:45,visits:20,progress:10,status:`critical`},{firstName:`Tandy`,lastName:`Miller`,age:40,visits:40,progress:80},{firstName:`Tanner`,lastName:`Lindsey`,age:24,visits:100,progress:50},{firstName:`Joe`,lastName:`Dirte`,age:45,visits:20,progress:10,status:`favorable`},{firstName:`Tandy`,lastName:`Miller`,age:40,visits:40,progress:80},{firstName:`Tanner`,lastName:`Lindsey`,age:24,visits:100,progress:50},{firstName:`Joe`,lastName:`Dirte`,age:45,visits:20,progress:10},{firstName:`Tandy`,lastName:`Miller`,age:40,visits:40,progress:80},{firstName:`Tanner`,lastName:`Lindsey`,age:24,visits:100,progress:50}],k=m(),A=[k.accessor(`firstName`,{header:()=>(0,E.jsx)(g.HeaderCell,{sortDirection:`ascending`,subLabel:`Given Name`,children:`First Name`}),cell:e=>(0,E.jsx)(g.DataCell,{children:e.getValue()})}),k.accessor(e=>e.lastName,{id:`lastName`,header:()=>(0,E.jsx)(g.HeaderCell,{subLabel:`Surname`,children:`Last Name`}),cell:e=>(0,E.jsx)(g.DataCell,{children:e.getValue()})}),k.accessor(`age`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,children:`Age`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,children:e.renderValue()})}),k.accessor(`visits`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,children:`Visits`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,children:e.renderValue()})}),k.accessor(`progress`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,subLabel:`"Complete" is > 80%`,children:`Profile Progress`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,subLabel:Number(e.renderValue())>=80?`Complete`:`Incomplete`,children:e.renderValue()})})],j={args:{caption:`Test table`,subCaption:`Additional Subcaption`},render:e=>{let t=h({data:O,columns:A,getCoreRowModel:_()});return(0,E.jsx)(g,{...e,table:t})}},M={args:{tableStyle:`border`},render:e=>{let[t]=T.useState(()=>[...O]),n=h({data:t,columns:A,getCoreRowModel:_()});return(0,E.jsx)(g,{...e,table:n})}},N={args:{...j.args},render:e=>{let t=h({data:O,columns:A,getCoreRowModel:_()});return(0,E.jsx)(`div`,{className:`mt-spacing-size-8 h-[75vh] overflow-scroll`,tabIndex:0,children:(0,E.jsx)(g,{...e,table:t})})}},P={args:{tableStyle:`border`,size:`sm`},render:e=>{let t=h({data:O,columns:A,getCoreRowModel:_()});return(0,E.jsx)(g,{...e,table:t})}},F={args:{tableStyle:`border`,rowStyle:`lined`},render:e=>{let t=h({data:O,columns:A,getCoreRowModel:_()});return(0,E.jsx)(g,{...e,table:t})}},I={args:{caption:`Test table`,subCaption:`Additional Subcaption`,isInteractive:!0},render:e=>{let[t,n]=T.useState({}),r=T.useMemo(()=>[{id:`select`,header:({table:e})=>(0,E.jsx)(g.HeaderCell,{children:(0,E.jsx)(f,{checked:e.getIsAllRowsSelected(),indeterminate:e.getIsSomeRowsSelected(),onChange:e.getToggleAllRowsSelectedHandler(),"aria-label":`check`})}),cell:({row:e})=>(0,E.jsx)(g.DataCell,{children:(0,E.jsx)(f,{checked:e.getIsSelected(),disabled:!e.getCanSelect(),indeterminate:e.getIsSomeSelected(),onChange:e.getToggleSelectedHandler(),"aria-label":`check`})}),size:40},k.accessor(`firstName`,{header:()=>(0,E.jsx)(g.HeaderCell,{leadingContent:`person-add`,sortDirection:`ascending`,subLabel:`Given Name`,children:`First Name`}),cell:e=>(0,E.jsx)(g.DataCell,{leadingContent:`person-add`,children:e.getValue()})}),k.accessor(e=>e.lastName,{id:`lastName`,header:()=>(0,E.jsx)(g.HeaderCell,{subLabel:`Surname`,children:`Last Name`}),cell:e=>(0,E.jsx)(g.DataCell,{children:e.getValue()})}),k.accessor(`age`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,children:`Age`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,children:e.renderValue()})}),k.accessor(`visits`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,children:`Visits`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,children:e.renderValue()})}),k.accessor(`progress`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,subLabel:`"Complete" is > 80%`,children:`Profile Progress`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,subLabel:Number(e.renderValue())>=80?`Complete`:`Incomplete`,children:e.renderValue()})})],[]),i=h({data:O,columns:r,state:{rowSelection:t},enableRowSelection:!0,onRowSelectionChange:n,getCoreRowModel:_()});return(0,E.jsx)(g,{...e,table:i})}},L={args:{caption:`Test table`,subCaption:`Additional Subcaption`,isInteractive:!0},parameters:{chromatic:{diffThreshold:.75}},render:e=>{let[t,n]=T.useState({}),r=T.useMemo(()=>[{id:`select`,header:({table:e})=>(0,E.jsx)(g.HeaderCell,{children:(0,E.jsx)(f,{checked:e.getIsAllRowsSelected(),indeterminate:e.getIsSomeRowsSelected(),onChange:e.getToggleAllRowsSelectedHandler(),"aria-label":`check`})}),cell:({row:e})=>(0,E.jsx)(g.DataCell,{children:(0,E.jsx)(f,{checked:e.getIsSelected(),disabled:!e.getCanSelect(),indeterminate:e.getIsSomeSelected(),onChange:e.getToggleSelectedHandler(),"aria-label":`check`})}),size:40},k.accessor(`firstName`,{header:()=>(0,E.jsx)(g.HeaderCell,{hasHorizontalDivider:!0,leadingContent:`person-add`,sortDirection:`ascending`,subLabel:`Given Name`,children:`First Name`}),cell:e=>(0,E.jsx)(g.DataCell,{hasHorizontalDivider:!0,leadingContent:`person-add`,children:e.getValue()})}),k.accessor(e=>e.lastName,{id:`lastName`,header:()=>(0,E.jsx)(g.HeaderCell,{hasHorizontalDivider:!0,subLabel:`Surname`,children:`Last Name`}),cell:e=>(0,E.jsx)(g.DataCell,{hasHorizontalDivider:!0,children:e.getValue()})}),k.accessor(`age`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,hasHorizontalDivider:!0,children:`Age`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,hasHorizontalDivider:!0,children:e.renderValue()})}),k.accessor(`visits`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,hasHorizontalDivider:!0,children:`Visits`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,hasHorizontalDivider:!0,children:e.renderValue()})}),k.accessor(`progress`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,hasHorizontalDivider:!0,subLabel:`"Complete" is > 80%`,children:`Profile Progress`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,hasHorizontalDivider:!0,subLabel:Number(e.renderValue())>=80?`Complete`:`Incomplete`,children:e.renderValue()})})],[]),i=h({data:O,columns:r,state:{rowSelection:t},enableRowSelection:!0,onRowSelectionChange:n,getCoreRowModel:_()});return(0,E.jsx)(g,{...e,table:i})}},R={args:{caption:`Types of Wine`,tableStyle:`border`,rowStyle:`lined`},render:e=>{let t=[{name:`Reds`,wines:[{name:`Merlot`,country:`France`,year:2016},{name:`Pinot Noir`,country:`France`,year:2018},{name:`Chianti`,country:`Italy`,year:2018}]},{name:`Whites`,wines:[{name:`Chardonnay`,country:`France`,year:2016},{name:`Riesling`,country:`Germany`,year:2018}]},{name:`Rosés`,wines:[{name:`Rosado`,country:`Spain`,year:2021},{name:`Rosato`,country:`Italy`,year:2024}]}],n=m(),r=h({data:t,columns:[n.accessor(`name`,{header:()=>(0,E.jsx)(g.HeaderCell,{children:`Name`}),cell:e=>(0,E.jsx)(g.DataCell,{children:e.getValue()})}),n.accessor(`country`,{id:`lastName`,header:()=>(0,E.jsx)(g.HeaderCell,{children:`Country of Origin`}),cell:e=>(0,E.jsx)(g.DataCell,{children:e.getValue()})}),n.accessor(`year`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,children:`Year`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,children:e.renderValue()})})],getSubRows:e=>e.wines,getCoreRowModel:_(),getExpandedRowModel:y()});return(0,E.jsx)(g,{...e,table:r})}},z={args:{caption:`Test table`,subCaption:`Additional Subcaption`,isStatusEligible:!0,tableStyle:`border`,rowStyle:`lined`,size:`sm`},render:e=>{let t=[k.accessor(g.__StatusColumnId__,{header:()=>(0,E.jsx)(g.StatusHeaderCell,{}),cell:e=>(0,E.jsx)(g.StatusCell,{status:e.getValue()}),size:32}),k.accessor(`firstName`,{header:()=>(0,E.jsx)(g.HeaderCell,{sortDirection:`ascending`,children:`First Name`}),cell:e=>(0,E.jsx)(g.DataCell,{children:e.getValue()})}),k.accessor(e=>e.lastName,{id:`lastName`,header:()=>(0,E.jsx)(g.HeaderCell,{children:`Last Name`}),cell:e=>(0,E.jsx)(g.DataCell,{children:e.getValue()})}),k.accessor(`age`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,children:`Age`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,children:e.renderValue()})}),k.accessor(`visits`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,children:`Visits`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,children:e.renderValue()})}),k.accessor(`progress`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,children:`Profile Progress`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,children:e.renderValue()})})],n=h({data:O,columns:t,getCoreRowModel:_()});return(0,E.jsx)(g,{...e,table:n})}},B={args:{tableStyle:`border`,size:`sm`},render:e=>{let t=h({data:[...O,...O],columns:A,getCoreRowModel:_(),initialState:{columnPinning:{left:[`firstName`]}}});return(0,E.jsx)(g,{...e,className:`w-[800px]`,table:t})}},V={args:{children:(0,E.jsx)(`table`,{children:(0,E.jsx)(`tbody`,{className:`border-utility-default-lowEmphasis-hover border-2`,children:(0,E.jsx)(`tr`,{children:(0,E.jsx)(`td`,{children:`Custom or standard table rows/cells here`})})})})}},H={args:{...V.args,caption:`Fruits of the world`}},U={...V,args:{...V.args,caption:`Fruits of the world`,subCaption:`Aren't they all so delicious?`}},W={args:{...V.args,caption:`Fruits of the world`,subCaption:`Aren't they all so delicious?`,onSearchChange:()=>{}}},G={args:{...V.args,actions:(0,E.jsx)(c,{"aria-label":`Add a row`,icon:`add-encircled`,iconLayout:`icon-only`,isDisabled:!0,rank:`secondary`})}},K={args:{...V.args,caption:`Fruits of the world`,subCaption:`Aren't they all so delicious?`,onSearchChange:()=>{},actions:(0,E.jsx)(c,{"aria-label":`Add a row`,icon:`add-encircled`,iconLayout:`icon-only`,isDisabled:!0,rank:`secondary`})}},q={args:{...V.args,caption:`Fruits of the world`,subCaption:`Aren't they all so delicious?`,onSearchChange:()=>{},actions:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(c,{"aria-label":`add item`,icon:`add`,iconLayout:`icon-only`}),(0,E.jsx)(c,{icon:`sparkles`,iconLayout:`left`,rank:`secondary`,children:`Tailor an Activity`}),(0,E.jsxs)(u,{children:[(0,E.jsx)(u.PlainButton,{as:T.Fragment,children:(0,E.jsx)(c,{"aria-label":`show more actions`,icon:`dots-horizontal`,iconLayout:`icon-only`,rank:`secondary`})}),(0,E.jsxs)(u.Items,{className:`w-40`,children:[(0,E.jsx)(u.Item,{href:`https://example.org`,children:`Menu Label`}),(0,E.jsx)(u.Item,{href:`https://example.org`,children:`Menu Label`})]})]})]})}},J={args:{...V.args,caption:`This is a really long title that really should not be this long and it just keeps going and going and going`,subCaption:`Seriously, who let this happen?`,onSearchChange:()=>{},actions:(0,E.jsx)(c,{"aria-label":`Add a row`,icon:`add-encircled`,iconLayout:`icon-only`,isDisabled:!0,rank:`secondary`})}},Y=[k.accessor(`firstName`,{header:()=>(0,E.jsx)(g.HeaderCell,{leadingContent:(0,E.jsx)(S,{size:16}),subLabel:`Given Name`,children:`First Name`}),cell:e=>(0,E.jsx)(g.DataCell,{leadingContent:(0,E.jsx)(S,{size:16}),children:e.getValue()})}),k.accessor(e=>e.lastName,{id:`lastName`,header:()=>(0,E.jsx)(g.HeaderCell,{subLabel:`Surname`,children:`Last Name`}),cell:e=>(0,E.jsx)(g.DataCell,{children:e.getValue()})}),k.accessor(`age`,{header:()=>(0,E.jsx)(g.HeaderCell,{alignment:`trailing`,children:`Age`}),cell:e=>(0,E.jsx)(g.DataCell,{alignment:`trailing`,children:e.renderValue()})})],X={args:{caption:`Leading content slot`,subCaption:`Header cell and data cell both take arbitrary content`},render:e=>{let t=h({data:O,columns:Y,getCoreRowModel:_()});return(0,E.jsx)(g,{...e,table:t})}},Z={...z,decorators:[e=>(0,E.jsx)(o,{icons:w,children:e()})]},Q=[`Default`,`TableStyleBorder`,`DataTableInFullContentBox`,`TableSizeSm`,`RowStyleLined`,`Selectable`,`VerticalDivider`,`Grouping`,`StatusRows`,`HorizontalScrolling`,`DefaultWithCustomTable`,`WithBasicCaption`,`WithFullCaption`,`WithSearch`,`WithOnlyActions`,`WithSearchAndActions`,`WithSearchAndCustomActions`,`WithLongCaption`,`WithFpoLeadingContent`,`WithProvidedIcons`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Test table',
    subCaption: 'Additional Subcaption'
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel()
    });
    return <DataTable {...args} table={table} />;
  }
}`,...j.parameters?.docs?.source},description:{story:`Using the hooks provided by Tanstack's Table, you can control the dimensions and contents of the table.

When specifying the cells, you can use \`className\` to control content controls like truncation or other customizations.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    tableStyle: 'border'
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data] = React.useState(() => [...defaultData]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data,
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel()
    });
    return <DataTable {...args} table={table} />;
  }
}`,...M.parameters?.docs?.source},description:{story:"`DataTable` can also have a different border style between cells.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel()
    });

    // make the content area of the DIV scrollable for this test
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      <div className="mt-spacing-size-8 h-[75vh] overflow-scroll" tabIndex={0}>
        <DataTable {...args} table={table} />
      </div>
    );
  }
}`,...N.parameters?.docs?.source},description:{story:"Note that `DataTable` can be nested within another scrollable container. in such cases, we want to make sure the [content box](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) of the direct ancestor has no padding. If it does, this can lead to misplacement of a sticky header.\n\nInstead of using padding in the ancestor, use margins or a spacer element like an `<hr />` or `<div>`.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    tableStyle: 'border',
    size: 'sm'
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel()
    });
    return <DataTable {...args} table={table} />;
  }
}`,...P.parameters?.docs?.source},description:{story:"When using table size small, we have less padding on the cells and header\n\n**Note**: using `subLabel`s when `size` = `'sm'` is not allowed.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    tableStyle: 'border',
    rowStyle: 'lined'
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel()
    });
    return <DataTable {...args} table={table} />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Test table',
    subCaption: 'Additional Subcaption',
    isInteractive: true
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rowSelection, setRowSelection] = React.useState({}); // TODO: demonstrate one is selected

    // TODO(docs): Why must \`any\` be passed as second type param to avoid \`unknown\`?
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const selectableColumns = React.useMemo<DataTableUtils.ColumnDef<Person, any>[]>(() => [{
      id: 'select',
      header: ({
        table
      }) => <DataTable.HeaderCell>
              <Checkbox {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
          'aria-label': 'check'
        }} />
            </DataTable.HeaderCell>,
      cell: ({
        row
      }) => <DataTable.DataCell>
              <Checkbox {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
          'aria-label': 'check'
        }} />
            </DataTable.DataCell>,
      // Widths can be set on header cells (using pixels)
      // More information: https://tanstack.com/table/latest/docs/guide/column-sizing#column-widths
      // TODO(design): what is the column size for the selectable column
      size: 40
    }, columnHelper.accessor('firstName', {
      header: () => <DataTable.HeaderCell leadingContent="person-add" sortDirection="ascending" subLabel="Given Name">
              First Name
            </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell leadingContent="person-add">
              {info.getValue()}
            </DataTable.DataCell>
    }), columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      header: () => <DataTable.HeaderCell subLabel="Surname">
              Last Name
            </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell>{info.getValue()}</DataTable.DataCell>
    }), columnHelper.accessor('age', {
      header: () => <DataTable.HeaderCell alignment="trailing">
              Age
            </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell alignment="trailing">
              {info.renderValue()}
            </DataTable.DataCell>
    }), columnHelper.accessor('visits', {
      header: () => <DataTable.HeaderCell alignment="trailing">
              Visits
            </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell alignment="trailing">
              {info.renderValue()}
            </DataTable.DataCell>
    }), columnHelper.accessor('progress', {
      header: () => <DataTable.HeaderCell alignment="trailing" subLabel='"Complete" is > 80%'>
              Profile Progress
            </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell alignment="trailing" subLabel={Number(info.renderValue()) >= 80 ? 'Complete' : 'Incomplete'}>
              {info.renderValue()}
            </DataTable.DataCell>
    })], []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns: selectableColumns,
      state: {
        rowSelection
      },
      enableRowSelection: true,
      onRowSelectionChange: setRowSelection,
      getCoreRowModel: DataTableUtils.getCoreRowModel()
    });
    return <DataTable {...args} table={table} />;
  }
}`,...I.parameters?.docs?.source},description:{story:`Implementation example of how to build selectable rows.

For more information: https://tanstack.com/table/latest/docs/framework/react/examples/row-selection`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Test table',
    subCaption: 'Additional Subcaption',
    isInteractive: true
  },
  parameters: {
    chromatic: {
      diffThreshold: 0.75
    }
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rowSelection, setRowSelection] = React.useState({});

    // TODO(docs): Why must \`any\` be passed as second type param to avoid \`unknown\`?
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const selectableColumns = React.useMemo<DataTableUtils.ColumnDef<Person, any>[]>(() => [{
      id: 'select',
      header: ({
        table
      }) => <DataTable.HeaderCell>
              <Checkbox {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
          'aria-label': 'check'
        }} />
            </DataTable.HeaderCell>,
      cell: ({
        row
      }) => <DataTable.DataCell>
              <Checkbox {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
          'aria-label': 'check'
        }} />
            </DataTable.DataCell>,
      // Widths can be set on header cells (using pixels)
      // More information: https://tanstack.com/table/latest/docs/guide/column-sizing#column-widths
      // TODO(design): what is the column size for the selectable column
      size: 40
    }, columnHelper.accessor('firstName', {
      header: () => <DataTable.HeaderCell hasHorizontalDivider leadingContent="person-add" sortDirection="ascending" subLabel="Given Name">
              First Name
            </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell hasHorizontalDivider leadingContent="person-add">
              {info.getValue()}
            </DataTable.DataCell>
    }), columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      header: () => <DataTable.HeaderCell hasHorizontalDivider subLabel="Surname">
              Last Name
            </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell hasHorizontalDivider>
              {info.getValue()}
            </DataTable.DataCell>
    }), columnHelper.accessor('age', {
      header: () => <DataTable.HeaderCell alignment="trailing" hasHorizontalDivider>
              Age
            </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell alignment="trailing" hasHorizontalDivider>
              {info.renderValue()}
            </DataTable.DataCell>
    }), columnHelper.accessor('visits', {
      header: () => <DataTable.HeaderCell alignment="trailing" hasHorizontalDivider>
              Visits
            </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell alignment="trailing" hasHorizontalDivider>
              {info.renderValue()}
            </DataTable.DataCell>
    }), columnHelper.accessor('progress', {
      header: () => <DataTable.HeaderCell alignment="trailing" hasHorizontalDivider subLabel='"Complete" is > 80%'>
              Profile Progress
            </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell alignment="trailing" hasHorizontalDivider subLabel={Number(info.renderValue()) >= 80 ? 'Complete' : 'Incomplete'}>
              {info.renderValue()}
            </DataTable.DataCell>
    })], []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns: selectableColumns,
      state: {
        rowSelection
      },
      enableRowSelection: true,
      onRowSelectionChange: setRowSelection,
      getCoreRowModel: DataTableUtils.getCoreRowModel()
    });
    return <DataTable {...args} table={table} />;
  }
}`,...L.parameters?.docs?.source},description:{story:`Implementation example of how to build selectable rows.

TODO: verify if selection will interfere with row groupings

For more information: https://tanstack.com/table/latest/docs/framework/react/examples/row-selection`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Types of Wine',
    tableStyle: 'border',
    rowStyle: 'lined'
  },
  render: args => {
    type Wine = {
      name: string;
      country?: string;
      year?: number;
    };
    type GroupedWine = Wine & {
      wines?: Wine[];
    };
    const wineData: GroupedWine[] = [{
      name: 'Reds',
      wines: [{
        name: 'Merlot',
        country: 'France',
        year: 2016
      }, {
        name: 'Pinot Noir',
        country: 'France',
        year: 2018
      }, {
        name: 'Chianti',
        country: 'Italy',
        year: 2018
      }]
    }, {
      name: 'Whites',
      wines: [{
        name: 'Chardonnay',
        country: 'France',
        year: 2016
      }, {
        name: 'Riesling',
        country: 'Germany',
        year: 2018
      }]
    }, {
      name: 'Rosés',
      wines: [{
        name: 'Rosado',
        country: 'Spain',
        year: 2021
      }, {
        name: 'Rosato',
        country: 'Italy',
        year: 2024
      }]
    }];
    const columnHelper = DataTableUtils.createColumnHelper<GroupedWine>();
    const wineColumns = [columnHelper.accessor('name', {
      header: () => <DataTable.HeaderCell>Name</DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell>{info.getValue()}</DataTable.DataCell>
    }), columnHelper.accessor('country', {
      id: 'lastName',
      header: () => <DataTable.HeaderCell>Country of Origin</DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell>{info.getValue()}</DataTable.DataCell>
    }), columnHelper.accessor('year', {
      header: () => <DataTable.HeaderCell alignment="trailing">Year</DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell alignment="trailing">
            {info.renderValue()}
          </DataTable.DataCell>
    })];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: wineData,
      columns: wineColumns,
      getSubRows: row => row.wines,
      getCoreRowModel: DataTableUtils.getCoreRowModel(),
      getExpandedRowModel: DataTableUtils.getExpandedRowModel()
    });
    return <DataTable {...args} table={table} />;
  }
}`,...R.parameters?.docs?.source},description:{story:`Implementation example showing how you can achieve grouping by creating a nested data object,
and specify that grouping should be enabled in the data models.

See:
- https://tanstack.com/table/latest/docs/guide/expanding
- https://tanstack.com/table/latest/docs/api/core/row#getleafrows`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Test table',
    subCaption: 'Additional Subcaption',
    isStatusEligible: true,
    tableStyle: 'border',
    rowStyle: 'lined',
    size: 'sm'
  },
  render: args => {
    const columns = [columnHelper.accessor(DataTable.__StatusColumnId__, {
      header: () => <DataTable.StatusHeaderCell />,
      cell: info => <DataTable.StatusCell status={info.getValue()} />,
      size: 32
    }), columnHelper.accessor('firstName', {
      header: () => <DataTable.HeaderCell sortDirection="ascending">
            First Name
          </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell>{info.getValue()}</DataTable.DataCell>
    }), columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      header: () => <DataTable.HeaderCell>Last Name</DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell>{info.getValue()}</DataTable.DataCell>
    }), columnHelper.accessor('age', {
      header: () => <DataTable.HeaderCell alignment="trailing">Age</DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell alignment="trailing">
            {info.renderValue()}
          </DataTable.DataCell>
    }), columnHelper.accessor('visits', {
      header: () => <DataTable.HeaderCell alignment="trailing">
            Visits
          </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell alignment="trailing">
            {info.renderValue()}
          </DataTable.DataCell>
    }), columnHelper.accessor('progress', {
      header: () => <DataTable.HeaderCell alignment="trailing">
            Profile Progress
          </DataTable.HeaderCell>,
      cell: info => <DataTable.DataCell alignment="trailing">
            {info.renderValue()}
          </DataTable.DataCell>
    })];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel()
    });
    return <DataTable {...args} table={table} />;
  }
}`,...z.parameters?.docs?.source},description:{story:"You can specify detailed statuses for each row in a table, matching a few common options.\nExtend the data type to include `status` which maps to the internal type\n\nUse `DataTableWithStatus` on your data type model to add in the column handler. this\nwill add add a `status` item, to be used with a column with header name `DataTable.__StatusColumnId__`.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    tableStyle: 'border',
    size: 'sm'
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: [...defaultData, ...defaultData],
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel(),
      initialState: {
        columnPinning: {
          left: ['firstName']
        }
      }
    });
    return <DataTable {...args} className="w-[800px]" table={table} />;
  }
}`,...B.parameters?.docs?.source},description:{story:`Allow for fixing some columns to not scroll off the screen, like freezing a column

* This first column is sticky by default
* Subsequent rows can be made sticky as well

See: https://tanstack.com/table/latest/docs/framework/react/examples/column-pinning-sticky
See: https://tanstack.com/table/latest/docs/guide/column-pinning`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    children: <table>
        <tbody className="border-utility-default-lowEmphasis-hover border-2">
          <tr>
            <td>Custom or standard table rows/cells here</td>
          </tr>
        </tbody>
      </table>
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'Fruits of the world'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  ...DefaultWithCustomTable,
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'Fruits of the world',
    subCaption: "Aren't they all so delicious?"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'Fruits of the world',
    subCaption: "Aren't they all so delicious?",
    onSearchChange: () => {}
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultWithCustomTable.args,
    actions: <Button aria-label="Add a row" icon="add-encircled" iconLayout="icon-only" isDisabled rank="secondary" />
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'Fruits of the world',
    subCaption: "Aren't they all so delicious?",
    onSearchChange: () => {},
    actions: <Button aria-label="Add a row" icon="add-encircled" iconLayout="icon-only" isDisabled rank="secondary" />
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'Fruits of the world',
    subCaption: "Aren't they all so delicious?",
    onSearchChange: () => {},
    actions: <>
        <Button aria-label="add item" icon="add" iconLayout="icon-only"></Button>
        <Button icon="sparkles" iconLayout="left" rank="secondary">
          Tailor an Activity
        </Button>
        <Menu>
          <Menu.PlainButton as={React.Fragment}>
            <Button aria-label="show more actions" icon="dots-horizontal" iconLayout="icon-only" rank="secondary" />
          </Menu.PlainButton>
          <Menu.Items className="w-40">
            <Menu.Item href="https://example.org">Menu Label</Menu.Item>
            <Menu.Item href="https://example.org">Menu Label</Menu.Item>
          </Menu.Items>
        </Menu>
      </>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'This is a really long title that really should not be this long and it just keeps going and going and going',
    subCaption: 'Seriously, who let this happen?',
    onSearchChange: () => {},
    actions: <Button aria-label="Add a row" icon="add-encircled" iconLayout="icon-only" isDisabled rank="secondary" />
  }
}`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Leading content slot',
    subCaption: 'Header cell and data cell both take arbitrary content'
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns: fpoColumns,
      getCoreRowModel: DataTableUtils.getCoreRowModel()
    });
    return <DataTable {...args} table={table} />;
  }
}`,...X.parameters?.docs?.source},description:{story:"`leadingContent` on `DataTable.HeaderCell` and `DataTable.DataCell` takes arbitrary\ncontent, not only an icon name. The blocks below stand in for whatever you supply, so\nthe slot itself is the subject rather than the icon that happened to be picked.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  ...StatusRows,
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...Z.parameters?.docs?.source},description:{story:"A status cell's icon is the same glyph a notification shows for that status, so it comes\nfrom `IconProvider` rather than from a map of `DataTable`'s own. The leading and trailing\ncell slots are the consumer's to fill, and the provider says nothing about them.",...Z.parameters?.docs?.description}}}}))();export{N as DataTableInFullContentBox,j as Default,V as DefaultWithCustomTable,R as Grouping,B as HorizontalScrolling,F as RowStyleLined,I as Selectable,z as StatusRows,P as TableSizeSm,M as TableStyleBorder,L as VerticalDivider,H as WithBasicCaption,X as WithFpoLeadingContent,U as WithFullCaption,J as WithLongCaption,G as WithOnlyActions,Z as WithProvidedIcons,W as WithSearch,K as WithSearchAndActions,q as WithSearchAndCustomActions,Q as __namedExportsOrder,D as default};
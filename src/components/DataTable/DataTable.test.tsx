import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DataTable } from './DataTable';
import * as stories from './DataTable.stories';
import type { StoryFile } from '../../../.storybook/utility-types';
import { utils as DataTableUtils } from '../../components/DataTable';
import styles from './DataTable.module.css';

describe('<DataTable />', () => {
  generateSnapshots(stories as StoryFile);

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('HeaderCell', () => {
    it('labels the sort button by the next sort direction', async () => {
      const user = userEvent.setup();
      const onSortClick = vi.fn();
      const { rerender } = render(
        <DataTable.HeaderCell isSortable onSortClick={onSortClick}>
          Name
        </DataTable.HeaderCell>,
      );

      await user.click(screen.getByRole('button', { name: 'Sort Ascending' }));
      expect(onSortClick).toHaveBeenCalledTimes(1);

      rerender(
        <DataTable.HeaderCell isSortable sortDirection="ascending">
          Name
        </DataTable.HeaderCell>,
      );
      expect(
        screen.getByRole('button', { name: 'Sort Descending' }),
      ).toBeInTheDocument();

      rerender(
        <DataTable.HeaderCell isSortable sortDirection="descending">
          Name
        </DataTable.HeaderCell>,
      );
      expect(
        screen.getByRole('button', { name: 'Remove sort' }),
      ).toBeInTheDocument();
    });

    it('renders a sub-label without a label', () => {
      render(<DataTable.HeaderCell subLabel="Given Name" />);

      expect(screen.getByText('Given Name')).toBeInTheDocument();
    });
  });

  describe('DataCell', () => {
    it('renders a sub-label without a label', () => {
      render(
        <DataTable.DataCell subLabel="Last visited">
          {undefined}
        </DataTable.DataCell>,
      );

      expect(screen.getByText('Last visited')).toBeInTheDocument();
    });
  });

  describe('StatusCell', () => {
    it('uses a smaller status icon in small tables', () => {
      render(
        <DataTable size="sm">
          <DataTable.StatusCell data-testid="status" status="critical" />
        </DataTable>,
      );

      const icon = screen.getByTestId('status').querySelector('svg');
      expect(icon).toHaveAttribute('width', '16px');
    });
  });

  describe('Row', () => {
    it('describes the row status and marks selected rows', () => {
      render(
        <table>
          <tbody>
            <DataTable.Row isSelected status="warning">
              <td>Cell</td>
            </DataTable.Row>
          </tbody>
        </table>,
      );

      const row = screen.getByRole('row', {
        name: 'This table row has a warning status',
      });
      expect(row).toHaveClass(styles['data-table__row--is-selected']);
    });
  });

  describe('captions', () => {
    type Person = { firstName: string };
    const columnHelper = DataTableUtils.createColumnHelper<Person>();

    const CaptionTable = (props: { caption?: string; subCaption?: string }) => {
      const table = DataTableUtils.useReactTable({
        data: [{ firstName: 'Tanner' }],
        columns: [columnHelper.accessor('firstName', {})],
        getCoreRowModel: DataTableUtils.getCoreRowModel(),
      });
      return <DataTable {...props} table={table} />;
    };

    it('builds the accessible caption from the caption alone', () => {
      render(<CaptionTable caption="People" />);

      expect(
        screen.getByRole('table', { name: 'People:' }),
      ).toBeInTheDocument();
    });

    it('builds the accessible caption from the sub-caption alone', () => {
      render(<CaptionTable subCaption="Everyone we know" />);

      expect(
        screen.getByRole('table', { name: 'Everyone we know' }),
      ).toBeInTheDocument();
    });
  });

  describe('grouped rows with pinned columns', () => {
    type Wine = { name: string; country?: string; wines?: Wine[] };
    const columnHelper = DataTableUtils.createColumnHelper<Wine>();

    const GroupedTable = () => {
      const table = DataTableUtils.useReactTable({
        data: [
          {
            name: 'Reds',
            wines: [
              { name: 'Merlot', country: 'France' },
              { name: 'Chianti', country: 'Italy' },
            ],
          },
        ],
        columns: [
          columnHelper.accessor('name', { header: 'Name' }),
          columnHelper.group({
            id: 'origin',
            header: 'Origin',
            columns: [columnHelper.accessor('country', { header: 'Country' })],
          }),
        ],
        getSubRows: (row) => row.wines,
        getCoreRowModel: DataTableUtils.getCoreRowModel(),
        getExpandedRowModel: DataTableUtils.getExpandedRowModel(),
        initialState: { columnPinning: { left: ['name'] } },
      });
      return <DataTable table={table} />;
    };

    it('pins leaf row cells and leaves placeholder headers empty', () => {
      render(<GroupedTable />);

      const pinnedCell = screen.getByRole('cell', { name: 'Merlot' });
      expect(pinnedCell).toHaveClass(styles['data-table--column-is-pinned']);
      expect(pinnedCell).toHaveStyle({ left: '0px' });
      expect(screen.getByRole('cell', { name: 'France' })).not.toHaveClass(
        styles['data-table--column-is-pinned'],
      );

      // "Name" has no parent group, so its top-level header is a placeholder
      const [groupHeaderRow] = screen.getAllByRole('row');
      const groupHeaders = groupHeaderRow.querySelectorAll('th');
      expect(groupHeaders[0]).toBeEmptyDOMElement();
      expect(groupHeaders[1]).toHaveTextContent('Origin');
    });
  });

  describe('sticky header', () => {
    const observe = vi.fn();
    const unobserve = vi.fn();
    let intersectionCallback: IntersectionObserverCallback;

    const stubIntersectionObserver = () => {
      vi.stubGlobal(
        'IntersectionObserver',
        vi.fn(function (callback: IntersectionObserverCallback) {
          intersectionCallback = callback;
          return { observe, unobserve };
        }),
      );
    };

    it('marks the header as pinned once it clips the top of the viewport', () => {
      stubIntersectionObserver();
      const { unmount } = render(
        <DataTable>
          <DataTable.Table>
            <DataTable.Header>
              <DataTable.Row>
                <th>Name</th>
              </DataTable.Row>
            </DataTable.Header>
          </DataTable.Table>
        </DataTable>,
      );

      const thead = screen.getAllByRole('rowgroup')[0];
      expect(observe).toHaveBeenCalledWith(thead);

      const notify = (intersectionRatio: number) =>
        intersectionCallback(
          [
            {
              target: thead,
              intersectionRatio,
            } as unknown as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );

      notify(0.5);
      expect(thead).toHaveClass(styles['data-table--row-is-pinned']);
      notify(1);
      expect(thead).not.toHaveClass(styles['data-table--row-is-pinned']);

      unmount();
      expect(unobserve).toHaveBeenCalledWith(thead);
    });

    it('skips observing tables without a header', () => {
      stubIntersectionObserver();
      observe.mockClear();
      unobserve.mockClear();

      const { unmount } = render(
        <DataTable>
          <DataTable.Table>
            <tbody>
              <DataTable.Row>
                <td>Cell</td>
              </DataTable.Row>
            </tbody>
          </DataTable.Table>
        </DataTable>,
      );
      unmount();

      expect(observe).not.toHaveBeenCalled();
      expect(unobserve).not.toHaveBeenCalled();
    });
  });
});

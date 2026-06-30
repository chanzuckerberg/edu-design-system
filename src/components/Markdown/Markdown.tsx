import clsx from 'clsx';
import React from 'react';

import { default as ReactMarkdown, type Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';

// EDS components used for any possible Markdown block
import CodeBlock from '../CodeBlock';
import Heading from '../Heading';
import Hr from '../Hr';
import Link from '../Link';
import { OrderedList, UnorderedList } from '../List';
import Text from '../Text';

import styles from './Markdown.module.css';
import { default as dataTableStyles } from '../DataTable/DataTable.module.css';
import { default as typeStyles } from '../Text/Text.module.css';

export type MarkdownProps = Options & {
  // Component API
  /**
   * Markdown content to convert into EDS-based content.
   */
  children: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Markdown} from "@chanzuckerberg/eds";`
 *
 * Generic Markdown component to wrap convert convent into EDS-compliant represenations. Includes all the base
 * components, plus tables from GitHub-Flavored Markdown. Other features available by using Remark Plugins.
 *
 * Library documentation:
 * - https://github.com/remarkjs/react-markdown
 *
 * Included plugins:
 * - https://github.com/remarkjs/remark-gfm
 */
export const Markdown = ({
  children,
  className,
  remarkPlugins,
  ...other
}: MarkdownProps) => {
  const componentClassName = clsx(styles['markdown'], className);

  return (
    <div className={componentClassName}>
      <ReactMarkdown
        components={{
          h1(props) {
            const { node, children, ...rest } = props;
            return (
              <Heading as="h1" {...rest}>
                {children}
              </Heading>
            );
          },
          h2(props) {
            const { node, children, ...rest } = props;
            return (
              <Heading as="h2" {...rest}>
                {children}
              </Heading>
            );
          },
          h3(props) {
            const { node, children, ...rest } = props;
            return (
              <Heading as="h3" {...rest}>
                {children}
              </Heading>
            );
          },
          h4(props) {
            const { node, children, ...rest } = props;
            return (
              <Heading as="h4" {...rest}>
                {children}
              </Heading>
            );
          },
          h5(props) {
            const { node, children, ...rest } = props;
            return (
              <Heading as="h5" {...rest}>
                {children}
              </Heading>
            );
          },
          h6(props) {
            const { node, children, ...rest } = props;
            return (
              <Heading as="h6" {...rest}>
                {children}
              </Heading>
            );
          },
          a(props) {
            const { node, children, ...rest } = props;
            return <Link {...rest}>{children}</Link>;
          },
          blockquote(props) {
            const { node, children, ...rest } = props;
            return (
              <blockquote className={styles['markdown__blockquote']} {...rest}>
                {children}
              </blockquote>
            );
          },
          p(props) {
            const { node, children, ...rest } = props;
            return (
              <Text as="p" preset="body-md" {...rest}>
                {children}
              </Text>
            );
          },
          strong(props) {
            const { children } = props;
            return (
              <Text as="span" preset="body-md-bold">
                <strong>{children}</strong>
              </Text>
            );
          },
          pre(props) {
            // TODO-AH: handling for inline code and indented blocks using <CodeBlock>
            const { children } = props;
            return <pre className={styles['markdown__pre']}>{children}</pre>;
          },
          ol(props) {
            const { children } = props;
            return <OrderedList markerType="default">{children}</OrderedList>;
          },
          ul(props) {
            const { children } = props;
            return (
              <UnorderedList markerType="default">{children}</UnorderedList>
            );
          },
          li(props) {
            const { children } = props;
            return <UnorderedList.ListItem>{children}</UnorderedList.ListItem>;
          },
          code(props) {
            const { className, children } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <CodeBlock
                className={styles['markdown--multiline']}
                copyStyle="icon"
                language={match[1]}
              >
                {children as string}
              </CodeBlock>
            ) : (
              <code
                className={clsx(
                  styles['markdown__code'],
                  typeStyles['text'],
                  typeStyles['text--code-md'],
                )}
              >
                {children}
              </code>
            );
          },
          hr() {
            return <Hr />;
          },
          // GitHub-Flavored Markdown: table
          table(props) {
            const { children } = props;
            return (
              <table
                className={clsx(
                  dataTableStyles['data-table__table'],
                  dataTableStyles[`data-table--tableStyle-border`],
                )}
              >
                {children}
              </table>
            );
          },
          th(props) {
            const { children, node, style } = props;
            return (
              <th {...node?.properties} className={styles['markdown__th']}>
                <div style={style}>{children}</div>
              </th>
            );
          },
          thead(props) {
            const { children } = props;
            return (
              <thead className={dataTableStyles['data-table__header-row']}>
                {children}
              </thead>
            );
          },
          td(props) {
            const { children, node } = props;
            return (
              <td className={styles['markdown__td']} {...node?.properties}>
                <div
                  className={clsx(
                    dataTableStyles['data-table__cell'],
                    dataTableStyles['data-table__cell--has-horizontal-divider'],
                  )}
                >
                  {children}
                </div>
              </td>
            );
          },
          tr(props) {
            const { children } = props;
            return (
              <tr className={dataTableStyles['data-table__row']}>{children}</tr>
            );
          },
        }}
        remarkPlugins={
          remarkPlugins ? [remarkGfm, ...remarkPlugins] : [remarkGfm]
        }
        {...other}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

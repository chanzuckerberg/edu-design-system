import clsx from 'clsx';
import delay from 'lodash/delay';
import React from 'react';

import Markdown from 'react-markdown';
import { Prism, type SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { solarizedDarkAtom as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Button from '../Button';
import type { IconName } from '../Icon';

import styles from './CodeBlock.module.css';

// Workaround for temporary React 18 support
// See: https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/539
const SyntaxHighlighter = Prism as any as React.FC<SyntaxHighlighterProps>;

export type CodeBlockProps = {
  // Component API
  children: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Determines whether we render a copy button (on hover)
   */
  copyStyle?: 'text' | 'icon';
  /**
   * The programming language to use for syntax highlighting
   */
  language: SyntaxHighlighterProps['language'];
  // Design API
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ## Usage
 *
 * Show a block of formatted code, with syntax highlighting, in a block container.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Read-only | The snippet is displayed on its own, with no copy affordance. | Illustrating syntax inline with surrounding prose. |
 * | Icon copy | `copyStyle="icon"` adds an icon-only button that copies the snippet. | Dense layouts where a labeled button would crowd the block. |
 * | Text copy | `copyStyle="text"` adds a labeled button that copies the snippet. | Snippets the reader is expected to run, like install commands. |
 *
 * ## Interaction
 *
 * `CodeBlock` allows for displaying syntax highlighting with a fixed theme. It also includes the
 * ability to show a copy button which, when clicked, will copy the code block to the user's
 * clipboard.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use `CodeBlock` when you want to format and display any multi-line code to the user.
 * * Use `CodeBlock` when a single-line code block applies to command line snippets, or other code which has complex, lengthy text.
 *
 * ### Don'ts
 *
 * * Avoid using `CodeBlock` for single-word code snippets. Instead use the `Text` component with one of the `code-*` presets.
 *
 * ## Resources
 *
 * * https://github.com/react-syntax-highlighter/react-syntax-highlighter
 */
export const CodeBlock = ({
  children,
  className,
  copyStyle,
  language,
  ...other
}: CodeBlockProps) => {
  const [copyButtonIcon, setCopyButtonIcon] = React.useState<IconName>('copy');
  const [copyButtonText, setCopyButtonText] = React.useState<string>('Copy');

  const componentClassName = clsx(styles['code-block'], className);
  const composedCodeSnippet = `~~~${language}
${children}
~~~`;

  return (
    <div className={componentClassName}>
      <Markdown
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                {...rest}
                children={String(children).replace(/\n$/, '')}
                codeTagProps={{
                  className: styles['code-block__block'],
                }}
                language={match[1]}
                PreTag="div"
                style={theme}
                wrapLongLines
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {composedCodeSnippet}
      </Markdown>
      {copyStyle && (
        <div className={styles['code-block__copy']}>
          <Button
            aria-label="Copy this code block"
            data-testid="copy-button"
            icon={copyStyle === 'icon' ? copyButtonIcon : undefined}
            iconLayout={copyStyle === 'icon' ? 'icon-only' : undefined}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(children);
                copyStyle === 'icon'
                  ? setCopyButtonIcon('check')
                  : setCopyButtonText('Copied!');

                delay(() => {
                  copyStyle === 'icon'
                    ? setCopyButtonIcon('copy')
                    : setCopyButtonText('Copy');
                }, 3000);
              } catch (error) {
                console.error(error);
              }
            }}
            rank="secondary"
            variant="inverse"
          >
            {copyStyle === 'text' ? copyButtonText : undefined}
          </Button>
        </div>
      )}
    </div>
  );
};

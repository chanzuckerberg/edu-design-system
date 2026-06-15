import clsx from 'clsx';
import React from 'react';

import Markdown from 'react-markdown';
import { Prism, type SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { lucario as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Button from '../Button';

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
  language: string;
  // Design API
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {CodeBlock} from "@chanzuckerberg/eds";`
 *
 * Component used to render block of code for use alongside other components. Allows for copying code.
 */
export const CodeBlock = ({
  children,
  className,
  copyStyle,
  language,
  ...other
}: CodeBlockProps) => {
  const componentClassName = clsx(styles['code-block']);
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
                language={match[1]}
                PreTag="div"
                style={theme}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </Markdown>
      {copyStyle && (
        <div className={styles['code-block__copy']}>
          <Button
            aria-label="Copy this code block"
            icon={copyStyle === 'icon' ? 'copy' : undefined}
            iconLayout={copyStyle === 'icon' ? 'icon-only' : undefined}
            onClick={async () => {
              try {
                // TODO-AH: trim out markdown stuff around component
                // or ... parameterize the content
                // TODO-AH: change icon to check, or text to copied with a delay
                await navigator.clipboard.writeText(children);
              } catch (error) {
                //console.error(error.message);
              }
            }}
            rank="secondary"
          >
            {copyStyle === 'text' ? 'Copy' : undefined}
          </Button>
        </div>
      )}
    </div>
  );
};

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
  const [copyButtonIcon, setCopyButtonIcon] = React.useState<IconName>('copy');
  const [copyButtonText, setCopyButtonText] = React.useState<string>('Copy');

  const componentClassName = clsx(styles['code-block']);
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
          >
            {copyStyle === 'text' ? copyButtonText : undefined}
          </Button>
        </div>
      )}
    </div>
  );
};

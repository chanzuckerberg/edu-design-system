import clsx from 'clsx';
import React from 'react';
import './TokenSpecimen.css';

type Props = {
  name: string;
  value: any;
  children?: React.ReactNode;
  comment?: string;
  inlineStyles?: Record<string, string>;
  variant?: string;
  className?: string;
  specimenClassName?: string;
  behavior?: 'stacked';
};

export const TokenSpecimen = (props: Props) => {
  const componentClassName = clsx('token-specimen', props.className, {
    'token-specimen--stacked': props.behavior === 'stacked',
    'token-specimen--inverted': props.name.includes('inverse'),
  });

  let sample;

  if (props.variant === 'typography-title') {
    sample = (
      <div
        className={
          'token-specimen__sample token-specimen__sample--typography-title ' +
          props.specimenClassName
        }
        contentEditable
        style={props.inlineStyles}
        suppressContentEditableWarning
      >
        AaBbCcDdEeFfGg
      </div>
    );
  } else if (props.variant === 'typography-body') {
    sample = (
      <div
        className={
          'token-specimen__sample token-specimen__sample--typography-body ' +
          props.specimenClassName
        }
        contentEditable
        style={props.inlineStyles}
        suppressContentEditableWarning
      >
        Almost before we knew it, we had left the ground.
      </div>
    );
  } else if (props.variant === 'animation-fade') {
    sample = (
      <div
        className={
          'token-specimen__sample token-specimen__sample--box token-specimen__sample--animation-fade ' +
          props.specimenClassName
        }
        style={props.inlineStyles}
      ></div>
    );
  } else if (props.variant === 'animation-move') {
    sample = (
      <div
        className={
          'token-specimen__sample token-specimen__sample--box token-specimen__sample--animation-move ' +
          props.specimenClassName
        }
        style={props.inlineStyles}
      ></div>
    );
  } else {
    sample = (
      <div
        className={
          'token-specimen__sample token-specimen__sample--box ' +
          props.specimenClassName
        }
        style={props.inlineStyles}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div className={componentClassName}>
      <div className="token-specimen__info">
        <code className="token-specimen__name">{props.name}</code>
        <code className="token-specimen__value">{props.value}</code>
        <p className="token-specimen__comment">{props.comment}</p>
      </div>
      <div className="token-specimen__body">{sample}</div>
    </div>
  );
};

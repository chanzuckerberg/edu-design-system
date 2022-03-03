import React, { Component } from 'react';
import clsx from 'clsx';
import './TokenSpecimen.css';
import PropTypes from 'prop-types';

export class TokenSpecimen extends Component {
  render() {
    const componentClassName = clsx('token-specimen', this.props.className, {
      'token-specimen--stacked': this.props.behavior == 'stacked',
      'token-specimen--inverted': this.props.name.includes('inverted'),
    });

    let sample;

    if (this.props.variant == 'typography-title') {
      sample = (
        <div
          className={
            'token-specimen__sample token-specimen__sample--typography-title ' +
            this.props.specimenClassName
          }
          style={this.props.inlineStyles}
          contentEditable
        >
          AaBbCcDdEeFfGg
        </div>
      );
    } else if (this.props.variant == 'typography-body') {
      sample = (
        <div
          className={
            'token-specimen__sample token-specimen__sample--typography-body ' +
            this.props.specimenClassName
          }
          style={this.props.inlineStyles}
          contentEditable
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      );
    } else if (this.props.variant == 'animation-fade') {
      sample = (
        <div
          className={
            'token-specimen__sample token-specimen__sample--box token-specimen__sample--animation-fade ' +
            this.props.specimenClassName
          }
          style={this.props.inlineStyles}
        ></div>
      );
    } else if (this.props.variant == 'animation-move') {
      sample = (
        <div
          className={
            'token-specimen__sample token-specimen__sample--box token-specimen__sample--animation-move ' +
            this.props.specimenClassName
          }
          style={this.props.inlineStyles}
        ></div>
      );
    } else {
      sample = (
        <div
          className={
            'token-specimen__sample token-specimen__sample--box ' +
            this.props.specimenClassName
          }
          style={this.props.inlineStyles}
        >
          {this.props.children}
        </div>
      );
    }

    return (
      <div className={componentClassName}>
        <div className="token-specimen__info">
          <code className="token-specimen__name">{this.props.name}</code>
          <code className="token-specimen__value">{this.props.value}</code>
          <p className="token-specimen__comment">{this.props.comment}</p>
        </div>
        <div className="token-specimen__body">{sample}</div>
      </div>
    );
  }
}

TokenSpecimen.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      comment: PropTypes.string,
    }),
  ).isRequired,
};

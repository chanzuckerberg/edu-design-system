import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './TokenSpecimen.css';

export class TokenSpecimen extends Component {
  render() {
    const componentClassName = clsx('token-specimen', this.props.className, {
      'token-specimen--stacked': this.props.behavior == 'stacked',
      'token-specimen--inverted': this.props.name.includes('inverse'),
    });

    let sample;

    if (this.props.variant == 'typography-title') {
      sample = (
        <div
          className={
            'token-specimen__sample token-specimen__sample--typography-title ' +
            this.props.specimenClassName
          }
          contentEditable
          style={this.props.inlineStyles}
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
          contentEditable
          style={this.props.inlineStyles}
        >
          Almost before we knew it, we had left the ground.
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
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  comment: PropTypes.string,
  inlineStyles: PropTypes.objectOf(PropTypes.string),
  variant: PropTypes.string,
  specimenClassName: PropTypes.string,
};

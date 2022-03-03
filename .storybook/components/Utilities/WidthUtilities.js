import React, { Component } from 'react';
import { Hr } from '../../../src';
import './Utilities.css';

export class WidthUtilities extends Component {
  render() {
    return (
      <div className="sg-utility-demo">
        <Hr />

        <code>u-width-100</code>
        <div className="fpo u-width-100">
          Element with <code>width: 100%</code>
        </div>

        <Hr />
        <code>u-width-50</code>
        <div className="fpo u-width-50">
          Element with <code>width: 50%</code>
        </div>

        <Hr />

        <code>u-max-width-50</code>
        <div className="fpo u-width-50">
          Element with <code>max-width: 50%</code>
        </div>
      </div>
    );
  }
}

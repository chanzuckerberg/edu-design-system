import React, { Component } from 'react';
import { Hr } from '../../../src';
import styles from '../../../src/components/Utilities/Colors.module.css';
import './Utilities.css';

export class ColorUtilities extends Component {
  render() {
    return (
      <div className="sg-utility-demo">
        <code>u-color-utility-success</code>
        <h2 className="u-color-utility-success">Success text</h2>

        <Hr />

        <code>u-color-utility-error</code>
        <h2 className="u-color-utility-error">Error text</h2>

        <Hr />

        <code>u-color-utility-warning</code>
        <h2 className="u-color-utility-warning">Warning text</h2>
      </div>
    );
  }
}

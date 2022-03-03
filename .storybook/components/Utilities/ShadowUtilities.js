import React, { Component } from 'react';
import { Hr } from '../../../src';
import styles from '../../../src/components/Utilities/Shadows.module.css';
import './Utilities.css';

export class ShadowUtilities extends Component {
  render() {
    return (
      <div className="sg-utility-demo">
        <code>u-box-shadow-sm</code>
        <div className="u-box-shadow-sm sg-demo-box">Small box shadow</div>

        <Hr />

        <code>u-box-shadow-md</code>
        <div className="u-box-shadow-md sg-demo-box">Medium box shadow</div>

        <Hr />

        <code>u-box-shadow-lg</code>
        <div className="u-box-shadow-lg sg-demo-box">Large box shadow</div>
      </div>
    );
  }
}

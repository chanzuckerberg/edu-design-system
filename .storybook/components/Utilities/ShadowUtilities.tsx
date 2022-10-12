import React from 'react';
import {Hr} from '../../../src';
import './Utilities.css';
import '../../../src/components/Utilities/Shadows.css';

export const ShadowUtilities = () => (
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

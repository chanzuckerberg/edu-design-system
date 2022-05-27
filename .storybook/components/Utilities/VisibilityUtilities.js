import React, { Component } from 'react';
import { Text } from '../../../src';
import './Utilities.css';
import { Hr } from '../../../src';
import '../../../src/components/Utilities/Visibility.css';

export class VisibilityUtilities extends Component {
  render() {
    return (
      <div className="sg-utility-demo">
        <code>u-is-hidden</code>
        <Text>
          The heading below is hidden from all users. Inspect the element to see
          this class applied to an `h2` tag.
        </Text>
        <h2 className="u-is-hidden">
          Completely remove from the flow and screen readers.
        </h2>

        <Hr />
        <code>u-is-vishidden</code>
        <Text>
          The heading below is visually hidden but appears to screenreaders.
          Inspect the element to see this class applied to an `h2` tag.
        </Text>
        <h2 className="u-is-vishidden">
          Hides from screens but leaves content available to assitive
          technologies.
        </h2>
      </div>
    );
  }
}

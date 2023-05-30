import React, { Component } from 'react';
import { Grid } from '../../../../src';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';
import styles from './TypographyPresets.module.css';

export const PRESET_SIZE_MAP = {
  '001': {
    weights: ['light', 'regular', 'bold'],
    fontSize: 40,
    lineHeight: 48,
  },
  '002': {
    weights: ['light', 'regular', 'bold'],
    fontSize: 32,
    lineHeight: 40,
  },
  '003': {
    weights: ['light', 'regular', 'bold'],
    fontSize: 24,
    lineHeight: 32,
  },
  '004': {
    weights: ['light', 'regular', 'bold'],
    fontSize: 18,
    lineHeight: 24,
  },
  '005': {
    weights: ['light', 'regular', 'bold'],
    fontSize: 16,
    lineHeight: 24,
  },
  '006': {
    weights: ['light', 'regular', 'bold'],
    fontSize: 14,
    lineHeight: 22,
  },
  '007': {
    weights: ['light', 'regular', 'bold'],
    fontSize: 14,
    lineHeight: 18,
  },
  '008': {
    weights: ['light', 'regular', 'bold'],
    fontSize: 12,
    lineHeight: 20,
  },
  '009': {
    weights: ['regular', 'bold'],
    fontSize: 12,
    lineHeight: 16,
  },
  '010': {
    weights: ['regular', 'bold'],
    fontSize: 11,
    lineHeight: 14,
  },
  '011': {
    weights: ['regular', 'bold'],
    fontSize: 12,
    lineHeight: 16,
  },
  '012': {
    weights: ['regular', 'bold'],
    fontSize: 11,
    lineHeight: 14,
  },
};

export class Tier1TypographyPresets extends Component {
  render() {
    const renderTypeToken = (preset, index) => {
      const { fontSize, lineHeight, weights } = PRESET_SIZE_MAP[preset];
      const commonProps = {
        comment: 'font size / line height (px)',
        value: `${fontSize} / ${lineHeight}`,
        variant: 'typography-body',
      };

      return (
        <Grid key={`tier-1-typography-preset-${index}`}>
          {weights.includes('regular') && (
            <TokenSpecimen
              name={`eds-typography-preset-${preset}`}
              specimenClassName={styles[`typography-presets--${preset}`]}
              {...commonProps}
            />
          )}
          {weights.includes('light') && (
            <TokenSpecimen
              name={`eds-typography-preset-${preset}-light`}
              specimenClassName={styles[`typography-presets--${preset}-light`]}
              {...commonProps}
            />
          )}
          {weights.includes('bold') && (
            <TokenSpecimen
              name={`eds-typography-preset-${preset}-bold`}
              specimenClassName={styles[`typography-presets--${preset}-bold`]}
              {...commonProps}
            />
          )}
        </Grid>
      );
    };

    return (
      <Grid>
        {Object.keys(PRESET_SIZE_MAP).map((preset, index) => {
          // TODO: simplify this file to avoid custom mappings to type ramp
          return renderTypeToken(preset, index);
        })}
      </Grid>
    );
  }
}

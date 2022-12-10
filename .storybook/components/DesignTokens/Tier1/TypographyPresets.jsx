import React, { Component } from 'react';
import styles from './TypographyPresets.module.css';
import { Grid } from '../../../../src';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export const PRESET_SIZE_MAP = {
  '001': {
    fontSize: 40,
    lineHeight: 48,
  },
  '002': {
    fontSize: 32,
    lineHeight: 40,
  },
  '003': {
    fontSize: 24,
    lineHeight: 32,
  },
  '004': {
    fontSize: 18,
    lineHeight: 24,
  },
  '005': {
    fontSize: 16,
    lineHeight: 24,
  },
  '006': {
    fontSize: 14,
    lineHeight: 24,
  },
  '007': {
    fontSize: 14,
    lineHeight: 18,
  },
  '008': {
    fontSize: 12,
    lineHeight: 20,
  },
  '009': {
    fontSize: 12,
    lineHeight: 16,
  },
  '010': {
    fontSize: 11,
    lineHeight: 14,
  },
  '011': {
    fontSize: 12,
    lineHeight: 16,
  },
  '012': {
    fontSize: 11,
    lineHeight: 14,
  },
};

export class Tier1TypographyPresets extends Component {
  render() {
    const renderTypeToken = (
      preset,
      index,
      { boldVariant = true, lightVariant = false } = {},
    ) => {
      const { fontSize, lineHeight } = PRESET_SIZE_MAP[preset];
      const commonProps = {
        comment: 'font size / line height (px)',
        value: `${fontSize} / ${lineHeight}`,
        variant: 'typography-body',
      };

      return (
        <Grid key={`tier-1-typography-preset-${index}`}>
          <TokenSpecimen
            name={`eds-typography-preset-${preset}`}
            specimenClassName={styles[`typography-presets--${preset}`]}
            {...commonProps}
          />
          {lightVariant && (
            <TokenSpecimen
              name={`eds-typography-preset-${preset}-light`}
              specimenClassName={styles[`typography-presets--${preset}-light`]}
              {...commonProps}
            />
          )}
          {boldVariant && (
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
          if (preset === '005') {
            return renderTypeToken(preset, index, { lightVariant: true });
          }
          return renderTypeToken(preset, index);
        })}
      </Grid>
    );
  }
}

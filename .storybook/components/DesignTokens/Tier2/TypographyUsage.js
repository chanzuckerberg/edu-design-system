import React, { Component } from 'react';
import { Grid, Section } from '../../../../src';
import '../../../../src/components/Utilities/TypographyUsage.css';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';
import { PRESET_SIZE_MAP } from '../Tier1/TypographyPresets';

export class Tier2TypographyUsage extends Component {
  render() {
    const renderTypeToken = (size, preset) => {
      // remove variant suffix
      const normalizedPreset = preset.split('-')[0];
      const { fontSize, lineHeight } = PRESET_SIZE_MAP[normalizedPreset];

      return (
        <TokenSpecimen
          comment={`Ref: preset-${preset}`}
          name={`eds-theme-typography-${size}`}
          specimenClassName={`u-theme-typography-${size}`}
          value={`${fontSize} / ${lineHeight}`}
          variant="typography-body"
        />
      );
    };

    return (
      <div>
        <Section title="Headline">
          <Grid>
            {renderTypeToken('headline-lg', '001-bold')}
            {renderTypeToken('headline-md', '002-bold')}
            {renderTypeToken('headline-sm', '003-bold')}
          </Grid>
        </Section>

        <Section title="Title">
          <Grid>
            {renderTypeToken('title-md', '004-bold')}
            {renderTypeToken('title-sm', '005-bold')}
          </Grid>
        </Section>

        <Section title="Label">
          <Grid>
            {renderTypeToken('label-lg-subtle', '005')}
            {renderTypeToken('label-md-subtle', '007')}
            {renderTypeToken('label-md', '007-bold')}
            {renderTypeToken('label-sm', '009-bold')}
          </Grid>
        </Section>

        <Section title="Body Text">
          <Grid>
            {renderTypeToken('body-text-lg', '004')}
            {renderTypeToken('body-text-md', '005')}
            {renderTypeToken('body-text-sm', '006')}
            {renderTypeToken('body-text-xs', '008')}
          </Grid>
        </Section>

        <Section title="Caption">
          <Grid>
            {renderTypeToken('caption-text-lg', '006')}
            {renderTypeToken('caption-text-md', '008')}
            {renderTypeToken('caption-text-sm', '010')}
          </Grid>
        </Section>

        <Section title="Button">
          <Grid>{renderTypeToken('button-label', '006-bold')}</Grid>
        </Section>

        <Section title="Kicker">
          <Grid>
            {renderTypeToken('kicker', '011-bold')}
            {renderTypeToken('kicker-sm', '012-bold')}
          </Grid>
        </Section>

        <Section title="Tag">
          <Grid>{renderTypeToken('tag', '009-bold')}</Grid>
        </Section>
      </div>
    );
  }
}

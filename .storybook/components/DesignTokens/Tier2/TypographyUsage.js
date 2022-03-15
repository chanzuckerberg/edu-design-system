import React, { Component } from 'react';
import { Grid, GridItem, Section, Hr } from '../../../../src';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2TypographyUsage extends Component {
  render() {
    return (
      <div>
        <Section title="Body text">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-body-text"
              variant="typography-body"
              specimenClassName="u-theme-typography-body-text"
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-bold"
              variant="typography-body"
              specimenClassName="u-theme-typography-body-text-bold"
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-sm"
              variant="typography-body"
              specimenClassName="u-theme-typography-body-text-sm"
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-sm-bold"
              variant="typography-body"
              specimenClassName="u-theme-typography-body-text-sm-bold"
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-xs"
              variant="typography-body"
              specimenClassName="u-theme-typography-body-text-xs"
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-xs-bold"
              variant="typography-body"
              specimenClassName="u-theme-typography-body-text-xs-bold"
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-lg"
              variant="typography-body"
              specimenClassName="u-theme-typography-body-text-lg"
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-lg-bold"
              variant="typography-body"
              specimenClassName="u-theme-typography-body-text-lg-bold"
            />
          </Grid>
        </Section>

        <Section title="Headings">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-heading-1"
              variant="typography-body"
              specimenClassName="u-theme-typography-heading-1"
            />

            <TokenSpecimen
              name="eds-theme-typography-heading-2"
              variant="typography-body"
              specimenClassName="u-theme-typography-heading-2"
            />

            <TokenSpecimen
              name="eds-theme-typography-heading-3"
              variant="typography-body"
              specimenClassName="u-theme-typography-heading-3"
            />

            <TokenSpecimen
              name="eds-theme-typography-heading-4"
              variant="typography-body"
              specimenClassName="u-theme-typography-heading-4"
            />

            <TokenSpecimen
              name="eds-theme-typography-heading-5"
              variant="typography-body"
              specimenClassName="u-theme-typography-heading-5"
            />

            <TokenSpecimen
              name="eds-theme-typography-heading-6"
              variant="typography-body"
              specimenClassName="u-theme-typography-heading-6"
            />

            <TokenSpecimen
              name="eds-theme-typography-kicker"
              variant="typography-body"
              specimenClassName="u-theme-typography-kicker"
            />
          </Grid>
        </Section>

        <Section title="Data">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-data-heading"
              variant="typography-body"
              specimenClassName="u-theme-typography-data-heading"
            />

            <TokenSpecimen
              name="eds-theme-typography-data-heading-sm"
              variant="typography-body"
              specimenClassName="u-theme-typography-data-heading-sm"
            />

            <TokenSpecimen
              name="eds-theme-typography-data-text"
              variant="typography-body"
              specimenClassName="u-theme-typography-data-text"
            />

            <TokenSpecimen
              name="eds-theme-typography-data-text-sm"
              variant="typography-body"
              specimenClassName="u-theme-typography-data-text-sm"
            />
          </Grid>
        </Section>

        <Section title="Forms">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-form-label"
              variant="typography-body"
              specimenClassName="u-theme-typography-form-label"
            />

            <TokenSpecimen
              name="eds-theme-typography-form-input"
              variant="typography-body"
              specimenClassName="u-theme-typography-form-input"
            />
          </Grid>
        </Section>

        <Section title="Forms">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-button-sm"
              variant="typography-body"
              specimenClassName="u-theme-typography-button-sm"
            />

            <TokenSpecimen
              name="eds-theme-typography-button-md"
              variant="typography-body"
              specimenClassName="u-theme-typography-button-md"
            />

            <TokenSpecimen
              name="eds-theme-typography-button-lg"
              variant="typography-body"
              specimenClassName="u-theme-typography-button-lg"
            />
          </Grid>
        </Section>

        <Section title="Tags">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-tag"
              variant="typography-body"
              specimenClassName="u-theme-typography-tag"
            />
          </Grid>
        </Section>
      </div>
    );
  }
}

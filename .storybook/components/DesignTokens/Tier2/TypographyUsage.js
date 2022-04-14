import React, { Component } from 'react';
import { Grid, GridItem, Section, Hr } from '../../../../src';
import styles from '../../../../src/components/Utilities/TypographyUsage.module.css';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2TypographyUsage extends Component {
  render() {
    return (
      <div>
        <Section title="Headline">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-headline-lg"
              specimenClassName={styles['u-theme-typography-headline-lg']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-headline-md"
              specimenClassName={styles['u-theme-typography-headline-md']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-headline-sm"
              specimenClassName={styles['u-theme-typography-headline-sm']}
              variant="typography-body"
            />
          </Grid>
        </Section>

        <Section title="Title">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-title-md"
              specimenClassName={styles['u-theme-typography-title-md']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-title-sm"
              specimenClassName={styles['u-theme-typography-title-sm']}
              variant="typography-body"
            />
          </Grid>
        </Section>

        <Section title="Label">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-label-lg-subtle"
              specimenClassName={styles['u-theme-typography-label-lg-subtle']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-label-md-subtle"
              specimenClassName={styles['u-theme-typography-label-md-subtle']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-label-md"
              specimenClassName={styles['u-theme-typography-label-md']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-label-sm"
              specimenClassName={styles['u-theme-typography-label-sm']}
              variant="typography-body"
            />
          </Grid>
        </Section>

        <Section title="Body Text">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-body-text-md"
              specimenClassName={styles['u-theme-typography-body-text-md']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-sm"
              specimenClassName={styles['u-theme-typography-body-text-sm']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-xs"
              specimenClassName={styles['u-theme-typography-body-text-xs']}
              variant="typography-body"
            />
          </Grid>
        </Section>

        <Section title="Caption">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-caption-text-lg"
              specimenClassName={styles['u-theme-typography-caption-text-lg']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-caption-text-md"
              specimenClassName={styles['u-theme-typography-caption-text-md']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-caption-text-sm"
              specimenClassName={styles['u-theme-typography-caption-text-sm']}
              variant="typography-body"
            />
          </Grid>
        </Section>

        <Section title="Button">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-button-label"
              specimenClassName={styles['u-theme-typography-button-label']}
              variant="typography-body"
            />
          </Grid>
        </Section>

        <Section title="Kicker">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-kicker"
              specimenClassName={styles['u-theme-typography-kicker']}
              variant="typography-body"
            />

            <TokenSpecimen
              name="eds-theme-typography-kicker-sm"
              specimenClassName={styles['u-theme-typography-kicker-sm']}
              variant="typography-body"
            />
          </Grid>
        </Section>

        <Section title="Tag">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-tag"
              specimenClassName={styles['u-theme-typography-tag']}
              variant="typography-body"
            />
          </Grid>
        </Section>
      </div>
    );
  }
}

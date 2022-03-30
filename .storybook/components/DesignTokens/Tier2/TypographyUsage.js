import React, { Component } from 'react';
<<<<<<< HEAD
import { Grid, Section } from '../../../../src';
=======
import { Grid, GridItem, Section, Hr } from '../../../../src';
import styles from '../../../../src/components/Utilities/TypographyUsage.module.css';
>>>>>>> 7043947d (feat(typography): token updates and assignments (#908))
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2TypographyUsage extends Component {
  render() {
    return (
      <div>
        <Section title="Headline">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-headline-lg"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-headline-lg']}
            />

            <TokenSpecimen
              name="eds-theme-typography-headline-md"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-headline-md']}
            />

            <TokenSpecimen
              name="eds-theme-typography-headline-sm"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-headline-sm']}
            />
          </Grid>
        </Section>

        <Section title="Title">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-title-md"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-title-md']}
            />

            <TokenSpecimen
              name="eds-theme-typography-title-sm"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-title-sm']}
            />
          </Grid>
        </Section>

        <Section title="Label">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-label-lg-subtle"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-label-lg-subtle']}
            />

            <TokenSpecimen
              name="eds-theme-typography-label-md-subtle"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-label-md-subtle']}
            />

            <TokenSpecimen
              name="eds-theme-typography-label-md"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-label-md']}
            />

            <TokenSpecimen
              name="eds-theme-typography-label-sm"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-label-sm']}
            />
          </Grid>
        </Section>

        <Section title="Body Text">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-body-text-md"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-body-text-md']}
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-sm"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-body-text-sm']}
            />

            <TokenSpecimen
              name="eds-theme-typography-body-text-xs"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-body-text-xs']}
            />
          </Grid>
        </Section>

        <Section title="Caption">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-caption-text-lg"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-caption-text-lg']}
            />

            <TokenSpecimen
              name="eds-theme-typography-caption-text-md"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-caption-text-md']}
            />

            <TokenSpecimen
              name="eds-theme-typography-caption-text-sm"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-caption-text-sm']}
            />
          </Grid>
        </Section>

        <Section title="Button">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-button-label"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-button-label']}
            />
          </Grid>
        </Section>

        <Section title="Kicker">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-kicker"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-kicker']}
            />

            <TokenSpecimen
              name="eds-theme-typography-kicker-sm"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-kicker-sm']}
            />
          </Grid>
        </Section>

        <Section title="Tag">
          <Grid>
            <TokenSpecimen
              name="eds-theme-typography-tag"
              variant="typography-body"
              specimenClassName={styles['u-theme-typography-tag']}
            />
          </Grid>
        </Section>
      </div>
    );
  }
}

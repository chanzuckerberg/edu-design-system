/**
 * TODO(Banner): Remove these stories when Banner is done because those tests will cover this
 * component and we don't want this one in storybook since it's not intended to be used outside
 * of the Banner and Toast.
 */
import { StoryObj } from '@storybook/react';
import * as React from 'react';
import NotificationIcon, {
  NotificationVariant,
  variantToIconAssetsMap,
} from './NotificationIcon';
import styles from './NotificationIcon.stories.module.css';

// todo (Andrew): look into getting rid of the `as` cast. The `stylesByColor` object's keys are
// members of Color. Can TypeScript understand that?
const variants = Object.keys(variantToIconAssetsMap) as NotificationVariant[];

export default {
  title: 'Molecules/Messaging/NotificationIcon',
  component: NotificationIcon,
};

type Args = React.ComponentProps<typeof NotificationIcon>;

export const ColorVariants: StoryObj<Args> = {
  render: (args) => (
    <>
      {variants.map((variant) => (
        <div className={styles.variant} key={variant}>
          {variant}
          <NotificationIcon {...args} variant={variant} />
        </div>
      ))}
    </>
  ),
};

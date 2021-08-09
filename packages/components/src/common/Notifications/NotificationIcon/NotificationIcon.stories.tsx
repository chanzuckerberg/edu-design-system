import { Story } from "@storybook/react/types-6-0";
import * as React from "react";
import Text from "../../../Text";
import NotificationIcon, {
  NotificationVariant,
  variantToIconAssetsMap,
} from "./NotificationIcon";
import styles from "./NotificationIcon.stories.module.css";

// todo (Andrew): look into getting rid of the `as` cast. The `stylesByColor` object's keys are
// members of Color. Can TypeScript understand that?
const variants = Object.keys(variantToIconAssetsMap) as NotificationVariant[];

export default {
  title: "common/Notifications/NotificationIcon",
  component: NotificationIcon,
};

type Args = React.ComponentProps<typeof NotificationIcon>;

export const ColorVariants: Story<Args> = (args) => (
  <>
    {variants.map((variant) => (
      <div className={styles.variant} key={variant}>
        <Text size="h3">{variant}</Text>
        <NotificationIcon {...args} variant={variant} />
      </div>
    ))}
  </>
);

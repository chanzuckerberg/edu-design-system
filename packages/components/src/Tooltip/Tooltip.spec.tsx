import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { userEvent } from "@storybook/testing-library";
import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import React from "react";
import * as TooltipStoryFile from "./Tooltip.stories";

const { Interactive } = composeStories(TooltipStoryFile);

describe("<Tooltip /> snaps", () => {
  generateSnapshots(TooltipStoryFile, {
    getElement: (wrapper) => {
      return wrapper.baseElement;
    },
  });
});
describe("<Tooltip />", () => {
  it("should close tooltip via escape key", async () => {
    // @ts-expect-error Animation prop exists on Tippy but not exposed on Tooltip,
    // Test fails if animation is enabled https://github.com/atomiks/tippyjs-react/blob/master/test/Tippy.test.js#L65
    render(<Interactive animation={false} />);
    const trigger = await screen.findByRole("button");
    expect(screen.queryByTestId("tooltip-content")).not.toBeInTheDocument();
    await userEvent.hover(trigger);
    expect(screen.getByTestId("tooltip-content")).toBeInTheDocument();
    await userEvent.keyboard("{esc}");
    expect(screen.queryByTestId("tooltip-content")).not.toBeInTheDocument();
  });
});

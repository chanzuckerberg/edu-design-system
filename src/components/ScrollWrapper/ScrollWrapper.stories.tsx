import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { ScrollWrapper } from './ScrollWrapper';

export default {
  title: 'Components/ScrollWrapper',
  component: ScrollWrapper,
  decorators: [(Story) => <div className="p-spacing-size-4">{Story()}</div>],
  tags: ['version:1.0', 'beta'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof ScrollWrapper>;

/**
 * Using the scroll wrapper relies on a few fixed height containers above and below the component.
 * This shows how, if you have an outer container of a small height, and the content within can be
 * taller, the scroll wrapper can be inserted in between, and allow for the content to be revealed as needed.
 */
export const Default: StoryObj<Args> = {
  args: {},
  render: (args) => (
    <div style={{ height: '200px' }}>
      <ScrollWrapper {...args}>
        <div style={{ height: '300px' }}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            accusamus dolorum nostrum itaque ullam tempora quam dolore adipisci
            atque velit, excepturi veniam? Nesciunt non facilis, quos odit
            aliquam alias unde hic quidem exercitationem perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            sapiente ipsam, ipsum similique ea nemo doloremque. Corporis
            excepturi eos impedit dicta quidem soluta culpa at delectus est,
            provident vitae sed commodi inventore quaerat non labore consequatur
            nisi quisquam obcaecati, reprehenderit quas dolore ipsa. Totam
            dolorem suscipit amet optio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta
            cupiditate officiis temporibus explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta
            cupiditate officiis temporibus explicabo!
          </p>
        </div>
      </ScrollWrapper>
    </div>
  ),
};

/**
 * Shadows can be kept within the edge of the container, taking on a concave appearance
 */
export const Contain: StoryObj<Args> = {
  args: {
    shadowType: 'contain',
  },
  render: (args) => (
    <div style={{ height: '200px' }}>
      <ScrollWrapper {...args}>
        <div style={{ height: '300px' }}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            accusamus dolorum nostrum itaque ullam tempora quam dolore adipisci
            atque velit, excepturi veniam? Nesciunt non facilis, quos odit
            aliquam alias unde hic quidem exercitationem perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            sapiente ipsam, ipsum similique ea nemo doloremque. Corporis
            excepturi eos impedit dicta quidem soluta culpa at delectus est,
            provident vitae sed commodi inventore quaerat non labore consequatur
            nisi quisquam obcaecati, reprehenderit quas dolore ipsa. Totam
            dolorem suscipit amet optio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta
            cupiditate officiis temporibus explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta
            cupiditate officiis temporibus explicabo!
          </p>
        </div>
      </ScrollWrapper>
    </div>
  ),
};

import { LayoutHeader } from './LayoutHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LayoutHeader> = {
  title: '3. widgets/LayoutHeader/LayoutHeader',
  component: LayoutHeader,
  decorators: [
    (Story) => (
      <div style={{ width: '90vw', border: '1px dashed black' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof LayoutHeader>;

export const NeitherSlot: Story = {
  args: {
    leftSlotType: 'none',
    middleSlotType: 'none',
  },
};

export const LeftSlotOnly: Story = {
  args: {
    leftSlotType: 'goBack',
    middleSlotType: 'none',
  },
};

export const MiddleSlotOnly: Story = {
  args: {
    leftSlotType: 'none',
    middleSlotType: 'logo',
  },
};

export const EitherSlot: Story = {
  args: {
    leftSlotType: 'goBack',
    middleSlotType: 'logo',
  },
};

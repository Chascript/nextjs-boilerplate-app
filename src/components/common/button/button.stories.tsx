import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Common/Button',
  args: {
    onClick: () => console.log('clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    primary: true,
  },
};

export const PrimaryFalse: Story = {
  args: {
    ...Default.args,
    primary: false,
  },
};

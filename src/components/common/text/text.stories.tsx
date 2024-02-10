import { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Common/Text',
  argTypes: {
    children: { control: 'text' },
    position: { control: 'radio', options: ['left', 'center', 'right'] },
    className: { control: 'text' },
    fontWeight: { control: 'radio', options: ['light', 'normal', 'medium', 'bold'] },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Default Text',
    position: 'left',
    className: '',
  },
};

export const ExtraboldSpan: Story = {
  args: {
    ...Default.args,
    fontWeight: 'bold',
    element: 'span',
  },
};

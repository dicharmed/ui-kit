import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './index';

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        checked: false,
        label: 'Checkbox',
    },
};

export const Disabled: Story = {
    args: {
        checked: false,
        disabled: true,
        label: 'Checkbox',
    }
}
export const Checked: Story = {
    args: {
        checked: true,
        label: 'Checkbox',
    }
}

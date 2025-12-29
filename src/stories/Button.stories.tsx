import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@react-spectrum/button";

const meta: Meta<typeof Button> = {
    title: "Design System/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "accent", "negative"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Button",
        variant: "primary",
    },
};

export const Secondary: Story = {
    args: {
        children: "Button",
        variant: "secondary",
    },
};


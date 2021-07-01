import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./Button";

export default {
  title: "Atomic/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "small",
  bgColor: "red",
  text: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "medium",
  bgColor: "blue",
  text: "Button",
};

export const Large = Template.bind({});
Large.args = {
  bgColor: "gradient",
  size: "large",
  text: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "Button",
};

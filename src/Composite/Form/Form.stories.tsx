import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Form } from "./Form";
export default {
  title: "Composite/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Light = Template.bind({});
Light.args = {
  formBg: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  formBg: "dark",
};

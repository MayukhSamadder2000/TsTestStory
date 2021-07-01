import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Title } from "./Title";

export default {
  title: 'Atomic/Title',
  component: Title,
  argTypes:{
      color: { control: 'color' },
  }

} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />; 

export const Large=Template.bind({});
Large.args={
    size:'large'
};

export const Medium=Template.bind({});
Medium.args={
    size:'medium'
};
export const Small=Template.bind({});
Small.args={
    size:'small'
};
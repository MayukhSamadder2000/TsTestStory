import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "./Input";

export default {
  title: "Atomic/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

// import { ComponentMeta, ComponentStory } from '@storybook/react'
// import React from 'react'
// import { Input } from './Input'

// export default {
//   title: 'Atomic/Input',
//   component: Input,
// } as ComponentMeta<typeof Input>

// const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
// }

// export const Medium = Template.bind({})
// Medium.args = {
//   size: 'medium',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
// }

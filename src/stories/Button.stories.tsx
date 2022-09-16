import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Demo } from '../components/Demo';

export default {
  title: 'Example/Demo',
  component: Demo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Demo>;

const Template: ComponentStory<typeof Demo> = (args) => <Demo {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};


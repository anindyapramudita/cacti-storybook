import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Loader } from '../components/loader/Index';

export default {
  title: 'Component/Loader',
  component: Loader,
  argTypes: {
    borderColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

enum buttonType {
  primary= 'primary',
  secondary= 'secondary'
}

const allTypes: buttonType[] = [buttonType.primary, buttonType.secondary]


const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args}/>;


export const Spinner = Template.bind({});
export const Dots = Template.bind({});
Dots.args = {
  type: 'dots'
};
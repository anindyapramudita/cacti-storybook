import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Button } from '../components/button/Index';
import ButtonList from '../components/button/ButtonList';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

enum buttonType {
  primary= 'primary',
  secondary= 'secondary'
}

const allTypes: buttonType[] = [buttonType.primary, buttonType.secondary]


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const AllButtonTemplate: ComponentStory<typeof ButtonList> = (args) => <ButtonList {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outline',
  label: 'Button',
};

export const Reverse = Template.bind({});
Reverse.args = {
  variant: 'reverse',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Button',
  isLoading:true
};

// export const allButton = AllButtonTemplate.bind({})
// allButton.args = {
//   buttons: [
//     { variant: 'primary', type: 'filled', label: 'Filled Primary' },
//     { variant: 'secondary', type: 'filled', label: 'Filled Secondary' },
//     { variant: 'success', type: 'filled', label: 'Filled Success' },
//     { variant: 'warning', type: 'filled', label: 'Filled Warning' },
//     { variant: 'error', type: 'filled', label: 'Filled Error' },
//     { variant: 'primary', type: 'outline', label: 'Outline Primary' },
//     { variant: 'secondary', type: 'outline', label: 'Outline Secondary' },
//     { variant: 'success', type: 'outline', label: 'Outline Success' },
//     { variant: 'warning', type: 'outline', label: 'Outline Warning' },
//     { variant: 'error', type: 'outline', label: 'Outline Error' },
//     { variant: 'primary', type: 'reverse', label: 'Reverse Primary' },
//     { variant: 'secondary', type: 'reverse', label: 'Reverse Secondary' },
//     { variant: 'success', type: 'reverse', label: 'Reverse Success' },
//     { variant: 'warning', type: 'reverse', label: 'Reverse Warning' },
//     { variant: 'error', type: 'reverse', label: 'Reverse Error' },
//   ],
// };
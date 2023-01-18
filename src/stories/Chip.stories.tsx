import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Chip } from '../components/chip/Index';
import { AdjustIcon } from '../icons/adjust-icon';

export default {
  title: 'Component/Chip',
  component: Chip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Chip>;

enum buttonType {
  primary= 'primary',
  secondary= 'secondary'
}

const allTypes: buttonType[] = [buttonType.primary, buttonType.secondary]


const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  label: 'Button',
  startIcon: <AdjustIcon adjustIconColor='white'/>
};
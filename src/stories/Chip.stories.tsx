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

export const FilledWithIcon = Template.bind({});
FilledWithIcon.args = {
  label: 'Adjust',
  startIcon: <AdjustIcon adjustIconColor='white'/>
};

export const FilledWithoutIcon = Template.bind({});
FilledWithoutIcon.args = {
  label: 'Adjust'
};

export const OutlinedWithIcon = Template.bind({});
OutlinedWithIcon.args = {
  label: 'Adjust',
  startIcon: <AdjustIcon adjustIconColor='grey'/>,
  type: 'outlined'
};

export const FilledClosable = Template.bind({});
FilledClosable.args = {
  label: 'Adjust',
  startIcon: <AdjustIcon adjustIconColor='white'/>,
  closable: true
};

export const OutlinedClosable = Template.bind({});
OutlinedClosable.args = {
  label: 'Adjust',
  startIcon: <AdjustIcon adjustIconColor='grey'/>,
  type: 'outlined',
  closable: true
};

export const OutlinedActive = Template.bind({});
OutlinedActive.args = {
  label: 'Adjust',
  startIcon: <AdjustIcon adjustIconColor='grey'/>,
  type: 'outlined',
  closable: true,
  isActive: true
};
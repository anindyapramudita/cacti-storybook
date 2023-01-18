
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonList from '../components/button/ButtonList';
import * as ButtonStories from './Button.stories';

export default {
  component: ButtonList,
  title: 'Component/Button',
  decorators: [(story:any) => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof ButtonList>;

const Template: ComponentStory<typeof ButtonList> = args => <ButtonList {...args} />;

export const AllButtons = Template.bind({});
AllButtons.args = {
  buttons: [
    { variant: 'primary', type: 'filled', label: 'Filled Primary' },
    { variant: 'secondary', type: 'filled', label: 'Filled Secondary' },
    { variant: 'success', type: 'filled', label: 'Filled Success' },
    { variant: 'warning', type: 'filled', label: 'Filled Warning' },
    { variant: 'error', type: 'filled', label: 'Filled Error' },
    { variant: 'primary', type: 'outline', label: 'Outline Primary' },
    { variant: 'secondary', type: 'outline', label: 'Outline Secondary' },
    { variant: 'success', type: 'outline', label: 'Outline Success' },
    { variant: 'warning', type: 'outline', label: 'Outline Warning' },
    { variant: 'error', type: 'outline', label: 'Outline Error' },
    { variant: 'primary', type: 'reverse', label: 'Reverse Primary' },
    { variant: 'secondary', type: 'reverse', label: 'Reverse Secondary' },
    { variant: 'success', type: 'reverse', label: 'Reverse Success' },
    { variant: 'warning', type: 'reverse', label: 'Reverse Warning' },
    { variant: 'error', type: 'reverse', label: 'Reverse Error' },
  ],
};

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
    { color: 'primary', variant: 'filled', label: 'Filled Primary' },
    { color: 'secondary', variant: 'filled', label: 'Filled Secondary' },
    { color: 'success', variant: 'filled', label: 'Filled Success' },
    { color: 'warning', variant: 'filled', label: 'Filled Warning' },
    { color: 'error', variant: 'filled', label: 'Filled Error' },
    { color: 'primary', variant: 'outline', label: 'Outline Primary' },
    { color: 'secondary', variant: 'outline', label: 'Outline Secondary' },
    { color: 'success', variant: 'outline', label: 'Outline Success' },
    { color: 'warning', variant: 'outline', label: 'Outline Warning' },
    { color: 'error', variant: 'outline', label: 'Outline Error' },
    { color: 'primary', variant: 'reverse', label: 'Reverse Primary' },
    { color: 'secondary', variant: 'reverse', label: 'Reverse Secondary' },
    { color: 'success', variant: 'reverse', label: 'Reverse Success' },
    { color: 'warning', variant: 'reverse', label: 'Reverse Warning' },
    { color: 'error', variant: 'reverse', label: 'Reverse Error' },
  ],
};
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '../components/forms/Switch';

export default {
  title: 'Component/Forms/Switch',
  component: Switch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story:any) => <div style={{ paddingRight: '1rem' }}>{story()}</div>]
} as ComponentMeta<typeof Switch>;
  
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const PillSwitch = Template.bind({});
PillSwitch.args = {
};

export const PillSwitchWithIcon = Template.bind({});
PillSwitchWithIcon.args = {
  withIcon: true
};

export const PillSwitchDisabled = Template.bind({});
PillSwitchDisabled.args = {
  disabled: true
};

export const SliderSwitch = Template.bind({});
SliderSwitch.args = {
  variant:'slider'
};

export const SliderSwitchWithIcon = Template.bind({});
SliderSwitchWithIcon.args = {
  variant:'slider',
  withIcon: true
};

export const SliderSwitchDisabled = Template.bind({});
SliderSwitchDisabled.args = {
  variant:'slider',
  disabled: true
};
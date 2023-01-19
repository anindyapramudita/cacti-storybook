import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../components/forms/Input';
import { EyeOpenIcon } from '../icons/eye-open-icon';
import { ProfileIcon } from '../icons/profile-icon';

export default {
  title: 'Component/Forms/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story:any) => <div style={{ paddingRight: '1rem' }}>{story()}</div>]
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  label: 'Username',
  placeholder: 'Input your username here',
};

export const InputWithStartIcon = Template.bind({});
InputWithStartIcon.args = {
  label: 'Full Name',
  placeholder: 'Input your full name here',
  startIcon: <ProfileIcon width='16px' height='16px' profileIconColor='grey'/>
};

export const InputWithEndIcon = Template.bind({});
InputWithEndIcon.args = {
  label: 'Password',
  placeholder: 'Input your password here',
  endIcon: <EyeOpenIcon width='24px' height='24px' eyeIconColor='grey'/>
};

export const InputDisabled = Template.bind({});
InputDisabled.args = {
  label: 'Password',
  placeholder: 'Input your password here',
  isDisabled: true
};

export const InputError = Template.bind({});
InputError.args = {
  label: 'Password',
  placeholder: 'Input your password here',
  type: 'password',
  error: true,
  errorMessage: 'Must have at least 8 characters',
};
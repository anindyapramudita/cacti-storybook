import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../components/forms/Select';
import { Option } from '../components/forms/Option';
import { ProfileIcon } from '../icons/profile-icon';

export default {
  title: 'Component/Forms/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story: any) => <div style={{ paddingRight: '1rem' }}>{story()}</div>]
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({ ...args }) => <Select {...args}>
  <Option value='0' disabled>Select an option</Option>
  <Option value='1'>Female</Option>
  <Option value='2'>Male</Option>
  <Option value='3'>Prefer not to say</Option>
  </Select>;


export const SelectWithLabel = Template.bind({});
SelectWithLabel.args = {
  label:'Gender'
};

export const SelectWithStartIcon = Template.bind({});
SelectWithStartIcon.args = {
  label:'Gender',
  startIcon:<ProfileIcon width='16px' height='16px' profileIconColor='grey'/>
};

export const SelectDisabled = Template.bind({});
SelectDisabled.args = {
  label:'Gender',
  isDisabled: true
};

export const SelectError = Template.bind({});
SelectError.args = {
  label:'Gender',
  error:true,
  errorMessage:'Please choose one of the option'
};

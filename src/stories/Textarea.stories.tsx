import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from '../components/forms/TextArea';


export default {
  title: 'Component/Forms/Text Area',
  component: Textarea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story:any) => <div style={{ paddingRight: '1rem' }}>{story()}</div>]
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const TextareaWithLabel = Template.bind({});
TextareaWithLabel.args = {
  label: 'Username',
  placeholder: 'Input your username here',
};
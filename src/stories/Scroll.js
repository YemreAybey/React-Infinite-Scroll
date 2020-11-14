/* eslint-disable import/no-anonymous-default-export */
import { ReactInfiniteScroll } from '../index';

export default {
  title: 'ReactInfiniteScroll',
  component: ReactInfiniteScroll,
  argTypes: {
    primary: { control: 'color' },
  },
};

const Template = args => <ReactInfiniteScroll {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {};

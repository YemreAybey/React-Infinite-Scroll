/* eslint-disable import/no-anonymous-default-export */
import ReactInfiniteScroll from '../src/stories/infinite';

export default {
  title: 'ReactInfiniteScroll',
  component: ReactInfiniteScroll,
  argTypes: {
    primary: { control: 'color' },
  },
};

const Template = args => <ReactInfiniteScroll {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

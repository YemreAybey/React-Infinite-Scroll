/* eslint-disable import/no-anonymous-default-export */
import ReactInfiniteScroll from './infinite';
import ReactInfiniteTopScroll from './infiniteBottom';
import React from 'react';

export default {
  title: 'ReactInfiniteScroll',
  component: ReactInfiniteScroll,
  argTypes: {},
};

const Template = args => <ReactInfiniteScroll {...args} />;

const Template2 = args => <ReactInfiniteTopScroll {...args} />;

export const BottomScroll = Template.bind({});
BottomScroll.args = {};

export const TopScroll = Template2.bind({});
TopScroll.args = { useTopScroll: true };

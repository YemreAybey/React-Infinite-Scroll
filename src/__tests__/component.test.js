import React from 'react';
import { render } from '@testing-library/react';
import { ReactInfiniteScroll } from '../index';

/** @Batuhan @Safa
 * This is just a sample test
 * We will not be rendering and finding a button but infinite-scroll-element
 * Please add your tests if ypu add a feature to the component
 */
test('renders without error', () => {
  const { getByText } = render(<ReactInfiniteScroll />);
  const button = getByText(/hello/i);
  expect(button).toHaveAttribute('type', 'button');
});

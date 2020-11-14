import React, { FC } from 'react';

export interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
}

export const ReactInfiniteScroll: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  return (
    <button
      type='button'
      style={{
        background: `${props.primary ? 'palevioletred' : 'white'}`,
        color: `${props.primary ? 'white' : 'palevioletred'}`,
        fontSize: '1em',
        margin: '1em',
        padding: '0.25em 1em',
        border: '2px solid palevioletred',
        borderRadius: '10px',
      }}>
      Hello
    </button>
  );
};

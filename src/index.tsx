/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties, FC, useRef, useEffect } from 'react';
import styled, { StyledComponent } from 'styled-components';
import './stories/infinite.css';
export interface InfiniteScrollProps extends React.ComponentProps<any> {
  /** This is important for your callback to run
   * if it is false your callback will never run.
   * i.e items.length === totalItemCount
   */
  hasMore: boolean;
  Loader?: React.Component | FC | JSX.Element;
  /** Use the loader when backend is called
   * "Defaults to true"
   */
  useLoader?: boolean;
  /** The styles for of the wrapper div of items */
  containerStyle: CSSProperties;
  /** A callback function to be called when we are at the end of the scroll  */
  callBack: () => void;
  /** To scroll top instead of bottom */
  useTopScroll: boolean;
}

const parentStyle: (useTopScroll: boolean) => CSSProperties = (useTopScroll: boolean) => ({
  display: 'flex',
  WebkitBoxOrient: 'vertical',
  WebkitBoxDirection: 'normal',
  msFlexDirection: useTopScroll ? 'column-reverse' : 'column',
  flexDirection: useTopScroll ? 'column-reverse' : 'column',
  overflowY: 'scroll',
  msOverflowY: 'scroll',
  height: '100%',
  width: '100%',
});

const DefaultLoader: StyledComponent<'div', any, any> = styled.div`
  margin: 5px auto;
  width: 70px;
  text-align: center;

  > div {
    width: 13px;
    height: 13px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    margin: 5px;
  }

  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export const InfiniteScroll: FC<InfiniteScrollProps> = ({
  Loader = (
    <DefaultLoader>
      <div className='bounce1' />
      <div className='bounce2' />
      <div className='bounce3' />
    </DefaultLoader>
  ),
  hasMore,
  callBack,
  containerStyle = {},
  children,
  useLoader = true,
  useTopScroll = false,
}: InfiniteScrollProps): JSX.Element => {
  const lastItemRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const handleObserver = (entities: { isIntersecting: boolean }[]) => {
      const target: { isIntersecting: boolean } = entities[0];

      if (target.isIntersecting) {
        if (hasMore) {
          callBack();
        }
      }
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }

    return () => observer.disconnect();
  }, [callBack, hasMore]);

  return (
    <div test-id='infinite-scroll' style={{ ...parentStyle(useTopScroll), ...containerStyle }}>
      {children}
      <div test-id='last-item' ref={lastItemRef}>
        {hasMore && useLoader && Loader}
      </div>
    </div>
  );
};

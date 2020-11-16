/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties, FC, useRef, useEffect } from 'react';
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
  /** The styles for parent div */
  containerStyle: CSSProperties;
  /** A callback function to be called when we are at the end of the scroll  */
  callBack: () => void;
}

const parentStyle: CSSProperties = {
  display: 'flex',
  WebkitBoxOrient: 'vertical',
  WebkitBoxDirection: 'normal',
  msFlexDirection: 'column',
  flexDirection: 'column',
};

export const InfiniteScroll: FC<InfiniteScrollProps> = ({
  Loader = (
    <div className='spinner'>
      <div className='bounce1'></div>
      <div className='bounce2'></div>
      <div className='bounce3'></div>
    </div>
  ),
  hasMore,
  callBack,
  containerStyle = {},
  children,
  useLoader = true,
}: InfiniteScrollProps): JSX.Element => {
  const lastItemRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const parentRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

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
    <div test-id='infinite-scroll' style={{ ...parentStyle, ...containerStyle }} ref={parentRef}>
      {children}
      <div test-id='last-item' ref={lastItemRef}>
        {hasMore && useLoader && Loader}
      </div>
    </div>
  );
};

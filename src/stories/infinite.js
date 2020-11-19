import React, { useState } from 'react';
import { InfiniteScroll } from '../index';
import './infinite.css';

const addTenItems = data => {
  const newData = [...data];
  const base = newData.length;

  for (let i = 1; i <= 10; i++) {
    newData.push(base + i);
  }

  return newData;
};

const style = {
  border: '1px solid blue',
  height: '30px',
  margin: '5px',
  padding: '10px',
};

const MyComp = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const callBack = () => {
    setTimeout(() => setData(d => addTenItems(d)), 1500);
  };

  return (
    <div style={{ height: '300px' }}>
      <InfiniteScroll hasMore={data.length < 50} callBack={callBack}>
        {data.map(num => (
          <div key={num} style={style}>
            {num}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MyComp;

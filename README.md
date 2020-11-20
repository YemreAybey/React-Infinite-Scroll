# React Infinite Scroll with Hooks

Add infinite scroll feature to your applications with React Infinite Scroll Component. You can use it anywhere in any condition.

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url]

<p align="center">
  <h1 align="center">RISH</h1>
  <p align="center">
    <a href="https://codesandbox.io/s/quizzical-sea-vqbb0?file=/src/App.js">Demo</a>
    ·
    <a href="https://github.com/YemreAybey/React-Infinite-Scroll/issues">Report Bug</a>
    ·
    <a href="https://github.com/YemreAybey/React-Infinite-Scroll/pulls">Contribute</a>
  </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Contribute](#contribute)
- [Contributors](#contributors)
- [License](#license)

## About The Project

This project's purpose is to provide an easy solution for implementing infinite scroll feature to the web applications. The infinite scroll component is built with Observer Pattern and React Hooks. <br>

## Installation

```
npm i react-infinite-scroll-comp --save
```

```
yarn add react-infinite-scroll-comp
```

## Usage

Import component at top level:

```
import { InfiniteScroll } from 'react-infinite-scroll-comp';
```

DOM scroll events

```
/*
Infinite scroll component fills the whole width and height of its wrapper.
Style your wrapper div accoordingly.
*/
<div style={{ height: '300px' }}>
    <InfiniteScroll
        Loader = <MyCustomLoader />,
        hasMore,
        callBack = {myCallBack},
        containerStyle = {},
        useLoader = true,
        useTopScroll = true,
    >
    {data.map(num => (
        <div key={num} style={style}>
        {num}
        </div>
    ))}
    </InfiniteScroll>
</div>
```

Example Component

```
import React, { useState } from 'react';
import { InfiniteScroll } from 'react-infinite-scroll-comp';

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
```

## Props

| Name | Required | Type | Default | Descriptionn |
| --- | --- | --- | --- | --- |
| Loader | no | element | three dots | Loader spinner to show when callback function is called. |
| useLoader | no | boolen | true | Whether to show loader or not. |
| hasMore | yes | boolean | --- | If there are more items to be loaded. |
| callBack | yes | function | --- | A callback when more items are requested by the user. |
| containerStyle | no | CSSProperties | { } | Style for wrapper div of items. |
| children | yes | element | --- | Content for infinite scroll. |
| useTopScroll | no | boolean | false | Reverse scroll direction from top-to-bottom to bottom-to-top. |

## Contribute

Contributions, issues and feature requests are welcome!

1. Fork it (https://github.com/YemreAybey/React-Infinite-Scroll/fork)
2. Create your working branch (git checkout -b [choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add/improve')
4. Push to the branch (git push origin [chosen-name]) Create a new Pull Request

## Contributors

- [YemreAybey](https://github.com/YemreAybey)
- [SafaErden](https://github.com/SafaErden)
- [BatuhanYilmazzz](https://github.com/BatuhanYilmazzz)

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/YemreAybey/React-Infinite-Scroll.svg?style=flat-square
[contributors-url]: https://github.com/YemreAybey/React-Infinite-Scroll/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/YemreAybey/React-Infinite-Scroll.svg?style=flat-square
[forks-url]: https://github.com/YemreAybey/React-Infinite-Scroll/network/members
[stars-shield]: https://img.shields.io/github/stars/YemreAybey/React-Infinite-Scroll.svg?style=flat-square
[stars-url]: https://github.com/YemreAybey/React-Infinite-Scroll/stargazers
[issues-shield]: https://img.shields.io/github/issues/YemreAybey/React-Infinite-Scroll.svg?style=flat-square
[issues-url]: https://github.com/YemreAybey/React-Infinite-Scroll/issues

## License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

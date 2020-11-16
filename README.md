# React Infinite Scroll with Hooks

Add infinite scroll feature to you applications with React Infinite Scroll Component. You can use it anywhere in any condition including window and scrollable elements.


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<p align="center">
  <h1 align="center">RISH</h1>
  <p align="center">
    <a href="">Demo</a>
    ·
    <a href="https://github.com/YemreAybey/React-Infinite-Scroll/issues">Report Bug</a>
    ·
    <a href="https://github.com/YemreAybey/React-Infinite-Scroll/pulls">Contribute</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Usage](#usage)
* [Props](#props)
* [Contributors](#contributors)
* [License](#license)

## About The Project

This project's purpose is to provide an easy solution for implementing infinite scroll feature to the web applications. The infinite scroll component is built with Observer Pattern and React Hooks.
<br>

## Installation

```
npm install react-infinite-scroll --save
```

```
yarn add react-infinite-scroll
```

## Usage

Import component at top level:
```
import InfiniteScroll from 'react-infinite-scroll';
```

Wrap the content that you want to make scrollable:
```
<InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {items} // <-- This is the content you want to load
</InfiniteScroll>
```

DOM scroll events
```
<div style="height:700px;overflow:auto;">
    <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
    >
        {items}
    </InfiniteScroll>
</div>
```

## Props

| Name | Required | Type | Descriptionn |
| --- | --- | --- | --- |
| xdddddddd | yes | a | description goes  |
| y | no | b | description goes here |

## Contributors

- [YemreAybey](https://github.com/YemreAybey)
- [SafaErden](https://github.com/SafaErden)

## Acknowledgements
* [Microverse](https://www.microverse.org/)

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
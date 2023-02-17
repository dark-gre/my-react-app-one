import React, { Component } from "react";

const Child = () => <div> 我是Child </div>;

class Navbar extends Component {
  render() {
    return (
      <div>
        Navbar <Child> </Child>
      </div>
    );
  }
}

function Swiper() {
  return <div>Swiper</div>;
}

const Tabbar = () => <div>Tabber</div>;

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar> </Navbar> <Swiper> </Swiper> <Tabbar> </Tabbar>{" "}
      </div>
    );
  }
}

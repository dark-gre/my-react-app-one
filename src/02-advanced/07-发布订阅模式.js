import React, { Component } from "react";

export default class App extends Component {
  render() {
    return <div>订阅</div>;
  }
}

///原理

var bus = {
  list: [],
  //订阅者方法
  subscribe(callback) {
    console.log("callback，不在这里调用，这里只 做保存");
    this.list.push(callback);
    //订阅者方法里面不做处理
  },

  //发布者方法
  publish(text) {
    // 这里暂时没有参数
    // 最开始这样处理   遍历list列表参数是callback，判断是否存在，存在直接调用callback，list数组里面的方法都会被调用。
    this.list.forEach((callback) => callback && callback(text));
  },
};

// 订阅着先订阅         订阅者订阅的是一个回调。
bus.subscribe((val) => {
  console.log("111", val);
  //这里是，传递一个参数,，这个参数就是一个callback
});

bus.subscribe((val) => {
  console.log("222", val);
  //这里是，传递一个参数
});

// 发布者，发布
setTimeout(() => {
  bus.publish("0qqqqqqq");
}, 0);

setTimeout(() => {
  bus.publish("1qqqqqqq");
}, 1000);

setTimeout(() => {
  bus.publish("2qqqqqqq");
}, 2000);

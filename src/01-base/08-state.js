import React, { Component } from "react";

export default class App extends Component {
  //state里面存放状态！，在这里面，否则其他不是状态
  //   state = {
  //     myText: "收藏",
  //     show: true,
  //   };
  //这里state = {}  理解为创建一个对象，

  //   另外：ES6中的class   constructor的方法？ 设置另一种写法，

  constructor() {
    super();
    this.state = {
      myText: "收藏",
      show: true,
      name:'xiaoli'
    };
  }

  render() {
    return (
      <div>
        <h1>开始学习状态{this.state.name}</h1>
        <button
          onClick={() => {
            //这里修改的时候，理解为，this.setState({})，这是一个，方法，传的参数，是一个对象，，，this.setState()，这是一个方法
            this.setState({
              //用key，value的方式
              show: !this.state.show,
              name:'xiaohua'
            });
          }}
        >
          {this.state.show ? "收藏" : "取消收藏"}
        </button>
      </div>
    );
  }
}

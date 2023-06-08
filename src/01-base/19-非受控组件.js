import React, { Component } from "react";

export default class App extends Component {
  //这里为什么定义变量的时候，不需要const、var、或者是let
  myusername = React.createRef();

  render() {
    return (
      <div>
        <h1>登录页</h1>
        {/* <input type="text" ref={this.myusername} />  */}
        <input type="text" ref={this.myusername} defaultValue='liu' />
        {/* 如何进行设置默认值，通过defaultValue方法 */}
        <button
          onClick={() => {
            console.log(this.myusername.current.value);
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.myusername.current.value = "";
          }}
        >
          重置
        </button>
      </div>
    );
  }
}

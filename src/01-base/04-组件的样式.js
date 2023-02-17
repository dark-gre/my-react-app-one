import React, { Component } from "react";
import "./css/01-index.css";

export default class APP extends Component {
  render() {
    //写在这里面了
    let time = "111";

    let obj = {
      background: "blue",
    };
    return (
      <div>
        {/* 大括号的概念 */}
        <div>这里是:{time}</div>
        <div>{10 > 20 ? "aaa" : "bbbb"}</div>

        {/* 行内样式 */}

        <div style={{ background: "red" }}> aaaaaaaaaaa</div>
        <div style={{ backgroundColor: "red" }}> aaaaaaaaaaa</div>
        {/* 大括号里面必须是一个对象 */}
        <div style={obj}> aaaaaaaaaaa</div>

        {/* 样式模块化，从外部引入 */}
        <div className="active">12121111111</div>
        <div id="a1">33333333333</div>

        {/* 这个for属性，可以在点击用户名的时候，也能选中输入框 */}
        <label htmlFor="username">用户名:</label>
        <input type='text' id="username"></input>
      </div>
    );
  }
}

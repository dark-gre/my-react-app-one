import React, { Component } from "react";
import Navbar from "../01-base/Navbar";

export default class Index extends Component {
  render() {
    var obj = {
      title: "测试",
      leftshow: true,
    };
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title="111" leftshow={false} />
        </div>
        <div>
          <h2>菜单</h2>
          <Navbar title="222" leftshow={true} />
        </div>
        <div>
          <h2>我的</h2>
          <Navbar title="333" />
        </div>
        <Navbar {...obj} />
        {/* 解构的方法  --- 解构赋值 -- 更简答 */}
        <Navbar title={obj.title} leftshow={obj.leftshow} />
      </div>
    );
  }
}

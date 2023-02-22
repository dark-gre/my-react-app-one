import React, { Component } from "react";

export default class App extends Component {
    
    //这里存储的 是状态变量，就是后期有可能会改变的值
  state = {
    list: [111, 222, 333],
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
            //这里面的jsx语法和js语法穿插用法的区别，然后，key，item，以及大括号的情况
            //为了列表的复用和重排，设置key值，提高性能。   对比虚拟dom的时候，
          ))}
        </ul>
        
      </div>
    );
  }
}

import React, { Component } from "react";
//引入  better-scroll
import BettterScroll from "better-scroll";

export default class Index extends Component {
  state = {
    list: [],
  };

  render() {
    return (
      <div>
        <button onClick={() => this.haddle()}>click</button>
        {/*这里为什么直接----是立即调用这个方法 */}
        <div
          className="wrapper"
          style={{ height: "200px", background: "yellow", overflow: "hidden" }}
        >
          {/* 溢出隐藏 */}
          <ul className="content">
            {this.state.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  haddle() {
    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    this.setState(
      {
        list: list,
      },
      () => {
        new BettterScroll(".wrapper");
      }
      //这个时候dom已经更新完了 
    );

    //把他们放到定时器中也能实现这个效果

    // console.log(this.state.list);
    // console.log(document.querySelectorAll('li'));
    //在这里判断是否能获取到dom节点   原生js
    // new BtetterScroll(".wrapper");
  }
}

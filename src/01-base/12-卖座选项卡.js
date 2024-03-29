import React, { Component } from "react";

import Film from "./Component/maizuoComponent/Film";
import Conter from "./Component/maizuoComponent/Conter";
import Cinema from "./Component/maizuoComponent/Cinema";

import "./css/02-maizuo.css";

export default class APP extends Component {
  state = {
    list: [
      { id: 1, name: "电影" },
      { id: 2, name: "影院" },
      { id: 3, name: "我的" },
    ],
    current: 0,
  };

  handleOnclick = (index) => {
    this.setState({
      current: index,
    });
  };
  //选项卡实现方法:定义一个变量，当前点击的这个值，是否等于这个变量，等于的话，就给他添加样式，否则不变

  // 放入组件，展示组件内容  写成一个方法
  witch() {
    //switch的用法，case 0: return 还有default  return  写法，忘记了。
    switch (this.state.current) {
      case 0:
        return <Conter></Conter>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Film></Film>;
      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        {/* {
                    this.state.current === 0 && <Cinema />
                }
                {
                    this.state.current === 1 && <Conter />
                }
                {
                    this.state.current === 2 && <Film />
                } */}
        {this.witch()}

        <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.state.current === index ? "active" : ""}
              onClick={() => {
                this.handleOnclick(index);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

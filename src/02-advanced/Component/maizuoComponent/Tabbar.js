import React, { Component } from "react";
import "../../css/02-maizuo.css";

export default class Tabbar extends Component {
  state = {
    list: [
      { id: 1, name: "电影" },
      { id: 2, name: "影院" },
      { id: 3, name: "我的" },
    ],
    current: this.props.defaultValue,
  };

  handleOnclick = (index) => {
    this.setState({
      current: index,
    });
    //调用父类传递过来的方法，改变父类的状态。
    this.props.myevent(index);
  };
  render() {
    return (
      <div>
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

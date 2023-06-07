import React, { Component } from "react";
import LiuPropTypes from "prop-types";

export default class Navbar extends Component {
  //这是类属性      放在class里面需要用到static 关键字  propTypes -- this.props
  static propTypes = {
    title: LiuPropTypes.string,
    leftshow: LiuPropTypes.bool,
    //这里是bool不是写成boolean
  };

  static defaultProps = {
    leftshow: true,
  };

  render() {
    //  props属性获取title属性
    let { title, leftshow } = this.props;
    console.log(title, leftshow);
    return (
      <div> 
        {leftshow && <div>返回</div>}
        navibar--{title}
        <div>首页</div>
      </div>
    );
  }
}

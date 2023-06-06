import React, { Component } from "react";

export default class Index extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.haddle1}>add1</button>

        <p>111111111111</p>
        <button onClick={this.haddle2}>add2</button>
        <p>111111111111</p>
        <button onClick={this.haddle3}>add3</button>
      </div>
    );
  }
  //类组件中，this的使用和函数的定义
  haddle1 = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);

    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  //react机制中，会进行合同setState操作，直到所有的setState合并完成之后（会进行对比--合并标志位  true和false），渲染dom

  //异步环境中，不会进行合并，调用一次执行一次渲染一次
  haddle2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    }, 0);
  };

  // 另一种写法
  haddle3 = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        //这个时候知道，状态和dom已经更新完毕。
        console.log(this.state.count);
      }
    );
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        
        console.log(this.state.count);
      }
    );
  };
}

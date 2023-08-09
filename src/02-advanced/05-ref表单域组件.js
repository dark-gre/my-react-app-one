import React, { Component } from "react";

export class Field extends Component {
  //render是一个函数  render(){}--》使用方法

  //change值放到子组件的状态上。
  state = {
    value: "",
  };
  clear() {
    this.setState({
      value: "",
    });
  }
  setValue() {
    this.setState({
      value: "222",
    });
  }
  render() {
    return (
      <div style={{ background: "yellow" }}>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(evt) => {
            this.setState({
              value: evt.target.value,
            });
          }}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default class APP extends Component {
  // 通过ref获取组件对象
  username = React.createRef();
  password = React.createRef();

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field label="用户名" type="text" ref={this.username}></Field>
        <Field label="密码" type="password" ref={this.password}></Field>
        <button
          onClick={() => {
            console.log(
              "账号密码ref的方式",
              this.username.current.state.value,
              this.password.current.state.value
            );
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.username.current.clear();
            this.password.current.clear();
          }}
        >
          取消
        </button>
      </div>
    );
  }
}

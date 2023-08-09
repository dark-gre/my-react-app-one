import React, { Component } from "react";

export class Field extends Component {
  //render是一个函数  render(){}--》使用方法
  render() {
    return (
      <div style={{ background: "yellow" }}>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(evt) => {
            // console.log('evt的target属性',evt.target.value);
            this.props.onChengeEvent(evt.target.value);
          }}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default class APP extends Component {
  state = {
    username: "123",
    password: "qqq",
  };
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Field
          label="用户名"
          type="text"
          onChengeEvent={(val) => {
            console.log("val-获取change事件改变值账户", val);
            this.setState({
              username: val,
            });
          }}
          value={this.state.username}
          //value属性，默认值的设置
        ></Field>
        <Field
          label="密码"
          type="password"
          onChengeEvent={(val) => {
            console.log("val-获取change事件改变值密码", val);
            this.setState({
              password: val,
            });
          }}
          value={this.state.password}
        ></Field>
        <button
          onClick={() => {
            console.log("账号密码", this.state.username, this.state.password);
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.setState({
              username: "",
              password: "",
            });
          }}
        >
          取消
        </button>
      </div>
    );
  }
}

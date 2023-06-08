import React, { Component } from "react";

export default class App extends Component {
  state = {
    username: "121212",
  };
  render() {
    return (
      <div>
        <h1>登录页-受控组件</h1>
        <input
          type="text"
          value={this.state.username}
          onChange={(evt) => {
            console.log("value", evt.target.value);
            this.setState({
              username: evt.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            console.log("登录", this.state.username);
          }}
        >
          登录
        </button>

        <button
          onClick={() => {
            this.setState({
              username: "",
            });
            //重置时，传入空字符串就可以    从上述可以看到，input的value变化都是通过state中的状态来操作的。
          }}
        >
          重置
        </button>
      </div>
    );
  }
}

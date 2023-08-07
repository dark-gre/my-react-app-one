import React, { Component } from "react";

class Navibar extends Component {
  render() {
    return (
      <div style={{ background: "red" }}>
        <button
          onClick={() => {
            // 调用父组件的方法即可，，，实现子传父
            this.props.event();
            console.log("this.props.event");
          }}
        >
          click
        </button>
        <span>navibar</span>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: "yellow", width: "200px" }}>
        <ul>
          <li>122121221</li>
          <li>122121221</li>
          <li>122121221</li>
          <li>122121221</li>
          <li>122121221</li>
          <li>122121221</li>
          <li>122121221</li>
          <li>122121221</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    isShow: true,
  };
  render() {
    return (
      <div>
        <Navibar
          event={() => {
            this.setState({
              isShow: !this.state.isShow,
            });
            console.log("父组件里面的状态");
          }}
        />

        {/* <button
          onClick={() => {
            this.setState({
              isShow: !this.state.isShow,
            });
          }}
        >
          click
        </button> */}
        {this.state.isShow && <Sidebar />}
      </div>
    );
  }
}

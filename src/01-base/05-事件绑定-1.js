import React, { Component } from "react";

export default class APP extends Component {
  render() {
    return (
      <div>
        <input type="text"></input>
        <button
          onClick={() => {
            console.log("click1");
            //onclick里面的事件多的话，尽量不要用这个
          }}
        >
          add1
        </button>
        <button onClick={this.handleonclick}>add2</button>
        <button onClick={this.handleonclick1}>add3</button>
        <button
          onClick={() => {
            this.handleonclick1();
          }}
        >
          add4
        </button>
      </div>
    );
  }

  //这些函数写在了render外面   并且，没有function
  handleonclick() {
    console.log("click2");
  }
  handleonclick1 = () => {
    console.log("click3");
  };
}

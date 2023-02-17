import React, { Component } from "react";

export default class APP extends Component {
  a = 100;
  myref = React.createRef();
  render() {
    return (
      <div>
        {/* <input type="text" ref='username'></input> */}
        <input type="text" ref={this.myref}></input>
        {/* <button
          onClick={() => {
            console.log("click1", this.refs.username.value);
            //onclick里面的事件多的话，尽量不要用这个
          }}
        >
          add1
        </button> */}

        {/* 上面那种方法在严格模式下，会报错，隐藏风险 */}

        <button onClick={this.handleonclick.bind(this)}>add2</button>
        {/* 这个时候存在this指向问题，需要用到bind */}
      </div>
    );
  }

  handleonclick() {
    console.log("click2", this.myref.current.value); //this是undefined
  }
}

import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        Child
        <button onClick={()=>{
        //  this.props.text = '12323232311111' 
        }}>clickChild</button>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    text: "111111",
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              text: "22222",
            });
          }}
        >
          click
        </button>
        app
        {/* 引入子组件 并传递属性  */}
        <Child text={this.state.text} />
      </div>
    );
  }
}

import React, { Component } from "react";
//this相关

export default class APP extends Component {
  //为什么会这么写，都不用变量名吗，
  a = 100;
  render() {
    return (
      <div>
        <input type="text"></input>
        <button
          onClick={() => {
            console.log("click1", this.a);
            //onclick里面的事件多的话，尽量不要用这个
          }}
        >
          add1
        </button>
        <button onClick={this.handleonclick.bind(this)}>add2</button>
        {/* bind可以修改this指向，不会自动执行 */}
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
    console.log("click2", this.a); //this是undefined
  }
  handleonclick1 = () => {
    console.log("click3", this.a);
  };
  handleonclick4 = () => {
    console.log("click3");
  };
}

//.call()方法，改变this，会自动执行
// .apply()方法，改变this，会自动执行
// .bind()方法，改变this，不会自动执行

// var obj = {
//   name: "1",
//   getName() {
//     console.log(this);
//   },
// };

// var obj2 = {
//   name: "2",
//   getName() {
//     console.log(this);
//   },
// };

// obj.getName()
// obj.getName.call(obj2)   //可以自动执行
// obj.getName.apply(obj2)  //可以自动执行
// obj.getName.bind(obj2)// 不会自动执行

import React, { Component } from "react";

//引入css的方法
import "../../css/02-maizuo.css";

import axios from "axios";

export default class Cinema extends Component {
  //构造器函数
  constructor() {
    super();

    this.state = {
      CinemaList: [],
      bakCinemaList: [],
    };
    //这种就是一个变量的写法

    // 请求数据
    // axios
    //   .get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7850265")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7850265",
      method: "GET",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16803376132381744049225729","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data.data.cinemas);
        this.setState({
          CinemaList: res.data.data.cinemas,
          bakCinemaList: res.data.data.cinemas,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 生命周期中进行ajax请求   react中推荐axios请求数据 ，第三方库

  //类组件中的，这种写法，  方法的调用和创建
  //标签中的onInput 实现监听，，，，所以 不用ref实现也行
  // changeInput(event) {   使用箭头函数的原因是，防止this指向的问题
  changeInput = (event) => {
    console.log("input", event.target.value);
    let newlist = this.state.bakCinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );

    this.setState({
      CinemaList: newlist,
    });

    console.log("newlist", newlist);
  };

  render() {
    return (
      <div>
        {/* oninput 主演是为了监听他的值的改变 */}
        <input onInput={this.changeInput} />

        {/* 为什么清空的时候，他就自动渲染的原来的列表 */}
        {this.state.CinemaList.map((item) => (
          <dl key={item.cinemaId}>
            <dt> {item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    );
  }
}

/* 
fillter的过滤方法   filter不影响原数组
 */
// var arr = ["aaa", "abc", "ccc"];
// const timer = arr.filter((item) => item.includes("a"));
// // 整个filter会返回一个结果值
// console.log("timer", timer);

// splice,pop,等会修改原数组`

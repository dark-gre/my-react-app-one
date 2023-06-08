import React, { Component } from "react";

//引入css的方法
// import "../../css/02-maizuo.css";

import axios from "axios";

export default class Cinema extends Component {
  //构造器函数
  constructor() {
    super();

    this.state = {
      CinemaList: [],
      usertext: "",
    };

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
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //   changeInput = (event) => {
  //     console.log("input", event.target.value);
  //     let newlist = this.state.bakCinemaList.filter(
  //       (item) =>
  //         item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
  //         item.address.toUpperCase().includes(event.target.value.toUpperCase())
  //     );

  //     this.setState({
  //       CinemaList: newlist,
  //     });

  //     console.log("newlist", newlist);
  //   };

  render() {
    return (
      <div>
        <input
          onChange={(evt) => {
            console.log("evt", evt.target.value);
            this.setState({
              usertext: evt.target.value,
            });
          }}
        />

        {this.getCinemaList().map((item) => (
          <dl key={item.cinemaId}>
            <dt> {item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    );
  }

  //这里定义一个函数，return出去需要的数组在map
  getCinemaList() {
    return this.state.CinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(this.state.usertext.toUpperCase()) ||
        item.address.toUpperCase().includes(this.state.usertext.toUpperCase())
    );
    //返回一个数组，这个数组就是符合项
  }
}

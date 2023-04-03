import React, { Component } from "react";
import axios from "axios";

export default class Cinema extends Component {
  //构造器函数
  constructor() {
    super();

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 生命周期中进行ajax请求   react中推荐axios请求数据 ，第三方库

  render() {
    return <div>Cinma组件</div>;
  }
}

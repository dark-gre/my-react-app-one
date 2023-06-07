import React, { Component } from "react";
// import "../../../css/02-maizuo.css";
import axios from "axios";
import BetterScroll from "better-scroll";
export default class index extends Component {
  constructor() {
    super();

    this.state = {
      CinemaList: [],
      bakCinemaList: [],
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
          bakCinemaList: res.data.data.cinemas,
        });
        new BetterScroll(".swapper");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  changeInput = (event) => {
    console.log("input", event.target.value);
    let newlist = this.state.bakCinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );
    this.setState(
      {
        CinemaList: newlist,
      },
      () => {
        new BetterScroll(".swapper");
      }
    );
    // new BetterScroll(".swapper");
    //axios上面是在异步中，这个是在函数中，不会直接跟新dom
    console.log("newlist", newlist);
  };

  render() {
    return (
      <div>
        <input onInput={this.changeInput} />
        <div
          className="swapper"
          style={{ height: "500px", background: "yellow", overflow: "hidden" }}
        >
          <div className="content">
            {this.state.CinemaList.map((item) => (
              <dl key={item.cinemaId}>
                <dt> {item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

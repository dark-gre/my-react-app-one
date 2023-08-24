//快捷键，rcc，创建类组件

import React, { Component } from "react";
import axios from "axios";
//原始的引入css的方式，以及下面调用classname的方式，后面就是= 'name'
import "./css/03-communiation.css";

export default class App extends Component {
  constructor() {
    super();
    //constructor是一个方法，这些东西，写在方法里面。
    //为什么创建state的时候，需要使用this.state
    this.state = {
      filmList: [],
      detail: "",
    };
    //接口请求      请求项目内部的public中的静态文件的时候，可以不用携带协议和域名以及端口
    axios.get("/test.json").then((res) => {
      console.log("res", res);
      this.setState({
        filmList: res.data,
      });
    });
  }
  render() {
    console.log("file", this.state.filmList);
    return (
      <div>
        {this.state.filmList.map((item) => (
          //需要注意的点，map组件的时候，这里如果展示的话，是直接return的，不需要带大括号
          //   <Fileitem
          //     key={item.filmId}
          //     name={item.name}
          //     gride={item.gride}
          //     img={item.img}
          //   ></Fileitem>
          // 另一种简便的传递方式
          <Fileitem
            key={item.filmId}
            {...item}
            //传递一个方法，用来当做中间人的方法。父传子的那个方法。
            onEvent={(val) => {
              //   console.log("val", val);
              this.setState({
                detail: val,
              });
            }}
          ></Fileitem>
        ))}
        <FileDetail detail={this.state.detail}></FileDetail>
      </div>
    );
  }
}

class Fileitem extends Component {
  render() {
    console.log("this.props", this.props);
    // const { name, img, gride } = { ...this.props };//解构的有问题，解构赋值

    let { name, img, gride, detail } = this.props;
    return (
      <div
        className="fileitem"
        onClick={() => {
          console.log("detail", detail);
          //在这里点击的时候，调用父组件的方法
          this.props.onEvent(detail);
        }}
      >
        <img src={img} alt=""></img>
        <h4>{name}</h4>
        <div>{gride}</div>
      </div>
    );
  }
}

class FileDetail extends Component {
  render() {
    return <div className="detail">这里是详情：{this.props.detail}</div>;
  }
}

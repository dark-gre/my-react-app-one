//快捷键，rcc，创建类组件

import React, { Component } from "react";
import axios from "axios";
//原始的引入css的方式，以及下面调用classname的方式，后面就是= 'name'
import "./css/03-communiation.css";

//这个const为什么写在外面呀

const GlobalContest = React.createContext();

export default class App extends Component {
  constructor() {
    super();
    //constructor是一个方法，这些东西，写在方法里面。
    //为什么创建state的时候，需要使用this.state
    this.state = {
      filmList: [],
      detail: "",
      info: "1231",//初始值
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
        // 供应商组件
      <GlobalContest.Provider
        value={{
          name: "kkkkk",
          age: 16,
          info: this.state.info,
          onchangeInfo: (val) => {
            this.setState({ info: val });
          },
          //这里，使用初始值，并且调用方法，setState，使得重新渲染。
        }}
      >
        <div>
          {this.state.filmList.map((item) => (
            <Fileitem
              key={item.filmId}
              {...item}
              //传递一个方法，用来当做中间人的方法。父传子的那个方法。
              onEvent={(val) => {
                //   console.log("val", val);
              }}
            ></Fileitem>
          ))}
          <FileDetail></FileDetail>
        </div>
      </GlobalContest.Provider>
    );
  }
}

class Fileitem extends Component {
  render() {
    console.log("this.props", this.props);
    // const { name, img, gride } = { ...this.props };//解构的有问题，解构赋值

    let { name, img, gride, detail } = this.props;
    return (
      //消费者中的返回值需要这样写
      <GlobalContest.Consumer>
        {(value) => {
          console.log("value", value);
          return (
            <div
              className="fileitem"
              onClick={() => {
                console.log("detail", detail);
                //在这里点击的时候，调用父组件的方法
                // value.info = "11121212";
                value.onchangeInfo(detail);
              }}
            >
              <img src={img} alt=""></img>
              <h4>{name}</h4>
              <div>{gride}</div>
            </div>
          );
        }}
      </GlobalContest.Consumer>
    );
  }
}

class FileDetail extends Component {
  render() {
    return (
      <GlobalContest.Consumer>
        {(value) => <div className="detail">detail-{value.info}</div>}
      </GlobalContest.Consumer>
    );
  }
}

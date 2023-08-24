//快捷键，rcc，创建类组件

import React, { Component } from "react";
import axios from "axios";
//原始的引入css的方式，以及下面调用classname的方式，后面就是= 'name'
import "./css/03-communiation.css";

//这部分需要写到最前面，
var bus = {
  list: [],
  //订阅者方法
  subscribe(callback) {
    // 只进行push操作，
    console.log("callback，不在这里调用，这里只 做保存");
    this.list.push(callback);
    //订阅者方法里面不做处理
  },

  //发布者方法
  publish(text) {
    // 这里暂时没有参数
    // 最开始这样处理   遍历list列表参数是callback，判断是否存在，存在直接调用callback，list数组里面的方法都会被调用。
    this.list.forEach((callback) => callback && callback(text));
  },
};

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
          ></Fileitem>
        ))}
        <FileDetail></FileDetail>
      </div>
    );
  }
}

class Fileitem extends Component {
  render() {
    console.log("this.props", this.props);
    let { name, img, gride, detail } = this.props;
    return (
      <div
        className="fileitem"
        onClick={() => {
          console.log("detail", detail);
          //在这里发布，并传递参数
          bus.publish(detail);
        }}
      >
        <img src={img} alt=""></img>
        <h4>{name}</h4>
        <div>{gride}</div>
      </div>
    );
  }
}

//需要首先订阅
class FileDetail extends Component {
  constructor() {
    //这里需要集成到父类的实例上的this和方法。
    super();

    this.state = {
      detail: "",
    };

    //在这里优先订阅
    bus.subscribe((val) => {
      console.log("val", val);
      this.setState({
        detail: val,
      });
    });
  }

  render() {
    //写东西要写完？？？？？？？啊，创建状态了，，，，也修改状态了，没有展示出来？？？？算怎么回事。
    return <div className="detail">这里是详情：{this.state.detail}</div>;
  }
}

import React, { Component } from "react";

export default class APP extends Component {
  myref = React.createRef();

  state = {
    name: "liming",
    list: [
      { id: 1, myText: "qqq" },
      { id: 2, myText: "aaa" },
      { id: 3, myText: "fgg" },
    ],
  };

  render() {
    return (
      <div>
        <h1>欢迎回家</h1>
        <input type="text" ref={this.myref}></input>
        <button
          onClick={() => {
            this.handOnclick();
          }}
        >
          add
        </button>
        <ul>
          {/* {this.state.list.map((item) => {
            return <li key={item.id}>{item.myText}</li>;
          })} */}
          {this.state.list.map((item, index) => (
            <div key={item.id}>
              <li>
                {/* {item.myText} */}

                {/* 富文本片段，用于解析标签什么的 */}
                <div dangerouslySetInnerHTML={{ __html: item.myText }}></div>

                <button
                  onClick={() => {
                    this.handleDelete(index);
                  }}
                >
                  delete
                </button>
              </li>
            </div>
          ))}
        </ul>
        {/* 更好的写法，思路，学习 */}
        {/* {this.state.list.length === 0 ? <div>暂无待办事项</div> : null} */}
        {/* 还有&&  这种方法，逻辑中断，前面成立，才会执行后面的 */}
        {this.state.list.length === 0 && <div>暂无待办事项</div>}
        {/* 以及样式的用法，.hidden{display:none} */}
        {/* <div className={this.state.list.length === 0 ? "" : "hidden"}>
          暂无待办事项
        </div> */}
      </div>
    );
  }

  handOnclick = () => {
    let newList = [...this.state.list];
    newList.push({
      id: Math.random() * 1000000,
      myText: this.myref.current.value, //拿到输入框里面的值，进行push操作
    });
    this.setState({
      list: newList,
    });
    this.myref.current.value = ""; //这里是value值清空，不是整个ref清空
  };
  handleDelete = (id) => {
    // let newList = [...this.state.list];
    // let num = null; //下面是通过map方法，拿到下标，然后，用splice删除当前下标内容，改变原数组
    // newList.map((item, index) => (item.id === id ? (num = index) : null));
    // // console.log(newList.splice(num, 1),newList);
    // newList.splice(num, 1);
    // this.setState({
    //   list: newList,
    // });//这里更新数据，渲染页面

    // let newList = this.state.list.slice()
    let newList = this.state.list.concat();

    newList.splice(id, 1);

    this.setState({
      list: newList,
    });
  };
}

// class Parent {
//   constructor() {
//     this.a = "2";
//     this.b = "10";
//   }
//   c = "11";

//   d = () => {
//     console.log("实例身上的方法");
//   };

//   eat() {
//     console.log("原型上的方法");
//   }
// }

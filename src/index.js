//整个项目的入口js文件
import React from "react";
//旧版本引入react-dom
// import ReactDOM from 'react-dom'
//新版本
import ReactDOM from "react-dom/client";

//引入组件类组件
// import  APP from './01-base/01-class组件'

// 引入函数组件
// import APP from './01-base/02-函数式组件'

//引入嵌套组价
// import APP from './01-base/03-组件的嵌套'

// 引入组价的样式
// import APP from './01-base/04-组件的样式'

//引入事件绑定
// import APP from './01-base/06-事件绑定-2'

//引入ref
// import APP from './01-base/07-ref'

//引入状态
// import APP from './01-base/08-state'

//循环渲染
// import APP from './01-base/09-循环渲染'

//todolist
// import APP from './01-base/10-todolist'

//富文本
// import APP from "./01-base/11-dangetouslysetInnerHtml";

// 卖座选项卡
import APP from './01-base/12-卖座选项卡'

//这里是17.0.2 的写法
// ReactDOM.render( < div > dom元素 < /div>,document.getElementById('root'))
// 新版本18.2写法
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <APP />
  </React.StrictMode>
);

//StrictMode    严格模式下

//APP 根组件

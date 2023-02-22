# React全家桶

React基础		React Hooks		React 路由		Redux		dva+umi 

  

## React基础

### 1、React基础：

#### react特性：

- ​	声明式设计，只关注数据即可
- ​	高效，虚拟dom
- ​	灵活，和ui框架等配合
- ​	jsx，重点语法，（html，css，js）会进行解析
- ​	组件-->复用
- ​	单向数据流--->单向响应的数据流，更为清晰

虚拟dom，使用js对象的方式，创建节点，然后进行对比，最开始的和改变后的进行对比，改变前的虚拟dom。

jsx语法：将html放入javascript中，由babel进行编译

热更新



#### 搭建本地开发环境：

node.js环境  node环境安装完成后，拥有npm命令



全局安装create-react-app  脚手架  （快速创建hello world应用）

npm install -g create-react-app

![image-20230217100125634](C:\Users\codvision\AppData\Roaming\Typora\typora-user-images\image-20230217100125634.png)

创建项目：

create-react-app my-app

若不想全局安装：使用npx

npx  create-react-app my-app。

创建项目的过程：react：react库，react-dom:react-dom库包含一些运行环境，react-script:脚本，及配置

nrm切换镜像源比较方便

![image-20230217102238063](C:\Users\codvision\AppData\Roaming\Typora\typora-user-images\image-20230217102238063.png)



项目创建完成后：区别、新版本的api

![image-20230217104309127](C:\Users\codvision\AppData\Roaming\Typora\typora-user-images\image-20230217104309127.png)



#### 类组件

![image-20230217140527968](C:\Users\codvision\AppData\Roaming\Typora\typora-user-images\image-20230217140527968.png)

#### 函数式组件

![image-20230217140546698](C:\Users\codvision\AppData\Roaming\Typora\typora-user-images\image-20230217140546698.png)



#### 组件的嵌套

组件的样式：行内样式、className样式

`import React, { Component } from "react";
import "./css/01-index.css";

export default class APP extends Component {
  render() {
    //写在这里面了
    let time = "111";

​    let obj = {
​      background: "blue",
​    };
​    return (

      <div>
        {/* 大括号的概念 */}
        <div>这里是:{time}</div>
        <div>{10 > 20 ? "aaa" : "bbbb"}</div>

​        {/* 行内样式 */}

        <div style={{ background: "red" }}> aaaaaaaaaaa</div>
        <div style={{ backgroundColor: "red" }}> aaaaaaaaaaa</div>
​        {/* 大括号里面必须是一个对象 */}
​        <div style={obj}> aaaaaaaaaaa</div>

​        {/* 样式模块化，从外部引入 */}
​        <div className="active">12121111111</div>
​        <div id="a1">33333333333</div>

​        {/* 这个for属性，可以在点击用户名的时候，也能选中输入框 */}
​        <label htmlFor="username">用户名:</label>
​        <input type='text' id="username"></input>
​      </div>
​    );
  }
}`

#### 事件绑定

![image-20230217153953805](C:\Users\codvision\AppData\Roaming\Typora\typora-user-images\image-20230217153953805.png)

事件绑定中，遇到this相关的问题，以及事件绑定的几种形式，修改this的三种方法(.call(),.apply(),.bind())	项目中看代码



时间绑定中的event对象。



#### ref	

引用，绑定在标签上面的话，拿到的就是标签的真实节点。

老的用法，严格模式下存在潜在风险

新用法，const ref = React.createRef();返回的是一个ref对象

![image-20230217175421841](C:\Users\codvision\AppData\Roaming\Typora\typora-user-images\image-20230217175421841.png)

响应式设计

#### 组件的数据挂载方式

改变数据(状态改变)，页面就会更新，

state={

​	age : 1

}

this.steState({

age :2

})

#### 渲染循环key值问题

key=id，提高性能，用于虚拟dom时



#### todolist

有关...扩展运算符问题，深拷贝有局限性，只能拷贝一层，以及.slice().content也是同样能实现一层深拷贝，有局限性

`var a = [1,2,3]`

`let b= a.slice()`

`a.push(4)`

`console.log(b)`

1，key的问题，会引起报错，唯一值

2，浅拷贝，使用变量赋值时，这一步很重要

3，{}map渲染到页面时，是不能渲染对象的，只能是obj.name这种



边学边忘，我是服了，

todolist过程遇到的问题，input标签的ref属性，写成了id={this.myref??????}

应该是ref = {this.myref}

以及方法所在的位置。在render里面还是外面



还有一些数组的方法







# React可能会问的问题：

##### react点击事件和原生的点击事件有什么区别：

react并不会真正的绑定到每一个具体的元素上，而是采用事件代理的模式。

利用控制台的元素中的事件监听来证明。（绑定在了根节点上面）

react的event对象不是浏览器提供的，而是自己内部构建的。同样具有那些

event.stopPropagatoin,evevt.preventDefault方法



onClick事件，后面是否加(),如果onClick={()=>this.handle()}

onClick={this.handle}

我们写的时候，不要加小括号，react会自动加小括号执行他。包括箭头函数和上面的这个写法。

意思是react先执行一下，然后，点击后，执行函数体内的逻辑

#### 条件渲染

有条件的情况下创建，没有条件的情况下移除，做到节点，动态的创建和删除。

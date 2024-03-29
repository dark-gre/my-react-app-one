# React全家桶

React基础		React Hooks		React 路由		Redux		dva+umi 

  

## React基础
react版本官方脚手架是 ^18.2.0版本

npm降低版本后是 ^17.0.2 版本

方法：npm i react-dom@17.0.2 --legacy-peer-deps

npm i react@17.0.2 --legacy-peer-deps 
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
****
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
****
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

##### 渲染循环key值问题

key=id，提高性能，用于虚拟dom时



##### todolist

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


##### 卖座选项卡，
##### 卖座选项卡-数据请求
使用axios第三方进行数据请求
使用方法：
1，get:--> axios.get("url").then((res)=>console.log(res)).catch((err)=>console.log(err))


axios完整的写法:
axios({
  url:'',
  method:'',
  headers:{}
})

#### 授控组件以及非受控组件
23集中提出，input框，使用的是onInput方法监听的输入框的变化，不受react控制，使用的是原生的event属性。所以这个不是授控的。

如果input的value值随着状态的改变而改变，我们能够掌控的时候，就成为了受控组件。（通过状态的方式）

#### setSate的同步异步情况(在react18版本后不存在这个问题)
- 在axios请求后的then中使用setState方法改变状态的时候，log出来的结果是同步更新的，（是因为setState整个都在.then这个异步中）

- 在普通的方法中使用setSate改变状态的时候，log状态不会同步更新。他们是处在同步环境中。这是setState存在的异步问题。

连续进行this.setState()方法改变变量，查看count渲染情况( *** 经典面试题 -- 13-setState同步异步)

setState异步更新状态，更新dom，(宏任务 )

- setState处在同步的逻辑中，异步更新状态，更新真实dom
- setState处在异步的逻辑中，同步更新状态，同步更新真实dom
- setState接收第二个参数，是一个回调函数，状态和dom更新完毕（回调函数）就会被触发。(立即执行函数?)

状态更新完毕，也就意味着真实dom也更新完毕

异步中，setState会进行合并，执行最后一个setState。

官方中解释：setState在更新过程中并不保证是同步的。

#### betterScroll渲染列表的库，、
list在遍历的时候，map箭头函数后面需要把{}去掉才能够正常渲染

npm i yarn  安装yarn包，npm有时候装包的时候出错。

 yarn i better-scroll

 引入后   new 关键字使用

 具体在01base-14文件中

 配合cinema组件进行滚动列表，使用这个，并且验证了之前的useState的异步同步的情况


#### 组件的属性 props

state状态只能自己组件用，其他组件访问不到。当需要其他组件访问这个组件里面的状态时，需要用到props

实现组件复用的时候

属性是父组件传来的


以key=value的形式使用在组件中，通过this.props获取 

<Navibar title="111" leftshow="false" />  一般情况下是传递字符串

如果需要传递boolean或者对象等，用{}包住内容

所以存在验证问题，可以进行验证是否传递的类型正确。

需要引入prop-types 这个模块
import LiuPropTypes from 'prop-types'

类属性  16-props

使用的时候，zujain.propTypes={
  属性：LiuPropTypes.string
  属性：LiuPropTypes.boolean
}


类属性和对象属性的区别

class Test{
  a:1

  static a = 100   静态属性（也就是类属性 ）  和下面Test.a效果一样
}


Test.a = 100    这就是类属性、（可以写成上面的static）的形式

let nest = new Test

nest.a  这个就是类属性

##### 如果这个组件不传 定义过类型的key 会发生什么、

添加默认属性

Navbar.defaultProps = {
  leftshow:true
}

也就是  放在class中

static defaultProps = {
   leftshow:true
}


#### props函数式组件中的属性

函数式组件是从最开始就支持的。    rfc   rcc

函数式组件中是没有this的

所以需要在函数的参数中设置 props  

内部直接打印props即可得到传递过来的参数


函数式组件进行类型检测和类型默认值处理的时候，只能用最原始的方法

Sidebar.propTypes = {}

Sidebar.defaultProps = {}

##### 属性和状态的问题  18-

props父传子  都能够render，是否能够修改、设置子组件的初始值和默认值

子组件内部只能通过setSatet修改状态，父组件没法修改子组件的状态
 
父组件可以设置子组件的属性值。

父传子，子修改父的时候只能是通过父类的方法进行修改。

尽量多些无状态组件，少写有状态组件，


####  表单中的受控组件和非受控组件

广义上：组件的数据渲染是否被调用者传递的props完全控制，来定义受控组件和非受控组件

狭义上就是，表单中的ref和state中的属性的区别

通过使用ref从dom节点中获取表单数据，就是非受控组件

通过state状态值获取和定义表单的value值称为受控组件

非受控组件，中设置默认值不是通过value，而是通过defaultValue属性赋予组件一个初始值，但是不控制后续的更新。

受控组件：通过state状态来操作表单，控制用户的输入过程中表单发生的操作。（state成为唯一的数据源。）  登录、重置功能等都是通过state的状态获取和操作的。

主要是考虑到有子组件，状态改变的时候就会重新渲染进而重新渲染子组件，非受控组件的话是event.current.value改变，不会重新渲染，子组件不会接受到新的value值。受控组件能够更快更方便的进行通信


//34集，父子通信，开始迁移到语雀上面

####  父子通信
父传子通过属性传递
子传父,通过方法,父组件传递一个方法(回调),子组件调用,从而修改父组件的某状态

尽量子组件不要有自己的状态，（会不好控制,），但是孩子有自己的状态该怎么处理(******多个孩子组件，大量使用状态的话，父组件会不好控制   )

（广义上的说法）：react组件的数据渲染是否被调用者传递的props完全控制，控制则为受控组件，否则为非受控组件。（非受控就是控制不了，直接报错了）
多些无状态组件。

Navibar  和  tabbar 都是通过父组件的state控制。如果子组件也有state，或者要改变父组件的state，有时候状态就不会受到控制。

36集，将默认值属性，defaultValue改成属性current，传递


37 表单域组件 父子通信
（如何封装一个表单组件）

写一个登录组件，传入label和type

父组件需要获取子组件的值的时候，需要用到回调函数.

38  ref进行父子通信的方案
username = React.createRef()

属性放到组件上面，拿到的是这个组件对象  current.value
在没有通信的情况下，获取到子组件的数据。

孩子自己管理好自己的状态，剩下的，通过ref，获取方法或者属性，来获取或修改值


### 非父子之间的通信
1，状态提升（中间人模式）
2，发布订阅者模式
3，context状态树传参(方案)

39 状态提升 
多个组件需要共享的状态提升到他门最近的父组件，但是不适合特别深的传递。也会不方便。

就是，如果子组件调用父组件的方法，并传内容，父组件在自身创建一个状态用于存储，然后，在通过props传递给另外一个需要内容的子组件。


40 订阅发布模式。

三种状态，发布者，平台，订阅者，三者并列关系
 
 就是，订阅者的回调函数，注册到平台里。  发布者发布的时候，只是让回调函数在平台中被执行。
 平台中有两个函数，订阅函数，和发布函数

 注意：需要先注册订阅者。


41 context 跨组件传参
 
同一个范围下，有供应商和消费者

所有的供应商和消费者都是由，
const GlobalContext = React.createContext()，创建出来的一个对象。

GlobalContext.Provider属性。
消费者使用的时候，需要用GlobalContext.Custome标签包裹，但是里面是一个对象，对象里面是一个函数，并且需要return   
{
  (value)=>{
    return <div></div>
  }
}



# React可能会问的问题：

#### react点击事件和原生的点击事件有什么区别：

react并不会真正的绑定到每一个具体的元素上，而是采用事件代理的模式。

利用控制台的元素中的事件监听来证明。（绑定在了根节点上面）

react的event对象不是浏览器提供的，而是自己内部构建的。同样具有那些

event.stopPropagatoin,evevt.preventDefault方法



onClick事件，后面是否加(),如果onClick={()=>this.handle()}

onClick={this.handle}
//这里还是不懂

我们写的时候，不要加小括号，react会自动加小括号执行他。包括箭头函数和上面的这个写法。

意思是react先执行一下，然后，点击后，执行函数体内的逻辑

axios请求时，后端配置了access 为*之后  还是会出现跨域问题
1,查看请求头是否有参数没有传，，  也会造成是说跨域的问题，


#### 条件渲染

有条件的情况下创建，没有条件的情况下移除，做到节点，动态的创建和删除。


# 一些快捷键：

- rcc 快速创建类组件
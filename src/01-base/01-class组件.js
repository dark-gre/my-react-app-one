// class Parent {
//     constructor() {
//         this.a = 1;
//     }
//     eat() {
//         console.log('eataa');
//     }
//     drink() {
//         console.log('drinkkkk');
//     }
// }

// class Child extends Parent {
//     run() {
//         console.log('childrun');
//     }
// }

// var test = new Child()
// console.log(test.a);
// test.eat()

//疑问：继承的时候，不需要super()吗 

import React from 'react'

class App extends React.Component{
    //新建App组件 继承 React.Component
    

    //render方法，渲染
    render(){
        return <div>hello-my-class-Component</div>
    }
}

export default App;

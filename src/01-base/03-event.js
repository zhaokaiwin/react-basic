import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                {/* react中没有指令 
                通过ref 拿 value
                */}
                <input type="text" ref="mytext" />
                <button onClick={() => {
                    console.log(111, this.refs.mytext.value)
                }}>add1</button>


                <button onClick={
                    this.handleAdd2.bind(this, 'a', 'b')
                    // 这个是页面加载自动执行一次，第二次就是undefined了,所以再点页面没反应
                    // this.handleAdd2()
                }>add2</button>


                <button onClick={this.handleAdd3}>add3</button>


                <button onClick={() => {
                    this.handleAdd4('c', 'd')
                }}>add4</button>


            </div>
        );
    }
    handleAdd2(a, b) {
        console.log(a, b)
        console.log(222, this.refs.mytext.value)
    }
    handleAdd3 = () => {
        console.log(333, this.refs.mytext.value)
    }
    handleAdd4 = (a, b) => {
        console.log(444, a, b)
    }

}
/**
 * js 改变this指向
 * bind call apply
 * 
 */


/*
var obj1 = {
    name: 'obj1',
    getName() {
        console.log(this.name)
    }
}

var obj2 = {
    name: 'obj2',
    getName() {
        console.log(this.name)
    }
}

obj1.getName() // obj1  谁调用的this 就指向谁
obj1.getName.call(obj2, 'aaa', 'bbb', 'ccc') // obj2  改变this指向 立即执行方法 能传n个参数
obj1.getName.apply(obj2, ['aaa', 'bbb', 'ccc']) // obj2 改变this指向 立即执行方法  只能传数组
obj1.getName.bind(obj2) // 什么都没输出，改变this指向, 手动执行方法 能传n个参数
obj1.getName.bind(obj2, 'aaa', 'bbb', 'ccc')()
*/

class Test {
    // constructor() {
    //     // 没有继承  所以没有 super
    //     this.name = 'kaiwin'
    //     this.age = 25
    // }

    // getName(){
    //     console.log(this.age)
    // }
    name = 'kaiwin'
    age = 25
    getName = () => {
        console.log(this.name)
    }
}

var obj = new Test()
obj.getName()
export default App;
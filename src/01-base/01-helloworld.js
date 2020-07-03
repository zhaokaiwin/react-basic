import React, { Component } from 'react'
// 1. class 类式组件
class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>hello world
                <Child></Child>
                <Child2 />
                <Child3 />
            </div>
        )
    }
}
export default Hello;

class Child extends Component {
    render() {
        return (
            <div>Child1</div>
        )
    }
}


// 2. function 函数式组件, 并不是后面讲的Hooks
// React16.8 之前函数式组件不支持状态
// React16.8 之后React Hooks 支持hooks

function Child2() {
    return (
        <div>
            Child2
        </div>
    )
}

const Child3 = () => <div>Child3</div>

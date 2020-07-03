import React, { Component } from 'react';

const observer = {
    list: [],
    // 订阅
    subscribe(callback) {
        this.list.push(callback)
    },
    // 发布
    dispatch(data) {
        this.list.map(item => (
            // console.log(item)
            item(data)
        ))
    }
}

class Child1 extends Component {
    // 创建成功, dom 挂载完成
    componentDidMount() {
        console.log('componentDidMount', '调用订阅方法');
        observer.subscribe((data) => {
            console.log('child1定义的callback', data);
        })
    }
    render() {
        return (
            <div style={{ background: 'red' }}>
                child1-我是微信用户
            </div>
        )
    }
}
class Child2 extends Component {
    render() {
        return (
            <div style={{ background: "yellow" }}>
                child2-我是公众号发布者
                <button onClick={this.handleClick}>发布</button>
            </div>
        )
    }
    handleClick = () => {
        observer.dispatch('来自child2的问候')
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Child1></Child1>
                <Child2></Child2>
            </div>
        );
    }
}

export default App;
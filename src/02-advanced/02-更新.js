import React, { Component } from 'react'

export default class App extends Component {
    state = {
        name: 'zhangsan'
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 性能调优函数， 新的状态和老的状态
        console.log('shouldComponentUpdate', nextState.name)
        if (this.state.name !== nextState.name) {
            return true
        } else {
            return false
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }
    // 这个生命周期钩子函数在只有一个根组件是永远不执行,必须要构建父子组件

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }
    render() {
        console.log('render');
        return (
            <div>
                <div>{this.state.name}</div>
                <button onClick={() => {
                    this.setState(() => {
                        return {
                            name: 'kaiwin'
                        }
                    })
                }}>click</button>
            </div>
        )
    }
}

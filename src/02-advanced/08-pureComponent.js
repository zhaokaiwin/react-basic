import React, { PureComponent } from 'react'
// shouldComponentUpdate 是手动优化
// PureComponent 是自动的
export default class App extends PureComponent {
    state = {
        name: 'zhangsan'
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     // 性能调优函数， 新的状态和老的状态
    //     console.log('shouldComponentUpdate', nextState.name)
    //     if (this.state.name !== nextState.name) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
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

import React, { Component } from 'react'
// 函数组件就是无状态组件，也叫函数组件(傻瓜组件); 有状态组件就是类组件  介意多用无状态组件  提高代码可维护性  提高性能
class State extends Component {
    constructor() {
        super()
        this.state = {
            name: '萧十一郎',
            count: 1
        }
    }
    componentDidMount() {
        // 修改状态方法一
        // this.setState({
        //     name: '倚天屠龙记'
        // })
        // 修改状态方法二
        // this.state.name = "情深深雨蒙蒙"
        // setTimeout(() => {
        //     this.setState({})
        // }, 2000);
        this.setState((preState, props) => {
            console.log(preState, props);
            // 数据的更新是merge操作(与state中的数据进行合并)
            return {
                count: preState.count + 1
            }
        }, () => {
            console.log(this.state.count);
        })

        setTimeout(() => {
            console.log(this.state.name)
        }, 2000);
        // 只要setState中的数据发生改变，render就会被重新执行
    }
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}
export default State
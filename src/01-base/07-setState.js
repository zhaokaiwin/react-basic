import React, { Component } from 'react';


export default class App extends Component {
    state = {
        name: 'zhangsan',
        count: 1
    }
    render() {
        return (
            <div>
                <div>{this.state.name}
                    <button onClick={this.handleClick}>点击</button>
                    <button onClick={this.handleClick1}>click</button>
                    <div>{this.state.count}
                        <button onClick={this.handleAdd1}>add1</button>
                        <button onClick={this.handleAdd2}>add2</button>
                    </div>
                </div>
            </div>
        );
    }
    handleClick = () => {
        // 第二个参数是 更新到dom树才会执行
        this.setState({
            name: 'kaiwin'
        }, () => {
            console.log("第二个参数", this.state.name)
        })
        console.log(this.state.name)
    }
    handleClick1 = () => {
        // 接受一个回调函数作为参数
        this.setState(() => {
            return {
                name: 'kaiwin'
            }
        })
    }
    handleAdd1 = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            this.setState({
                count: this.state.count + 1
            })
        })

    }
    handleAdd2 = () => {
        //  pre 代表上一次的状态值
        this.setState((pre) => {
            return {
                count: pre.count + 1
            }
        })
        // this.setState((pre) => {
        //     return {
        //         count: pre.count + 1
        //     }
        // })
    }
}

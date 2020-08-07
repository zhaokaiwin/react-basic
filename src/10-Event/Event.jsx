import React, { Component } from 'react'
class Event extends Component {
    constructor() {
        super()
        this.handleClick6 = this.handleClick6.bind(this, 6)
    }
    go(e) {
        console.log(e.target)
        // 阻止默认行为  阻止a标签的跳转
        e.preventDefault()
    }
    state = {
        value: 'Kaiwin'
    }
    handleChange(e) {
        // console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }
    handleClick1(val) {
        console.log(1, val)
    }
    handleClick2 = (val) => {
        console.log(2, val)
    }
    handleClick3(val) {
        console.log(3, val)
    }
    handleClick4(val) {
        console.log(4, val)
    }
    handleClick5(val) {
        console.log(5, val)
    }
    handleClick6(val) {
        console.log(6, val)
    }
    render() {
        return (
            <>
                <a href="http://www.baidu.com" onClick={this.go}>link</a>
                <div>
                    {this.state.value}
                    <input type="text" onChange={this.handleChange.bind(this)} defaultValue={this.state.value} />
                    {/* 函数传递参数一 */}
                    <button onClick={this.handleClick1.bind(this, 1)}>click1</button>
                    {/* 行内箭头函数 */}
                    <button onClick={() => {
                        this.handleClick2(2)
                    }}>click2</button>
                    <button onClick={() => {
                        this.handleClick3(3)
                    }}>click3</button>
                    <button onClick={() => {
                        return this.handleClick4(4)
                    }}>click4</button>
                    <button onClick={() => (
                        this.handleClick5(5)
                    )}>click5</button>
                    <button onClick={this.handleClick6}>click6</button>
                </div>
            </>
        )
    }
}
export default Event
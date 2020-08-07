import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        value: ''
    }
    // 方式二 在类的内部定义
    static defaultProps = {
        title: '请输入城市'
    }
    public
    render() {
        return (
            <div>
                <input type="text" placeholder={this.props.title + this.props.children} value={this.state.value} onChange={this.handleChange.bind(this)} /><button onClick={this.handleClick.bind(this)}>add</button>
            </div>
        )
    }
    handleClick() {
        console.log(this.state.value)
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

}
// 在类的外面定义   方式一
// Form.defaultProps = {
//     title: '请输入城市'
// }
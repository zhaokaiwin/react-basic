import React, { Component } from 'react'
class User extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        xing: '',
        ming: ''
    }
    handleChange(e) {
        let name = e.target.name
        // console.log(123);
        this.setState({
            [name]: e.target.value,
        })
    }
    render() {
        return (
            <>
                <div>姓：<input type="text" name="xing" defaultValue={this.state.xing} onChange={this.handleChange} /></div>
                <div>名：<input type="text" name="ming" defaultValue={this.state.ming} onChange={this.handleChange} /></div>
                <div>嘉兴·欢迎您：{this.state.xing + this.state.ming}</div>
            </>

        )
    }
}
export default User
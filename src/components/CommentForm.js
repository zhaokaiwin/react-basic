import React, { Component } from 'react'

export default class CommentForm extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    state = {
        value: ''
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleClick}>提交</button>
            </div>
        )
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleClick = () => {
        this.props.onReceive(this.state.value)
    }
}

import React, { Component } from 'react'
class Button extends Component {
    handleClick() {
        this.props.click()
    }
    render() {
        return (
            <button onClick={this.handleClick.bind(this)} style={{ width: '30px' }}>{this.props.children}</button>
        )
    }
}

export default Button
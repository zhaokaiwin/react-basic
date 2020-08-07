import React, { Component } from 'react'
class Button extends Component {
    hanleAdd() {
        // console.log(222)
        this.props.change()
    }
    render() {
        return (
            <>
                <button onClick={() => {
                    return this.hanleAdd()
                }}> {this.props.children}
                </button>
            </>
        )
    }
}
export default Button
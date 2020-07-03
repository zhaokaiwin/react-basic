import React, { Component } from 'react'

class Test extends Component {
    state = {
        number: 0
    }
    render() {
        return (
            <div>{this.state.number}
                <button onClick={this.handleClick}>click</button>
            </div>

        )
    }
    handleClick = () => {
        this.setState((pre) => {
            return {
                state: pre.number++
            }
        })
    }
}
export default Test
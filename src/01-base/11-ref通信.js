import React, { Component } from 'react'

class Input extends Component {
    state = {
        mytext: ''
    }
    render() {
        return (
            <div>
                <div>other code</div>
                <input type="text" value={this.state.mytext} onChange={(ev) => {
                    this.setState({
                        mytext: ev.target.value
                    })
                }} />
            </div>
        )
    }
    reset() {
        this.setState({
            mytext: ''
        })
    }
}

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Input ref="myinput"></Input>
                <button onClick={this.handleClick}>add</button>
            </div >
        )
    }
    handleClick = () => {
        // 拿input 中的值
        console.log(this.refs.myinput.state.mytext);
        // 清空input 中的值
        this.refs.myinput.reset()
    }
}

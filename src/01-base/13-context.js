import React, { Component } from 'react'
const GlobalContext = React.createContext()
class Child1 extends Component {
    render() {
        return <GlobalContext.Consumer>
            {
                child1 => (
                    <div>
                        child1--{child1.sms}--{child1.text}
                    </div>
                )
            }
        </GlobalContext.Consumer>
    }
}

class Child2 extends Component {
    state = {
        child2: '来着child2的问候'
    }
    render() {
        return <GlobalContext.Consumer>
            {
                child2 => (
                    <div>
                        child2--{child2.call}
                        <button onClick={this.handleClick.bind(this, child2)}>child2通信</button>
                    </div>
                )
            }
        </GlobalContext.Consumer>
    }
    handleClick = (child2) => {
        child2.changeState(this.state.child2)
    }
}
class Child3 extends Component {
    render() {
        return (
            <div>
                child3
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        text: '私人服务'
    }
    changeState = (data) => {
        this.setState(() => {
            return { text: data }
        })
    }
    render() {
        return (
            <GlobalContext.Provider value={
                {
                    sms: '短信服务',
                    call: '电话服务',
                    text: this.state.text,
                    changeState: this.changeState
                }
            }>
                <div>
                    <Child1></Child1>
                    <Child2></Child2>
                    <Child3></Child3>
                </div>
            </GlobalContext.Provider>
        )
    }
}

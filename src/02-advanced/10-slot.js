import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>
                {this.props.children[0]}
                childs
                {/* children 是固定写法 */}
                {this.props.children}
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Child>
                    <div>111</div>
                    <div>222</div>
                </Child>
            </div>
        )
    }
}

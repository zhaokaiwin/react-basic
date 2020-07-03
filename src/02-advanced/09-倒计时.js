import React, { Component } from 'react'

export default class componentName extends Component {
    state = {
        number: 100
    }
    render() {
        return (
            <div>
                {this.state.number}
            </div>
        )
    }

    //PureComponent 此时不可以用 
    //  shouldComponentUpdate 内部 一直在对比 (shallow equal  return true) 

    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                return {
                    number: this.state.number-1
                }
            })
        }, 500);
    }

}

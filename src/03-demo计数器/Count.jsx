import React, { Component, Fragment } from 'react'
import Number from './Number'
export default class Count extends Component {
    state = {
        title: 0,
        name: 'Kaiwin'
    }
    render() {
        return (
            <Fragment>
                <button onClick={this.hanldeClick.bind(this)}>+</button>
                <Number title={this.state.title} name={this.state.name} error={true}></Number>
                <button onClick={() => {
                    this.setState({
                        title: this.state.title - 1
                    })

                }}>-</button>
            </Fragment>
        )
    }
    hanldeClick() {
        this.setState({
            title: this.state.title + 1
        })
    }
}

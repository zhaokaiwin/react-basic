import React, { Component, Fragment } from 'react'

export default class Item extends Component {
    render() {
        return (
            <Fragment>
                <li>
                    <span>陕西</span><button>delete</button>
                </li>
            </Fragment>
        )
    }
}

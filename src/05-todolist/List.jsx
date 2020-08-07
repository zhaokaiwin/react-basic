import React, { Component } from 'react'
import Item from './Item'
export default class List extends Component {
    state = {
        datalist: [123, 456, 789]
    }
    render() {
        return (
            <div>
                <Item>
                    {
                        this.state.datalist.map((item) => {
                            return <div key="item">{item}</div>
                        })
                    }
                </Item>
            </div>
        )
    }
}

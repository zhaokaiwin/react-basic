import React, { Component } from 'react'
import From from './Form'
import List from './List'
export default class TodoList extends Component {
    render() {
        return (
            <>
                <From>的名称</From>
                <List></List>
            </>
        )
    }
}

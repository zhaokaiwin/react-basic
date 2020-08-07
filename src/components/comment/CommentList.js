import React, { Component } from 'react'
import CommentItem from './CommentItem'

export default class CommentList extends Component {
    constructor() {
        super()
        this.state = {
            dataList: []
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.dataList.map(function (item) {
                        return (
                            <div>{item}</div>
                        )
                    })
                }
            </div>
        )
    }
    componentWillReceiveProps(props) {
        this.setState({
            dataList: [
                ...this.state.dataList,
                props.keywords
            ]
        }, () => {
            // console.log(this.state.dataList)
        })
    }
}

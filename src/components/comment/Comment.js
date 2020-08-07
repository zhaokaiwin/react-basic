import React, { Component, Fragment } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

export default class Comment extends Component {
    constructor() {
        super()
        this.handleReceive = this.handleReceive.bind(this)
    }
    state = {
        keywords: ''
    }
    render() {
        return (
            <Fragment>
                <CommentForm onReceive={this.handleReceive}></CommentForm>
                <CommentList keywords={this.state.keywords}></CommentList>
            </Fragment>
        )
    }
    handleReceive(keywords) {
        this.setState({
            keywords
        })
    }
}

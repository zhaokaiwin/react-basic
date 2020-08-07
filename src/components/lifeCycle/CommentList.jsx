import React, { Fragment, PureComponent } from 'react';
import CommentItem from './CommentItem'
export default class CommentList extends PureComponent {
    state = {
        title: ''
    }
    constructor(props) {
        super(props)
        console.log("constructor");
        this.handleChangeTitle = (params) => {
            this.setState({
                title: 'hello'
            })
        }
    }
    componentWillMount() {
        // 做初始化的操作
        // console.log(this);
        console.log("componentWillMount");

    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.title === this.state.title ? false : true

    // }
    componentWillUpdate() {
        console.log("componentWillUpdate")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    render() {
        // 渲染组件
        console.log("render");
        return <Fragment>
            <CommentItem title={this.state.title}></CommentItem>
            <button onClick={this.handleChangeTitle}>更新Title</button>
        </Fragment>;
    }
    componentDidMount() {
        // ajax调用
        console.log("componentDidMount");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
}

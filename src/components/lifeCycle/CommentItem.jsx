import React, { PureComponent } from 'react'

export default class CommentItem extends PureComponent {
    state = { x: 0 }
    constructor(props) {
        super(props)
        console.log("child constructor");

    }
    // componentWillMount() {
    //     console.log("child componentWillMount")
    // }

    // 根据变化返回一个新的状态，会merge 当前组件的state
    static getDerivedStateFromProps(props, state) {
        // props 与 state 挂钩使用 不可以this.setState来进行修改
        console.log("child getDerivedStateFromProps")
        if (props.title) {
            return {
                x: props.title
            }
        } else {
            return null
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return 999;
    }
    // 这个钩子在props发生变化的时候触发，mounting阶段不触发
    // componentWillReceiveProps(nextProps) {
    //     console.log("child componentWillReceiveProps");
    //     // console.log(nextProps);

    // }
    // 性能优化的钩子
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("child shouldComponentUpdate")
    //     console.log(this.props, nextProps);
    //     return this.props.title === nextProps.title ? false : true
    // }
    // componentWillUpdate() {
    //     console.log("child componentWillUpdate")
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("child componentDidUpdate", snapshot)
    }
    render() {
        console.log("child render");

        return (
            <div>
                item{this.state.x}
            </div>
        )
    }
    componentDidMount() {
        console.log("child componentDidMount");

    }
}

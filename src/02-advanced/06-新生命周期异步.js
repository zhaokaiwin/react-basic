import React, { Component } from 'react'
class List extends Component {

    // 旧生命周期的写法
    // componentDidMount() {
    //     document.title = this.props.id
    //     console.log('ajax', this.props.id);
    // }
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     document.title = nextProps.id
    //     console.log('发送ajax', nextProps.id)
    // }

    static getDerivedStateFromProps(nextProps) {
        // 这个生命周期中不能发送ajax 请求，只能获取到最新状态
        console.log('拿到最新的状态', nextProps.id)
        return null
    }

    state = {
        myid: 'kaiwin'
    }
    // 在这个生命周期发送ajax请求
    componentDidUpdate() {
        console.log('发送ajax', this.state.myid)
    }
    render() {
        return (
            <div>
                {this.props.id}--{this.state.myid}
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        id: 0
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState(() => {
                            return {
                                id: 0
                            }
                        })
                    }}>衣服</li>
                    <li onClick={() => {
                        this.setState(() => {
                            return {
                                id: 1
                            }
                        })
                    }}>裤子</li>
                    <li onClick={() => {
                        this.setState(() => {
                            return {
                                id: 2
                            }
                        })
                    }}>鞋子</li>
                </ul>
                <List id={this.state.id}></List>
            </div>
        )
    }
}

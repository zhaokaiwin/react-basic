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


    state = {
        myid: 'kaiwin'
    }
    // 第一次就会调用
    // 加了state 不用new 直接类名. 就可以访问
    static getDerivedStateFromProps(nextProps, state) {
        // state 是老状态
        document.title = nextProps.id
        console.log('ajax', nextProps.id, state)
        return {
            myid: '/maizuo/' + nextProps.id
        }
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

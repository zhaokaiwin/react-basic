import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname: 'kaiwin'
    }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate', "记录的状态不可信,隔着didupdate时间间隔太远");
    // }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate', '获取滚动条的位置');
        return 1000

    }
    componentDidUpdate(prevProps, prevState, data) {
        console.log('componentDidUpdate', data);
    }
    render() {
        console.log('render');
        return (
            <div>
                {this.state.myname}
                <button onClick={() => {
                    this.setState(() => {
                        return {
                            myname: 'xiaoming'
                        }
                    })
                }}>click</button>
            </div>
        )
    }
}

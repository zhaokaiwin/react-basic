import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div style={
                {
                    background: 'hotpink'
                }
            }>
                子组件-NavBar <button onClick={() => {
                    this.props.kaiwin()
                }}>click</button>
            </div>
        )
    }
}

class SideBar extends Component {
    render() {
        return (
            <div style={
                {
                    background: 'skyblue'
                }
            }>子组件-SideBar
                <ul>
                    <li>111</li>
                    <li>222</li>
                    <li>333</li>
                </ul>
            </div>
        )
    }
}

class App extends Component {
    state = {
        isShow: true
    }
    render() {
        return (
            <div style={{
                background: 'pink'
            }}>
                {/* {
                    <button onClick={() => {
                        this.setState({
                            isShow: !this.state.isShow
                        })
                    }}>
                        click
                    </button>
                } */}
                我是父组件
                <NavBar kaiwin={() => {
                    // console.log('App');
                    this.setState({
                        isShow: !this.state.isShow
                    })
                }}></NavBar>
                {
                    this.state.isShow ? <SideBar></SideBar> : null
                }
            </div>
        );
    }
}

export default App;
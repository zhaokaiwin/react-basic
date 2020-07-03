import React, { Component } from 'react'
class NavBar extends Component {
    render() {
        return (
            <div style={{ background: 'hotpink' }}>
                NavBar
                <button onClick={this.handleClick.bind(this)}>click</button>
            </div>
        )
    }
    handleClick = () => {
        // console.log(this.props.kaiwinEven);
        this.props.kaiwinEven()
    }
}

class SideBar extends Component {
    render() {
        return (
            <div style={{ background: 'skyblue' }}>
                <ul>
                    SideBar
                    <li>111</li>
                    <li>222</li>
                    <li>333</li>
                </ul>
            </div>
        )
    }
    componentWillUnmount() {
        console.log('componentWillUnmount','clearInterval','window.onscroll = null');
    }

}
export default class App extends Component {
    state = {
        isShow: true
    }
    render() {
        return (
            <div style={{ background: 'pink' }}>
                <NavBar kaiwinEven={() => {
                    this.setState({
                        isShow: !this.state.isShow
                    })
                }}></NavBar>
                {
                    this.state.isShow ? <SideBar></SideBar> : null
                }
            </div>
        )
    }
}

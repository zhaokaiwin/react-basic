import React, { Component } from 'react';

class Child extends Component {
    // 子父组件中 不管是否改变值 是否父子属性传值, 只要是调用this.setState 就会执行
    componentDidMount() {
        console.log('获取ajax数据componentDidMount', this.props.name);
    }

    componentWillReceiveProps(nextProps) {
        console.log('获取ajax数据componentWillReceiveProps', nextProps.name);
    }
    render() {
        return (
            <div>
                child
            </div>
        )
    }
}
class App extends Component {
    state = {
        name: 'zhangsan'
    }

    render() {
        return (
            <div>
                {this.state.name}
                <button onClick={() => {
                    this.setState(() => {
                        return {
                            name: 'kaiwin'
                        }
                    })
                }}>click</button>
                <Child name={this.state.name}></Child>
            </div>
        );
    }
}

export default App;
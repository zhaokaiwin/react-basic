import React, { Component } from 'react';
import './css/index.css'
class App extends Component {
    state = {
        ishidden: true,
        create: false
    }
    render() {
        return (
            <div>
                {/* 动态显示和隐藏 */}
                <div>
                    <button onClick={this.handleClick}>show/hide</button>
                    <div className={this.state.ishidden ? 'hide' : ''}>123456</div>

                </div>
                {/* 动态创建和删除 */}
                <div>
                    <button onClick={() => {
                        this.setState({
                            create: !this.state.create
                        })
                    }}>create/delete</button>
                    {
                        this.state.create ? <div>111</div> : <div>222</div>
                    }
                </div>
            </div>
        );
    }
    handleClick = () => {
        this.setState({
            ishidden: !this.state.ishidden
        })
    }
}

export default App;
import React, { Component } from 'react'
import './css/index.css'
class App extends Component {
    render() {
        var color = {
            background: 'skyblue',
            fontSize: '30px'
        }
        return (
            <div style={{ background: "pink" }}>{10 + 20}
                {10 > 20 ? 'aaa' : 'bbb'}
                <div style={color}>60</div>
                <div className='kaiwin'>80</div>
            </div>
        )
    }
}
export default App;
import React, { Component } from 'react'
class App extends Component {
    state = {
        name: 'zhangsan',
        datalist: [1, 2, 3, 4, 5]
    }

    render() {
        // var newList = this.state.datalist.map(item =>
        //     <li>{item}</li>
        // )
        return (
            <div>
                <ul>
                    <li>{this.state.name}</li>
                    <button onClick={() => {
                        this.handleClick()
                    }}>click</button>
                    {
                        this.state.datalist.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    handleClick = () => {
        console.log(123);
        this.setState({
            name: 'kaiwin',
        })
    }
}
export default App;


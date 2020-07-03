import React, { Component } from 'react';

class App extends Component {
    state = {
        datalist: [1, 2, 3],
        text: ''
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={
                    (ev) => {
                        // console.log(ev.target.value)
                        this.setState({
                            text: ev.target.value
                        })
                    }
                } />
                <button onClick={() => {
                    this.handleClick()
                }}>click</button>
                <ul>
                    {
                        this.state.datalist.map((item, index) => {

                            return <li key={index}>{item}--{index}<button onClick={() => this.handleDelete(index)}>delete</button></li>
                        })
                    }
                </ul>
            </div>
        );
    }
    handleClick = () => {
        this.setState({
            datalist: [...this.state.datalist, this.state.text],
            text: ''
        })

    }
    handleDelete(index) {
        var newArr = [...this.state.datalist]
        newArr.splice(index, 1)
        this.setState({
            datalist: newArr
        })
    }
}
export default App;
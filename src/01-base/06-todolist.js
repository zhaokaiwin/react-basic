import React, { Component } from 'react'

export default class App extends Component {
    state = {
        datalist: [1, 2, 3],
        mytext: ''
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.mytext} onChange={(ev) => {
                    this.setState({
                        mytext: ev.target.value
                    })
                }} />
                <button onClick={this.handleClick}>click</button>
                <ul>
                    {
                        this.state.datalist.map((item, index) => {
                            return <li key={index}>{item}
                                <button onClick={this.handleDelete.bind(this, index)}>delete</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    handleClick = () => {
        var newlist = [...this.state.datalist]
        newlist.push(this.state.mytext)
        this.setState({
            datalist: newlist,
            mytext: ''
        })

    }
    handleDelete(index) {
        var newlist = [...this.state.datalist]
        newlist.splice(index, 1)
        this.setState({
            datalist: newlist
        })
    }
}

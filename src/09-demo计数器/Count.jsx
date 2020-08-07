import React, { Component } from 'react'
import Button from './Button'
import Content from './Content'
class Count extends Component {
    state = {
        count: 1,
        datalist: [1, 2, 3, 4, 5]
    }
    componentDidMount() {
        this.state.datalist.map(function (item) {
            return (
                <div>{item}</div>
            )
        })
    }

    handleChange1 = (state) => {
        // console.log(state);
        this.setState((preState, props) => {
            if (state === 'increase') {
                return {
                    count: preState.count + 1
                }
            } else {
                return {
                    count: preState.count - 1
                }
            }
        })

        // console.log(111);

    }
    render() {
        return (
            <React.Fragment>
                <Button change={() => {
                    return this.handleChange1('increase')
                }}>
                    {/* <button onClick={this.handleAdd.bind(this)}>+</button> */}
                    {/* <button onClick={this.handleChange.bind(this, 'add')}>+</button> */}
                    +
                </Button>
                <Content count={this.state.count}></Content>
                <Button change={() => {
                    return this.handleChange1('reduce')
                }}>
                    {/* <button onClick={() => {this.handleSub()}}>-</button> */}
                    {/* <button onClick={this.handleChange.bind(this, 'sub')}>-</button> */}
                    -
                </Button>
            </React.Fragment>
        )
    }
    handleChange(state) {
        // console.log(123, state);
        // if (state === 'add') {
        //     this.setState({
        //         count: this.state.count + 1
        //     })

        // } else {
        //     this.setState({
        //         count: this.state.count - 1
        //     })
        // }
        this.setState((preState, props) => {
            console.log(state, preState);
            if (state === 'add') {
                return {
                    count: preState.count + 1
                }
            } else {
                return {
                    count: preState.count - 1
                }
            }

        }, () => { })

    }
    // handleAdd() {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
    // handleSub() {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }
}

export default Count
import React, { Component } from 'react'
import Button from './Button'
import Content from './Content'
class Count extends Component {
    state = {
        number: 0,
    }
    render() {
        return (
            <>
                {/* <Button click={this.handleClick.bind(this, 'increase')}>+</Button> */}
                {/* <Button click={() => { this.handleAdd() }}>+</Button> */}
                <Button click={() => {
                    this.clickHandle('increase')
                }}>+</Button>
                <Content number={this.state.number}></Content>
                {/* <Button click={this.handleClick.bind(this, 'decrease')}>-</Button> */}
                {/* <Button click={this.handleSub.bind(this)}>-</Button> */}
                {/* <Button click={() => {
                    this.setState({
                        number: this.state.number - 1
                    })
                    if (this.state.number === 0) {
                        this.setState({
                            number: 0
                        })
                    }

                }}>-</Button> */}

                <Button click={() => {
                    this.clickHandle('decrease')
                }}>-</Button>
                <button onClick={() => {
                    this.clickMe(1)
                }}>点我0</button>


                <button onClick={() => {
                    this.clickMe1(2)
                }}>点我1</button>
                <button onClick={
                    this.clickMe2.bind(this, 3)
                }>点我2</button>
            </>
        )
    }
    clickMe(a) {
        console.log(a, 1);
    }
    clickMe1 = (b) => {
        console.log(b, 2);
    }
    clickMe2(c) {
        console.log(c, 3);
    }
    clickHandle = (props) => {
        this.setState((preState) => {
            if (props === 'increase') {
                return {
                    number: this.state.number + 1
                }
            } else {
                if (preState.number === 0) {
                    return {
                        number: 0
                    }
                }
                return {
                    number: this.state.number - 1
                }

            }

        })

    }
    // clickHandle(props) {
    //     // console.log(props);
    //     if (props === 'increase') {
    //         this.setState({
    //             number: this.state.number + 1
    //         })
    //     } else {
    //         this.setState({
    //             number: this.state.number - 1
    //         })
    //         if (this.state.number === 0) {
    //             this.setState({
    //                 number: 0
    //             })

    //         }
    //     }
    // }
    handleAdd() {
        this.setState({
            number: this.state.number + 1
        })

    }
    handleSub() {
        this.setState({
            number: this.state.number - 1

        })
        if (this.state.number === 0) {
            this.setState({
                number: 0
            })
        }
    }
    handleClick(props) {
        this.setState((preState) => {
            console.log(props, preState);
            if (props === 'increase') {
                return {
                    number: this.state.number + 1
                }
            } else {
                return {
                    number: this.state.number - 1

                }
            }
        })
    }
}
export default Count
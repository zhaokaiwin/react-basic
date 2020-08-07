import React, { Component, Fragment } from 'react'
import Exp1 from './Exp1'
import Exp2 from './Exp2'
class Hero extends Component {
    state = {
        datalist: [123, 456, 789],
        condition: true
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.condition ? <Exp1></Exp1> : <Exp2></Exp2>
                }

                {
                    this.state.datalist.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })
                }
            </Fragment>
        )
    }
}
export default Hero
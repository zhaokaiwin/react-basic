import React, { Fragment } from 'react'
import MyPropTypes from 'prop-types'
import classNames from 'classnames/bind'
import common from './css/test.module.css'
import test from './css/test.css'
let cx = classNames.bind(test)

class Number extends React.Component {
    render() {
        let names = cx({
            success: true,
            error: this.props.error
        })
        return (
            <Fragment>
                <div className={common.cake}>cake</div>
                <div>{this.props.title}</div>
                <div className={names}>{this.props.name}</div>
            </Fragment>
        )
    }

}
Number.propTypes = {
    title: MyPropTypes.number.isRequired
}
export default Number
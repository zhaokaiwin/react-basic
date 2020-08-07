import React from 'react'
import MyPropTypes from 'prop-types'
export default function Count(props) {
    return (
        <h3>{props.count}</h3>
    )
}
Count.propTypes = {
    count: MyPropTypes.number.isRequired
}
import React, { Component } from 'react'
import myPropTypes from 'prop-types'
export default class Product extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                <div>{this.props.city}</div>
            </div>
        )
    }
}

Product.propTypes = {
    name: myPropTypes.number.isRequired,
    city: myPropTypes.arrayOf(myPropTypes.string).isRequired,
    message: function (props, propsName) {
        // console.log(arguments)
        if (!/kaiwin/.test(props[propsName])) {
            return new Error('网络错误')
        }
        // console.log(props, propsName)
    },
    customArrayProp: myPropTypes.arrayOf(function (propValue, key, componentName, location, propFullName) {
        if (!/北京/.test(propValue[key])) {
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    }).isRequired
}


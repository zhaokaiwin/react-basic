import React, { Fragment } from 'react'
import { Container } from './Search_style'
import classNames from 'classnames/bind'
import style from './style.css'
import common from './search.module.css'
import './family.css'
let cx = classNames.bind(style)
class Search extends React.Component {
    render() {
        let name = cx({
            foo: true,
            bar: false
        })
        return (
            <Fragment>
                <Container color="red">
                    Kaiwin
                    <div className="popular" >is popular</div>
                </Container>
                <div className={name}>My English name is Kaiwin</div>
                <div className={common.old}>I am 25 years old</div>
                <div className="family">parents</div>
                <div style={{ fontSize: '20px' }}>sister</div>
            </Fragment>
        )
    }
}
export default Search
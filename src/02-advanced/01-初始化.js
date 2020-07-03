import React, { Component } from 'react'
import axios from 'axios'
// 16.2 版本之前 - 老的生命周期
// 16.2 版本之后 - 删了之前三个生命周期 换成了 新的两个生命周期
export default class App extends Component {
    state = {
        datalist: []
    }
    componentWillMount() {
        // console.log('componentWillMount', "ajax,setInterval");
    }

    componentDidMount() {
        // console.log('componentDidMount', "ajax, 绑定事件,setInterval");
        // fetch('/json/test.json').then(res => res.json()).then(res => {
        //     console.log(res.data.films);
        // })

        axios.get('/json/maoyan.json').then(res => {
            console.log(res.data.coming);
            this.setState(() => ({
                datalist: res.data.coming
            }))
        })
    }

    render() {
        // console.log('render');
        return (
            <div>
                {
                    this.state.datalist.map(item => {
                        return (
                            <div key={item.id}>
                                <li style={{ listStyle: 'none' }}>{item.nm}</li>
                                <img src={item.img.replace('w.h', '80.100')} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

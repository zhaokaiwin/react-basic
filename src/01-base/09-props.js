import React, { Component } from 'react';
import MyPropTypes from 'prop-types' // 提供验证数据类型的方法
class Navbar extends Component {
    static propTypes = {
        myshow: MyPropTypes.bool
    } // 属性验证


    // 默认验证
    static defaultProps = {
        myshow: true
    }
    constructor(props) {
        super(props);
        this.state = {
            mytitle: ''
        }
    }

    render() {
        return (
            <div>
                <div>{this.props.mytitle}
                    {
                        this.props.myshow ? <button>home</button> : null
                    }
                </div>
            </div>
        )
    }
}


// Navbar.propTypes = {
//     myshow: MyPropTypes.bool
// }

class App extends Component {
    render() {
        var obj = {
            mytitle: "测试",
            myshow: true
        }
        return (
            <div>
                <Navbar mytitle="home" myshow={false}></Navbar>
                <Navbar mytitle="list" ></Navbar>
                <Navbar mytitle="shopcar" ></Navbar>
                <Navbar {...obj}></Navbar>
            </div>
        );
    }
}

export default App;

// ES6
/**
 * class Test {
    a = "对象属性"
}

// 类属性

Test.a = "类属性"
console.log(Test.a); // 类属性

var obj = new Test()
console.log(obj.a); // 对象属性
console.log(new Test().a); // 对象属性
 */


//  ES7
// class Test {
//     static a = "类属性"
//     a = "对象属性"
// }
// console.log(Test.a); // 类属性
// console.log(new Test().a); // 对象属性
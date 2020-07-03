# react生命周期各个阶段 老版本生命周期钩子函数
### 初始化阶段
## * componentWillMount: render之前最后一次修改状态的机会**
## * render: 只能访问this.props和 this.state, 不允许修改状态和DOM输出
## * componentDidMount: 成功render并渲染完成真是DOM之后触发，可以修改DOM

### 运行中阶段
## * componentWillReceiveProps:父组件修改组件触发
## * shouldComponentUpdate: 返回false会阻止render调用
## * componentWillUpdate: 不能修改属性和状态
## * render: 只能访问this.props和this.state, 不允许修改状态和DOM输出
## * componentDidUpdate: 可以修改DOM

### 销毁阶段
## * componentWillUnmount: 在删除组件之前进行清理操作，比如计时器和事件监听器

## PureComponent 会帮你比较新的props 跟 旧的 props， 新的state和老的state(值相等，或者对象含有相同的属性，且属性值相等), 决定shouldComponentUpdate返回true 或者 false 从而决定要不要呼叫render function

# 注意: 如果你的 state 或者 props 永远都会变，那么PureComponent 并不会比较快，因为 shallowEqual也需要花时间
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01-base/01-helloworld';
// import App from './01-base/02-css';
// import App from './01-base/03-event'
// import App from './01-base/04-map'
// import App from './01-base/05-todolist'
// import App from './01-base/06-todolist'
// import App from './01-base/07-setState'
// import App from './01-base/08-隐藏显示'
// import App from './01-base/09-props'
// import App from './01-base/10-子传父'
// import App from './01-base/11-ref通信'
// import App from './01-base/12-订阅发布'
// import App from './01-base/13-context'
// import App from './02-advanced/01-初始化'
// import App from './02-advanced/02-更新'
// import App from './02-advanced/03-更新-父子'
// import App from './02-advanced/04-销毁'
// import App from './02-advanced/05-新生命周期同步'
// import App from './02-advanced/06-新生命周期异步'
// import App from './02-advanced/07-getSnapshotBeforeUpdate'
// import App from './02-advanced/08-pureComponent'
// import App from './02-advanced/09-倒计时'
// import App from './02-advanced/10-slot'
// import App from './02-advanced/test'
// import App from './components/Comment'
import App from './App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);
// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
// }, 2000);
serviceWorker.unregister();

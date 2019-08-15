import React from 'react';
import logo from './logo.svg';
import './App.css';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
//引入antd样式
import 'antd/dist/antd.css';
import Menu1 from './components/menus/menu';
import Pro1 from './components/pro1'
function App() {
  return (
    <div className="App">
      <Pro1 />
      <Menu1 />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

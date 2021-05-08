import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dumb from './dumb';
import Home from './home';

function App() {
  const ary = [1,2,1]
  const name = "robot"
  const like = ['eat','playgame',11,322]
  return (
    <BrowserRouter>
    {/* 渲染与该地址匹配的第一个子节点 <Route> */}
    <Switch>
      <Route path='/' component={Home}></Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './pages/admin';
import testPage from './pages/testPage';
import './App.css';
import FromPage from './pages/formPage';
import SecondPage from './pages/secondPage';
// import NoAuth from './pages/no-auth/no-auth';

const App = () => {
  return (
    <BrowserRouter>
      {/* 渲染与该地址匹配的第一个子节点 <Route> */}
      <Switch>
        {/* <Route path='/noauth' component={NoAuth}></Route> */} 
        <Route exact path="/test" component={testPage} />
        <Route path='/form' component={FromPage} />
        <Route path='/second' component={SecondPage} />
        <Route path='/' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

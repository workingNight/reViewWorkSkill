import React from 'react';
import { BrowserRouter, Route, Switch,Redirect  } from 'react-router-dom';
import Home from '../src/pages/home';
import './App.css';
import TestPage from './pages/testpage';

function App() {
  return (
    <BrowserRouter>
       <Switch>
        <Route path='/testPage' component={TestPage} />
        <Route path='/home' component={Home} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

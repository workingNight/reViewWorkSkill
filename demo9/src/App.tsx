import React from 'react';
import { BrowserRouter, Route, Switch,Redirect  } from 'react-router-dom';
import Home from '../src/pages/home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <Switch>
        {/* <Route path='/quizRank' component={QuizRank} /> */}
        <Route path='/home' component={Home} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

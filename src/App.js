import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //아래 컴포넌트를 사용하기 위한 import

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;

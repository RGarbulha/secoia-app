import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Students from './components/StudentComponents/Students';
import Student from './components/StudentComponents/Student';

function Home() {

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
    </div>
  )
}


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/students/" component={Students} />
          <Route exact path="/students/:page" component={Students} />
          <Route exact path="/student/:id" component={Student} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;

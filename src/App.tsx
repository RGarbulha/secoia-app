import React from 'react';
import './App.css';
import Posts from './components/PostComponent/Posts';
import Post from './components/PostComponent/Post';
import Students from './components/StudentComponents/Students';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {

  return (
    <div>
      <h1>POSTS</h1>
      <hr />
      <Posts />
    </div>
  )
}


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/students" component={Students} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;

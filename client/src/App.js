import React from 'react'
import ReactDOM from 'react-dom'


import './App.css';
import Waves from './Assets/waves.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home/>
          </Route>
          <Route exact path="/contact" component={Contact}>
            <Contact/>
          </Route>
        </Switch>
      </Router>
      <div>
        <img className="waves" src={Waves}></img>
      </div>
    </div>
  );
}


export default App;

import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Credentials from './components/credentials'
import NavBar from './components/NavBar'
import FunStuff from './components/funstuff'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={NavBar} />
        <Route path="/auth" component={Credentials} />
        <Route path="/funstuff" component={FunStuff} />
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Thrifts from './components/Thrifts'
import Find from './components/Find'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/thrift" component={Thrifts}/>
            <Route exact path="/finds" component={Find}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

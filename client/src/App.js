import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import AllUsersView from './components/AllUsersView'
import UserView from './components/UserView'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/users" component={AllUsersView}/>
            <Route exact path="/users/:userId" component={UserView}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

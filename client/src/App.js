import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            {/* <Route exact path="/users" component={UserList}/> */}
            {/* <Route exact path="/users/:userId" component={SingleUser}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

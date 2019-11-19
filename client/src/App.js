import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Thrifts from './components/Thrifts'
import LookingFor from './components/LookingFor'
import LookingForList from './components/LookingForList'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/thrift" component={Thrifts}/>
            <Route exact path="/lookingfor" component={LookingFor}/>
            <Route exact path="/lookingforlist" component={LookingForList}/>
   
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Administrateur from './components/Administrateur';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './fire';
import Notes from './components/Notes';
import Questions from './components/Questions';
import Add from './components/Add';
import Login from './users/Login';
import Register from './users/Register';
import Theme from './users/Theme';
import './users/Theme.css';
import Home from './users/Home';



class App extends Component {
  state = {
  authenticated: false,
};
componentDidMount() {
  firebase.auth().onAuthStateChanged((authenticated) => {
    authenticated
      ? this.setState(() => ({
          authenticated: true,
        }))
      : this.setState(() => ({
          authenticated: false,
        }));
  });
}
  render() {

  return (
    <Router>
      <Switch>
      <div className="App">
        <Route  path="/" exact component={Home} />
        <Route  path="/Administrateur" component={Administrateur} />
        <Route  path="/Notes" component={Notes} />
        <Route  path="/Questions" component={Questions} />
        <Route  path="/Add" component={Add} />
        <Route  path="/Login" component={Login} />
        <Route  path="/Register" component={Register} />
        <Route  path="/Theme" component={Theme} />

      </div>
    </Switch>
</Router>

  );
}
}

export default App;

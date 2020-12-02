import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import fire from '../fire';

function logOutUser() {
  firebase.auth().signOut().then(() =>{
    localStorage.removeItem('user')
    window.location = "/Login"
  });
}


class Theme extends Component {

    constructor(props){
    super(props);
    this.state = {
      user:null,
    }
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user: null});
      }
    })
  }

render () {
  return (
    <div className="Theme">
      <div className="navbar-header navbar container-fluid ">
      <nav className="navbar" id="navbar-theme">
        <a className="navbar-brand font-weight-bold text-white" href="#">Quiz-App</a>
        <button className="btn my-2 my-sm-0" type="logout" name="logout" id="btn-logout" onClick={logOutUser}>Deconnexion</button>
      </nav>
    </div>
      <div className="container col-lg-10" id="search-group">
        <div className="input-group input-group-lg mr-4" id="input-search">
          <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-filter-left bg-warning mr-4" id="icon-search" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>
          <input type="search" className="form-control ml-4" aria-label="Sizing example input" placeholder="Recherche " aria-describedby="inputGroup-sizing-lg"/>
          <img src="avatar.png" height="55" className="bg-warning ml-4 rounded-circle"/>
        </div>
      </div>
      <div className="title">
        <h5 className="display-4 font-weight-bold" id="theme-title">Theme</h5>
      </div>
      <div className="card-block col-lg-6 ">
      <div className="card-deck">
        <div className="card" id="card-content">
            <img src="gprojet.svg"/>
            <p>Gestion de projet</p>
        </div>
        <div className="card" id="card-content">
            <img src="design.svg"/>
              <p>Graphique Design</p>
        </div>
      </div>
      <div className="card-deck">
        <div className="card" id="card-content">
            <img src="programming.svg"/>
              <p>Developpement Web/Mobile</p>
        </div>
        <div className="card" id="card-content">
          <img src="digital.svg"/>
            <p>Marketing Digital</p>
        </div>
      </div>
      <div className="btn-group">
        <button className="btn" id="btn-Articles">Articles</button>
      </div>
    </div>

    </div>
  );
 }
}

export default Theme;

import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import fire from '../fire';

function signup(name, email, password, passwordConfirm){
  firebase.auth().createUserWithEmailAndPassword(email, password).then(user => console.log('Inscription valide'))
  .catch(error => console.log(error));
}

class Register extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if(this.state.password !== this.state.passwordConfirm){

      console.log('passwordConfirm false')

    }
    this.setState({ error: '' });
    try {
      await signup(this.state.name, this.state.email, this.state.password, this.state.passwordConfirm);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }


render () {
  return (
    <div className="Register">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6 col-md-6 d-none d-md-block image-container" id="img-content"><img src="homebody.jpeg"/></div>
          <div className="col-lg-6 col-md-6 form-container" id="form-content">
            <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center" id="form-box">
              <div className="heading mb-4">
                <h1>S'inscription</h1>
              </div>
              <form className="form" autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="form-input" id="input-form">
                  <input type="text" placeholder="Nom complet:" name="name" onChange={this.handleChange} value={this.state.name}/>
                </div>
                <div className="form-input" id="input-form">
                  <input type="email" placeholder="Adresse email:" name="email" onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div className="form-input" id="input-form">
                  <input type="password" placeholder="Mot de passe:" name="password" onChange={this.handleChange} value={this.state.password}/>
                </div>
                <div className="form-input" id="input-form">
                  <input type="password" placeholder="Confirmer votre mot de passe:" name="passwordConfirm" onChange={this.handleChange} value={this.state.passwordConfirm}/>
                </div>
                <div className="text-center mb-4">
                  <a href="#" className="text-white font-weight-bold mr-2">Vous avez un compte ?</a>
                  <a href="#" className="text-white font-weight-bold" id="bd"><Link to="/Login">Connetez-vous !</Link></a>
                </div>
                <button type="btn" className="btn btn-default text-center font-weight-bold" id="valid-btn">Valider</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
 }
}
 export default Register;

import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Login() {

  return (
    <div className="Login">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6 col-md-6 d-none d-md-block image-container" id="img-content"><img src="homebody.jpeg"/></div>
          <div className="col-lg-6 col-md-6 form-container" id="form-content">
            <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center" id="form-box">
              <div className="heading mb-4">
                <h1>Connexion</h1>
              </div>
              <form>
                <div className="form-input" id="input-form">
                  <input type="email" placeholder="Email:" name="email"/>
                </div>
                <div className="form-input" id="input-form">
                  <input type="password" placeholder="Mot de passe:" name="password"/>
                </div>
                <div className="row mb-2">
                  <div className="col-6 d-flex">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="btn-save"/>
                      <label className="custom-control-label text-white" for="btn-save">Enregistrer</label>
                    </div>
                  </div>
                  <div className="col-6 text-right mb-4">
                    <a className="forget-link text-white font-weight-bold" href="#">Mot de passe oublie ?</a>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <a href="#" className="text-white font-weight-bold mr-2">Pas de compte ?</a>
                  <a href="#" className="text-white font-weight-bold" id="bd">Inscrivez-vous !</a>
                </div>
                <button type="btn" className="btn btn-default text-center text-white font-weight-bold" id="valid-btn">Valider</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

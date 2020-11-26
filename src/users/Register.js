import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Register() {
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
              <form>
                <div className="form-input" id="input-form">
                  <input type="text" placeholder="Nom complet:" name="name"/>
                </div>
                <div className="form-input" id="input-form">
                  <input type="email" placeholder="Adresse email:" name="email"/>
                </div>
                <div className="form-input" id="input-form">
                  <input type="password" placeholder="Mot de passe:" name="password"/>
                </div>
                <div className="form-input" id="input-form">
                  <input type="password" placeholder="Confirmer votre mot de passe:" name="confirmation"/>
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
 export default Register;

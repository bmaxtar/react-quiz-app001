import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="Home">
      <div className="image">
        <img src="homebody.jpeg" id="livre"></img>
      </div>
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-md-9 col-lg-8 mx-auto">
                      <form>
                      <div className="images">
                        <img src="home.jpeg" id="draw"></img>
                      </div>
                        <div class="form-label-group">
                        <div><button class="btn btn-lg btn- btn-block btn-login text-uppercase font-weight mb-2" id="se-connecter" type="submit"><Link to="/Login">SE CONNECTER</Link></button>
                          <label for="inputPassword"></label></div>
                        </div>
                        <div>
                        <button class="btn btn-lg btn-block btn-login text-uppercase font-weight- mb-2" id="sinscrire" type="submit"><Link to="/Register">S'INSCRIRE</Link></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
 export default Home;

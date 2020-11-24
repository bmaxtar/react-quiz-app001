import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';



function Notes() {

  return (
    <div className="Notes">
          <nav className="navbar navbar-expand-lg bg-light navbar-light" id="navb">
              <a className="navbar-brand" href="#"><img src="bakelilogo.png" height="80" alt=""/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="men.png" height="50"/></a>
                    </li>
                      <li className="nav-item active">
                          <a className="nav-link" href="#">Administrateur<i><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                          </svg></i>
                        </a>
                      </li>
                  </ul>
              </div>
          </nav>
          <div className="d-flex" id="sidebar-blok">
        <div className="background" id="sidebar-container">
          <div className="font-weight-bold">
            <div className="menu" id="menu">
              <a href="#" className="d-block p-3"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-dash-square mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg><Link to="/Administrateur">Dashboard</Link></a>
                <a href="#"className="d-block p-3"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-card-checklist mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path fill-rule="evenodd" d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                </svg><Link to="/Notes">Liste des notes</Link></a>
              <a href="#"className="d-block p-3"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-card-checklist mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path fill-rule="evenodd" d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                </svg><Link to="/Questions">Liste des questions</Link></a>
              <a href="#"className="d-block p-3"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg><Link to="/Add">Ajouter</Link></a>
              <a href="#"className="d-block p-3"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-circle mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                </svg><Link to="/Add">Bakeliste</Link></a>
            </div>
          </div>
          <button className="btn ml-4 " id="btn-deconnexion"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-box-arrow-right mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>Deconnexion</button>
        </div>
        <div className="container mt-4 ml-2">
          <div className="row ">
            <div className="col-lg-12 mt-4">
              <a className="text-bold ml-4" id="text-le"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-card-list mr-2"  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                  <circle cx="3.5" cy="5.5" r=".5"/>
                  <circle cx="3.5" cy="8" r=".5"/>
                  <circle cx="3.5" cy="10.5" r=".5"/>
                </svg>Liste des notes</a>
                <div className="card rounded-0">
                <div className="card-body">
                  <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Prenom</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Adresse email</th>
                      <th scope="col">Telephone</th>
                      <th scope="col">Note</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr>
                      <th scope="row">Aladji Demba</th>
                      <td>Sall</td>
                      <td>Aladji@test.com</td>
                      <td>776858844</td>
                      <td><span className="text-danger font-weight-bold">06/10</span></td>
                    </tr>
                  </tbody>
                </table>
                <div className="card rounded-0">
                  <div className="card-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Themes</th>
                          <th scope="col">Questions</th>
                          <th scope="col">Reponses</th>
                          <th scope="col">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Theme-1</th>
                          <td>6 Questions</td>
                          <td>6 Reponses</td>
                          <td><span>05/21</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Theme-2</th>
                          <td>6 Questions</td>
                          <td>6 Reponses</td>
                          <td><span>05/21</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Theme-3</th>
                          <td>6 Questions</td>
                          <td>6 Reponses</td>
                          <td><span>05/21</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Theme-4</th>
                          <td>6 Questions</td>
                          <td>6 Reponses</td>
                          <td><span>05/21</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Theme-5</th>
                          <td>6 Questions</td>
                          <td>6 Reponses</td>
                          <td><span>05/21</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Theme-6</th>
                          <td>6 Questions</td>
                          <td>6 Reponses</td>
                          <td><span>05/21</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 my-5">
        <div className="card rounded-0" id="card-mini-etudiants">
          <div className="card-header bg-white">
            <a className="text-secondary"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-people-fill mr-4"  xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>Liste des etudiants</a>
          </div>
          <div className="card-body bg-white">
            <table class="table table-borderless">
              <tbody className="text-secondary">
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

    </div>
  );
}

export default Notes;

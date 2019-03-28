import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Pizza from './Patisserie/pizza'
import Acceuil from './Patisserie/acceuil';
class App extends Component {
  render() {
    return (
      <div className="container">
      <Router>
        
        <nav  id="header"class="navbar navbar-expand-lg navbar">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
              <Link to="/acceuil"><a class="nav-link" id="link" href="#">ACCUEIL <span class="sr-only">(current)</span></a></Link>
              </li>
              
              <li class="nav-item">
              <Link to="/pizza"> <a class="nav-link " id="link" href="#" >
          PIZZERIA
              </a></Link>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#" tabindex="-1" id="link">CONTACTS</a>
      </li>
    </ul>
    
  </div>
      </nav>
      <Route path="//" component={Acceuil} />
      <Route path="/acceuil/" component={Acceuil} />
      <Route path="/pizza/" component={Pizza} />
      <footer id="copyright">
  <div id="header" class="container">
    <div class="row">
      <div class="col-md-4">
        <ul class="info list-inline quicklinks pull-left">
          
            <li>© Sandy</li>
          
        </ul>
      </div>
      <div class="col-md-4">
        <ul class="list-inline footer-social-buttons text-center">
          
            <li><a target="_blank" rel="noopener noreferrer" aria-label="social-media" href="https://www.twitter.com/rwieruch"><i className="fa fa-twitter"></i></a></li>
          
            <li><a target="_blank" rel="noopener noreferrer" aria-label="social-media" href="https://www.github.com/rwieruch"><i className="fa fa-github"></i></a></li>
          
            <li><a target="_blank" rel="noopener noreferrer" aria-label="social-media" href="https://www.linkedin.com/in/robin-wieruch-971933a6"><i className="fa fa-linkedin"></i></a></li>
          
            <li><a target="_blank" rel="noopener noreferrer" aria-label="social-media" href="https://www.producthunt.com/@rwieruch"><i className="fa fa-product-hunt"></i></a></li>
          
            <li><a target="_blank" rel="noopener noreferrer" aria-label="social-media" href="https://www.patreon.com/rwieruch"><i className="fa fa-paw"></i></a></li>
          
            <li><a target="_blank" rel="noopener noreferrer" aria-label="social-media" href="https://www.paypal.me/rwieruch"><i className="fa fa-paypal"></i></a></li>
          
            <li><a target="_blank" rel="noopener noreferrer" aria-label="social-media" href="https://www.facebook.com/rwieruch"><i className="fa fa-facebook"></i></a></li>
          
            <li><a target="_blank" rel="noopener noreferrer" aria-label="social-media" href="https://www.instagram.com/rwieruch/"><i className="fa fa-instagram"></i></a></li>
          
        </ul>
      </div>
      <div class="col-md-4">
        <ul class="info list-inline quicklinks pull-right">
          
            <li><a aria-label="quicklinks" href="/legal">Toujour vouloir plus de collation</a></li>
          
        </ul>
      </div>
    </div>
  </div>
</footer>
      </Router>
      </div>
      
    );
  }
}

export default App;

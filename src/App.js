import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/notFound';
import MovieDetails from './components/movieDetails';
import Login from './components/login';

function App() {
  return (
    <div>
      <header className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customers">Customers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rentals">Rentals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

      </header>
      {/* <Movies/> */}
      <div className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} /> 
          <Route path="/login" component={Login} /> 
          {/* <Route path="/movies" render={(props) => <Movies {...props}/>}></Route> */}
          <Route path="/movies" component={Movies}/>
          {/* <Route path="/movies/:id?" component={Movies}/> */}
          <Route path="/customers" component={Customers}/>
          <Route path="/rentals" component={Rentals}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect from="/all-movies" to="/movies"/>
          <Route path="/" exact component={Movies}/>
          <Redirect to="not-found"/>
        </Switch>
      </div> 
    </div>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logIn from './logIn'
import signUp from './signUp'
import logOut from './logOut'

const NavigationBar = () => {
  return (
    <Router>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">MMDB (Mudale Movies Database)</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to={"/signUp"}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            <li><Link to={"/logIn"}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            <li><Link to={"/logOut"}><span className="glyphicon glyphicon-log-out"></span> Log Out</Link></li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path='/signUp' component={signUp} />
        <Route path="/logIn" component={logIn} />
        <Route path="/logOut" component={logOut} />
      </Switch>
    </Router>
  )
}

export { NavigationBar as default }
import React from 'react'

const NavigationBar = () => {
    return (
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
            <li><a href="/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            <li><a href="/"><span className="glyphicon glyphicon-log-out"></span> Log Out</a></li>
          </ul>
        </div>
      </nav>
    )
}

export { NavigationBar as default }
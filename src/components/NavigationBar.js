import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import logIn from './logIn'
import signUp from './signUp'
// import logOut from './logOut'
import about from './about'
import { startLogin, logOut } from '../database/fireBase/auth'
import searchResultContext from '../context/searchResultContext'
// import { startLogin } from '../actions/auth'

// export const Login = ({ startLogin }) => (
//     <div>
//         <button onClick={startLogin}>Login</button>
//     </div>
// );



// const mapStateToProps = (/*state*/ dispatch) => ({
//     startLogin: () => dispatch(startLogin())
//     // return {
//     //     expenses: selectExpenses(state.expenses, state.filters)
//     // };
// });

// export default connect(undefined, mapStateToProps)(Login);


const NavigationBar = () => {
  const searchResult = useContext(searchResultContext)
  console.log("zzzzzz", searchResult)
  return (
    <Router>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">MMDB (Mudale Movies Database)</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/"}>User:  {searchResult.user.name}</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {/* <li><Link to={"/signUp"}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li> */}
            {/* <li><Link to={"/logIn"}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li> */}
            {<li><Link to={"/"} onClick={() => (startLogin().then((name) => searchResult.dispatchUser(name)))} ><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>}
            <li><Link to={"/"} onClick={() => { logOut(); searchResult.dispatchUser({ name: "anonymous" }) }}><span className="glyphicon glyphicon-log-out"></span> Log Out</Link></li>
          </ul>
        </div>
      </nav>

      <Switch>
        {/* <Route exact path='/signUp' component={signUp} /> */}
        {/* <Route path="/logIn" component={logIn} /> */}
        {/* <Route path="/logOut" component={logOut} /> */}
        <Route path="/about" component={about} />
      </Switch>
    </Router>
  )
}

export { NavigationBar as default }
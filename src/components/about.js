import React, { Component } from "react";
import '../styles/loginStyle.css'

export default class About extends Component {
    render() {
        // const submitForm = (e) => {
        //     e.preventDefault();
        //     console.log(e.target.email.value, e.target.password.value)
        // }

        return (
            // <div className="auth-wrapper">
            //     <div className="auth-inner">
            <div className="about">
                <h1>MMDB - Mudale Movies Database</h1>
                <p>This is a website that made as exercise with less than 1 week....</p>
                <p>The site is pretty boring and not much interesting, but have Firebase database and some react
                 components...</p>
                <p>My favorite thing about the site is to actually search the database for funny names
                movies...</p>
                <p> Did u know that we have movie named "boobs"?? actually more than 1... </p>
                <p>Go ahead and have some fun yourself....</p>
            </div >
        );
    }
}
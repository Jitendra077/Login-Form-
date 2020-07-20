import React, { Component } from 'react';
import "../src/FormStyle.css"
import {  BrowserRouter as Router, Link, Route } from "react-router-dom";
import Welcome from "./welcome";


export default class Login extends Component {

    state = {
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        loggedIn: false
    }
    validate = () => {

        let emailError = "";
        let passwordError = "";

        if (!this.state.email.includes(".com")) {
            emailError = "Invalid Email Address";
        }
        if (this.state.password.length <= 0) {
            passwordError = "Errror "
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError })
            return false
        }
        return true
    }


    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.handleChange(event)
        const isvalid = this.validate();
        if (isvalid) {
            //clear form 
            this.setState(this.state);
        }
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    render() {
        return (

            <div className="body">
                <div className="box">
                    <form onSubmit={this.submitForm} className="form-container">
                        <div className="input-box active ">
                            <label className="input-label">Email:</label>
                            <input type="email" className="input"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                            />
                        </div >
                        <p style={{ color: "red" }}>
                            {this.state.emailError}
                        </p>

                        <div className="input-box active">
                            <label className="input-label">Password:</label>
                            <input type="Password" className="input"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                            />
                        </div>
                        <p style={{ color: "red" }}>
                            {this.state.passwordError}
                        </p>

                        <div className="button-box">
                            <Router>
                                <button type="button" className="btn btn-primary" onClick={this.submitForm}><Link to="/welcome">  Login </Link> </button>
                                <Route path = "/welcome"exact component = {Welcome}target="_blank"  />
                               
                            </Router>
                        </div>
                        <br />
                    </form>
                </div>
            </div>
        )
    }
}

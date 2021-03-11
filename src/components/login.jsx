import React, { Component } from 'react';
import From from './common/form';
import Joi from 'joi-browser';
import { logIn } from '../services/authService';
import {toast} from 'react-toastify';

class Login extends From {
    state = { 
        data: {
            email: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        email: Joi.string().email().required().label("Email adresse"),
        password: Joi.string().required().label("Adgangskode")
    }

    doSubmit = async () => {
        const {data} = this.state;
        try {
            await logIn(data.email, data.password);
            window.location = "/";
        } catch (ex) {
            if(ex.response && ex.response.status == 400) {
                const errors = {...this.state.errors};
                errors.email = ex.response.data;
                this.setState({errors});
            } else if (ex.response) {
                toast.warning(ex.response.data);
            } else {
                toast.warning(ex);
            }
        }
    }

    render() { 
        return (  
            <main className="container">
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email", "Email adresse", "form-group")}
                    {this.renderInput("password", "Adgangskode", "form-group", "password")}
                    <button type="submit" className="btn btn-primary loginButton">Login</button>
                </form>
            </main>
        );
    }
}
 
export default Login;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { Route, Switch, withRouter } from 'react-router-dom';

const responseGoogle = (response) => {
    console.log(response);
    this.props.history.push('/graphcontainer');
}


class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInput =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state.username)
    }

    logout = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <form className="log-in" onSubmit={this.handleSubmit}>
                <h1>Relocater</h1>
                <input
                placeholder = 'username'
                type = 'text'
                name = 'username'
                value = {this.state.username}
                onChange = {this.handleInput}
                 />
                 <br/>
                 <input
                    type = 'text'
                    name = 'password'
                    placeholder = 'password'
                    onChange = {this.handleInput}
                 />
                 <br/>

                 <GoogleLogin
                    clientId="488901735794-ja73cuju18dd1j49s25366elmgn39jpf.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
                <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                    >
                </GoogleLogout>
            </form>
        )
    }
}


export default Login
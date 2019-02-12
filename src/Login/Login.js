import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

let hist;
let parentFunc;

const responseGoogle = async (response) => {
    console.log(response);
    console.log(hist);
    // hist.push('/home');
    const user = {
        username: response.profileObj.givenName, 
        email: response.profileObj.email,
        googleId: response.profileObj.googleId
    }
    console.log(user);

    try {
        const loginResponse = await fetch ('http://localhost:9000/users', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!loginResponse.ok) {
            throw Error()
        }

        const parsedResponse = await loginResponse.json();

        //pushes the link to your browser history
        //this references the routes you defined in App.js
        if(parsedResponse.data === 'login successful') {
            // hist.push('/home');
            parentFunc();
        }

        console.log(parsedResponse, ' this is login response from express api');
        
    } catch (err) {
        console.log(err);
    }
}

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    componentDidMount = () => {
        hist = this.props.history;
        parentFunc = this.props.handleLogin;
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
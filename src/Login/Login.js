import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Signup from '../Login/Signup'

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
        const loginResponse = await fetch('http://localhost:9000/users', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!loginResponse.ok) {
            throw Error()
        }

        const parsedResponse = await loginResponse.json();

        //pushes the link to your browser history
        //this references the routes you defined in App.js
        if (parsedResponse.data === 'login successful') {
            hist.push('/home');
        }

        console.log(parsedResponse, ' this is login response from express api');
        parentFunc();
    } catch (err) {
        console.log(err);
    }
}

class Login extends Component {
    state = {
        email: '',
        name: '',
        password: '',
    }

    componentDidMount = () => {
        hist = this.props.history;
        parentFunc = this.props.handleLogin;
    }

    handleInput = (e) => {
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
            <div>
                <div className='log-in'>
                    <form className="log-in" onSubmit={this.handleSubmit}>
                        <h1>Relocater</h1>
                        <input
                            placeholder='email'
                            type='text'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleInput}
                            required
                        />
                        <br />
                        <input
                            type='text'
                            name='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.handleInput}
                            required
                        />
                        <br />
                        <button type='submit'>log in</button> <br />
                    </form>
                </div>

                <div className="sign-up">
                    <Signup />
                </div>

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
            </div>


        )
    }
}


export default Login
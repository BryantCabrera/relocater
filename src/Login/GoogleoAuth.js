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
            // hist.push('/home');
            parentFunc();
        }

        console.log(parsedResponse, ' this is login response from express api');

    } catch (err) {
        console.log(err);
    }
}

class GoogleoAuth extends Component {

    componentDidMount = () => {
        hist = this.props.history;
        parentFunc = this.props.handleLogin;
    }
    
    render(){
        return(
            <div>
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


export default GoogleoAuth
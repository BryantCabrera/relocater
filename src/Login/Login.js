import React, { Component } from 'react';
import Signup from '../Login/Signup'
import GoogleoAuth from './GoogleoAuth'

class Login extends Component {
    state = {
        email: '',
        name: '',
        password: '',
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

                <GoogleoAuth />
                
            </div>


        )
    }
}


export default Login
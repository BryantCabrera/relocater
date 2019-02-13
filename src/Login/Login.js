import React, { Component } from 'react';
import Signup from '../Login/Signup';
import GoogleoAuth from './GoogleoAuth';
import OAuth from '../OAuth'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    state = {
        email:'',
        password: ''        
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/users/login', this.state)
        .then(res => res.data.isLoggedIn ? this.props.history.push('/home') : this.props.history.push('/'))
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
                        <button type='submit'>Login</button> <br />
                    </form>
                </div>

                <div className="sign-up">
                    <Signup handleLogin={this.props.handleLogin}/>
                </div>

                <OAuth socket={this.props.socket} provider={'google'}/>
                
            </div>
        )
    }
}


export default withRouter(Login)
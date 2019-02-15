import React, { Component } from 'react';
import OAuth from '../OAuth/OAuth';
import { withRouter, NavLink } from 'react-router-dom';
import './Login-Signup.css';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.doLoginUser(this.state);
    }

    render() {
        return (
            <div className='FormCenter'>
                <img id="relocater-logo" src="../../../imgs/relocater.png" alt="Relocater Logo" title="Relocater Logo"></img>
                <div className='PageSwitcher'>
                    <NavLink exact to="/Login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                    <NavLink exact to="/Signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>
                <div>
                    <form className="FormFields" onSubmit={this.handleSubmit}>
                        <div className='FormField'>
                            <input
                                placeholder='email'
                                type='text'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleInput}
                                className="FormField__Input"
                                required
                            />
                        </div>
                        <div className='FormField'>
                            <input
                                type='text'
                                name='password'
                                placeholder='password'
                                value={this.state.password}
                                onChange={this.handleInput}
                                className="FormField__Input"
                                required
                            />
                        </div>
                        <div className='Formfield'>
                            <button type='submit' className="FormField__Button">Login</button>
                        </div>
                    </form>
                </div>
                
                <OAuth socket={this.props.socket} provider={'google'} />
            </div>
        )
    }
}

export default withRouter(Login);
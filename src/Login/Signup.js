import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login-Signup.css'



class SignUp extends Component {
    state = {
        email: '',
        password: '',
        name: '',
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.handleChange(this.state.email)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>name</label> */}
                    <input 
                    type='text'
                    placeholder='Enter your name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <br/>
                    {/* <label>email</label> */}
                    <input 
                    type='email' 
                    placeholder='Enter your email' 
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    <br/>
                    {/* <label>password</label> */}
                    <input 
                    type='password'
                    placeholder='Enter your Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                    <br/>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp
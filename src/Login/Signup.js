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
            <div className='FormCenter'>
                <form onSubmit={this.handleSubmit} className='FormFields'>
                    <div className='FormField'>
                    <label className='FormField__Label'>Enter your name</label>
                    <input 
                    type='text'
                    placeholder='Enter your name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    </div>

                    <div className='FormField'>
                    <label className='FormField__Label'>Enter your email</label>
                    <input 
                    type='email' 
                    placeholder='Enter your email' 
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="FormField__Input"
                    />
                    </div>

                    <div className='FormField'>
                    <label className='FormField__Label'>Enter your password</label>
                    <input 
                    type='password'
                    placeholder='Enter your Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="FormField__Input"
                    />
                    </div>
                   
                   <div className='FormField'>
                    <button className="FormField__Button">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
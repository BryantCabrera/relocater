import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Login-Signup.css'

class SignUp extends Component {
    state = {
        user: {}
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        // this.state.handleChange(this.state.email)
        try{
            const loginResponse =  await fetch ('/users', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!loginResponse.ok) {
            throw Error(loginResponse.statusText)
        }

        const parsedResponse = await loginResponse.json()
        // this.setState({
        //     user: parsedResponse.user
        // // })
        // this.props.handleLogin(parsedResponse.user)

        if (parsedResponse.data === 'login successful'){
            this.props.history.push(`/profile/${parsedResponse.user._id}`)
        }

        console.log(parsedResponse, ' This is the login response')

        } catch (err) {
            console.log(err)
        }
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
                    name='username'
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="FormField__Input"
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

export default withRouter(SignUp);
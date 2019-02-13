import React, { Component } from 'react';
import Signup from '../Login/Signup';
import GoogleoAuth from './GoogleoAuth';

class Login extends Component {
    state = {
        user:{
            email: '',
            name: '',
            password: ''
        }        
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        // this.state.handleChange(this.state.email)
        try{
            const loginResponse = await fetch ('http://localhost:9000/users', {
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
        this.props.handleLogin(parsedResponse.user)

        if (parsedResponse.data === 'login successful'){
            this.props.history.push(`/profile/${parsedResponse.user._id}`)
        }

        console.log(parsedResponse, ' This is the login response')

        } catch (err) {
            console.log(err)
        }
    }

    // handleLogout= async (e) => {
    //     try {
    //         const response = await fetch('http://localhost:9000/users/logout', {
    //             method: '',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })

    //         if(!response.ok) {
    //             throw Error(response.statusText)
    //         }

    //         this.setState({
    //             user:{}
    //         })

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    render() {
        console.log(process.env);
        return (
            <div>
                <div className='log-in'>
                    <form className="log-in" onSubmit={this.handleSubmit}>
                        <h1>Relocater</h1>
                        <input
                            placeholder='email'
                            type='text'
                            name='email'
                            value={this.state.user.email}
                            onChange={this.handleInput}
                            required
                        />
                        <br />
                        <input
                            type='text'
                            name='password'
                            placeholder='password'
                            value={this.state.user.password}
                            onChange={this.handleInput}
                            required
                        />
                        <br />
                        <button type='submit'>log in</button> <br />
                    </form>
                </div>

                <div className="sign-up">
                    <Signup handleLogin={this.props.handleLogin}/>
                </div>

                <GoogleoAuth />
                
            </div>
        )
    }
}


export default Login
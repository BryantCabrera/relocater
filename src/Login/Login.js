import React, { Component } from 'react'


class Login extends Component {
    state = {
        username: '',
        password: ''
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





    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                 <button name = 'Login'>Log In</button>
            </form>
        )
    }



}


export default Login
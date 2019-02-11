import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './Userprofile/Userprofile';
import Login from './Login/Login'
import GraphContainer from './GraphContainer/GraphContainer';
import Header from './Header/Header'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    logged: false,
    username: '',
  }

  handleLogin = (username) => {
    this.setState({
      username: username,
      logged: true
    })
  }

  handleLogout = (username) => {
    this.setState({
      username: username,
      logged: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path = '/' component = {Login} />
          <Route expact path='/graphcontainer' component = {GraphContainer}/>
        </Switch>
        {/* {this.state.logged ? <GraphContainer username={this.state.username} handleLogout={this.handleLogout}/> : <Login handleLogin={this.handleLogin}/>} */}
      </div>
    );
  }
}

export default App;
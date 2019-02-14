import React, { Component } from 'react';
import io from 'socket.io-client'
import OAuth from './OAuth'
// import { API_URL } from './config'
import './App.css';
import UserProfile from './Userprofile/Userprofile';
import Login from './Login/Login';
import GraphContainer from './GraphContainer/GraphContainer';
import Header from './Header/Header';
import MainContainer from './MainContainer/MainContainer';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom';
import Signup from './Login/Signup'
import Contact from './Contact/Contact'
import axios from 'axios';

const socket = io('http://localhost:3030');
// const providers = ['twitter', 'google', 'facebook', 'github'];

class App extends Component {
  state = {
    logged: false,

    username: '',
    user: {},

  }

  componentDidMount() {
    socket.on('google', user => {
      // this.popup.close()
      console.log(user, ' this is user');
      console.log(user.id, ' this is user.id');
      this.setState({ user, logged: true })
      user.isNew
        ? this.props.history.push(`/profile/${user._id}`)
        : this.props.history.push('/home')
    })
  }

  doLoginUser = (user) =>
    axios.post('/users/login', user)
      .then(res => {
        console.log(res)
        this.setState({
          user: res.data.loggedUser
        })
        res.data.isLoggedIn ? this.props.history.push('/home') : this.props.history.push('/')
      })


    
  // handleLoginSubmit = async (e, userInfo) => {
  //   e.preventDefault()
  //   axios.post('/users/login', userInfo)
  //     .then(res => res.data.isLoggedIn ? this.props.history.push('/home') : this.props.history.push('/'))
  // }

  handleLogout = async () => {
      try {
        const response = await fetch('/users/logout')

        if (!response.ok) {
          throw Error(response.statusText)
        } else {
          console.log(response)
        }
        const deletedSession = await response.json()
        console.log(deletedSession)
        this.setState({
          user: deletedSession.user || {}
        })
        this.props.history.push('/')

      } catch (err) {
        console.log(err)
    }
  }

  deleteUser = async (id) => {
    // e.preventDefault();

    try {
      console.log(id, ' this is the id passed to Delete Route');

      const deletedUser = await fetch(`/users/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (!deletedUser.ok) {
        throw Error(deletedUser.statusText);
      }

      const parsedDeletedUser = await deletedUser.json();
      console.log(parsedDeletedUser, ' this is parsedDeletedUser');

      this.setState({
        logged: false,
        username: '',
        user: {}
      });

      this.props.history.push('/')
    } catch (err) {
      console.log(err, ' this is err from deleteUser in React - App.js');
      return err
    }
  }

  updateParentState = (updatedUser) => {
    // console.log(updatedUser, ' this is updatedUser passed to App.js from Userprofile.js')
    this.setState({
      user: updatedUser
    });
    // console.log(this.state, ' this is state from App.js after updateParentState')
  }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <Header user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path="/Login" component={() =>  <Login socket={socket} handleLogin={this.handleLogin} doLoginUser={this.doLoginUser} history={this.props.history} />} />
          <Route exact path="/Signup" component={() =>  <Signup socket={socket} handleLogin={this.handleLogin} history={this.props.history} />} />
          <Route exact path="/" component={(props) =>  <Login {...props} socket={socket} handleLogin={this.handleLogin} history={this.props.history} updateParentState={this.updateParentState} doLoginUser={this.doLoginUser} />} />
          <Route exact path='/home' component={MainContainer} />
          <Route path="/contact" component={Contact} />
          <Route exact path='/profile/:id' render={(props) => <UserProfile {...props} deleteUser={this.deleteUser} updateParentState={this.updateParentState} /> } />
          {/* <Route exact path='/profile/:id' component={UserProfile} deleteUser={this.deleteUser} /> */}
          <Route path="/counties/:id" render={(props) => <GraphContainer {...props} user={this.state.user}/> } />
        </Switch>
      </div>
    );
  }
}

//combined authO with login to give it an exact route to render
export default withRouter(App);
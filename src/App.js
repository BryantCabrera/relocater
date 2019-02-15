import React, { Component } from 'react';
import io from 'socket.io-client'
import './App.css';
import UserProfile from './Userprofile/Userprofile';
import Login from './Login/Login';
import GraphContainer from './GraphContainer/GraphContainer';
import Header from './Header/Header';
import MainContainer from './MainContainer/MainContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import Signup from './Login/Signup'
import Contact from './Contact/Contact'
import axios from 'axios';

const socket = io('http://localhost:3030');

class App extends Component {
  state = {
    logged: false,
    username: '',
    user: {},
  }

  componentDidMount() {
    socket.on('google', user => {
      // this.popup.close();
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

  handleLogout = async () => {
      try {
        const response = await fetch('/users/logout');

        if (!response.ok) {
          throw Error(response.statusText)
        } else {
          console.log(response);
        }
        const deletedSession = await response.json();
        this.setState({
          user: deletedSession.user || {}
        })
        this.props.history.push('/')
      } catch (err) {
        console.log(err);
    }
  }

  deleteUser = async (id) => {
    try {
      const deletedUser = await fetch(`/users/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (!deletedUser.ok) {
        throw Error(deletedUser.statusText);
      }

      const parsedDeletedUser = await deletedUser.json();

      this.setState({
        logged: false,
        username: '',
        user: {}
      });

      this.props.history.push('/');
    } catch (err) {
      return err
    }
  }

  updateParentState = (updatedUser) => {
    this.setState({
      user: updatedUser
    });
  }

  render() {
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
          <Route path="/counties/:id" render={(props) => <GraphContainer {...props} user={this.state.user}/> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
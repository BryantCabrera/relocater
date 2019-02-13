import React, { Component } from 'react';
import './App.css';
import UserProfile from './Userprofile/Userprofile';
import Login from './Login/Login';
import GraphContainer from './GraphContainer/GraphContainer';
import Header from './Header/Header';
import MainContainer from './MainContainer/MainContainer';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom';
import Signup from './Login/Signup'

import data from './data/db.json'

class App extends Component {
  state = {
    logged: false,
    user: {},
  }

  handleLogin = (user) => {
    this.setState({
      user: user,
      logged: true
    })
    //set state and go to route to get to main container
    // this.props.history.push('/home')
  }

  // getAPIInfo = () =>
  //axios('/getApi', res => {
  //   console.log(res)
  //  this.setState({
  // data: Response.data
  // })
  // })

  handleLogout= async() => {
    try {
        const response = await fetch('/users/logout')

          if(!response.ok) {
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




  render() {
    return (
      <div className="App">
        <Header user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path='/graphcontainer' component={GraphContainer} />
          <Route exact path='/home' component={MainContainer} />
          <Route exact path='/profile/:id' component={UserProfile} />
          <Route path="/counties/:id" component={GraphContainer} />
          <Route exact path='/' component={() => <Login handleLogin={this.handleLogin} />} />
        </Switch>
            {/* <Login handleLogin={this.handleLogin} history={this.props.history} /> */}
       
      </div>
    );
  }
}
export default withRouter(App);
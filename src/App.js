import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './Userprofile/Userprofile';
import Login from './Login/Login'
import GraphContainer from './GraphContainer/GraphContainer';
import Header from './Header/Header'
import MainContainer from './MainContainer/MainContainer'
import { Route, Switch, withRouter } from 'react-router-dom'

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
    //set state and go to route to get to main container
    this.props.history.push('/maincontainer')
  }

  // getAPIInfo = () =>
    //axios('/getApi', res => {
    //   console.log(res)
    //  this.setState({
          // data: Response.data
    // })
    // })

  handleLogout = (username) => {
    this.setState({
      username: username,
      logged: false
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Header />
        {
          this.state.logged
            ?  <Switch>
                <Route exact path='/graphcontainer' component = {GraphContainer}/>
                <Route exact path='/maincontainer' component = {MainContainer} />
              </Switch>
            : <Login handleLogin={this.handleLogin}/>
        }
      </div>
    );
  }
}
export default withRouter(App);
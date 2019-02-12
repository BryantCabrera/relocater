import React, { Component } from 'react';
import './App.css';
import UserProfile from './Userprofile/Userprofile';
import Login from './Login/Login';
import GraphContainer from './GraphContainer/GraphContainer';
import Header from './Header/Header';
import MainContainer from './MainContainer/MainContainer';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom';
import Signup from './Login/Signup'

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
    this.props.history.push('/home')
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
        {/* <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={Signup}>
              </Route>
              <Route path="/sign-in" component={Login}>
              </Route>
          </div> */}












        {
          this.state.logged
            ?  <Switch>
                <Route exact path='/graphcontainer' component={GraphContainer}/>
                <Route exact path='/home' component={MainContainer} />
                <Route exact path='/profile' component={UserProfile} />
                <Route path="/counties/:id" component={GraphContainer} />
              </Switch>
            : <Login handleLogin={this.handleLogin} history={this.props.history} />
        }
      </div>
    );
  }
}
export default withRouter(App);
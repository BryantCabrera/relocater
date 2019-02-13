import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import UserForm from './UserForm';


class UserProfile extends Component {
    state= {
        user: {
            // username: '',
            // email:'',
            // password: '',
            // userCounty: '',
            // selectedCounty: '',
            // userIncome: 0,
            // id: '',
        }
    }

    componentDidMount () {
        this.getUser(this.props.match.params.id)
        // axios(`/users/${this.props.match.params.id}`)
        //     .then(res => {
        //         console.log(res.data, ' this is res.data from react');
        //         this.setState({
        //             user: res.data.data
        //         });
        //     });
    }

    getUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:9000/users/${id}`, {
            })

            if(!response.ok) {
                throw Error(response.statusText)
            }
            console.log(response, ' this is response from REACT Userprofile > getUser');
            const userParsed = await response.json();

            this.setState({
                user: userParsed.data
            });

            console.log(this.state, ' this is the state in REACT Userprofile.js')
            console.log(userParsed, ' this is userParsed from REACTUserprofile');
        } catch (err) {
            console.log(err)
            return err
        }
    }

    render(){
        return(
            <div>
                <h1> User Profile</h1>
                <p>{this.state.user.username}</p>
                <p>{this.state.user.email}</p>
                <form>
                    <input type='number' value='enter your salary' min='10' max='1000000000'></input>
                </form>
                <button onClick={() => this.props.deleteUser(this.state.user._id)}>Delete Your Profile</button>
            </div>
        )
    }

}

export default withRouter(UserProfile);
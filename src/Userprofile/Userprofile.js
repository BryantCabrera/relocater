import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import UserForm from './UserForm';

import './Userprofile.css'

import SearchBar from '../SearchBar'

import data from '../data/db.json'
const nameData = data.map(d => d.County)


class UserProfile extends Component {
    state= {
        user: {},
        search: '',
        toggle: false,
        filteredList: [...nameData]
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


    updateSearchBar = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    populateHandler = (e) => {
        this.setState({
            search: e.target.textContent,
            toggle: false
        })
    }

    handleSubmit = () => {
        const county = this.state.county
        const income = this.state.salary
        axios.put(`/users/${this.state.user._id}`, {
            userCounty: county,
            userIncome: income
        })
            .then((updatedUser) => this.props.updateParentState(updatedUser.data.data))
            // redirect home
            .then(this.props.history.push('/home'))

        
    }

    render(){
        return(
            <div className="user-profile">

                <div className="profile-names">
                    <p>Username : </p>
                    <p>E-Mail : </p>
                    <p>Salary : </p>
                    <p>County : </p>
                </div>


                <div className="profile-info"> 
                    <p> {this.state.user.username}</p>
                    <p> {this.state.user.email}</p>
                    <p> ${this.state.user.userIncome}</p>
                    <p> {this.state.user.userCounty}</p>
                </div>
                
                <div className="edit-profile">
                    
                    <p>Edit Your Profile</p>

                    <div className="select-box">
                        <SearchBar 
                            updateSearchBar={this.updateSearchBar} 
                            populateHandler={this.populateHandler}
                            search={this.state.search}
                            toggle={this.state.toggle}
                            filteredList={this.state.filteredList}
                        />
                    </div>
                    
                    <div className="salary-input">
                        <input name="salary" onChange={(e) => this.updateSearchBar(e)} type="Number" placeholder="Salary"/>
                    </div>
                    
                    <button className="profile-button"onClick={this.handleSubmit}>Submit</button>
                    
                </div>
                    
                <div className="delete-button-holder">
                    <button className="delete-button"onClick={() => this.props.deleteUser(this.state.user._id)}>Delete Your Profile</button>
                </div>
            

                <div className="blank">

                </div>

            </div>

        )
    }

}

export default withRouter(UserProfile);

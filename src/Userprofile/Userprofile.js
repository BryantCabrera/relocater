import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import UserForm from './UserForm';

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
        } )
            // redirect home
            .then(this.props.history.push('/home'))
    }

    render(){
        return(
            <div>
            <h1> User Profile</h1>
            <p>{this.state.user.username}</p>
            <p>{this.state.user.email}</p>
            <SearchBar 
                updateSearchBar={this.updateSearchBar} 
                populateHandler={this.populateHandler}
                search={this.state.search}
                toggle={this.state.toggle}
                filteredList={this.state.filteredList}
            />
            <input name="salary" onChange={(e) => this.updateSearchBar(e)} type="Number" placeholder="Salary"/>
            <button onClick={this.handleSubmit}>Submit this</button>
            <button onClick={() => this.props.deleteUser(this.state.user._id)}>Delete Your Profile</button>
            </div>
        )
    }

}

export default withRouter(UserProfile);
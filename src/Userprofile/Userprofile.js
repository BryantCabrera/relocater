import React, {Component} from 'react';
import axios from 'axios';
import UserForm from './UserForm';


class UserProfile extends Component {
    state= {
        user: '',
        name: '',
        email: '',
        uCounty: '',
        uIncome: 0,
        editing: {}


    }

    //from GreenSpot
    componentDidMount () {
        axios(`/users/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data, ' this is res.data from react');
                this.setState({
                    user: res.data.data
                });
            });
    }

    editUser = userIndex => {
        const {name, email, uCounty, uIncome} = this.state
        this.setState({
            name,
            email,
            uCounty,
            uIncome,
            editing: {status:true, index: userIndex}
        })
    }
    
    render(){
        console.log(this.state)
        return(
            <UserForm user={this.state}/>
        )
    } 

}

export default UserProfile;


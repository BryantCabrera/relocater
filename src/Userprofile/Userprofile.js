import React, {Component} from 'react'
import UserForm from './UserForm';


class UserProfile extends Component {
    state= {
        username: 'Dope Fiend',
        email: 'dope@fiend.com',
        uCounty: 'King',
        uIncome: 100000,
        editing: {}


    }

    editUser = userIndex => {
        const {username, email, uCounty, uIncome} = this.state
        this.setState({
            username,
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


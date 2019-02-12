import React, {Component} from 'react'
import UserForm from './UserForm';


class UserProfile extends Component {
    state= {
        name: '',
        email: '',
        uCounty: '',
        uIncome: 0,
        editing: {}


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


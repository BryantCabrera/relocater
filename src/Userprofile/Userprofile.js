import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class UserProfile extends Component {
    state = {
        user: {
            username: '',
            email:'',
            password: '',
            userCounty: '',
            selectedCounty: '',
            uIncome: 0
        }

    }

    componentDidMount(){
        this.getUser(this.props.match.params.id)
    }

    getUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:9000/users/${id}`, {
            })

            if(!response.ok) {
                throw Error(response.statusText)
            }
            console.log(response)
            const userParsed = await response.json()

            this.setState({
                user: userParsed.data
            })
            console.log(userParsed )
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
            </div>
        )
    }

}


// }


// editUser = userIndex => {
//     const {name, email, uCounty, uIncome} = this.state
//     this.setState({
//         name,
//         email,
//         uCounty,
//         uIncome,
//         editing: {status:true, index: userIndex}
//     })
// }

// render(){
//     console.log(this.state)
//     return(
//         <UserForm user={this.state}/>
//     )
// } 

// }

export default withRouter(UserProfile);


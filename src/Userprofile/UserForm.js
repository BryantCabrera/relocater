import React from 'react'

const UserForm = (props) => 
            <div>
                <input
                    name='username'
                    placeholder='username'
                    value={props.user.username}

                />
                <br/>
                <input
                    name='email'
                    placeholder='email'
                    value={props.user.email}
                />
                <br/>
                <input
                    name='uCounty'
                    placeholder='County'
                    value={props.user.uCounty}
                />
                <input
                    name='uIncome'
                    placeholder='Income'
                    value={props.user.uIncome}
                />
                <br/>
            </div>


export default UserForm
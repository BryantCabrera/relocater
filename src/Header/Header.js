import React from 'react'
import { Link } from 'react-router-dom'

const Header = ( props) => {
    return (
        <header>
            <div className="nav-bar">
                <p className="nav-home"><Link to='/home'>Home </Link></p>
                {
                    props.user._id
                        && 
                            [<p key={99}><Link to={`/profile/${props.user._id}`}>profile </Link></p>,
                            <p key={23423}onClick={props.handleLogout}> LogOut</p>]
                }

            </div>
        </header>
    )
}

export default Header
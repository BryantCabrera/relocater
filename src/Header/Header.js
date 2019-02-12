import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({user}) => {
    return (
        <header>
            <div className="nav-bar">
                <p className="nav-home"><Link to='/home'>Home </Link></p>
                <p><Link to={`/profile/${user._id}`}>Profile</Link></p>
            </div>
        </header>
    )
}

export default Header
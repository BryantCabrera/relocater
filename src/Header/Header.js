import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="nav-bar">
                <p className="nav-home"><Link to='/home'>Home </Link></p>
                <p><Link to='/graphcontainer'>Graph Container</Link></p>
            </div>
        </header>
    )
}

export default Header
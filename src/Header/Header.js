import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <ul>
                <li><Link to= '/'>Home</Link></li>
                <li><Link to ='/graphcontainer'>Graph Container</Link></li>
                <li><Link to = '/Login'>Log in</Link></li>
            </ul>
        </header>
    )
}

export default Header
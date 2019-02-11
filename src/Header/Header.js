import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
                <p><Link to= '/'>Home</Link></p>
                <p><Link to ='/graphcontainer'>Graph Container</Link></p>
        </header>
    )
}

export default Header
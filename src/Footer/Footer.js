import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'




const Footer = () => {
    return (
        <div id="footer">
            <Link to="/contact"><button className="FormField__Button">CONTACT</button></Link>
        </div>
    )
}

export default Footer
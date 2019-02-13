import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'




const Footer = () => {
    return (
        <div id="footer">
            <Link to="/contact"><div>CONTACT US</div></Link>
        </div>
    )
}

export default Footer
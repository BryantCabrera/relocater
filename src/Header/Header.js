import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ( props) => {
    return (
        <header>
            <div className="nav-bar">
                <div className="nav-main">            
                    <p className="nav-home"><Link to='/home'><img className="housing-icon" src="../../../imgs/logoin.png" alt="Home Icon" title="Home Icon"></img></Link></p>
                    <div className="nav-logout-profile">
                        {
                            props.user._id
                                && 
                                    [<p key={99}><Link to={`/profile/${props.user._id}`}>| &nbsp; PROFILE &nbsp; </Link></p>,
                                    <p key={23423}onClick={props.handleLogout}>| &nbsp; LOGOUT</p>]
                        }
                    </div>
                </div>
                {/* <div className="contact-container"><Link to="/contact"><button className="contact-button">CONTACT</button></Link></div> */}
                        
            </div>
        </header>
    )
}

export default Header
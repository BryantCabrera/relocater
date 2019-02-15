import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ( props) => {
    return (
        <header>
           <div className="nav">
                <div className="nav__left">
                    <p className="nav__home"><Link to='/home'><img className="nav__housing-icon" src="../../../imgs/logoin.png" alt="Home Icon" title="Home Icon"></img></Link></p>
                        <div className="nav__profile-login">
                            {
                                props.user._id
                                    ?
                                        [<p className="nav__profile" key={99}><Link to={`/profile/${props.user._id}`}>| &nbsp; PROFILE &nbsp; </Link></p>,
                                        <p className="nav__logout" key={23423}onClick={props.handleLogout}>| &nbsp; LOGOUT</p>]
                                    :  <Link to="/Login"><img className="nav__login"src="../../../imgs/login.png"></img></Link>
                            }
                        </div>
                </div>
                    <div className="nav__contact">
                        <Link to="/contact"><button className="nav__contact-button">CONTACT</button></Link>
                    </div>
           </div>
       </header>

    )
}

export default Header
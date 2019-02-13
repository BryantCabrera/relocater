import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ( props) => {
    return (
        <header>
            <div className="nav-bar">
                <p className="nav-home"><Link to='/home'><button>Home</button> </Link></p>
                {
                    props.user._id
                        && 
                            [<p key={99}><Link to={`/profile/${props.user._id}`}><button>Profile</button> </Link></p>,
                            <p key={23423}onClick={props.handleLogout}> <button>Logout</button></p>]
                }

            </div>
        </header>
    )
}

export default Header
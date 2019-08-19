import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return ( 
        <div>
            <nav>
                <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/auth">Login</Link>
            <Link to="/funstuff">Fun Stuff</Link>
            </div>
            </nav>
        </div>
     );
}
 
export default NavBar;
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({user}) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src="images/fin-ferie-logo.svg" id="logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/apartments">Lejligheder</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Andet
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="#">Om Os</Link>
                                <Link className="dropdown-item" to="#">FAQ</Link>
                                {user && user.isAdmin === true && <Link className="dropdown-item" to="/admin">Administrator Panel</Link>}
                                {user && user.isAdmin === false && <Link className="dropdown-item" to={'/reservation/' + user._id}>Reservationer</Link>}
                                <div className="dropdown-divider"></div>
                                {!user && <Link className="dropdown-item" to="/login">Login</Link>}
                                {user && <div className="dropdown-item">Hej {user.name}</div>}
                            </div>
                        </li>
                        {user && <li className="nav-item">
                            <Link className="nav-link btn btn-primary" to="/logout">Log ud</Link>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
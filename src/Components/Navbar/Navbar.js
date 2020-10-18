import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-success">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link to='/' className='nav-link'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/login' className='nav-link'>Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import Pop from '../Pop/Pop';
import './Navbar.css';
import { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`}>
            <Toaster />
            <div className="container-fluid">
                <div className="navbar-heading">
                    <h3>
                        <Link className="navbar-h" to="/">Quick Cure</Link>
                    </h3>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link me-3" to="/" end>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-3" to="/about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-3" to="/contact">CONTACT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={"nav-link me-3"} to="/blog">BLOG</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-3 textDark" to="/services">DENTAL SERVICE</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-3 textDark" to="/reviews">REVIEWS</NavLink>
                        </li>
                        <li className="nav-item">
                        {user?.email ? (
                            <Pop />
                        ) : (
                            <NavLink 
                                className={`nav-link me-3 ${isSticky ? "textDark" : "textWhite"}`} 
                                to="/login"> LOGIN</NavLink>
                        )}
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
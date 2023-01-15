import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavbarHome = () => {
    const navigate = useNavigate();
    return (
        <div id="navbar">

            <div className='nav__top'>
                <h4> The Vocation </h4>
                <span>
                    <button type="button" className="btn btn-light" onClick={() => navigate('/userRegistration')}>Register</button>
                    <button type="button" className="btn btn-light" onClick={() => navigate('/login')}>Login</button>
                </span>
            </div>

            <div className='stays__btn'>
                <button> Stays </button>

            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 nav__bottom'>
                        <h3> “Of all the books in the world. The best stories are found between the pages of a passport.” </h3>
                        <p> No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.</p>
                        <h5> Wana Stay ? </h5>
                        <Link to="/login" className="btn btn-secondary">Sign-in-now</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavbarHome

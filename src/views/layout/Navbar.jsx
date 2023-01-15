import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from 'react-icons/cg'

const Navbar = () => {

    const [isUserRegisterationPath, setIsUserRegisterationPath] = useState(false);
    const [isVendorRegistrationPath, setIsVendorRegistrationPath] = useState(false);
    const [userResetPasswordPath, setUserResetPasswordPath] = useState(false);
    const [vendorResetPasswordPath, setVendorResetPasswordPath] = useState(false);

    const [userHomePath, setUserHomePath] = useState(false);

    const [dropDown, setDropDrown] = useState(false);

    const checkLoc = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (checkLoc.pathname === '/userRegistration') {
            setIsUserRegisterationPath(true)
        }
        else if (checkLoc.pathname === '/vendorRegistration') {
            setIsVendorRegistrationPath(true)
        }
        else if (checkLoc.pathname === '/user_resetPassword_1' || checkLoc.pathname === '/user_resetPassword_2' || checkLoc.pathname === '/user_resetPassword_4') {
            setUserResetPasswordPath(true)
        }
        else if (checkLoc.pathname === '/vendor_resetPassword_1' || checkLoc.pathname === '/vendor_resetPassword_2' || checkLoc.pathname === '/vendor_resetPassword_4') {
            setVendorResetPasswordPath(true)
        }
        else if (checkLoc.pathname === '/user_home') {
            setUserHomePath(true)
        }
    }, [checkLoc.pathname])

    const handleLogout = (e) =>{
        e.preventDefault();
        sessionStorage.clear();
        navigate('/');
    }
    const UserName = sessionStorage.getItem('name')
    return (
        <>
            <div className='nav__top' id="navbar">
                <h4 onClick={() => navigate('/')} style={{ cursor: "pointer" }}> The Vocation </h4>
                {
                    isUserRegisterationPath && (
                        <span>
                            <button type="button" className="btn btn-light" onClick={() => navigate('/vendorRegistration')}>Register as Vendor</button>
                        </span>
                    )
                }
                {
                    isVendorRegistrationPath && (
                        <span>
                            <button type="button" className="btn btn-light" onClick={() => navigate('/userRegistration')}>Register as User</button>
                        </span>

                    )
                }
                {
                    userResetPasswordPath || vendorResetPasswordPath ?
                        <span>
                            <button type="button" className="btn btn-light" onClick={() => navigate('/login')}>Login</button>
                        </span>
                        : ""
                }
                {
                    userHomePath && (

                        <span>
                            <button className="btn btn-light"> About </button>
                            <button className="btn btn-light"> Services </button>
                            <button className="btn btn-light"> Contact Us </button>
                            {/* <button type="button" className="btn btn-light">Logout</button> */}

                            <div className="profile_dropdown">
                                <button className="btn btn-light" onClick={() => setDropDrown(!dropDown)}><CgProfile /> </button>
                                {
                                    dropDown ?
                                        <div>
                                            <Link> {UserName} </Link>
                                            <Link onClick={(e) => handleLogout(e)}> Logout </Link>
                                        </div> : ""
                                }

                            </div>
                            {/* <div> sadad </div> */}

                        </span>

                    )
                }

            </div>
        </>
    )
}
export default Navbar;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(true);
    const [vendor, setVendor] = useState(false);

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [vendorEmail, setVendorEmail] = useState("");
    const [vendorPassword, setVendorPassword] = useState("");

    const handleUserLogin = async (e) => {
        e.preventDefault();
        if (!userEmail && !userPassword) {
            alert('fields cannot be blank');
        }
        else if (!userEmail) {
            alert("email cannot be blank");
        }
        else if (!userPassword) {
            alert("password cannot be blank");
        }
        else {
            try {
                const URL = "/userLogin";
                const data = {
                    email: userEmail,
                    password: userPassword
                }
                const logged = await axios.post(URL, data);
                if (logged.status === 200) {
                    alert('login success');
                    if (logged.data.data.type === 'admin') {
                        sessionStorage.setItem('_id', logged.data.data._id);
                        sessionStorage.setItem('name', logged.data.data.first_name);
                        sessionStorage.setItem('type', logged.data.data.type);
                        sessionStorage.removeItem('email');
                    }
                    else {
                        sessionStorage.setItem('_id', logged.data.data._id);
                        sessionStorage.setItem('email', logged.data.data.email)
                        sessionStorage.setItem('name', logged.data.data.first_name);
                        sessionStorage.setItem('type', logged.data.data.type);
                        navigate('/user_home');
                    }
                }

            } catch (error) {
                alert(error.response.data.data)
            }
        }
    }

    const handleVendorLogin = async (e) => {
        e.preventDefault();
        if (!vendorPassword && !vendorPassword) {
            alert('fields cannot be blank');
        }
        else if (!vendorEmail) {
            alert("email cannot be blank");
        }
        else if (!vendorPassword) {
            alert("password cannot be blank");
        }
        else {
            try {
                const URL = "/vendorLogin";
                const data = {
                    email: vendorEmail,
                    password: vendorPassword
                }
                const logged = await axios.post(URL, data);
                if (logged.status === 200) {
                    alert('login success');
                    sessionStorage.setItem('_id', logged.data.data._id);
                    sessionStorage.setItem('fullName', logged.data.data.fullName);
                    sessionStorage.setItem('email', logged.data.data.email);
                    sessionStorage.setItem('type', logged.data.data.type);
                    sessionStorage.setItem('authorized', logged.data.data.authorized);
                }
            } catch (error) {
                alert(error.response.data.data)
            }
        }
    }

    return (
        <>
            <Navbar />
            <section className="text-center text-lg-start">

                <div className="card mb-3" id="login__div">
                    <div className="row g-0 d-flex align-items-center">
                        <div className="col-lg-4 d-none d-lg-flex ">
                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
                                className="w-75 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5 mx-2 login__img" />
                        </div>
                        {
                            user ? <div className="col-lg-8">
                                <form className="card-body py-5 px-md-5 w-50" onSubmit={(e) => handleUserLogin(e)}>
                                    <div className="login__form" >
                                        <h4 id="login__title"> Login as a User</h4>
                                        <div className="login__opt">
                                            <Link onClick={() => { setUser(true); setVendor(false) }} style={{ background: "rgb(59, 59, 59)" }}> User </Link>
                                            <Link onClick={() => { setVendor(true); setUser(false) }}> Vendor </Link>

                                        </div>

                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="mail">Email address</label>
                                            <input type="email" id="mail" className="form-control" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                                        </div>

                                        {/* Password input  */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="psw">Password</label>
                                            <input type="password" id="psw" className="form-control" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} />
                                        </div>

                                        {/* 2 column grid layout for inline styling */}
                                        <div className="row mb-4">
                                            <div className="col d-flex">
                                                {/* Checkbox */}
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="rmmbrme" />
                                                    <label className="form-check-label" htmlFor="rmmbrme"> Remember me </label>
                                                </div>
                                            </div>

                                            <div className="col">
                                                {/* Simple link */}
                                                <Link to="/user_resetPassword_1" className="link-primary">Forgot password?</Link>
                                            </div>
                                        </div>

                                        {/* Submit button */}
                                        <button className="btn bn-block mb-4 w-100 login__btn" >Sign in</button>

                                    </div>

                                </form>

                            </div> : vendor ? <div className="col-lg-8">
                                <form className="card-body py-5 px-md-5 w-50" onSubmit={(e) => handleVendorLogin(e)}>
                                    <div className="login__form" >
                                        <h4 id="login__title"> Login as a Vendor </h4>
                                        <div className="login__opt">
                                            <Link onClick={() => { setUser(true); setVendor(false) }}> User </Link>
                                            <Link onClick={() => { setVendor(true); setUser(false) }} style={{ background: "rgb(59, 59, 59)" }}> Vendor </Link>

                                        </div>

                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="mail">Email address</label>
                                            <input type="email" id="mail" className="form-control" onChange={(e) => setVendorEmail(e.target.value)} value={vendorEmail} />
                                        </div>

                                        {/* Password input  */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="psw">Password</label>
                                            <input type="password" id="psw" className="form-control" onChange={(e) => setVendorPassword(e.target.value)} value={vendorPassword} />
                                        </div>

                                        {/* 2 column grid layout for inline styling */}
                                        <div className="row mb-4">
                                            <div className="col d-flex">
                                                {/* Checkbox */}
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="rmmbrme" />
                                                    <label className="form-check-label" htmlFor="rmmbrme"> Remember me </label>
                                                </div>
                                            </div>

                                            <div className="col">
                                                {/* Simple link */}
                                                <Link to="/vendor_resetPassword_1" className="link-primary">Forgot password?</Link>
                                            </div>
                                        </div>

                                        {/* Submit button */}
                                        <button className="btn bn-block mb-4 w-100 login__btn" >Sign in</button>

                                    </div>

                                </form>

                            </div> : ""
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;

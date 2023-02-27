import { useState } from "react";
import Navbar from "../../layout/Navbar";
import axios from 'axios'
import Notification from "../../common/Notification";
import Loader from "../../common/Loader";

const UserRegistration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contact, setContact] = useState(0);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const [loader, setLoader] = useState(false);
    const [showData, setShowData] = useState(true);

    const [showNotification, setShowNotification] = useState(false);
    const [notificationContent, setNotificationContent] = useState("");
   
    const handleUserRegistration = async (e) => {
        e.preventDefault();
        if (!firstName && !lastName && !email && !city && !country && !contact && !password && !confirmPassword) {
            alert("fields cannot be blank");
        }
        else if (!firstName) {
            alert("first name cannot be blank");
        }
        else if (!email) {
            alert("email cannot be blank");
        }
        else if (!city) {
            alert("city cannot be blank");
        }
        else if (!country) {
            alert("country cannot be blank");
        }
        else if (!contact) {
            alert("contact cannot be blank");
        }
        else if (contact.length < 10 || contact.length > 15) {
            alert("invalid contact")
        }
        else if (!password) {
            alert("password cannot be blank");
        }
        else if (!confirmPassword) {
            alert("confirm password cannot be blank");
        }
        else if (password !== confirmPassword) {
            alert("password didn't match");
        }
        else {
            setLoader(true)
            setShowData(false)
            try {
                const URL = "/userRegister";
                const fields = {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    city: city,
                    country: country,
                    phone: contact,
                    password: password,
                }
                const save = await axios.post(URL, fields);
                if (save.status === 200) {
                    setLoader(false)
                    setShowNotification(true)
                    setShowData(true)
                    setNotificationContent(save.data.data)
                }
            } catch (error) {
                setLoader(false)
                setShowNotification(true)
                setShowData(true)
                setNotificationContent(error.response ? error.response.data.data : error.message)
            }
        }
    }
    return (
        <>
            <Navbar />
            {
                loader && <Loader />
            }
            <Notification showNotification={showNotification} setShowNotification={setShowNotification} notificationContent={notificationContent}/>
            
            {
                showData && <section className="text-center text-lg-start">
                    {/* Jumbotron */}
                    <div className="container py-4">
                        <div className="row g-0 align-items-center" id="userRegitser__div">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card cascading-right" style={{ background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)", marginRight: "-80px", border: "none" }}>
                                    <div className="card-body p-5 shadow-5 text-center">
                                        <h2 className="mb-5 text-decoration-underline">User Sign up</h2>
                                        <form onSubmit={(e) => handleUserRegistration(e)}>
                                            {/* 2 column grid layout with text inputs for the first and last names */}
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1" className="form-control" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example2" className="form-control" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Email input */}
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example4" className="form-control" placeholder="City" onChange={(e) => setCity(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example5" className="form-control" placeholder="Country" onChange={(e) => setCountry(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="number" id="form3Example6" className="form-control" placeholder="Contact" onChange={(e) => setContact(e.target.value)} />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="password" id="form3Example7" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="password" id="form3Example8" className="form-control" placeholder="Confirm Passowrd" onChange={(e) => setConfirmPassword(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>



                                            {/* Submit button */}
                                            <button type="submit" className="btn w-25 btn-block mb-4 userRegitser__btn">
                                                Sign up
                                            </button>

                                            {/* Register buttons */}
                                            {/* <div className="text-center">
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div> */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img src="/img/register.jpg" className="rounded-4 shadow-4 userRegistration__img" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Jumbotron */}
                </section>
            }

        </>
    )
}

export default UserRegistration;
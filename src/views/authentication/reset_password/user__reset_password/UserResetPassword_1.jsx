import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../../../common/Loader';
import Notification from '../../../common/Notification';
import Navbar from '../../../layout/Navbar'

const UserResetPassword1 = () => {

    const navigate = useNavigate();

    const [forgotEmail, setForgotEmail] = useState(false);
    const [loader, setLoader] = useState(false);
    const [showData, setShowData] = useState(true);

    const [showNotification, setShowNotification] = useState(false);
    const [notificationContent, setNotificationContent] = useState("");

    const handleVerifyAndSendMail = async (e) => {
        e.preventDefault();
        if (!forgotEmail) {
            alert("field cannot be blank")
        }
        else {
            setLoader(true)
            setShowData(false)
            try {
                const data = {
                    email: forgotEmail
                }
                const URL = "/user_resetPassword"
                const res = await axios.post(URL, data);
                if (res.status === 200) {
                    setLoader(false)
                    setShowData(true)
                    navigate("/user_resetPassword_2");
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
        <div>
            <Navbar />
            {
                loader && <Loader />
            }
            <Notification showNotification={showNotification} setShowNotification={setShowNotification} notificationContent={notificationContent}/>
            
            {
                showData &&  <form className="modal-dialog" style={{ width: "480px", marginTop: "50px" }}
                onSubmit={(e) => handleVerifyAndSendMail(e)}
            >
                <div className="modal-content text-center">
                    <div className="modal-header h5 text-dark justify-content-center">
                        User Password Reset
                    </div>
                    <div className="modal-body px-5">
                        <p className="py-2">
                            Enter your email address and we'll send you an email to reset your password.
                        </p>
                        <div className="form-outline">
                            <input type="email" id="typeEmail" className="form-control my-3" placeholder='Enter Email'
                                onChange={(e) => setForgotEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className="btn w-50 reset_pswbtn_1"
                            >Reset password</button>
                        </div>

                    </div>
                </div>
            </form>
            }


        </div>
    )
}

const UserResetPassword2 = () => {
    return (
        <>
            <Navbar />
            <div className="row setup-content rst_psswrd">
                <div className="col-xs-6 col-md-offset-3">
                    <div className="col-md-12">
                        <div>
                            <p> Email has been sended successfully, </p>
                            <p> Please check the mail and using the mail link,
                                you can set the new password </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default UserResetPassword1
export { UserResetPassword2 }

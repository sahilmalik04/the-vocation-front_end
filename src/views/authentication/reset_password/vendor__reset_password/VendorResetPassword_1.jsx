import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../common/Loader";
import Notification from "../../../common/Notification";
import Navbar from "../../../layout/Navbar"
import { UserResetPassword2 } from "../user__reset_password/UserResetPassword_1"

const VendorResetPassword1 = () => {
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
                const URL = "/vendor_resetPassword"
                const res = await axios.post(URL, data);
                if (res.status === 200) {
                    setLoader(false)
                    setShowData(true)
                    navigate("/vendor_resetPassword_2");
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
            <Notification showNotification={showNotification} setShowNotification={setShowNotification} notificationContent={notificationContent} />
            {
                showData && <form className="modal-dialog" style={{ width: "480px", marginTop: "50px" }}
                    onSubmit={(e) => handleVerifyAndSendMail(e)}
                >
                    <div className="modal-content text-center">
                        <div className="modal-header h5 text-dark justify-content-center">
                            Vendor Password Reset
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
                                <button className="btn w-50 theme__btn"
                                >Reset password</button>
                            </div>

                        </div>
                    </div>
                </form>
            }

        </>
    )
}



const VendorResetPassword2 = () => {
    return (
        <>
            <UserResetPassword2 />
        </>
    )
}

export default VendorResetPassword1
export { VendorResetPassword2 }
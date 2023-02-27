import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../../../common/Loader';
import Notification from '../../../common/Notification';
import Navbar from '../../../layout/Navbar'

const VendorResetPassword3 = () => {
    const [userID, setUserId] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confNewPassword, setConfNewPassword] = useState("");

    const [loader, setLoader] = useState(false);
    const [showData, setShowData] = useState(true);

    const [showNotification, setShowNotification] = useState(false);
    const [notificationContent, setNotificationContent] = useState("");

    const params = useParams();

    useEffect(() => {
        setUserId(params.id)
    }, [params]);

    const handleSetNewPassword = async (e) => {
        e.preventDefault();
        if (!newPassword && !confNewPassword) {
            alert('fields cannot be blank');
        }
        else if (!newPassword) {
            alert('new password cannot be blank');

        }
        else if (!confNewPassword) {
            alert('confirm new password cannot be blank');

        }
        else if (newPassword !== confNewPassword) {
            alert("password didn't match");
        }
        else {
            setLoader(true)
            setShowData(false)
            try {
                const data = {
                    _id: userID,
                    new_password: newPassword
                }
                const URL = "/vendor_setNewPassword";

                const save = await axios.patch(URL, data);
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

        <div>
            <Navbar />
            {
                loader && <Loader />
            }
            <Notification showNotification={showNotification} setShowNotification={setShowNotification} notificationContent={notificationContent} />
            {
                showData && <div className="card" style={{ width: "410px", marginLeft: "auto", marginRight: "auto", marginTop: "38px" }}>
                <div className="card-header h5 text-white bg-secondary text-center">Password Reset</div>
                <div className="card-body px-3">
                    <form onSubmit={(e) => handleSetNewPassword(e)} >
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="new_password">New Password</label>
                            <input type="password" id="new_password" className="form-control my-1" onChange={(e) => setNewPassword(e.target.value)} />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="typeEmail">Confirm New Password</label>
                            <input type="password" id="confNew" className="form-control my-1" onChange={(e) => setConfNewPassword(e.target.value)} />
                        </div>
                        <button className="btn w-100" style={{ background: "rgba(92, 150, 236, 0.842)", color: "whitesmoke" }}>Reset password</button>
                    </form>
                </div>
            </div>
            }
            
        </div>
    )
}



export default VendorResetPassword3
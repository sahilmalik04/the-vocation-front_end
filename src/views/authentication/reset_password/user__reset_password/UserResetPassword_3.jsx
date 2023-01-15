import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../../layout/Navbar'

const UserResetPassword3 = () => {

  const navigate = useNavigate();
  const [userID, setUserId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confNewPassword, setConfNewPassword] = useState("");

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
      alert("new password didn't match");
    }
    else {
      try {
        const data = {
          _id: userID,
          new_password: newPassword
        }
        const URL = "/user_setNewPassword";

        const save = await axios.patch(URL, data);
        if (save.status === 200) {
          navigate('/user_resetPassword_4');
        }
      } catch (error) {
        alert(error.response.data.data)
      }


    }
  }

  return (
    <div>
      <Navbar />
      <div className="card" style={{ width: "300px", marginLeft: "auto", marginRight: "auto", marginTop: "32px" }}>
        <div className="card-header h5 text-white bg-secondary text-center">Password Reset</div>
        <div className="card-body px-3">
          <form onSubmit={(e) => handleSetNewPassword(e)}>
            <div className="form-outline">
              <label className="form-label" htmlFor="new_password">New Password</label>
              <input type="password" id="new_password" className="form-control my-2" onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="form-outline">
              <label className="form-label" htmlFor="typeEmail">Confirm New Password</label>
              <input type="password" id="confNew" className="form-control my-2" onChange={(e) => setConfNewPassword(e.target.value)} />
            </div>
            <button className="btn w-100" style={{ background: "rgba(92, 150, 236, 0.842)", color: "whitesmoke" }}>Reset password</button>
          </form>
        </div>
      </div>

    </div>
  )
}

const UserResetPassword4 = () => {
  return (
    <>
      <Navbar />
      <div className="row setup-content rst_psswrd">
        <div className="col-xs-6 col-md-offset-3">
          <div className="col-md-12">
            <div>
              <p> Password has been changed successfuly </p>
              <p> Now, you can login with the new password </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserResetPassword3
export { UserResetPassword4 }
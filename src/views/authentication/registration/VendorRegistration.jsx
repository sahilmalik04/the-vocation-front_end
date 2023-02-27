import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom'
import Loader from '../../common/Loader';
import Notification from '../../common/Notification';
import Navbar from '../../layout/Navbar'

const VendorRegistration = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [subType, setSubType] = useState("owner");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [document, setDocument] = useState();

    const [loader, setLoader] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showData, setShowData] = useState(true);

    const [notificationContent, setNotificationContent] = useState("");


    const ChangeDocumentHandler = (e) => {
        setDocument(e.target.files[0]);
    }

    const [stepInfo, setStepInfo] = useState([
        {
            id: 0,
            step: 1,
            title: "Step 1",
            isCompleted: 'true',
        },
        {
            id: 1,
            step: 2,
            title: "Step 2",
            isCompleted: undefined
        },
        {
            id: 2,
            step: 3,
            title: "Step 3",
            isCompleted: undefined
        }
    ])

    const [page, setPage] = useState(0);

    const handleFirstNext = (e) => {
        e.preventDefault();
        if (!fullName && !email && !password && !confirmPassword) {
            alert("fields cannot be blank");
        }
        else if (!fullName) {
            alert("first name cannot be blank")
        }
        else if (!email) {
            alert("email cannot be blank")
        }
        else if (!password) {
            alert("password cannot be blank")
        }
        else if (!confirmPassword) {
            alert("confirm password cannot be blank")
        }
        else if (password !== confirmPassword) {
            alert("password didn't match")
        }
        else {
            setStepInfo(stepInfo.map((stepInfo) => stepInfo.id === 1 ? { ...stepInfo, isCompleted: 'true' } : stepInfo))
            setPage(page + 1);
        }
    }
    const handleSecondStepPrev = (e) => {
        e.preventDefault();
        setStepInfo(stepInfo.map((stepInfo) => stepInfo.id === 1 ? { ...stepInfo, isCompleted: undefined } : stepInfo))
        setPage(page - 1);
    }

    const handleSecondStepNext = async (e) => {
        e.preventDefault();
        if (document) {
            setLoader(true)
            setShowData(false)
            try {
                const URL = "/vendorRegister";

                const formData = new FormData();
                formData.append("fullName", fullName)
                formData.append("sub_type", subType)
                formData.append("email", email)
                formData.append("password", email)
                formData.append("id_proof", document)

                const config = {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
                const save = await axios.post(URL, formData, config);

                if (save.status === 200) {
                    setLoader(false)
                    setShowData(true)
                    setStepInfo(stepInfo.map((stepInfo) => stepInfo.id === 1 || 2 ? { ...stepInfo, isCompleted: 'true', } : stepInfo))
                    setPage(page + 1);
                }
            }
            catch (error) {
                setLoader(false)
                setShowNotification(true)
                setShowData(true)
                setNotificationContent(error.response ? error.response.data.data : error.message)
            }
        } else {
            setShowNotification(true)
            setNotificationContent("Document is mandatory")
        }

    }

    useEffect(() => {
        if (page === stepInfo.length - 1) {
            setStepInfo(stepInfo.map((stepInfo) => stepInfo.id === 2 ? { ...stepInfo, title: 'Completed' } : stepInfo));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return (
        <>
            <Navbar />
            {
                loader && <Loader />
            }

            <Notification showNotification={showNotification} setShowNotification={setShowNotification} notificationContent={notificationContent} />

            {
                showData && <div className="container">
                    <h4 className='ownerRegistrationTitle'> Vendor Sign up</h4>
                    <div className="stepwizard col-md-offset-3">
                        <div className="stepwizard-row setup-panel">
                            {
                                stepInfo.map((item, i) =>
                                    <div className="stepwizard-step" key={i}>
                                        <a href="#step-1" type="button" className={item.isCompleted === 'true' ? 'circle_btn' : ""}>{item.step}</a>
                                        <p>{item.title}</p>
                                    </div>
                                )
                            }

                            {/* <div className="stepwizard-step">
                        <button onClick={()=> testing()}></button>
                        <a href="#step-2" type="button" className={page === 1 ? "circle_btn": ""} disabled="disabled">2</a>
                        <p>Step 2</p>
                    </div>
                    <div className="stepwizard-step">
                        <a href="#step-3" type="button" className={stepInfo.map((item)=> item.isCompleted === 'true' ? "circle_btn" : "")} disabled="disabled">3</a>
                        <p>Step 3</p>
                    </div> */}
                        </div>
                    </div>

                    <form className='w-50'>
                        {
                            page === 0 ? <div className="row setup-content" id="step-1">
                                <div className="col-xs-6 col-md-offset-3">
                                    <div className="col-md-12" style={{ lineHeight: 1.5 }}>

                                        <h3 className='mb-3'> {stepInfo[page].title}</h3>
                                        <div className="form-group">
                                            <label className="control-label">Full Name</label>
                                            <input maxLength="100" type="text" required="required" className="form-control" onChange={(e) => setFullName(e.target.value)} value={fullName ? fullName : ""} />
                                        </div>
                                        <div>
                                            <label className="control-label">Type </label>
                                            <Form.Select aria-label="Default select example" onChange={(e) => setSubType(e.target.value)} value={subType ? subType : ""}>
                                                <option value="owner">Owner</option>
                                                <option value="manager">Manager</option>
                                            </Form.Select>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label">Email</label>
                                            <input type="email" required="required" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email ? email : ""} />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Password</label>
                                            <input type="password" required="required" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password ? password : ""} />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Confirm Password</label>
                                            <input type="password" required="required" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword ? confirmPassword : ""} />
                                        </div>


                                        <button type="submit" className="btn w-0 btn-block mb-4 ownerRegitser__btn" onClick={(e) => handleFirstNext(e)}>
                                            Next
                                        </button>

                                    </div>
                                </div>
                            </div> : page === 1 ? <div className="row setup-content" id="step-2">
                                <div className="col-xs-6 col-md-offset-3">
                                    <div className="col-md-12" style={{ lineHeight: 2.5 }}>
                                        <h3> {stepInfo[page].title}</h3>
                                        <div className="form-group">
                                            <h6 className="control-label">Please submit orignal ID proof </h6>
                                            <p className="control-label">(aadhar_card/pan_card/driving_license)</p>
                                            <input maxLength="100" type="file" required="required" className="form-control" accept="file_extension" onChange={(e) => ChangeDocumentHandler(e)} />

                                        </div>

                                        <button type="submit" className="btn w-0 btn-block mb-4 ownerRegitser__btn" onClick={(e) => handleSecondStepPrev(e)}>
                                            Previous
                                        </button>
                                        <button type="submit" className="btn w-0 btn-block mb-4 ownerRegitser__btn" onClick={(e) => handleSecondStepNext(e)}>
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div> : page === 2 ? <div className="row setup-content" id="step-3">
                                <div className="col-xs-6 col-md-offset-3">
                                    <div className="col-md-12" style={{ lineHeight: 1.5 }}>
                                        <b>Thank You, </b>
                                        <p className='my-2'>Your documents has been submitted successfully and now under verification process.
                                            once, got verify you'll get an official mail on your provided email ID
                                            and then you'll be eligible to login and can enjoy our services. </p>


                                        <button type="submit" className="btn w-0 btn-block mb-4 ownerRegitser__btn" onClick={(e) => { e.preventDefault(); setPage(page - 1) }}
                                            disabled={page === stepInfo.length - 1} >

                                            Previous
                                        </button>
                                        <button type="submit" className="btn btn-block mb-4 ownerRegitser__btn" onClick={() => navigate('/')}>
                                            Back to Home
                                        </button>
                                    </div>
                                </div>
                            </div> : ""
                        }
                    </form>

                </div>
            }

        </>
    )
}

export default VendorRegistration

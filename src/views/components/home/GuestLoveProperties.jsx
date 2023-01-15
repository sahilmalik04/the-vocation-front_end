import React from 'react'

const GuestLoveProperties = () => {
    return (
        <div>
            <div className='container guestlove__container'>
                 <h4 className='mb-4'> Homes Guest Love </h4>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="card guestlove_list">
                            <img src="/img/466937.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Hotel Stare Miasto</p>
                                <p className="card-text">Madrid</p>
                                <p className="card-text"> Starts from $120 </p>
                                <p className="card-text"> 4 out of 5* </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className="card guestlove_list">
                            <img src="/img/466937.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='card-text'> Martim Arte Hotel </p>
                                <p className='card-text'> London </p>
                                <p className='card-text'> Starts from $110 </p>
                                <p className='card-text'> 4 out of 5* </p>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-4'>
                        <div className="card guestlove_list">
                            <img src="/img/466937.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className='card-text'> Ibis Hotel </p>
                                <p className='card-text'> Paris </p>
                                <p className='card-text'> Starts from $120 </p>
                                <p className='card-text'> 5 out of 5* </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default GuestLoveProperties

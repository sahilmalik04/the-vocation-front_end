import React from 'react'

const FeaturedCountries = () => {
    return (
        <div>
            <div className='container featuredCountries__container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="card bg-dark text-white">
                            <img src="/img/466937.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Madrid</h5>
                                <p className="card-text">15 Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card bg-dark text-white">
                            <img src="/img/466937.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">London</h5>
                                <p className="card-text">25 properties</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card bg-dark text-white">
                            <img src="/img/466937.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Austin</h5>
                                <p className="card-text">25 properties</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturedCountries

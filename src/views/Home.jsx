import React from 'react'
import NavbarHome from './layout/NavbarHome'
import FeaturedCountries from './components/home/FeaturedCountries'
import FilterSearch from './components/home/FilterSearch'
import GuestLoveProperties from './components/home/GuestLoveProperties'

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  
    return (
        <div>
            <NavbarHome />
            <FilterSearch />
            <FeaturedCountries />
            <GuestLoveProperties />
        </div >
    )
}

export default Home

import React from 'react'
import Header from './Header/Header'
import Heropage from './Hero/Heropage'
import Destination from '../components/Destination/Destination'
import Feature from '../components/Feature/Feature'
import TourPackages from '../components/TourPackages/TourPackages'
import PopularCountries from '../components/PopularContries/PopularCountries'
import Testimonials from '../components/Testimonials/Testimonials'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footer/Footer'
import Footer2 from '../components/Footer/Footer2'


function MainPage() {
  return (
    <div className='relative'>
      <div className='absolute top-[422px]'>
        <img src="https://svgshare.com/i/16GJ.svg" />
      </div>
      <div>
        <Header />
        <Heropage />
        <Destination />
        <Feature />
        <TourPackages />
        <PopularCountries />
        <Testimonials />
        <Blog />
        <Footer />
        <Footer2 />
      </div>
    </div>
  )
}

export default MainPage

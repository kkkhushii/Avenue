import React from 'react'
import Header from './Header/Header'
import Heropage from './Hero/Heropage'
import Destination from '../components/Destination/Destination'
import Feature from '../components/Feature/Feature'
import TourPackages from '../components/TourPackages/TourPackages'
import PopularCountries from '../components/PopularContries/PopularCountries'

function MainPage() {
  return (
    <div>
      <Header />
      <Heropage />
      <Destination />
      <Feature />
      <TourPackages />
      <PopularCountries />
    </div>
  )
}

export default MainPage

import React from 'react'
import Header from './Header/Header'
import Heropage from './Hero/Heropage'
import Destination from '../components/Destination/Destination'
import Feature from '../components/Feature/Feature'

function MainPage() {
  return (
    <div>
      <Header />
      <Heropage />
      <Destination />
      {/* <Feature /> */}

    </div>
  )
}

export default MainPage

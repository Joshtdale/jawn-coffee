import React from 'react'
import { FadeIn } from './FadeIn'

function HomeCard() {
  return (
    <FadeIn>
      <div id='home' className='homeCard'>
        <div className='jumbotron'></div>
      </div>
    </FadeIn>
  )
}

export default HomeCard
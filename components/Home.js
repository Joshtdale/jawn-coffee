import React from 'react'

function HomeCard(props) {
  return (
    <div id={props.id} className='homeCard'>{props.id}</div>
  )
}

export default HomeCard
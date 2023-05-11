import React from 'react'

function Restaurants() {
  return (
    <div className='card-container' style={{width:260,height:150,display:'flex' }}>
      <img src='/best-restaurants.jpg' alt='' style={{width:80,height:150,overflow:'hidden'}}/>
      <div className='card-body'>
         <h1>Restaurants</h1>
         <p>Popular spots to eat & drink</p>
      </div>
    </div>
  )
}

export default Restaurants
import React from 'react'

function Adventures() {
  return (
    <div className='card-container' style={{width:250,height:150,display:'flex' }}>
        <img src='/banniere_190.jpg' alt='' style={{width:80,height:150,overflow:'hidden'}}/>
        <div className='card-body'>
            <h1>Adventures</h1>
            <p>Hosted trips including lodging</p>
        </div>
    </div>
  )
}

export default Adventures
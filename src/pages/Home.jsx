import React from 'react'

function Home({currentUser}) {

  return (
    <div className='home-container'>
        <h1>Welcome {currentUser.fName}</h1>
    </div>
  )
}

export default Home
import React from 'react'

function Home({currentUser, setUserEmail, setUserPassword, setIsloggedIn}) {
  
  const logout = () => {
    setUserEmail('')
    setUserPassword('')
    setIsloggedIn(false)
  }

  return (
    <div className='home-container'>
        <h1>Welcome {currentUser.fName} {currentUser.lName}!</h1>
        <button className='btn btn-primary' onClick={logout}>Log Out</button>
    </div>
  )
}

export default Home
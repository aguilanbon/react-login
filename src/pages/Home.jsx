import React from 'react'
import toast from 'react-hot-toast'

function Home({ currentUser, setUserEmail, setUserPassword, setIsloggedIn }) {

  const logout = () => {
    setUserEmail('')
    setUserPassword('')
    setIsloggedIn(false)

    toast.success('Okay go, Goodbye!', {
      icon: '👋',
      duration: 4000
    })
  }

  return (
    <div className='home-container'>
      <h1>Welcome {currentUser.fName} {currentUser.lName}!</h1>
      <button className='btn btn-primary' onClick={logout}>Log Out</button>
    </div>
  )
}

export default Home
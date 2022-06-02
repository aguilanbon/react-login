import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
function Form({setIsloggedIn, setCurrentUser, userEmail,setUserEmail, userPassword, setUserPassword}) {

    return (
        <div className='login-container'>
            <Routes>
                <Route path='/' element={<Login setIsloggedIn={setIsloggedIn} setCurrentUser={setCurrentUser} userEmail={userEmail} setUserEmail={setUserEmail} userPassword={userPassword} setUserPassword={setUserPassword} />}></Route>
                <Route path='/user/signup' element={<Signup />}></Route>
            </Routes>
        </div>
    )
}

export default Form
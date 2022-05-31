import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
function Form({setIsloggedIn, setCurrentUser}) {

    return (
        <div className='login-container'>
            <Routes>
                <Route path='/' element={<Login setIsloggedIn={setIsloggedIn} setCurrentUser={setCurrentUser}/>}></Route>
                <Route path='/user/signup' element={<Signup />}></Route>
            </Routes>
        </div>
    )
}

export default Form
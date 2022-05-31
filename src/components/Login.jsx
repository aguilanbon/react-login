import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Login({setIsloggedIn, setCurrentUser}) {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3001/users')
        const data = await response.json()
        setUsers(data)
    }
    
    const loginHandler = (email, password) => {
       const found = users.find(emailName => emailName.email === email)

       if(found) {
           if(found.password === password) {
               console.log('pass');
               setError('')
               setIsloggedIn(true)
               setCurrentUser(found)
           } else {
                setError('Email or Password incorrect')
                setUserEmail('')
                setUserPassword('')
           }
       } else {
            setError('Email or Password incorrect')
            setUserEmail('')
            setUserPassword('')
       }
       
    }

    const submitHandler = () => {
        loginHandler(userEmail, userPassword)
    }
    

    useEffect(() => {
        fetchUsers()
    }, [])
    

    return (
        <div className='login-container'>
            <form onSubmit={(e) => {
                e.preventDefault()
                submitHandler()}}>
                <div className="mb-3">
                    {error ? <p style={errorStyle}>{error}</p> : ''}
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setUserEmail(e.target.value)} value={userEmail}></input>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setUserPassword(e.target.value)} value={userPassword} autoComplete="false"></input>
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
                <div className="mb-3" style={toSignUp}>
                    <footer>Not Signed Up yet? <Link to='/user/signup' >Click Here</Link></footer>
                </div>
            </form>
        </div>
    )
}

const toSignUp = {
    marginTop: '1em',
    fontSize: '.8em'
}

const errorStyle = {
    color: 'red'
}

export default Login
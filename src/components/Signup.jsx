import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Signup() {

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userSignupSuccess, setUserSignupSuccess] = useState(false)
  const [signUpError, setSignUpError] = useState('')

  const postUser = () => {
    const userSignup = {fName, lName, email, password}
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/
    let em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(fName === '' || lName === '' || email === '' || password === '') {
      setSignUpError('Please complete form')
    }
    if(!em.test(email)) {
      setSignUpError('Invalid email')
    }
    if(!re.test(password)) {
      setSignUpError('Password must contain atleat 1 Uppercase, Number and must be 6 characters long')
    }
    else if (fName && lName && em.test(email) && re.test(password)){
      fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify(userSignup)
    })
      setUserSignupSuccess(true)
    }
  }

  return (
    <div className='signup-container'>
      {userSignupSuccess ?
        <div className="col-mb-12 signup-success">
          <p>Success! You may now <Link to='/'>Log in</Link> </p>
        </div>
        :
        <div style={{maxWidth: '40%', margin: '0 auto'}}>
          {signUpError ? <p style={{padding: '1em', borderRadius: '.5em'}} className="bg-danger text-white">{signUpError}</p> : ''}
        <form className="row g-3 needs-validation" onSubmit={(e) => {
          e.preventDefault()
          postUser()
        }} noValidate>
            <div className="col-mb-3">
                <label htmlFor="validationCustom01" className="form-label">First name</label>
                <input type="text" className="form-control" id="validationCustom01" onChange={e => setFName(e.target.value)} value={fName} required></input>
            </div>
            <div className="col-mb-3">
                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                <input type="text" className="form-control" id="validationCustom02" onChange={e => setLName(e.target.value)} value={lName} required></input>
            </div>
            <div className="col-mb-3">
                <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" onChange={e => setEmail(e.target.value)} value={email} required></input>
                </div>
            </div>
            <div className="col-mb-3">
                    <label htmlFor="validationCustomPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" onChange={e => setPassword(e.target.value)} value={password} autoComplete="false" required></input>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </div>
        </form>
        </div>
      }
    </div>
  )
}



export default Signup
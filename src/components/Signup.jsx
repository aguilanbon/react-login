import React, { useState } from 'react'

function Signup() {

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const postUser = () => {
    const userSignup = {fName, lName, email, password}

    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify(userSignup)
    })
  }

  return (
    <div className='signup-container'>
        <form className="row g-3 needs-validation" onSubmit={(e) => {
          e.preventDefault()
          postUser()
        }} noValidate>
            <div className="col-mb-3">
                <label htmlFor="validationCustom01" className="form-label">First name</label>
                <input type="text" className="form-control" id="validationCustom01" onChange={e => setFName(e.target.value)} value={fName} required></input>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-mb-3">
                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                <input type="text" className="form-control" id="validationCustom02" onChange={e => setLName(e.target.value)} value={lName} required></input>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-mb-3">
                <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" onChange={e => setEmail(e.target.value)} value={email} required></input>
                <div className="invalid-feedback">
                    Please choose a username.
                </div>
                </div>
            </div>
            <div className="col-mb-3">
                    <label htmlFor="validationCustomPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" onChange={e => setPassword(e.target.value)} value={password} autoComplete="false"></input>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </div>
        </form>
    </div>
  )
}


(() => {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


export default Signup
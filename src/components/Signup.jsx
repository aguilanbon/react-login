import React from 'react'

function Signup() {
  return (
    <div className='signup-container'>
        <form className="row g-3 needs-validation" novalidate>
            <div className="col-mb-3">
                <label htmlFor="validationCustom01" className="form-label">First name</label>
                <input type="text" className="form-control" id="validationCustom01" required></input>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-mb-3">
                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                <input type="text" className="form-control" id="validationCustom02" required></input>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-mb-3">
                <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                <div className="invalid-feedback">
                    Please choose a username.
                </div>
                </div>
            </div>
            <div className="col-12">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                    You must agree before submitting.
                </div>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </div>
        </form>
    </div>
  )
}


(() => {
  'use strict'

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
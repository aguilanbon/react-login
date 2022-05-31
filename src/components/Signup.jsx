import React from 'react'

function Signup() {
  return (
    <div style={{maxWidth: '50%', margin: '0 auto'}}>
        <form className="row g-3 needs-validation" novalidate>
            <div className="col-mb-3">
                <label for="validationCustom01" className="form-label">First name</label>
                <input type="text" className="form-control" id="validationCustom01" required></input>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-mb-3">
                <label for="validationCustom02" className="form-label">Last name</label>
                <input type="text" className="form-control" id="validationCustom02" required></input>
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className="col-mb-3">
                <label for="validationCustomUsername" className="form-label">Username</label>
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
                <label className="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                    You must agree before submitting.
                </div>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    </div>
  )
}


export default Signup
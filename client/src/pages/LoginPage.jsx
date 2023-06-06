import React from 'react'
import { Link } from "react-router-dom";


function LoginPage() {
  return (
<section className="text-center text-lg-start bg-light">
  {/* <!-- Jumbotron --> */}
  <div className="container py-4">
    <div className="d-flex justify-center align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0 mx-auto">
        <div className="card cascading-right" style={{
            background: "hsla(0, 0%, 100%, 0.55)",
            backdropFilter: "blur(30px)",
            }}>
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Sign up now</h2>
            <form>
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}

              {/* <!-- Email input --> */}
              <div className="form-outline w-75 mx-auto mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" for="form3Example3">Email address</label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline w-75 mx-auto mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" for="form3Example4">Password</label>
              </div>

              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label className="form-check-label" for="form2Example33">
                  Save Acount For Me
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <Link to={"/"}>
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign up
              </button>
              </Link>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>or Register First:</p>
                <Link to={"/register"}>
                <a href="">Register</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default LoginPage
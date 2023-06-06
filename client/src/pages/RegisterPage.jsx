import React from 'react'
import { Link } from "react-router-dom";


export default function RegisterPage() {
  return (
    <section className="text-center text-lg-start bg-light">
  <div className="container py-4">
    <div className="d-flex justify-center align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0 mx-auto">
        <div className="card cascading-right" style={{
            background: "hsla(0, 0%, 100%, 0.55)",
            backdropFilter: "blur(30px)",
            }}>
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Register now</h2>
            <form>
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" for="form3Example3">Email address</label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" for="form3Example4">Password</label>
              </div>

              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label className="form-check-label" for="form2Example33">
                  Subscribe to our Products
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <Link to={"/login"}>
                <button type="submit" className="btn btn-primary btn-block mb-4">
                Register
                </button>
              </Link>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>I have an acount :</p>
                <Link to={"/login"}>
                <a href="">Sign up</a>
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

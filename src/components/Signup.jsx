import React, { useRef } from "react";
import useGetUser from "../hooks/useGetUser";

function Signup() {

  const userContext=useGetUser();

  const refSignInps=useRef({
    name:null, 
    email: null,
    password: null,
  })

  const signUp = (e) => {
    e.preventDefault();
    let email = refSignInps.current.email.value;
    let userExists = userContext.users.find((ele) => ele.email === email);
    if (userExists !== undefined) {
      return;
    }
  };

  return (
    <div className="signin mx-auto card p-4 my-4 border-0">
      <h4 className="card-title">Sign Up</h4>
      <form
        className="mt-2"
        onSubmit={(e) => {
          signUp(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
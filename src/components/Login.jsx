import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./Parent";

function Login() {
  const navigate = useNavigate();
  const { state, setState } = useContext(AppContext);
  
  // an object to display any messages to user as an alert
  const [msg, setMsg] = useState({ type: "", value: "" });

  const refSignInps = useRef({
    email: null,
    password: null,
  });

  //fn to let a user sign in 
  const signIn = (e) => {
    e.preventDefault();
    let email = refSignInps.current.email.value;
    let password = refSignInps.current.password.value;

    let found = state.users.find((ele) => ele.email === email);
    if (found !== undefined) {
      if (found.password === password) {
        setMsg({ value: "Sign In successful", type: "success" });
        setState({ ...state, user: found });
        navigate("/");
      } else {
        setMsg({ value: "Password did not match!", type: "danger" });
      }
    } else {
      setMsg({ value: "User Not found!", type: "danger" });
    }
  };

  return (
    <>
      <div className="signin mx-auto card p-4 my-4 border-0">
        {msg.value !== "" && (
          <span className={`alert alert-${msg.type} shorttxt`} role="alert">
            {msg.value}
          </span>
        )}
        <h4 className="card-title">Log In</h4>
        <form
          className="mt-2"
          onSubmit={(e) => {
            signIn(e);
          }}
        >
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              ref={(ele) => (refSignInps.current.email = ele)}
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              ref={(ele) => (refSignInps.current.password = ele)}
              type="password"
              className="form-control"
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Log In
          </button>
        </form>
        <span className="d-flex align-items-center mt-3 gap-1">
          New user?
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </>
  );
}

export default Login;

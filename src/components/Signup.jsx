import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./Parent";

function Signup() {
  const { state, setState } = useContext(AppContext);
  // an object to handle any errors in input fields 
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // an object to display any messages to user as an alert
  const [msg, setMsg] = useState({ type: "", value: "" });

  const refSignInps = useRef({
    name: null,
    email: null,
    password: null,
  });

  // fn to let a user sign up
  const signUp = (e) => {
    e.preventDefault();
    let objErrors = { ...formErrors };
    let email = refSignInps.current.email.value;
    let userExists = state.users.find((ele) => ele.email === email);
    if (userExists !== undefined) {
      setMsg({ type: "danger", value: "User already exists! Sign In." });
    } else {
      // ternary conditions are used for reseting error values in objErrors object for each input
      objErrors.name = refSignInps.current.name.value.match(
        /^[A-Za-z]+([A-Za-z]+)*/
      )
        ? ""
        : "Enter a valid name.";
      objErrors.email = refSignInps.current.email.value.match(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      )
        ? ""
        : "Enter a valid email id";
      objErrors.password = refSignInps.current.password.value.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      )
        ? ""
        : "Password must contain minimum 8 characters with minimum 1 lowercase,uppercase,number and a special character.";
    }
    setFormErrors({ ...objErrors });

    // Array every method is used to check for any non-empty values in objError object
    let noErrorExists = Object.values(objErrors).every((ele) => ele === "");
    if (noErrorExists) {
      let user = {
        name: refSignInps.current.name.value,
        email: refSignInps.current.email.value,
        password: refSignInps.current.password.value,
      };
      setState({ ...state, users: [...state.users, user] });
      setMsg({ type: "success", value: "Sign Up successful!" });
      e.currentTarget.reset();
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
        <h4 className="card-title">Sign Up</h4>
        <form
          className="mt-2"
          onSubmit={(e) => {
            signUp(e);
          }}
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              ref={(ele) => {
                refSignInps.current.name = ele;
              }}
              className="form-control"
              required
            />
            <span className="text-danger shorttxt">{formErrors.name}</span>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              ref={(ele) => {
                refSignInps.current.email = ele;
              }}
              type="email"
              className="form-control"
              required
            />
            <span className="text-danger shorttxt">{formErrors.email}</span>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              ref={(ele) => {
                refSignInps.current.password = ele;
              }}
              type="password"
              className="form-control"
              required
            />
            <span className="text-danger shorttxt lh-sm d-block">
              {formErrors.password}
            </span>
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Sign Up
          </button>
        </form>
        <span className="d-flex align-items-center mt-3 gap-1">
          Already a user?
          <Link to="/login">Log In</Link>
        </span>
      </div>
    </>
  );
}

export default Signup;

import React, { useContext } from "react";
import { AppContext } from "./Parent";

function Profile() {
  const { state, setState } = useContext(AppContext);

  return (
    <div className="p-4 m-4 border-0 shadow-sm bg-white">
      <h4 className="mb-2">Welcome {state.user ? state.user.name : ""}</h4>
      <button
        onClick={() => {
          setState({ ...state, user: undefined });
        }}
        className="btn btn-primary"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;

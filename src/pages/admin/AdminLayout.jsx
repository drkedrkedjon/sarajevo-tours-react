import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  function handleLogOut() {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("Auth-Token");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <h1>Top Secret !!!</h1>;
      <button onClick={handleLogOut} className="btn btn-green">
        Log out
      </button>
    </>
  );
}

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  function handleLogOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="background-color-home sasa">
      <div className="home-layout">
        <header className="admin-header">
          <Link className="underline fs-500" to={"/"}>
            {"<< Home"}
          </Link>
          <button onClick={handleLogOut} className="btn btn-blue">
            Log out
          </button>
        </header>
        <nav>
          <ul className="admin-nav">
            <li>
              <NavLink
                to={"."}
                end
                className={({ isActive }) =>
                  isActive
                    ? "nav-admin-link nav-admin-link-active"
                    : "nav-admin-link"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"products"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-admin-link nav-admin-link-active"
                    : "nav-admin-link"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"income"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-admin-link nav-admin-link-active"
                    : "nav-admin-link"
                }
              >
                Income
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

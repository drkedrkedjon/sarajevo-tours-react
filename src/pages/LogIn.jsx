import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function LogIn() {
  return (
    <div className="background-color-home">
      <div className="home-layout home-layout-blue">
        <Header color="color-orange" />

        <div className="form-container box-shadow-blue">
          <div className="form-contact">
            <h1 className="fs-700 ff-title color-white text-shadow-pink">
              Admin log-in
            </h1>

            <div className="name-email">
              <div className="label-container">
                <label htmlFor="email">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="label-container">
                <label htmlFor="password">Password</label>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </div>

            <Button color="blue" title="Log in" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

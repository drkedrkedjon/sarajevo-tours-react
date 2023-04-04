import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="background-color-home">
      <div className="home-layout home-layout-blue">
        <Header color="color-orange" />

        <div className="form-container box-shadow-blue">
          <form className="form-contact" action="">
            <h1 className="fs-700 ff-title color-white text-shadow-pink">
              Contact me
            </h1>

            <div className="name-email">
              <div className="label-container">
                <label htmlFor="name">name</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="label-container">
                <label htmlFor="email">email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>

            <div className="label-container">
              <label htmlFor="message">message</label>
              <textarea
                className="form-input"
                name="message"
                id="message"
                cols="20"
                rows="5"
              />
            </div>

            <button className="btn btn-green">Send message</button>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((oldData) => {
      return { ...oldData, [name]: value };
    });
  }

  function handleSuccess() {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSuccess(true);
  }

  // Netlify Forms Connection

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(handleSuccess())
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className="background-color-home">
      <div className="home-layout home-layout-blue">
        <Header color="color-orange" />

        <div className="form-container box-shadow-blue">
          {!isSuccess ? (
            <form className="form-contact" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <h1 className="fs-700 ff-title color-white text-shadow-pink">
                Contact
              </h1>

              <div className="name-email">
                <div className="label-container">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-input"
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="label-container">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-input"
                    onChange={handleChange}
                    value={formData.email}
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>

              <div className="label-container">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-input"
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  id="message"
                  cols="20"
                  rows="5"
                />
              </div>

              <Button color="blue" title="Send message" />
            </form>
          ) : (
            <>
              <h1 className="fs-700 ff-title color-white text-shadow-pink">
                Success!
              </h1>
              <p>
                Your message have been received. Thank you, you can{" "}
                <a className="underline" href="/">
                  return to home page
                </a>
              </p>
            </>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}

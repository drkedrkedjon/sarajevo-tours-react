import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function LogIn() {
  const navigate = useNavigate();
  const [problemMessage, setProblemMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => navigate("/admin"))
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setProblemMessage("User not found or password is incorect...");
      });

    setFormData({
      email: "",
      password: "",
    });
  }

  return (
    <div className="background-color-home">
      <div className="home-layout home-layout-blue">
        <Header color="color-orange" />

        <form
          onSubmit={handleOnSubmit}
          className="form-container box-shadow-blue"
        >
          <div className="form-contact">
            <h1 className="fs-700 ff-title color-white text-shadow-pink">
              Admin log-in
            </h1>
            {problemMessage && <p>{problemMessage}</p>}

            <div className="name-email">
              <div className="label-container">
                <label htmlFor="email">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleForm}
                />
              </div>
              <div className="label-container">
                <label htmlFor="password">Password</label>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleForm}
                />
              </div>
            </div>

            <Button color="blue" title="Log in" />
          </div>
        </form>

        <Footer />
      </div>
    </div>
  );
}

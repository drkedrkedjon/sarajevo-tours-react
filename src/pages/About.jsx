import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardHomePage from "../components/CardHomePage";

export default function LogIn() {
  return (
    <div className="background-color-home">
      <div className="home-layout home-layout-blue">
        <Header color="color-orange" />

        <div className="form-container box-shadow-blue">
          <div className="form-contact">
            <h1 className="fs-700 ff-title color-white text-shadow-pink">
              Details about this proyect, tech stack, chalenges & solutions.
              Link to my portfolio. Looking for a junior employment oportunity.
            </h1>
          </div>
        </div>
        <article className="about-container color-white">
          <h1>Web site app of fake GPS tourist guides online shop.</h1>
          <h3>
            Practicas React 18, React router 6, Firebase auth. y Firestore
            database as backend.
          </h3>
          <div className="about-card">
            <CardHomePage
              card={{
                url: "https://bubulazy.com",
                title: "Visit My Portfolio",
                summary:
                  "If you are interested to learn more about me and check my other projects and perhaps get in touch so we can make it work for both, feel free to check now. Looking for a junior employment oportunity. Thank you in advance.",
                imgUrl: "/assets/images/retrato-sasa.png",
              }}
            />
          </div>
          <div className="parafo flow">
            <h4>Workplace</h4>

            <p>Visual Studio Code. Vite with EsLint & Prettier plugins.</p>

            <h4>Figma</h4>
            <p>Design, UI and UX.</p>
            <p>
              I have used Figma app to lay down graphic design and basic UX/UI
              functionality. You can see original design file in new tab{" "}
              <a
                href="https://www.figma.com/file/9a4MCgZuUR64tJ5AY8h1sR/Seher-Tours?node-id=0%3A1&t=CB0DYD4pkOpOJ0Lk-1"
                target="blank"
              >
                if you click here
              </a>
            </p>

            <h4>CSS</h4>
            <p>
              Flexbox, Grid, Container Query, Variable fonts, Custom properties,
              Clip-path...
            </p>
            <p>
              Transforming design into real web app was done using modern CSS
              properties. For Layout I've used flexbox and grid and also the new
              container query api that was really fun to learn and use. Some
              experimentation with clip-path and variable fonts. Custom
              properties as must and many other...
            </p>

            <h4>React Router</h4>
            <p>
              Nested Routes, Relative Path, Outlet, Query parameters,
              useLocation, useNavigate...
            </p>
            <p>
              Use of react routes for all navigation in app. Relative routes,
              nested routes, loading nested routes in outlet by default using
              index. Query parameters for filtering data, useLocation for
              catching route. Link, NavLink components for links. isActive on
              NavLinks. useNavigate for redirection if user is not
              authenticated, etc...
            </p>

            <h4>React</h4>
            <p>
              Components, Props, Conditional rendering, Stateful Forms,
              useEffect, useState, createContext, useRef...
            </p>
            <p>
              React components, passing props to components. Some of them like
              Button were reusable. Use of conditional rendering in many places.
              Stateful forms with two way directional form control via value &
              onChange. useEffect for network query and some other
              opportunities. useState, useRef. React context in two places, one
              for holding data and second for shopping cart.
            </p>

            <h4>Firebase</h4>
            <p>
              Iniciate app, getFirestore() colection(), getDocs().
              Authenticacion, onAuthStateChanged, signInWithEmailAndPassword
              etc...
            </p>
            <p>
              Firebase Firestore connection. Initiate app, get data form
              collection. Since the data set is very small and I was learning to
              filter data in router anyway I am loading everything at once and
              in one react context. For sure in more serious app the data will
              be downloaded from firebase as needed by filtering in getDocs().
              Authentication, sign in with email and password and
              onAuthStateChanged listener to let logged user enter in protected
              area (routes). Login and logoff.
            </p>

            <h4>Netlify</h4>
            <p>
              Form submission, Redirect for pushState in react. GitHub
              deployment
            </p>
            <p>
              Connection of my react controlled form to Netlify forms for
              processing, Redirect rules for solving problem with pushState in
              react. Continuous deployment via GitHub
            </p>

            <h4>Extras</h4>
            <p>ReactMarkdown, vite-plugin-svgr</p>
            <p>
              Use of two extras, Reach Markdown for processing markdown as
              string, and other for importing svg files in vite.
            </p>

            <h4>Git</h4>
            <p>Commits, Branches, Merge, Restore, push</p>
          </div>
          <img src="/assets/images/products/ski/ja-pi-2.jpg" alt="sdasdasd" />
        </article>
        <Footer />
      </div>
    </div>
  );
}

{
  /* <h3>Workplace</h3>

<p>Visual Studio Code. Vite with EsLint & Prettier plugins.</p>

<h4>Figma</h4>
<p>Design, UI and UX.</p>
<p>
  I have used Figma app to lay down graphic design and basic UX/UI
  functionality. You can see original design file [ by clicking
  here...](https://www.figma.com/file/9a4MCgZuUR64tJ5AY8h1sR/Seher-Tours?node-id=0%3A1&t=CB0DYD4pkOpOJ0Lk-1)
</p>

<h4>CSS</h4>
<p>
  Flexbox, Grid, Container Query, Variable fonts, Custom properties,
  Clip-path...
</p>
<p>
  Transforming design into real web app was done using modern CSS
  properties. For Layout I've used flexbox and grid and also the new
  container query api that was really fun to learn and use. Some
  experimentation with clip-path and variable fonts. Custom
  properties as must and many other...
</p>

<h4>React Router</h4>
<p>
  Nested Routes, Relative Path, Outlet, Query parameters,
  useLocation, useNavigate...
</p>
<p>
  Use of react routes for all navigation in app. Relative routes,
  nested routes, loading nested routes in outlet by default using
  index. Query parameters for filtering data, useLocation for
  catching route. Link, NavLink components for links. isActive on
  NavLinks. useNavigate for redirection if user is not
  authenticated, etc...
</p>

<h4>React</h4>
<p>
  Components, Props, Conditional rendering, Stateful Forms,
  useEffect, useState, createContext, useRef...
</p>
<p>
  React components, passing props to components. Some of them like
  Button were reusable. Use of conditional rendering in many places.
  Stateful forms with two way directional form control via value &
  onChange. useEffect for network query and some other
  opportunities. useState, useRef. React context in two places, one
  for holding data and second for shopping cart.
</p>

<h4>Firebase</h4>
<p>
  Iniciate app, getFirestore() colection(), getDocs().
  Authenticacion, onAuthStateChanged, signInWithEmailAndPassword
  etc...
</p>
<p>
  Firebase Firestore connection. Initiate app, get data form
  collection. Since the data set is very small and I was learning to
  filter data in router anyway I am loading everything at once and
  in one react context. For sure in more serious app the data will
  be downloaded from firebase as needed by filtering in getDocs().
  Authentication, sign in with email and password and
  onAuthStateChanged listener to let logged user enter in protected
  area (routes). Login and logoff.
</p>

<h4>Netlify</h4>
<p>
  Form submission, Redirect for pushState in react. GitHub
  deployment
</p>
<p>
  Connection of my react controlled form to Netlify forms for
  processing, Redirect rules for solving problem with pushState in
  react. Continuous deployment via GitHub
</p>

<h4>Extras</h4>
<p>ReactMarkdown, vite-plugin-svgr</p>
<p>
  Use of two extras, Reach Markdown for processing markdown as
  string, and other for importing svg files in vite.
</p>

<h4>Git</h4>
<p>Commits, Branches, Merge, Restore, push</p> */
}

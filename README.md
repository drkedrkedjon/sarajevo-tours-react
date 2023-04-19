# Web site app of fake GPS tourist guides online shop.

## Practicas React 18, React router 6, Firebase auth. y Firestore database as backend.

### Workplace

Visual Studio Code. Vite with EsLint & Prettier plugins.

### Figma

Design, UI and UX.

I have used Figma app to lay down graphic design and basic UX/UI functionality. You can see original design file [ by clicking here...](https://www.figma.com/file/9a4MCgZuUR64tJ5AY8h1sR/Seher-Tours?node-id=0%3A1&t=CB0DYD4pkOpOJ0Lk-1)

### CSS

Flexbox, Grid, Container Query, Variable fonts, Custom properties, Clip-path...

Transforming design into real web app was done using modern CSS properties. For Layout I've used flexbox and grid and also the new container query api that was really fun to learn and use. Some experimentation with clip-path and variable fonts. Custom properties as must and many other...

### React Router

Nested Routes, Relative Path, Outlet, Query parameters, useLocation, useNavigate...

Use of react routes for all navigation in app. Relative routes, nested routes, loading nested routes in outlet by default using index. Query parameters for filtering data, useLocation for catching route. Link, NavLink components for links. isActive on NavLinks. useNavigate for redirection if user is not authenticated, etc...

## React

Components, Props, Conditional rendering, Stateful Forms, useEffect, useState, createContext, useRef...

React components, passing props to components. Some of them like Button were reusable. Use of conditional rendering in many places. Stateful forms with two way directional form control via value & onChange. useEffect for network query and some other opportunities. useState, useRef. React context in two places, one for holding data and second for shopping cart.

## Firebase

Iniciate app, getFirestore() colection(), getDocs(). Authenticacion, onAuthStateChanged, signInWithEmailAndPassword etc...

Firebase Firestore connection. Initiate app, get data form collection. Since the data set is very small and I was learning to filter data in router anyway I am loading everything at once and in one react context. For sure in more serious app the data will be downloaded from firebase as needed by filtering in getDocs().

Authentication, sign in with email and password and onAuthStateChanged listener to let logged user enter in protected area (routes). Login and logoff.

## Netlify

Form submission, Redirect for pushState in react. GitHub deployment

Connection of my react controlled form to Netlify forms for processing, Redirect rules for solving problem with pushState in react. Continuous deployment via GitHub

## Extras

ReactMarkdown, vite-plugin-svgr

Use of two extras, Reach Markdown for processing markdown as string, and other for importing svg files in vite.

## Git

Commits, Branches, Merge, Restore, push

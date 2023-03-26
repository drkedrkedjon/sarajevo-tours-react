import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <div className="nav-cart">
        <nav>
          <ul>
            <li>About</li>
            <li>Admin</li>
            <li>Contact</li>
          </ul>
        </nav>
        <img
          src="/assets/images/shopping-cart.svg"
          alt="Red and yellow shopping cart"
        />
      </div>
      <div>
        <h1 className="fs-700">Seher tours</h1>
      </div>
    </div>
  );
}

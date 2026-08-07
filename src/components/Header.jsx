import React, { useState } from "react";

function Navbar() {
  const [IsDrawer, setIsDrawer] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <a href="#">React Learning</a>
        </div>

        <nav className="navbar">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Contact us</a>
        </nav>

        <button
          className="header-btn"
          onClick={() => {
            setIsDrawer(!IsDrawer);
          }}
        >
          {setIsDrawer ? "Menu" : "Close"}
        </button>

        <aside style={{ display: IsDrawer ? "block" : "none" }}>
          <ul className="navbar">
            <li>
              <a href="#" className="active">Home</a>
            </li>
            <li>
              <a href="#">Topics</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </aside>
      </header>
    </>
  );
}

export default Navbar;

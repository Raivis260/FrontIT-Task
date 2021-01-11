import React from "react";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Services</li>
          <li>Clients</li>
          <li>About us</li>
          <li className="active">Members</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

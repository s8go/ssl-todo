import React from "react";

const Nav = ({ toggle, openMenu }) => {
  return (
    <nav onClick={() => toggle()}>
      {openMenu ? <p>&#10005;</p> : <p>&#9776;</p>}
    </nav>
  );
};

export default Nav;

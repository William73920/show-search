import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const LINKS = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/starred",
      text: "Starred",
    },
  ];
  return (
    <div>
      <ul>
        {LINKS.map((items) => (
          <li key={items.to}>
            <Link to={items.to}>{items.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;

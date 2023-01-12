import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to='/'>
        <button>home</button>
      </Link>
      <Link to='/books'>
        <button>books</button>
      </Link>
      <Link to='/wtf'>
        <button>wtf</button>
      </Link>
      <Link to='/wtfClass'>
        <button>wtfclass</button>
      </Link>
      <Link to='/twoway'>
        <button>TwoWay</button>
      </Link>
      <Link to='/twowayfunc'>
        <button>TwoWayFunc</button>
      </Link>
      <Link to='/ricandmorty'>
        <button>ricandmorty</button>
      </Link>
    </div>
  );
}

export default Header;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ token }) => {
  useEffect(() => {
    localStorage.getItem("token");
  }, [token]);

  return (
    <div className="nav-bar-container">
      <div className="link_container">
        <div>
          <Link to={"/"} className="nav_item">
            Home
          </Link>

          <>
            <Link to={"/sign-up"}>Sign Up</Link>
            <Link to={"/Login"}>Login</Link>
            <Link to={"/Activities"}>Activities</Link>
            <Link to={"/Routines"}>Routines</Link>
            <Link to={"/myRoutines"}>MyRoutines</Link>
          </>
        </div>
      </div>
    </div>
  );
};
 
export default NavBar;
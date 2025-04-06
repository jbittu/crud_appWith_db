import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../Hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <nav>
      <Link to="/">Workout-Buddy</Link>
      <div>
        <div className="logout">
          <button onClick={handleClick}>Logout</button>
        </div>
        {/* <div className="menu">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

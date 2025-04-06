import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../Hooks/useLogout";
import { useAuthContext } from "../../Hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <nav>
      <Link to="/">Workout-Buddy</Link>
      {user && (
        <div className="logout">
          <span>{user && user.name}</span>
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
      {!user && (
        <div className="menu">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

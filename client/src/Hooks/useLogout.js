import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate(); // Get the navigate function

  const logout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("user");

    // Dispatch the logout action
    dispatch({ type: "LOGOUT" });

    // Redirect to the login page after logging out
    navigate("/login");  // Redirect to the login page
  };

  return { logout };
};

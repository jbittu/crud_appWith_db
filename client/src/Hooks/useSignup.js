import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      // Store user data and token in localStorage
      localStorage.setItem("user", JSON.stringify(data));

      // Dispatch login action
      dispatch({ type: "LOGIN", payload: data });

      // Redirect after successful signup (optional)
      // Example: window.location.href = "/login";

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, error, loading };
};

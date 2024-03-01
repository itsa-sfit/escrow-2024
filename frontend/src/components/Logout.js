import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ dispatch }) => {
  const navigate = useNavigate();
  console.log("dispatch");

  useEffect(() => {
    // Perform the logout logic here
    dispatch({ type: "LOGOUT" });

    // Redirect to the "/login" route
    navigate("/login");
  }, [dispatch, navigate]);

  // You can render something if needed, or null if not necessary
  return null;
};

export default Logout;

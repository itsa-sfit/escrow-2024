import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

const Logout = () => {
  const navigate = useNavigate();
  const { dispatch } = useUserContext();
  const handleClick = () => {
    // Perform the logout logic here
    dispatch({ type: "LOGOUT" });

    // Redirect to the "/login" route
    navigate("/login");
  };
  console.log("dispatch");

  // You can render something if needed, or null if not necessary
  return (
    <button onClick={handleClick}>
      <span className="material-symbols-rounded">logout</span>
    </button>
  );
};

export default Logout;

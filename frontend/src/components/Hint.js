import React, { useState } from "react";
import { serverUrl } from "../setup";
import useUserContext from "../hooks/useUserContext";

const Hint = ({ hintText }) => {
  const [hint, setHint] = useState("");
  const { user } = useUserContext();

  const handleClick = async () => {
    setHint(hintText);
    const response = await fetch(serverUrl + "/hintcount/count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
  };

  return (
    <div className="Hint">
      <h1>{hint}</h1>
      {!hint && (
        <button
          className=""
          onClick={handleClick}
        >
          Show Hint
        </button>
      )}
    </div>
  );
};

export default Hint;

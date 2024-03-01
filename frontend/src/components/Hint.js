import React, {useState} from "react";

const Hint = ({hintText}) => {
  const [hint, setHint] = useState("");
  return (
    <div className="Hint">
      <h1>{hint}</h1>
      {!hint && (
        <button
          className=""
          onClick={() => {
            setHint(hintText);
          }}
        >
          Show Hint
        </button>
      )}
    </div>
  );
};

export default Hint;

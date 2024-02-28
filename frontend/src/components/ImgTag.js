import React from "react";

const ImgTag = ({ src }) => {
  return (
    <div>
      <img className="rounded-lg" src={src} alt="img" />
    </div>
  );
};

export default ImgTag;

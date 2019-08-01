import React from "react";

const scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px"
      }}
    >
      {children}
    </div>
  );
};

export default scroll;

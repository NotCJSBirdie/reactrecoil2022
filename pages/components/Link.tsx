import React from "react";
import { useState } from "react";

const Link = () => {
  const [status, setStatus] = useState("I am the default Link");

  const onMouseEnter = () => {
    setStatus("The mouse has entered!!");
  };

  const onMouseLeave = () => {
    setStatus("The mouse had left!!");
  };

  return (
    <div>
      <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {status}
      </a>
    </div>
  );
};

export default Link;

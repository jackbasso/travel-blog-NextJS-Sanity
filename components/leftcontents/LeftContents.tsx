import React from "react";
import Explore from "./Explore";
import About from "./About";

const LeftContents = () => {
  return (
    <div className="my-10">
      <div>
        <Explore />
        <About />
      </div>
    </div>
  );
};

export default LeftContents;

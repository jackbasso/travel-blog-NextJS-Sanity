import React from "react";
import RightContents from "./rightcontents/RightContents";
import LeftContents from "./leftcontents/LeftContents";

const Main = () => {
  return (
    <div className="md:flex md:flex-row-reverse w-[95vw] mx-auto">
      <div className="md:basis-[40%]">
        <RightContents />
      </div>
      <div className="md:basis-[60%]">
        <LeftContents />
      </div>
    </div>
  );
};

export default Main;

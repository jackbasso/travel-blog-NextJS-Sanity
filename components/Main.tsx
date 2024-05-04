import React from "react";
import RightContents from "./rightcontents/RightContents";
import LeftContents from "./leftcontents/LeftContents";

type Props = {
  posts: Post[];
};

const Main = ({ posts }: Props) => {
  return (
    <div className="md:flex md:flex-row-reverse w-[95vw] mx-auto">
      <div className="md:basis-[40%]">
        <RightContents />
      </div>
      <div className="md:basis-[60%]">
        <LeftContents posts={posts} />
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import Explore from "./Explore";
import About from "./About";
import Featured from "./Featured";

type Props = {
  posts: Post[];
};

const LeftContents = ({ posts }: Props) => {
  return (
    <div className="my-10">
      <div>
        <Explore />
        <About />
        <Featured posts={posts} />
      </div>
    </div>
  );
};

export default LeftContents;

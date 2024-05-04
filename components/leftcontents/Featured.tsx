"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  posts: Post[];
};

const Featured = ({ posts }: Props) => {
  useEffect(() => {
    console.log(posts);
  }, []);
  const filteredPost = posts.filter((post) => post.title === "Paris - La Ciudad de la Moda"); //Use the Exact title of the post you want to feature
  return (
    <div className="flex">
      <div className="md:mx-6 lg:mx-14 mb-5">
        {filteredPost.map((post) => (
          <div key={post._id} className="border border-gray-200 rounded mb-3">
            <div className="relative w-full h-80">
              <Image
                fill
                src={urlForImage(post.mainImage)}
                alt="postImage"
                className="object-cover object-left lg:object-center"
              />
            </div>
            <div className="mx-5 pb-4">
              <h2 className="mt-5 mb-2 font-semibold text-[#E7493F]">{post.title}</h2>
              <p className="line-clamp-6">{post._updatedAt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2">
        <h2 className="font-extrabold font-sans text-4xl text-center mb-10 mr-2 bg-[url('../public/assets/bgimg.jpg')] bg-clip-text text-transparent">
          TRAIN <br />
          ADVENTURE <br />
          ROUTE
        </h2>
        <p>Imagine the thrill of boarding a train setting off on an adventure where each clickkety-clack</p>
      </div>
    </div>
  );
};

export default Featured;

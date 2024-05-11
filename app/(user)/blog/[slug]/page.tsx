import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const page = async ({ params }: { params: { slug: string } }) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0] {
    ...,
    author->,
  }`;

  const post: Post = await client.fetch(query, params);
  console.log("Post: ", post);
  return (
    <div>
      <div className="relative w-full h-[75vh] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 -z-10">
          <Image
            src={urlForImage(post.mainImage)}
            fill
            alt="banner-img"
            className="object-cover object-center brightness-50"
          />
        </div>
        <div className="text-white h-full flex flex-col justify-end">
          <h1 className="text-center text-5xl pb-5">{post.title}</h1>
          <div className="flex divide-x justify-center pb-10">
            <p className="pr-2">{post.author.name}</p>
            <p className="pl-2">{post._createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;

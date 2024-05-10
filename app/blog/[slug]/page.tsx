import React from "react";
import { groq } from "next-sanity";

const page = ({ params }: { params: { slug: string } }) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0] {
    ...,
    author->,
  }`;
  return <div>Slug: {params.slug}</div>;
};

export default page;

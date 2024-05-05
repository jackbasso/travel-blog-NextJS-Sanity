import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

const query = groq`
*[_type == "post"] {
  ...,
  author->,
} | order(_createdAt desc)
`;

const page = async () => {
  const posts = await client.fetch(query, { cache: "no-store" });
  return (
    <div>
      <Header />
      <Hero />
      <Main posts={posts} />
      <Footer />
    </div>
  );
};

export default page;

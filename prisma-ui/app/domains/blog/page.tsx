import BlogContent from "@/components/domains/blog/layout/Content";
import BlogFooter from "@/components/domains/blog/layout/Footer";
import BlogHeader from "@/components/domains/blog/layout/Header";
import React from "react";

function BlogPage() {
  return (
    <>
      <BlogHeader />
      <BlogContent />
      <BlogFooter />
    </>
  );
}

export default BlogPage;

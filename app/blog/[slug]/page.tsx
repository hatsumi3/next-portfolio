import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { FC } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { getAllBlogs, BlogType } from "@/app/blog/page";

export async function generateStaticParams(): Promise<string[]> {
  const { blogs } = await getAllBlogs();
  const paths = blogs.map((blog: BlogType) => `/${blog.slug}`);
  return paths;
}

type singleBlogProps = {
  params: {
    slug: string;
  };
};

type GetSingleBlogResponse = {
  singleDocument: matter.GrayMatterFile<any>;
};

async function getSingleBlog(
  context: singleBlogProps
): Promise<GetSingleBlogResponse> {
  const { slug } = context.params;
  const data = await import(`@/data/${slug}.md`);
  const singleDocument = matter(data.default);
  return {
    singleDocument: singleDocument,
  };
}

const SingleBlog: FC<singleBlogProps> = async (props) => {
  console.log(props);
  const { singleDocument } = await getSingleBlog(props);
  return (
    <div>
      <h1>{singleDocument.data.title}</h1>
      <p>{singleDocument.data.date}</p>
      <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
    </div>
  );
};

export default SingleBlog;

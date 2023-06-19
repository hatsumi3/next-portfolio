import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export type BlogType = {
  frontmatter: {
    [key: string]: any;
  };
  slug: string;
};

export type GetAllBlogsResponse = {
  blogs: BlogType[];
};

export async function getAllBlogs(): Promise<GetAllBlogsResponse> {
  const files = fs.readdirSync(path.join("data"));
  const blogs = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileData = fs.readFileSync(path.join("data", fileName), "utf-8");
    const { data } = matter(fileData);
    return {
      frontmatter: data,
      slug: slug,
    };
  });
  const orderedBlogs = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id;
  });
  return {
    blogs: orderedBlogs,
  };
}

const Blog: FC = async () => {
  const { blogs } = await getAllBlogs();
  return (
    <>
      <h1>Blog page.</h1>
      {blogs.map((blog, index) => {
        return (
          <div key={index}>
            <h2>{blog.frontmatter.title}</h2>
            <p>{blog.frontmatter.date}</p>
            <Link href={`/blog/${blog.slug}`}>Read More</Link>
            <div>
              <Image
                src={blog.frontmatter.image}
                alt="card-image"
                height={300}
                width={1000}
                quality={90}
                priority={true}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Blog;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// interface Blog {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
// }

// export default function BlogList() {
//   // const [blogs, setBlogs] = useState<Blog[]>([]);
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   fetch("http://127.0.0.1:8000/blogs")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setBlogs(data);
//   //       setLoading(false);
//   //     })
//   //     .catch((err) => console.error("Error fetching blogs:", err));
//   // }, []);

//   // if (loading) return <p className="p-6">Loading blogs...</p>;

//   // return (
//   //   <div className="p-6">
//   //     <div className="flex justify-between items-center mb-6">
//   //       <h1 className="text-3xl font-bold">My Blogs</h1>
//   //       <Link
//   //         href="/blog/create"
//   //         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//   //       >
//   //         Write a Blog
//   //       </Link>
//   //     </div>

//   //     <div className="grid gap-6 md:grid-cols-2">
//   //       {blogs.map((blog) => (
//   //         <div
//   //           key={blog.id}
//   //           className="p-4 border rounded-lg shadow hover:shadow-lg transition"
//   //         >
//   //           <h2 className="text-xl font-bold">{blog.title}</h2>
//   //           <p className="text-gray-600 mt-2">{blog.content.slice(0, 100)}...</p>
//   //           <p className="text-sm text-gray-400 mt-2">By {blog.author}</p>
//   //           <Link
//   //             href={`/blog/${blog.id}`}
//   //             className="text-blue-500 hover:underline mt-2 block"
//   //           >
//   //             Read More →
//   //           </Link>
//   //         </div>
//   //       ))}
//   //     </div>
//   //   </div>
//   // );
// }

export default function Blogs() {
  return (
    <div>
      <h1>My Blogs</h1>
    </div>
  );
}
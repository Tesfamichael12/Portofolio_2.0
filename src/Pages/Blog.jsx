import React from "react";

const blogPosts = [
  {
    title: "How to Get Started with the MERN Stack",
    date: "2024-06-01",
    summary:
      "A beginner's guide to building full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
    link: "#",
  },
  {
    title: "Building REST APIs with Django and DRF",
    date: "2024-05-15",
    summary:
      "Best practices for designing scalable REST APIs using Django and Django REST Framework.",
    link: "#",
  },
  {
    title: "Competitive Programming: Tips for Success",
    date: "2024-04-20",
    summary:
      "Strategies and resources for excelling in competitive programming and coding interviews.",
    link: "#",
  },
  {
    title: "AI for Speech Detection and Translation",
    date: "2024-03-10",
    summary:
      "Exploring the latest AI models for speech recognition and language translation.",
    link: "#",
  },
];

const Blog = () => (
  <div className="min-h-screen bg-[#030014] px-[5%] sm:px-[5%] lg:px-[10%] py-16 text-white">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
        Tech Insights & Blog
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto mt-2 text-base sm:text-lg">
        Sharing knowledge, tutorials, and thoughts on software engineering, AI,
        and the African tech ecosystem.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {blogPosts.map((post, idx) => (
        <div
          key={idx}
          className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            {post.title}
          </h3>
          <p className="text-sm text-gray-400 mb-2">{post.date}</p>
          <p className="text-gray-300 mb-4">{post.summary}</p>
          <a
            href={post.link}
            className="text-[#a855f7] hover:underline font-medium"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;

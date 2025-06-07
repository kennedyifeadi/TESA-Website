import React from "react";
import { motion } from "framer-motion";
import TesaLogo from "../assets/images/logo.png"

const extractFirstImage = (htmlString) => {
  if (!htmlString) return null;
  const imgRegex = /<img[^>]+src="([^">]+)"/i;
  const match = imgRegex.exec(htmlString);
  return match ? match[1] : null;
};

export const PressNews = ({ posts }) => {
  const items = Array.from({ length: 4 }, (_, index) => {
    const post = posts?.[index];
    const extractedImage = extractFirstImage(post?.content || "");

    return {
      image: extractedImage,
      title: post?.title || `Breaking News ${index + 1}`,
      description: post?.description
        ? post.description.slice(0, 150).replace(/<[^>]+>/g, "")
        : `This is a sample description for news article ${index + 1}. It provides a brief overview of the story.`,
      link: post?.link || "#",
      date: post?.pubDate
        ? new Date(post.pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
    };
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <a
              href={item.link}
              className="block group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || TesaLogo}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] text-green-800 font-medium uppercase tracking-wide"
                    style={{
                      backgroundColor: "#d4f7d4", 
                      padding: "0.15rem 0.5rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {item.date}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Read more
                  </span>
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

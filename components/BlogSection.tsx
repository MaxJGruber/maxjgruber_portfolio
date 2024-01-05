import { useState, useEffect } from "react";
import Link from "next/link";
import { getMediumFeed } from "@/apihandlers/mediumApi";
import moment from "moment";

interface BlogObject {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  author: string;
  categories: string[];
  thumbnail: string;
}

const BlogSection = () => {
  const [articles, setArticles] = useState<Array<BlogObject>>([]);
  useEffect(() => {
    if (!articles.length) {
      getMediumFeed().then((response) => setArticles(response.items));
    }
  }, [articles.length]);

  return (
    <div className="bg-white pb-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {articles.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden post"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.thumbnail}
                  alt="Medium article"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center">
                  <div>
                    <div className="mt-0 mb-2">
                      <Link
                        href={post.link}
                        className="my-5 text-base font-semibold text-medium-logo-blue hover:text-dark-logo-blue"
                      >
                        Read full story
                      </Link>
                    </div>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.pubDate}>
                        {moment(post.pubDate).format("dddd, MMMM Do YYYY")}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>4 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

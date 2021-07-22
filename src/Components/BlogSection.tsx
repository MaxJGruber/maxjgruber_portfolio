import { getMediumFeed } from "../ApiHandlers/mediumApi";
import { useState, useEffect } from "react";
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

export default function BlogSection() {
  const [articles, setArticles] = useState<Array<BlogObject>>([]);
  useEffect(() => {
    if (!articles.length) {
      getMediumFeed().then((response) => setArticles(response.items));
    }
  }, [articles.length]);

  return (
    <div className="bg-white pb-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 ">
          {articles.map((post) => (
            <div key={post.title} className="border rounded-lg p-5">
              <p className="text-sm text-gray-500">
                <time dateTime={post.pubDate}>
                  {moment(post.pubDate).format("dddd, MMMM Do YYYY")}
                </time>
              </p>
              <div className="mt-2 block">
                <p className="text-2xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <div className="mt-3 flex items-center justify-center">
                  <img src={post.thumbnail} alt={post.title} />
                </div>
              </div>
              <div className="mt-3">
                <a
                  href={post.link}
                  className="text-base font-semibold text-medium-logo-blue hover:text-dark-logo-blue"
                >
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

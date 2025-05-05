import { ExternalLink } from 'lucide-react';
import React from 'react';

import { NewsItem } from '../types/news';

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={news.images?.[0] ?? `https://picsum.photos/id/885/600/400`}
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col grow">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{news.title}</h2>
        <p className="text-gray-600 mb-4 grow">{news.summary}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {new Date(news.publishDate).toLocaleDateString()}
          </span>
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            Read more
            <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
        <div className="mt-2">
          <span className="text-xs text-gray-500">Source: {news.source}</span>
        </div>
      </div>
    </div>
  );
};

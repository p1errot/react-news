import axios from 'axios';
import { Loader2, Newspaper } from 'lucide-react';
import { useEffect, useState } from 'react';

import { NewsItem } from '../../types/news';
import { NewsCard } from './components/NewsCard';

function Home () {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const headers = {
        'x-api-key': import.meta.env.VITE_NEWS_API_KEY,
      }
      try {
        const response = await axios.get(import.meta.env.VITE_NEWS_BASE_URL, {
          headers,
          params: { language: 'en', page: 1, pageSize: 20 }
        });

        setNews(response.data.articles);
        setLoading(false);
      } catch {
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          <span className="text-lg text-gray-700">Loading news...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-red-600 text-center">
          <p className="text-xl">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Newspaper className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Latest News</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.link} news={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

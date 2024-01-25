import React, { useState, useEffect } from 'react';
import NewsComponent from './NewsComponent';

const NewsPage = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=computer&apiKey=b8d5c422fdb8487bafbfccd5f5d9372e');
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {newsData && <NewsComponent articles={newsData} />}
    </div>
  );
};

export default NewsPage;

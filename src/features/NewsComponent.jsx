import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import { format } from 'date-fns';



const NewsComponent = ({ articles }) => {
  
    const [photosCollection, setPhotosCollection] = useState(null);

    useEffect(() => {
      const client = createClient('RrrUQJYnCZhNbVxeKn0haMWQPfGL6hYoTZ3VfNs5Wlyqnpo9ZWZ6HStT');
      const query = 'Computer';
      client.photos.search({ query, per_page: 50 }).then(photos => {
      setPhotosCollection(photos.photos)
    });
    }, [])
  
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);


    const filteredAndSortedArticles = articles
        .filter((article) => {
        const publicationDate = new Date(article.publishedAt);
        const publicationYear = publicationDate.getFullYear();

        return (
            publicationYear === 2024 && publicationDate >= threeDaysAgo && publicationDate <= new Date()
        );
        })
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    return (
        <div className=''>
        <h1 className='mb-5 text-5xl font-bold text-oxford-blue text-center pt-12'>Latest Technology News</h1>
        <h2 className='text-center mb-16 font-light text-maximum-blue-green'>Stay Informed on the Latest Technological Developments</h2>
            <ul>
                <div>
                    {filteredAndSortedArticles.map((article, index) => (
                        <div className='p-3 shadow-lg shadow-blue-400/40 card flex flex-col lg:flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg m-7' key={index}>
                            <img width={400} height={300} className='thumbnail mx-auto rounded-md' src={photosCollection && photosCollection[index].src.landscape} />
                            <div className="card-details flex flex-col justify-between ">

                                <div className='top flex flex-row justify-between mx-4 font-light text-gray-500 mt-5 mb-5'>
                                    <p>Published At: {format(new Date(article.publishedAt), 'MMMM d, yyyy')}</p>
                                    <p>Source: {article.source.name}</p>
                                </div>

                                <div className='middle mx-3'>
                                    <h2 className='title text-sky-900 text-2xl font-bold'>{article.title}</h2>
                                    <p className='excerpt'>{article.description}</p>
                                </div>

                                <div className='bottom flex justify-between mx-2 text-sky-900 font-light mt-5 mb-5r'>
                                    <div className='author flex'>
                                    {
                                    article.author ? (
                                    <p className='name mx-2'>{article.author}</p>
                                    ) : null
                                    }
                                    </div>
                                    <div className='readmore'>
                                    <a href={article.url} className='underline font-bold underline-offset-2' target="_blank" rel="noopener noreferrer">
                                        Read More
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default NewsComponent;

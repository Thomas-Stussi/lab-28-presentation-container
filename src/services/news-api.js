/* eslint-disable max-len */
export const getArticles = (search) => {
  const API_KEY = 'ba5b8bb6d5e04b05bd04c5e37c2b2581';

  return fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`, {
    header: {
      Origin: null
    }
  })
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })));

};


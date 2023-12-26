const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = 'c64eb6cbb034421faf7f3e809bf88266';

const getNews = searchParams => {
  return fetch(`${BASE_URL}/everything?q=${searchParams}`, {
    headers: { 'X-Api-Key': API_KEY },
  });
};

export default getNews;

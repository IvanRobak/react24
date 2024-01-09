const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = 'c64eb6cbb034421faf7f3e809bf88266';

export const getNews = async searchParams => {
  const data = await fetch(`${BASE_URL}/everything?q=${searchParams}`, {
    headers: { 'X-Api-Key': API_KEY },
  });
  return data.json();
};

export const getTopNews = async () => {
  const data = await fetch(`${BASE_URL}/top-headlines?country=ua`, {
    headers: { 'X-Api-Key': API_KEY },
  });
  return await data.json();
};

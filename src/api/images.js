import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '40082748-c036ae5fcdc09f757ab593e32';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
  key: API_KEY,
});
export const getImages = async (query, page) => {
  const { data } = await axios(`?page=${page}&q=${query}&${searchParams}`);
  return data;
};

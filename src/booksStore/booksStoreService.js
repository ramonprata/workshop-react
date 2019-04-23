import axios from 'axios';

const URL_API = 'https://workshopreact-a7f54.firebaseio.com/books.json/';

export const getBooks = async () => {
  return await axios.get(URL_API);
}
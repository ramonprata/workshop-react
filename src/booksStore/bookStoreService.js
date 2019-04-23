import axios from 'axios';

export const getBooks = async () => {
  return await axios.get('https://workshopreact-a7f54.firebaseio.com/books.json');
};

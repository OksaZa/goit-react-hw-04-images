const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38681810-9a82a3e545815a3f315d09dbf';

export const searchPhoto = (searchValue, page) => {
  return fetch(
    `${BASE_URL}?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

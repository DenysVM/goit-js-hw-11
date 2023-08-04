import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '38624994-74d2e2de4f88bee78c9a8eed4';
const BASE_URL = 'https://pixabay.com/api/';
const DEFAULT_PER_PAGE = 8;

async function searchImages(query, currentPage, perPage = DEFAULT_PER_PAGE) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: currentPage,
                per_page: perPage,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        Notiflix.Notify.failure('Failed to fetch images. Please try again later.');
        return { hits: [], totalHits: 0 };
    }
}
export { searchImages };


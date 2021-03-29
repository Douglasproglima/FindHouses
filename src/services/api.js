import axios from 'axios';
//import { API_URL, X_RAPID_API_KEY, X_RAPID_API_HOST } from '@env';
import { API_URL, XRAPID_API_KEY, XRAPID_API_HOST } from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': XRAPID_API_KEY,
    'x-rapidapi-host': XRAPID_API_HOST,
    useQueryString: true,
  },
});

export default api;

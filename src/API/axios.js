import axios from 'axios';
// export let url = process.env.REACT_APP_API_URL;
export let url = 'https://api.themoviedb.org/3';
const instance = axios.create({
  baseURL: url,
});

export default instance;

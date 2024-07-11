import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const PokeApi = axios.create({
  baseURL: BASE_URL,
});

export default PokeApi;

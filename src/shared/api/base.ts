import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export const SwapDev = axios.create({
  baseURL: BASE_URL,
});

export default SwapDev;

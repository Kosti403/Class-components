import { StarshipResponse } from "../types/StarshipType";
import SwapDev from "./base";

export const getStarshipsByPage = async (page: number): Promise<StarshipResponse> => {
  const response = await SwapDev.get<StarshipResponse>(`/starships/?page=${page}`);
  return response.data;
};
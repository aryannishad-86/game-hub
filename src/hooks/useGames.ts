import { useEffect, useState } from "react";
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";
import axios from "axios";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}



const useGames = (gameQuery: GameQuery) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const API_URL = '/api/games';

    axios.get(API_URL, {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    })
      .then(response => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [gameQuery]);

  return { data, error, isLoading };
};

const API_URL = 'http://localhost:5000/api/games';

fetch(API_URL)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

export default useGames; 
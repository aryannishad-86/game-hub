
import useData from "./useData";
import { Genre } from "./useGenre";

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



import { useState, useEffect } from 'react';
import axios from 'axios';

interface GameQuery {
  genre?: { id: number };
  platform?: { id: number };
  sortOrder?: string;
  searchText?: string;
}

const useGames = (gameQuery: GameQuery) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const API_URL = 'http://localhost:5000/api/games';

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

export default useGames;
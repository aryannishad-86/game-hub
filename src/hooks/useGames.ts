// src/hooks/useGames.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface GameQuery {
  genre?: { id: number };
  platform?: { id: number };
  sortOrder?: string;
  searchText?: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const [data, setData] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const API_URL = '/api/games';

    axios.get(API_URL, {
      params: {
        key: '1d3e73a2222a4775854dbc8eb4eb26bb', // Add your API key here
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
import useData from "./useData";

// models/Genre.ts
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
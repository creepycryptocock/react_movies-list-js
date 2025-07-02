import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard card={movie} key={movie.imdbId} />
    ))}
  </>
);

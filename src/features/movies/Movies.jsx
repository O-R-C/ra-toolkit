import Movie from './Movie'
import Section from '../../ui/Section'
import { useSelector } from 'react-redux'

export default function Movies() {
  const { movies, error } = useSelector((state) => state.movies)

  return (
    <Section>
      {error && error}
      {movies.length > 0 &&
        movies.map((movie) => (
          <Movie
            key={movie.imdbID}
            {...movie}
          />
        ))}
    </Section>
  )
}

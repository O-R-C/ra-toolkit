import Movie from './Movie'
import Section from '../../ui/Section'
import { useSelector } from 'react-redux'
import Loader from '../../ui/Loader'

export default function Movies() {
  const { movies, error, status } = useSelector((state) => state.movies)
  console.log('🚀 ~ movies:', movies, error)

  return (
    <Section>
      {status === 'loading' && <Loader />}
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

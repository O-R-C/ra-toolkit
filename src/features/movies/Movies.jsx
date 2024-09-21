import PropTypes from 'prop-types'
import Movie from './Movie'
import Section from '../../ui/Section'

export default function Movies({ movies }) {
  return (
    <Section>
      {movies.length
        ? movies.map((movie) => (
            <Movie
              key={movie.imdbID}
              {...movie}
            />
          ))
        : 'No movies found'}
    </Section>
  )
}

Movies.propTypes = {
  movies: PropTypes.array,
}

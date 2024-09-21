import { useSelector } from 'react-redux'
import Section from '../../ui/Section'
import Summary from './Summary'
import FavoriteItem from './FavoriteItem'

export default function Favorites() {
  const count = useSelector((state) => state.favorites.count)
  const movies = useSelector((state) => state.favorites.movies)
  console.log('🚀 ~ movies:', movies)

  return (
    <Section>
      <Summary count={count} />
      {movies.length > 0 ? (
        movies.map((movie) => (
          <FavoriteItem
            key={movie.imdbID}
            {...movie}
          />
        ))
      ) : (
        <p className='text-center'>No movies in favorites</p>
      )}
    </Section>
  )
}

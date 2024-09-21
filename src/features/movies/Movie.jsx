import PropTypes from 'prop-types'
import { Link, useNavigation } from 'react-router-dom'
import Item from '../../ui/Item'

export default function Movie({ Title, Year, Poster, imdbID }) {
  const navigation = useNavigation()

  return (
    <Item>
      <Link
        to={navigation.state === 'loading' ? '#' : `/movie/${imdbID}`}
        className='flex gap-6'
        replace
      >
        <img
          src={Poster}
          alt={Title}
          className='w-16 max-h-24 rounded-md'
        />
        <div className='flex flex-col gap-3 '>
          <p>{Title}</p>
          <p>{Year}</p>
        </div>
      </Link>
    </Item>
  )
}

Movie.propTypes = {
  Title: PropTypes.string,
  Year: PropTypes.string,
  Poster: PropTypes.string,
  imdbID: PropTypes.string,
}

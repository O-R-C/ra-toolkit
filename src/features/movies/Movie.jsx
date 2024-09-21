import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Movie({ Title, Year, Poster, imdbID }) {
  return (
    <div className='last:border-0 last:pb-0 border-b pb-6'>
      <Link
        to={`/movie/${imdbID}`}
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
    </div>
  )
}

Movie.propTypes = {
  Title: PropTypes.string,
  Year: PropTypes.string,
  Poster: PropTypes.string,
  imdbID: PropTypes.string,
}

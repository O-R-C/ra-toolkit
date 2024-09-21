import PropTypes from 'prop-types'
import Item from '../../ui/Item'
import { Link } from 'react-router-dom'

export default function FavoriteItem({ Title, imdbRating, Poster, Runtime, imdbID, Year }) {
  return (
    <Item>
      <Link
        className='flex gap-6 text-center items-center'
        to={`/movie/${imdbID}`}
        replace
      >
        <img
          src={Poster}
          alt={Title}
          className='w-16 max-h-24 rounded-md'
        />
        <div className='flex flex-col gap-3 w-full'>
          <h4 className='text-lg'>{Title}</h4>
          <div className='flex gap-3 justify-center'>
            <p>{Year}</p>
            <p>{Runtime}</p>
            <p>
              ⭐ <span className='text-yellow-500'>{imdbRating}</span>
            </p>
          </div>
        </div>
      </Link>
    </Item>
  )
}

FavoriteItem.propTypes = {
  Title: PropTypes.string,
  imdbRating: PropTypes.string,
  Poster: PropTypes.string,
  Runtime: PropTypes.string,
  imdbID: PropTypes.string,
  Year: PropTypes.string,
}

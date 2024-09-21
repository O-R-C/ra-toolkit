import { useLoaderData, useNavigate } from 'react-router-dom'
import MovieCard from '../../ui/MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import { checkFavorite, addMovie, removeMovie } from '../favorites/FavoritesSlice'

export default function MovieDetail() {
  const navigate = useNavigate()
  const movie = useLoaderData()
  const { Poster, Title, Year, Genre, Runtime, Director, Actors, imdbRating, Plot, imdbID, Error } = movie

  const dispatch = useDispatch()
  dispatch(checkFavorite(imdbID))

  const isFavorite = useSelector((state) => state.favorites.isFavorite)

  const handleBack = () => {
    navigate('/', { replace: true })
  }

  const handleAddFavorite = () => {
    if (isFavorite) {
      dispatch(removeMovie(imdbID))
    } else {
      dispatch(addMovie(movie))
    }

    handleBack()
  }

  return (
    <MovieCard>
      <button
        className='absolute top-2 left-2 text-3xl text-white bg-black rounded-full p-3 z-10'
        onClick={handleBack}
      >
        <span className='sr-only'>Back</span>
        <span className='relative top-[-4px]'>&larr;</span>
      </button>

      <button
        className='absolute top-2 right-2 text-3xl text-white bg-black rounded-full p-3 z-10'
        onClick={handleAddFavorite}
      >
        <span className='sr-only'>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</span>
        <span className='relative top-[-2px]'>{isFavorite ? '❤️' : '🤍'}</span>
      </button>

      {Error ? (
        <p className='text-center'>{Error}</p>
      ) : (
        <div className='flex flex-col gap-2 relative'>
          <img
            src={Poster}
            alt={Title}
            className='w-full rounded-md'
          />
          <h3 className='text-2xl font-bold text-center'>{Title}</h3>
          <div className='flex gap-2 justify-between'>
            <p>{Year}</p>
            <p>{Runtime}</p>
            <p className='text-violet-500 flex gap-2'>
              <span className='font-bold text-amber-500 before:content-["⭐"] flex gap-1'>{imdbRating}</span>IMDB rating
            </p>
          </div>
          <p className='text-sm italic'>{Plot}</p>
          <p className='text-sm'>{Genre}</p>
          {Director !== 'N/A' && <p>Directed by {Director}</p>}
          <p>Staring {Actors}</p>
        </div>
      )}
    </MovieCard>
  )
}

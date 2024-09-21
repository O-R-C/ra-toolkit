import { useLoaderData } from 'react-router-dom'
import MovieCard from '../../ui/MovieCard'

export default function MovieDetail() {
  const { Poster, Title, Year, Genre, Runtime, Director, Actors, imdbRating, Plot } = useLoaderData()

  return (
    <MovieCard>
      <div className='flex flex-col gap-2'>
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
    </MovieCard>
  )
}

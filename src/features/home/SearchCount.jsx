import { useSelector } from 'react-redux'

export default function SearchCount() {
  const totalResults = useSelector((state) => state.movies.totalResults)

  return <div className='text-lg'>Найдено: {totalResults}</div>
}

import { useSelector } from 'react-redux'
import { useNavigation } from 'react-router-dom'
import Loader from '../../ui/Loader'

export default function StatusBar() {
  const moviesLoading = useSelector((state) => state.movies.status)
  const isMoviesLoading = moviesLoading === 'loading'
  const routerLoading = useNavigation().state === 'loading'

  return <div className='relative w-[30px] h-[30px]'>{(isMoviesLoading || routerLoading) && <Loader />}</div>
}

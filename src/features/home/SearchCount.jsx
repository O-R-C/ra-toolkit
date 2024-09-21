import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

export default function SearchCount({ count }) {
  const totalResults = useSelector((state) => state.movies.totalResults)
  console.log('🚀 ~ totalResults:', totalResults)

  return <div className='text-base'>Найдено: {count}</div>
}

SearchCount.propTypes = {
  count: PropTypes.string,
}

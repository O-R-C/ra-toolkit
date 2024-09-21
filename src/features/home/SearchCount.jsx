import PropTypes from 'prop-types'

export default function SearchCount({ count }) {
  return <div className='text-base'>Найдено: {count}</div>
}

SearchCount.propTypes = {
  count: PropTypes.string,
}

import PropTypes from 'prop-types'

export default function Summary({ count }) {
  return (
    <div className='text-center bg-gray-700 p-4 rounded-xl'>
      <h1 className='text-3xl font-bold mb-2'>Избранное</h1>
      <p>Всего фильмов: {count}</p>
    </div>
  )
}

Summary.propTypes = {
  count: PropTypes.number.isRequired,
}

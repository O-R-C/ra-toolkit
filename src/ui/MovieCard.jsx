import PropTypes from 'prop-types'

export default function MovieCard({ children }) {
  return (
    <div className='flex flex-col gap-6 w-1/2 bg-gray-800 p-6 max-h-[calc(100vh-150px)] overflow-auto no-scrollbar rounded-xl self-start'>
      {children}
    </div>
  )
}

MovieCard.propTypes = {
  children: PropTypes.node,
}

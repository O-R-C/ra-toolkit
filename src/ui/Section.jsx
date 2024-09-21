import PropTypes from 'prop-types'

export default function Section({ children }) {
  return (
    <div className='flex flex-col gap-6 w-1/2 bg-gray-800 p-6 h-[calc(100vh-200px)] overflow-auto no-scrollbar rounded-xl'>
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node,
}

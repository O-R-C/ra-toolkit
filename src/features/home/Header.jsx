import PropTypes from 'prop-types'

export default function Header({ children }) {
  return (
    <header className='flex items-center max-w-5xl w-full mx-auto justify-between py-5 px-10 bg-violet-700 text-white rounded-xl'>
      {children}
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node,
}

import PropTypes from 'prop-types'

export default function Main({ children }) {
  return (
    <main className='w-3/4 max-w-4xl min-w-3/5 p-10  text-white rounded-xl mx-auto flex justify-between gap-6 items-start'>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

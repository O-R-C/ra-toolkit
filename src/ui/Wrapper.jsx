import PropTypes from 'prop-types'

export default function Wrapper({ children }) {
  return <div className='flex flex-col w-full'>{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node,
}

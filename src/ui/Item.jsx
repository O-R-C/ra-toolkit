import PropTypes from 'prop-types'

export default function Item({ children }) {
  return <div className='last:border-0 last:pb-0 border-b pb-6'>{children}</div>
}

Item.propTypes = {
  children: PropTypes.node,
}

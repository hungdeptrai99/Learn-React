import React from 'react'
import PropTypes from 'prop-types'
import HeaderCart from 'src/components/HeaderCart/HeaderCart'
import Footer from 'src/components/Footer/Footer'

CartLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}

function CartLayout({ children }) {
  return (
    <div>
      <HeaderCart />
      {children}
      <Footer />
    </div>
  )
}
export default CartLayout

import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ text, handleClick, right }) => {
  return (
    <div
      className={`Button ${right ? 'Button--right' : ''}`}
      onClick={handleClick}
    >
      {text}
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  right: PropTypes.bool
}

export default Button

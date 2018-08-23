import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Target.css'

export default class Target extends Component {
  static propTypes = {
    target: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      eliminated: PropTypes.bool.isRequired
    }).isRequired,
    position: PropTypes.number.isRequired
  }

  render () {
    const { target, position } = this.props
    const { id, description, eliminated } = target

    return (
      <div className='Target'>
        <div className='Target__position'>{position}.</div>
        <div className='Target__description'>{description}</div>
      </div>
    )
  }
}

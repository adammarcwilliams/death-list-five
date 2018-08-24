import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Target from '../Target/Target'

import './Targets.css'

export default class Targets extends Component {
  static propTypes = {
    targets: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        eliminated: PropTypes.bool.isRequired
      })
    ).isRequired,
    updateTarget: PropTypes.func.isRequired
  }

  render () {
    const { targets, updateTarget } = this.props
    return (
      <div className='Targets'>
        {targets.map((target, index) => (
          <Target
            key={target.id}
            position={index + 1}
            target={target}
            updateTarget={updateTarget}
          />
        ))}
      </div>
    )
  }
}

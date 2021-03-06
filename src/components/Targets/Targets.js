import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Target from '../Target/Target'

import './Targets.css'

export default class Targets extends Component {
  static propTypes = {
    targets: PropTypes.arrayOf(
      PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        eliminated: PropTypes.bool.isRequired
      })
    ).isRequired,
    updateTarget: PropTypes.func.isRequired,
    toggleTarget: PropTypes.func.isRequired
  }

  render () {
    const { targets, updateTarget, toggleTarget } = this.props
    return (
      <div className='Targets'>
        {targets.map((target, index) => (
          <Target
            key={target.uuid}
            position={index + 1}
            target={target}
            updateTarget={updateTarget}
            toggleTarget={toggleTarget}
          />
        ))}
      </div>
    )
  }
}

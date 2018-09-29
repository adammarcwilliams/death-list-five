import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Target.css'

export default class Target extends Component {
  static propTypes = {
    target: PropTypes.shape({
      uuid: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      eliminated: PropTypes.bool.isRequired
    }).isRequired,
    position: PropTypes.number.isRequired,
    updateTarget: PropTypes.func.isRequired,
    toggleTarget: PropTypes.func.isRequired
  }

  handleUpdate = e => {
    const text = e.target.innerText
    const uuid = this.props.target.uuid

    this.props.updateTarget(uuid, text)
  }

  handleToggle = e => {
    const { uuid, eliminated } = this.props.target
    this.props.toggleTarget(uuid, eliminated)
  }

  render () {
    const { target, position } = this.props
    const { description, eliminated } = target

    return (
      <div className='Target'>
        <div className='Target__position' onClick={this.handleToggle}>
          {position}.
        </div>
        <div
          className='Target__description'
          onBlur={this.handleUpdate}
          contentEditable
          suppressContentEditableWarning
        >
          {description}
        </div>
        {eliminated && <div className='Target__strike' />}
      </div>
    )
  }
}

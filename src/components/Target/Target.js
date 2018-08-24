import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Target.css'

export default class Target extends Component {
  static propTypes = {
    target: PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      eliminated: PropTypes.bool.isRequired
    }).isRequired,
    position: PropTypes.number.isRequired,
    updateTarget: PropTypes.func.isRequired,
    toggleTarget: PropTypes.func.isRequired
  }

  handleUpdate = e => {
    const text = e.target.innerText
    const id = this.props.target.id

    this.props.updateTarget(id, text)
  }

  handleToggle = e => {
    const id = this.props.target.id

    this.props.toggleTarget(id)
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

import React, { Component } from 'react'
import Header from '../Header/Header'
import Targets from '../Targets/Targets'
import Button from '../Button/Button'

import './App.css'

class App extends Component {
  state = {
    targets: [],
    flashMessage: null
  }

  addTarget = () => {
    // add new target to list if less than five
    if (this.state.targets.length < 5) {
      const newTarget = {
        id: Date.now().toString(),
        description: 'Click here and replace me with your next target!',
        eliminated: false
      }
      this.setState(state => ({ targets: [...state.targets, newTarget] }))
    } else {
      const flashMessage =
        'Slow down killer! This is Death List Five!! Settle some scores and come back!'
      this.setState(state => ({ flashMessage }))
      setTimeout(() => {
        this.setState(state => ({ flashMessage: null }))
      }, 4000)
    }
  }

  updateTarget = (id, text) => {
    const targetIndex = this.state.targets.findIndex(target => target.id === id)
    const targets = [...this.state.targets]

    targets[targetIndex].description = text

    this.setState(state => ({ targets }))
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Targets
          targets={this.state.targets}
          updateTarget={this.updateTarget}
        />
        {this.state.flashMessage &&
          <div className='App__flash'>
            {this.state.flashMessage}
          </div>}
        <div className='App__buttons'>
          <Button text='Add new target' handleClick={this.addTarget} />
          <Button text='Bury the dead' handleClick={() => {}} right />
        </div>
      </div>
    )
  }
}

export default App

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
    /* Add a default editable target to the end of the list if less than five exist */
    if (this.state.targets.length < 5) {
      const newTarget = {
        id: Date.now().toString(),
        description: 'Click here and replace me with your next target! Then tap my number or swipe to eliminate me!',
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
    /* Find targed in the array and update it's description */
    const targetIndex = this.state.targets.findIndex(target => target.id === id)
    const targets = [...this.state.targets]

    targets[targetIndex].description = text

    this.setState(state => ({ targets }))
  }

  toggleTarget = id => {
    /* Find targed in the array and toggles whether it's been eliminated or not */
    const targetIndex = this.state.targets.findIndex(target => target.id === id)
    const targets = [...this.state.targets]

    targets[targetIndex].eliminated = !targets[targetIndex].eliminated

    this.setState(state => ({ targets }))
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Targets
          targets={this.state.targets}
          updateTarget={this.updateTarget}
          toggleTarget={this.toggleTarget}
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

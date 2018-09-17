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

  componentDidMount () {
    /* Subscribe to firestore updates */
    this.props.firestore
      .collection('targets')
      .onSnapshot(this.setTargets)
  }

  setTargets = (querySnapshot) => {
    const targets = []
    
    querySnapshot.forEach(doc => {
      targets.push(doc.data())
    })
    
    this.setState(state => ({ targets }))
  }


  addTarget = () => {
    /* Add a default editable target to the end of the list if less than five exist */
    if (this.state.targets.length < 5) {
      const newTarget = {
        id: Date.now().toString(),
        description: 'Click here and replace me with your next target! Then tap my number or swipe to eliminate me!',
        eliminated: false
      }
      this.props.firestore.collection('targets').add(newTarget);
    } else {
      const flashMessage =
        'Slow down killer! This is Death List Five!! Settle some scores and come back!'
      this.setState(state => ({ flashMessage }))
      setTimeout(() => {
        this.setState(state => ({ flashMessage: null }))
      }, 4000)
    }
  }

  updateTarget = (id, description) => {
    // console.log('id', id);
    // /* Find target in the firestore and update it's description */
    // this.props.firestore.collection('targets').doc('6GaDsK5SxcqKpMSb2LON').update({ description });
    
  }

  toggleTarget = id => {
    /* Find target in the targets array and toggles whether it's been eliminated or not */
    // const targetIndex = this.state.targets.findIndex(target => target.id === id)
    // const targets = [...this.state.targets]

    // targets[targetIndex].eliminated = !targets[targetIndex].eliminated

    // this.setState(state => ({ targets }))
  }

  removeEliminatedTargets = () => {
    /* Find targets in the targets array that have been eliminated and remove them */
    // const targets = [...this.state.targets]
    // const activeTargets = targets.filter(target => !target.eliminated)

    // this.setState(state => ({ targets: activeTargets }))
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
        <footer className='App__footer'>
          {this.state.flashMessage &&
            <div className='App__flash'>
              {this.state.flashMessage}
            </div>}
          <div className='App__buttons'>
            <Button text='Add new target' handleClick={this.addTarget} />
            <Button
              text='Bury the dead'
              handleClick={this.removeEliminatedTargets}
              right
            />
          </div>
        </footer>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import Header from '../Header/Header'
import Targets from '../Targets/Targets'

import './App.css'

class App extends Component {
  state = {
    targets: [
      {
        id: 1,
        description: 'Design a to-do list That can wrap across two orthree lines... ',
        eliminated: false
      },
      {
        id: 2,
        description: 'Design a to-do list That can wrap across two orthree lines... ',
        eliminated: false
      },
      {
        id: 3,
        description: 'Design a to-do list That can wrap across two orthree lines... ',
        eliminated: false
      },
      {
        id: 4,
        description: 'Design a to-do list That can wrap across two orthree lines... ',
        eliminated: false
      },
      {
        id: 5,
        description: 'Design a to-do list That can wrap across two orthree lines... ',
        eliminated: false
      }
    ]
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Targets targets={this.state.targets} />
      </div>
    )
  }
}

export default App

import React from 'react'

import List from '../containers/List'
import AddItem from './AddItem'

function App (props) {
  return (
    <div className='app-container'>
      <h1>To Do List</h1>
        <List />
        <AddItem />
    </div>
  )
}

export default App

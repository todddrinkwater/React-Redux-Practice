import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

function AddItem (props){

  const dispatch = props.dispatch

  return (
    <div className='AddItem'>
      <form onSubmit={evt => { submitTask(evt, dispatch) }}>
        <h2>Create New Task</h2>
        Task:<input type="text" name="taskName" /><br />
        Due Date:<input type="date" name="due" /><br />
        Description:<input type="text" name="description" /><br />
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

function submitTask (evt, dispatch) {
  evt.preventDefault()

  var newTask = {
    taskName:evt.target.elements.taskName.value,
    due: evt.target.elements.due.value,
    description: evt.target.elements.description.value
  }

  dispatch(addTask(newTask))
}

const provideDispatch = connect()
const connectedAddTask = provideDispatch(AddItem)

export default connectedAddTask

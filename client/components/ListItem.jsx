import React from 'react'
import { connect } from 'react-redux'



function ListItem (props){
  return (
    <div className='ListItem'>
      <p>Task Name: {props.taskName} <br />
      Due: {props.due} <br />
      Description: {props.description}</p>
    <button>Done</button>
    </div>
  )
}

export default ListItem

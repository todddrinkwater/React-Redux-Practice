import React from 'react'

function ListItem (props){
  return (
    <div className='ListItem'>
      <p>Task Name: {props.taskName} <br />
      Due: {props.due} <br />
      Discription: {props.description}</p>
      <button>Done</button>
    </div>
  )
}

export default ListItem

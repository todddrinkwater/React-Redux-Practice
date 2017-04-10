import React from 'react'
import { connect } from 'react-redux'

import ListItem from '../components/ListItem'


function List (props){
  return(
    <div>
      {props.tasks.map((task) => {
        return (
          <ListItem {...task}/>
        )
      })}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(List)

import React from 'react'
import listData from  '../../server/db'

import ListItem from '../components/ListItem'


function List (){
  return(
    <div>
      {listData.map((task) => {
        return (
          <ListItem {...task}/>
        )
      })}


    </div>
  )
}



export default List

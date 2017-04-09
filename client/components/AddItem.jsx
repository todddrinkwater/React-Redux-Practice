import React from 'react'

function AddItem (){
  return (
    <div className='AddItem'>
      <form>
        <h2>Create New Task</h2>
        Task:<input type="text" name="taskName" /><br />
        Due Date:<input type="text" name="due" /><br />
        Description:<input type="text" name="description" /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddItem

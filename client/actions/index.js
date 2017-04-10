export const addTask = (newTask) => {
  return {
    type: 'ADD_TASK',
    newTask: newTask
  }
}

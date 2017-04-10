const initialState =  [
  {
    key:0,
    taskName: 'Clean Room',
    due: '16-04-17',
    description: 'Get your dust on'
  },
  {
    key:1,
    taskName: 'Gardening',
    due: '19-04-2017',
    description: 'Pull out weeds'
  },
  {
    key:2,
    taskName: 'Group Project',
    due: '20-04-2017',
    description: 'Not sleeping for 6 nights'
  }
]


const tasks = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

export default tasks

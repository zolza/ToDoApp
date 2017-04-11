function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) +1
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      Object.assign({}, state, {
        todos: [{
          text: action.text,
          completed: false,
          id: getId(state),
        }, ...state.todos]
      })
    // if the action.type IS ADD_TODO then
    //do something, update the state with params
    default:
      return state;
  }
}

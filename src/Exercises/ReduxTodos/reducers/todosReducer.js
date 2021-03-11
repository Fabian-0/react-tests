const INITIAL_STATE = {
  task: []
}

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        task: [...state.task, action.payload]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        task: state.task.filter(element => element !== action.payload)
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        task: state.task.map(element => ((element === action.payload.after) ? action.payload.before : element))
      };
    default:
      return state;
  }
}

export default todosReducer;
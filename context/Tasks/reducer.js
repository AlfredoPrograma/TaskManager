export const taskReducerActions = {
  SELECT_TASK: 'SELECT_TASK',
  CLEAN_TASK: 'CLEAN_TASK',
  ON_LOAD: 'ON_LOAD',
  ADD_TODO_TASK: 'ADD_TODO_TASK',
  CHANGE_TASK_TYPE: 'CHANGE_TASK_TYPE',
  DELETE_TASK: 'DELETE_TASK'
}

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case taskReducerActions.ON_LOAD:
      return { ...action.payload }

    case taskReducerActions.SELECT_TASK:
      return { ...state, actualTask: action.payload }

    case taskReducerActions.CLEAN_TASK:
      return { ...state, actualTask: null }

    case taskReducerActions.ADD_TODO_TASK:
      return {
        ...state, toDo: [...state.toDo, action.payload]
      }

    case taskReducerActions.DELETE_TASK:
      return {
        ...state, [action.payload.type]: [...state[action.payload.type].filter(task => task.id !== action.payload.id)]
      }

    case taskReducerActions.CHANGE_TASK_TYPE:
      return {
        ...state,
        [action.payload.actualType]: [...state[action.payload.actualType].filter(task => task.id !== action.payload.actualTask.id)],
        [action.payload.newType]: [...state[action.payload.newType], { ...action.payload.actualTask, type: action.payload.newType }]
      }

    default:
      return state
  }
}

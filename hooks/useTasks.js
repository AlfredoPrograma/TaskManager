import { useContext } from 'react'
import { TasksContext } from 'context/Tasks'
import { AuthContext } from 'context/Auth'
import { taskReducerActions } from 'context/Tasks/reducer'
import { manageTasksService } from 'server/tasks'

export const TASK_TYPES = {
  toDo: 'toDo',
  inProgress: 'inProgress',
  done: 'done'
}

export default function useTasks () {
  const { uid } = useContext(AuthContext)
  const { tasks, dispatch } = useContext(TasksContext)
  const { deleteTaskFromServer, addNewToDoTask, serverChangeTaskType } = manageTasksService(uid)

  const addTask = (newTask) => {
    addNewToDoTask(newTask)

    dispatch({
      type: taskReducerActions.ADD_TODO_TASK,
      payload: newTask
    })
  }

  const deleteTask = (task) => {
    deleteTaskFromServer(task)

    dispatch({
      type: taskReducerActions.DELETE_TASK,
      payload: task
    })
  }

  const selectTask = (task) => {
    dispatch({
      type: taskReducerActions.SELECT_TASK,
      payload: task
    })
  }

  const cleanTask = () => dispatch({ type: taskReducerActions.CLEAN_TASK })

  const changeTaskType = (newType) => {
    serverChangeTaskType(tasks.actualTask, newType)
      .then(() => console.log('done'))

    dispatch({
      type: taskReducerActions.CHANGE_TASK_TYPE,
      payload: {
        actualTask: tasks.actualTask,
        actualType: tasks.actualTask.type,
        newType
      }
    })
  }

  return {
    addTask,
    deleteTask,
    selectTask,
    cleanTask,
    changeTaskType
  }
}

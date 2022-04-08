import { TasksContext } from 'context/Tasks'
import { taskReducerActions, tasksReducer } from 'context/Tasks/reducer'
import { useReducer, useEffect } from 'react'
import { TaskColumn } from '../Column'
import { TASK_TYPES } from 'hooks/useTasks'
import styles from './styles'

export const TasksDashboard = ({ userData }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, {})

  useEffect(() => {
    dispatch({
      type: taskReducerActions.ON_LOAD,
      payload: {
        actualTask: null,
        [TASK_TYPES.toDo]: [],
        [TASK_TYPES.inProgress]: [],
        [TASK_TYPES.done]: []
      }
    })
  }, [])

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <div>
          <header>
            <h1>My tasks</h1>
          </header>

          <div className='tasks-grid'>
            <TaskColumn
              columnTitle='To do'
              columnTaskType={TASK_TYPES.toDo}
              tasksList={tasks.toDo}
              canCreateTask
            />

            <TaskColumn
              columnTitle='In progress'
              columnTaskType={TASK_TYPES.inProgress}
              tasksList={tasks.inProgress}
            />

            <TaskColumn
              columnTitle='Done'
              columnTaskType={TASK_TYPES.done}
              tasksList={tasks.done}
              />
          </div>
        </div>
      </TasksContext.Provider>

      <style jsx>{styles}</style>
    </>
  )
}

import { useState, useContext } from 'react'
import { v4 } from 'uuid'

import useTasks, { TASK_TYPES } from 'hooks/useTasks'
import { TasksContext } from 'context/Tasks'

import { InputControl } from 'components/Form/Input'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from 'components/Button'

import { Spinner } from 'components/Spinner'
import { TaskItem } from '../Item'

import styles from './styles'

export const TaskColumn = ({ columnTitle, tasksList, columnTaskType, canCreateTask }) => {
  const { tasks } = useContext(TasksContext)
  const { addTask, changeTaskType, cleanTask } = useTasks()

  const formMethods = useForm()
  const [wannaWrite, setWannaWrite] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)

  const onSubmit = ({ newTaskTitle }) => {
    const newTask = {
      id: v4(),
      title: newTaskTitle,
      type: TASK_TYPES.toDo
    }

    addTask(newTask)

    formMethods.reset()
    setWannaWrite(false)
  }

  const handleCreateButton = (evt) => {
    if (!wannaWrite) {
      evt.preventDefault()
      setWannaWrite(true)
    }
  }

  const handleDragLeave = (evt) => setIsDragOver(false)

  const handleDragOver = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (!tasks.actualTask || tasks.actualTask.type === columnTaskType) {
      return
    }

    setIsDragOver(true)
  }

  const handleOnDragEnd = (evt) => cleanTask()

  const handleDrop = (evt, newType) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (!tasks.actualTask || tasks.actualTask.type === columnTaskType) {
      return
    }

    changeTaskType(newType)
    cleanTask()
    setIsDragOver(false)
  }

  return (
    <>
      <div
        className={ isDragOver && 'on-drag-over' }
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={(evt) => handleDrop(evt, columnTaskType)}
        onDragEnd={handleOnDragEnd}
      >
        <header>
          <h4>{ columnTitle }</h4>
          <span>{ tasksList?.length }</span>
        </header>

        { tasksList
          ? <>
            { canCreateTask &&
              <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                { wannaWrite &&
                  <FormProvider {...formMethods}>
                    <InputControl name='newTaskTitle' rules={ { required: 'This field cannot be empty' }} />
                  </FormProvider>
                }

                <Button color='primary' onClick={handleCreateButton}>
                  Create
                </Button>
              </form>
            }

            <ul>
              { tasksList?.map(({ id, title, type }) =>
                <TaskItem
                  key={id}
                  id={id}
                  title={title}
                  type={type}
                />
              )}
            </ul>
          </>

          : <Spinner />
        }

      </div>

      <style jsx>{styles}</style>
    </>
  )
}

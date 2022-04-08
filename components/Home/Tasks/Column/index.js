import { useState, useContext } from 'react'
import { v4 } from 'uuid'

import { TASK_TYPES } from 'hooks/useTasks'
import { TasksContext } from 'context/Tasks'

import { FormInput } from 'components/Form/Input'
import { FormProvider, useForm } from 'react-hook-form'

import { Spinner } from 'components/Spinner'
import { TaskItem } from '../Item'

import styles from './styles'

export const TaskColumn = ({ columnTitle, tasksList, columnTaskType, canCreateTask }) => {
  const { tasks } = useContext(TasksContext)

  const formMethods = useForm()
  const [wannaWrite, setWannaWrite] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)

  const onSubmit = ({ newTaskTitle }) => {
    const newTask = {
      id: v4(),
      title: newTaskTitle,
      type: TASK_TYPES.toDo
    }

    console.log(newTask)

    formMethods.reset()
    setWannaWrite(false)
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

  const handleOnDragEnd = (evt) => console.log('task clean')

  const handleDrop = (evt, newType) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (!tasks.actualTask || tasks.actualTask.type === columnTaskType) {
      return
    }

    console.log(newType)
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
                    <FormInput name='newTaskTitle' rules={ { required: 'This field cannot be empty' }} />
                  </FormProvider>
                }

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

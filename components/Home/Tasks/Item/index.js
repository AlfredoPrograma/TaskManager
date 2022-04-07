import { IconButton } from 'components/IconButton'
import useTasks from 'hooks/useTasks'
import DeleteIcon from 'icons/DeleteIcon'
import styles from './styles'

export const TaskItem = ({ id, title, type }) => {
  const { selectTask, deleteTask } = useTasks()

  const handleDragStart = () => {
    selectTask({ id, title, type })
  }

  const handleDelete = evt => {
    evt.preventDefault()
    deleteTask({ id, title, type })
  }
  return (
    <>
      <li
        draggable
        onDragStart={handleDragStart}
      >
        <h5>{title}</h5>

        <div className='icons-wrapper'>
          <IconButton color='red' onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </li>

      <style jsx>{styles}</style>
    </>
  )
}

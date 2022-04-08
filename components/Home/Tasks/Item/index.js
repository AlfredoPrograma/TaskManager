import { IconButton } from 'components/IconButton'
import DeleteIcon from 'icons/DeleteIcon'
import styles from './styles'

export const TaskItem = ({ id, title, type }) => {
  const handleDragStart = () => {
    console.log('Task drag')
  }

  const handleDelete = evt => {
    evt.preventDefault()
    console.log('delete task')
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

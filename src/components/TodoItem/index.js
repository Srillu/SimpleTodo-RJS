// Write your code here
import './index.css'

const TodoItem = props => {
  const {toDoItem, deleteTodo} = props
  const {title, id} = toDoItem

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-Item">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

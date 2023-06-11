/* eslint-disable react/prop-types */
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <button
              onClick={() => deleteTodo(id)}
              className="btn btn-danger"
            >
              Delete
            </button>
            <label>
              {title}
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
              />{" "}
            </label>
            {/* must call a function to call my function */}
          </li>
    )
}
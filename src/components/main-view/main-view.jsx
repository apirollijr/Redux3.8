import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions"; // ✅ correct path


export default function MainView() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    console.log(`Deleted To-Do ID: ${id}`);
  };

  return (
    <div>
      <h1>Redux To-Do App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

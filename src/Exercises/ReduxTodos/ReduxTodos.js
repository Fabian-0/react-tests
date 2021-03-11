import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ReduxTodos() {
  const [todos, setTodos] = useState("");
  const [update, setUpdate] =useState(null);
  const task = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const handleUpdate = (element) =>{
    setUpdate(element);
  }
  const updatetest = () => {
    dispatch({ type: "UPDATE_TASK", payload: {after: update,before: todos } });
    setUpdate(null);
  }
  console.log(task);
  return (
    <>
      <h2 className="task__title">Task Title</h2>
      <input
        type="text"
        value={todos}
        onChange={(e) => setTodos(e.target.value)}
      />
      {!update && <button onClick={() => dispatch({ type: "ADD_TASK", payload: todos })}>
        Add
      </button>}
      {update && <button onClick={updatetest}>
        Update
      </button>}
      <div className="counterReducer">
        <p className="task"></p>
      </div>
      {task.map((element, index) => {
        return (
          <div key={element}>
            <p className="task-content">
              {element}
            </p>
            <button onClick={()=> dispatch({type: 'DELETE_TASK', payload: element})}>Delete {index}</button>
            <button onClick={()=> handleUpdate(element)}>Update {index}</button>
          </div>
        );
      })}
    </>
  );
}

export default ReduxTodos;

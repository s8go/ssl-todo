import React, { useState } from "react";

const EditTask = ({ setNav, editTask, nav }) => {
  const [newTask, setNewTask] = useState({ ...nav });

  function valueChange(e) {
    const name = e.name;
    const value = e.value;
    setNewTask({ ...newTask, [name]: value });
  }

  return (
    <div className="form_container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTask(newTask);
          setNav("tasks");
        }}
      >
        <h3>Edit Task</h3>
        <input
          type="text"
          required
          placeholder="Task title"
          name="title"
          value={newTask.title}
          onChange={(e) => valueChange(e.target)}
        />
        <input
          type="datetime-local"
          placeholder="Task time"
          name="time"
          value={newTask.time}
          onChange={(e) => valueChange(e.target)}
        />

        <label htmlFor="completed">mark as completed? </label>
        <input
          type="checkbox"
          name="completed"
          id=""
          onChange={(e) => {
            newTask.completed = e.target.checked;
            console.log(newTask);
          }}
          value={newTask.completed}
        />

        <div className="btn_container">
          <button type="submit">Done</button>
          <button id="discard" type="button" onClick={() => setNav("tasks")}>
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;

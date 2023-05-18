import React from "react";

const Tasks = ({ tasks, deleteTask, setNav }) => {
  return (
    <div className="tasks">
      <h1>Tasks</h1>

      {tasks.length > 0 ? (
        <div className="task_container">
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                data={task}
                deleteTask={deleteTask}
                setNav={setNav}
              />
            );
          })}
        </div>
      ) : (
        <h4>No task ATM</h4>
      )}

      <button onClick={() => setNav("addTask")}>&#10009;</button>
    </div>
  );
};

export default Tasks;

function Task({ data, deleteTask, setNav }) {
  return (
    <div>
      <div>
        <p className="edit" onClick={() => setNav(data)}>
          edit
        </p>
        <p className="delete" onClick={() => deleteTask(data.id)}>
          delete
        </p>
      </div>
      <h5>{data.title}</h5>
      <p>
        {new Date(data.time).toDateString()}{" "}
        {new Date(data.time).toLocaleTimeString()}
      </p>
      <p className="type">
        {!data.completed ? (
          <span>
            Uncompleted <span className="uncomplete">&#10005;</span>
          </span>
        ) : (
          <span>
            Completed<span className="complete"> &#10004;</span>
          </span>
        )}
      </p>
    </div>
  );
}

import React from "react";

function Task() {
  return (
    <div>
     <div>
      <p className="edit">edit</p>
     <p className="delete">delete</p>
     </div>
     <h5>Running</h5>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit fugiat
        officia odit odio nam accusamus et iste aliquam voluptas cupiditate?
      </p>

      <p className="type">personal</p>
    </div>
  );
}

const Tasks = () => {
  return (
    <div className="tasks">
      <h1>Tasks</h1>

    <div className="task_container">
    <Task/>
      <Task/>
      <Task/>
      <Task/>
    </div>
    </div>
  );
};

export default Tasks;

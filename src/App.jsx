import Addtask from "./components/Addtask";
import EditTask from "./components/EditTask";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Prompt from "./components/Prompt";
import Tasks from "./components/Tasks";
import "./style/App.modules.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  
  const tasks = useSelector((state) => state.allTasks);
  const completed = useSelector((state) => state.completed);
  const uncompleted = useSelector((state) => state.uncompleted);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const [nav, setNav] = useState("tasks");

  useEffect(() => {
    window.screen.availWidth > 768 && setOpenMenu(true);

    if (localStorage.user) {
      setUser(JSON.parse(localStorage.user));
      dispatch({
        type: "login",
        payload: {
          allTasks: JSON.parse(localStorage.allTasks),
          completed: JSON.parse(localStorage.completed),
          uncompleted: JSON.parse(localStorage.uncompleted),
        },
      });
    }
    return;
  }, []);

  function addNewTask(x) {
    dispatch({ type: "Add", payload: x });
    const data = [...JSON.parse(localStorage.allTasks), x];
    localStorage.allTasks = JSON.stringify(data);
    localStorage.uncompleted = JSON.stringify(
      data.filter((task) => task.completed === false)
    );
    localStorage.completed = JSON.stringify(
      data.filter((task) => task.completed === true)
    );
  }

  function deleteTask(task) {
    dispatch({ type: "delete", payload: { id: task } });
    const data = [...JSON.parse(localStorage.allTasks)].filter((t) => {
      return t.id !== task;
    });

    localStorage.allTasks = JSON.stringify(data);
    localStorage.completed = JSON.stringify(
      data.filter((task) => task.completed === true)
    );
    localStorage.uncompleted = JSON.stringify(
      data.filter((task) => task.completed === false)
    );
  }

  function editTask(data) {
    dispatch({ type: "edit", payload: data });

    const mappedData = [...JSON.parse(localStorage.allTasks)].map((task) => {
      if (task.id === data.id) {
        return { ...data };
      } else {
        return task;
      }
    });

    localStorage.allTasks = JSON.stringify(mappedData);
    localStorage.completed = JSON.stringify(
      mappedData.filter((task) => task.completed === true)
    );
    localStorage.uncompleted = JSON.stringify(
      mappedData.filter((task) => task.completed === false)
    );
  }

  function clearData() {
    dispatch({ type: "clear" });
    setUser({});
    localStorage.clear();
  }

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  function logUser(user) {
    localStorage.user = JSON.stringify(user);
    localStorage.allTasks = JSON.stringify([]);
    localStorage.completed = JSON.stringify([]);
    localStorage.uncompleted = JSON.stringify([]);

    setUser(user);
  }

  return (
    <div className="App">
      <Nav toggle={toggleMenu} openMenu={openMenu} />
      {openMenu && user.name && (
        <Profile setNav={setNav} clearData={clearData} />
      )}
      {nav === "addTask" && <Addtask setNav={setNav} addNewTask={addNewTask} />}
      {nav === "tasks" && (
        <Tasks tasks={tasks} deleteTask={deleteTask} setNav={setNav} />
      )}

      {nav === "complete" && (
        <Tasks tasks={completed} deleteTask={deleteTask} setNav={setNav} />
      )}

      {nav === "uncomplete" && (
        <Tasks tasks={uncompleted} deleteTask={deleteTask} setNav={setNav} />
      )}
      {nav !== "tasks" &&
        nav !== "complete" &&
        nav !== "uncomplete" &&
        nav !== "addTask" && (
          <EditTask nav={nav} setNav={setNav} editTask={editTask} />
        )}

      {!user.name && <Prompt logUser={logUser} />}
    </div>
  );
}

export default App;

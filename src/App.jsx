import Addtask from "./components/Addtask"
import Nav from "./components/Nav"
import Profile from "./components/Profile"
import Tasks from "./components/Tasks"
import "./style/App.modules.css"
import { useEffect, useState } from "react"

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  const [showTasks, setShowTasks] = useState(true)


  useEffect(()=>{
    window.screen.availWidth > 768 && setOpenMenu(true)
  }, [])

  function toggleMenu(){
    setOpenMenu(!openMenu)
  }

  function addTask(){
    setShowTasks(!showTasks)
  }

  
  return (
    <div className="App">
      <Nav toggle={toggleMenu} openMenu={openMenu}/>
     { openMenu && <Profile addTask={addTask}/>}
{!showTasks && <Addtask addTask={addTask}/>}
      {showTasks && <Tasks/>}
    </div>
  )
}

export default App

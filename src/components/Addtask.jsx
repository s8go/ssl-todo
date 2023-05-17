import React from 'react'

const Addtask = ({addTask}) => {
  return (
   <div className='form_container'>
     <form onSubmit={(e)=>e.preventDefault()}>
    <h3>Add Task</h3>
        <input type="text" placeholder='Task title' />
        <textarea name="text" id="details" cols="30" rows="15" placeholder='task details'></textarea>

        <div className='btn_container'>
            <button type="submit">Done</button>
            <button id='discard' onClick={()=>addTask()}>Discard</button>
        </div>
    </form>
   </div>
  )
}

export default Addtask
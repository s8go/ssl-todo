import React, { useState } from 'react'

const Profile = ({addTask}) => {
  return (
   <div className='profile-container'>
     <div className='profile'>
        <h3>Sego Cyber</h3>

            <ul>
                <li><h5>Today's Tasks</h5></li>
                <li><p>Personal <span>&#10097;</span></p></li>
                <li><p>Work <span>&#10097;</span></p></li>
                <li><p onClick={()=>addTask()}>Add Task <span>&#10097;</span></p></li>
                <li><p>Work <span>&#10097;</span></p></li>
                <li><p>Work <span>&#10097;</span></p></li>

            </ul>

    </div>
   </div>
  )
}

export default Profile
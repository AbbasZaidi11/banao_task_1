import React from 'react'
import '../Styles/People.css';
function People(props) {
  return (
    <div className='Userprofiles'>
        <img className="Profilepic" src={props.profilepic} alt="profile"/>
        <p className='FirstName'>{props.f_name}</p>
        <button className='btn btn-dark Followbtn'>Follow</button>
    </div>
  )
}

export default People
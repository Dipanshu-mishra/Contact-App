import React from 'react'
import user from '../image/user.png'

const ContactCard = (props) => {
    const {id, name , email} = props.contact;
  return (
    
    <div className='item'>
       <div className="data" style={{display:'flex', justifyContent: 'space-between'}}>
       <div className='content'>
       <img className='ui avatar image' src={user} alt="user" />
          <div className='header'>{name}</div>
          <div>{email}</div>
        </div>
        <i className='trash alternate outline icon'
        style={{color: "red", marginTop: "7px" }}
        onClick={()=>props.clickHandler(id)}></i>
       </div>
      </div>
    );
}

export default ContactCard
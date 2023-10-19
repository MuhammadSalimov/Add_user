import React from 'react'
import Cart from '../UI/Cart'
import classes from './UserList.module.css'
const UserList = (props) => {
  return (
    <Cart className={classes.users}>
        <ul>
            {props.newItem.map((item)=>{
                return <li> {item.name} {item.age} (Years)</li>
            })}
        </ul>
    </Cart>
  )
}

export default UserList
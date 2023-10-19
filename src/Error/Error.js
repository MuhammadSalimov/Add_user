import React from 'react'
import  ReactDOM  from 'react-dom'
import Button from '../UI/Button'
import classes from "./Error.module.css"
const Error = (props) => {
    const Modal = (props)=>{
        return(
            <div className={classes.modal}>
            <div className={classes.header}>
                <h2>Invalid type</h2>
            </div>
            <div className={classes.conent}>
                <p>
                Plese enter a valid name and age (non-empty values)
                </p>
            </div>
            <div className={classes.actions}>
            <Button onClick={props.FUNERR}>
                Okay
            </Button>
            </div>
            </div>
        )
    }
  return (
       <React.Fragment>
        {ReactDOM.createPortal(<Modal FUNERR={props.FunErr}/>,document.getElementById('modal'))}
       </React.Fragment>
  )
}

export default Error
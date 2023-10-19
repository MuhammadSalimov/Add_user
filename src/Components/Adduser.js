import React, { useState } from "react";
import Cart from "../UI/Cart";
import Button from "../UI/Button";
import Error from "../Error/Error";
import Class from "./Adduser.module.css";

const Adduser = (props) => {
  const [isName, setIsName] = useState("");
  const [isAge, setIsAge] = useState("");
  const [isError, SetIsError] = useState(false);
  const ChengName = (e) => {
    setIsName(e.target.value);
  };
  const ChangeAge = (e) => {
    setIsAge(e.target.value);
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    if (isName.trim().length !== 0 && isAge.trim().length && +isAge > 0) {
      const newData = {
        name: isName,
        age: isAge,
      };
      props.Info(newData);
    } else {
      SetIsError(true)
      return;
    }

    setIsName("");
    setIsAge("");
    e.target.reset();
  };

  const RemoveError = ()=>{
    SetIsError(false)
  }


  return (
    <Cart className={Class.input}>
      {isError && <Error FunErr={RemoveError}/>}
      <form onSubmit={SubmitForm} className={Class.input}>
        <label htmlFor="name">Username</label>
        <input onChange={ChengName} type="text" id="name" />
        <label htmlFor="age">Age (Years)</label>
        <input onChange={ChangeAge} type="number" id="age" />
        <Button>Add User</Button>
      </form>
    </Cart>
  );
};

export default Adduser;

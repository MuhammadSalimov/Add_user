import React, { useState } from "react";
import Adduser from "./Components/Adduser";
import UserList from "./Components/UserList";
import "./App.css";

function App() {
  const [state, setState] = useState([]);

  const AddData = (elem) => {
    setState((item) => [...item, elem]);
  };

  return (
    <>
      <section id="userInput">
        <Adduser Info={AddData} />
      </section>
      <section id="userList">
        <UserList newItem={state} />
      </section>
    </>
  );
}

export default App;

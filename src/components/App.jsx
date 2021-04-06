import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function changeHandler(event) {
    const { name, value } = event.target;

    setContact((previousContact) => {
      switch (name) {
        case "fName":
          return {
            fName: value,
            lName: previousContact.lName,
            email: previousContact.email
          };
        case "lName":
          return {
            fName: previousContact.fName,
            lName: value,
            email: previousContact.email
          };
        case "email":
          return {
            fName: previousContact.fName,
            lName: previousContact.lName,
            email: value
          };

        default:
          break;
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={changeHandler}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={changeHandler}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={changeHandler}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

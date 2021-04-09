import React, { useState } from "react";

const UseStateWithObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <h1>useState</h1>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <h2>{`First Name is:${name.firstName}`}</h2>
      <h2>{`Last Name is:${name.lastName}`}</h2>
    </div>
  );
};

export default UseStateWithObject;

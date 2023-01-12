import React from "react";
import { useState } from "react";

function TwoWayFunc() {
  const [form, setform] = useState({
    firstName: "",
    age: "",
  });
  const { firstName, age } = form;

  const handleValue = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  return (
    <div>
      <div>
        <input name="firstName" value={firstName} onChange={handleValue} />
      </div>
      <div>
        <input name="age" value={age} onChange={handleValue} />
      </div>
      <p>Name: {firstName}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default TwoWayFunc;

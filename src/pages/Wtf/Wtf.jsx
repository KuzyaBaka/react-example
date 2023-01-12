import React, { useEffect } from "react";
import { useState } from "react";

function Wtf() {
  const [yes, setYes] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://yesno.wtf/api")
      .then((res) => res.json())
      .then((data) => setYes(data));
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <div>
        <img src={yes.image} alt="" />
      </div>
      <h1>{yes.answer}</h1>
      <button onClick={handleRefresh}>refresh</button>
    </div>
  );
}

export default Wtf;

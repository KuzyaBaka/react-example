import React, { useState } from "react";

function ButtonFun() {
  // Массив - кортеж
  const [count, setCount] = useState(0);
  const [isToggle, setIsToggle] = useState(true);

  const handleClick = () => {
    setCount(count + 1);
    setIsToggle(!isToggle)
  };
  return (
    <button onClick={handleClick}>
      {count} {isToggle ? `func` : `class`}
    </button>
  );
}

export default ButtonFun;


// создать кнопку. которая будет менять название (НА КЛАССАХ)
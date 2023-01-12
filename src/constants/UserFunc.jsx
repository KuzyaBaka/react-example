import React, { useEffect, useState } from "react";
/* import "./UserFunc.css" */
import style from './UserFunc.module.css'
import { Button } from "./style";
// import logo from '../assets/logo.jpg'
import { image } from '../assets/index'

function UserFunc() {
  const [user, setUser] = useState([]);
  // useEffect - отвечает за отрисовки страници после Component Did Mount(СРАБАТЫВАЕТ ОДИН РАЗ){Асинхронная функция(fetch)} // запросы, счётчики и т.д.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
// срабатывает до формирования ДОМа // использовать нежелательно (используется для работ непосредственно с ДОМом) для работы с нативным JS
  /* useLayoutEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []); */
  return (
    // img - картинка добавляется с помощью интрополяции
    <div className={style.cont}>
      <div>
        <img width={200} src={image.logo} alt="qew" />
      </div>
      {user.map((i) => {
        return (
          <p style={{color:"red"}}>
            {i.name} - {i.email}
          </p>
        );
      })}
      <Button theme={100}>button</Button>
    </div>
  );
}

export default UserFunc;


// style={{color:"red"}} - это инлайновый стиль
// className="cont" - это для css
/* const redParagraph = {
  color: red,
  fontSize: 30px,
} */
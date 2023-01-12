import React from "react";
import ButtonCont from "../../container/ButtonCont/ButtonCont";
import ButtonFun from "../../components/Button/ButtonFun";
import UserFunc from "../../constants/UserFunc";

function Home() {
  return (
    <div>
      <ButtonCont />
      <div>
        <ButtonFun />
      </div>
      <UserFunc />
    </div>
  );
}

export default Home;

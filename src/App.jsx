import React, { Fragment } from "react";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Wtf from "./pages/Wtf/Wtf";
import WtfClass from "./pages/WtfClass/WtfClass";
import TwoWayBinding from "./pages/TwoWayBinding/TwoWayBinding";
import TwoWayFunc from "./pages/TwoWayBinding/TwoWayFunc";
import ExampleChild from "./components/ExampleChild/ExampleChild";
import RicAndMorty from "./pages/RicAndMorty/RicAndMorty";

function App() {
  return (
    <>
      <Header />
      <ExampleChild><h1>React</h1></ExampleChild>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/wtf" element={<Wtf />} />
        <Route path="/wtfClass" element={<WtfClass />} />
        <Route path="/twoway" element={<TwoWayBinding />} />
        <Route path="/twowayfunc" element={<TwoWayFunc />} />
        <Route path="/ricandmorty" element={<RicAndMorty />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import "./com/Css/Editor.css";
import "./com/Css/nav.css";

import { useRef, useState } from "react";
import Editor from "./com/Editor";
import Nav from "./com/Nav";

function App() {
  const [look, setLook] = useState(false);
  function handlelook() {
    setLook(!look); //fucntion is for hndle props and button click
    console.log("ok");
  }
  let copyhightlight = useRef(null);
  return (
    <>
      <Nav handlelook={handlelook} copyhightlight={copyhightlight} />
      <Editor look={look} copyhightlight={copyhightlight} />
    </>
  );
}

export default App;

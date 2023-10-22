import React, { useEffect, useState } from "react";

function Editor({ copyhightlight, look }) {
  const [inputtext, setInput] = useState("");
  const [markup, setHtmlMarkup] = useState("");
  const [line,setline] = useState([1])

  function check() {
    let db = document.getElementById("result"); //this function is show code in iframe window
    db.contentDocument.body.innerHTML = inputtext;
    // db.contentWindow.eval(inputtext)
  }
  console.log(line.length)
  useEffect(() => {
    if (GFG_Fun(inputtext)) {
      setHtmlMarkup(inputtext); //
    }
  }, [inputtext]);
  function GFG_Fun(inputtext) {
    const res = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>.*?<\/\1>/i.test(inputtext); //checking text format
    console.log(res);
    return res;
  }




function linenumber(e) {
  if (e.key === "Enter") {
    let main= Number(line)
    let inc=   main+1
    setline([...line,inc]);
  }
}
console.log(line)

 

  return (
    <>
      <div className="container">
        <div className="container__linenumber">
     {line.map((item,index)=>(<div    className="linenumber__count">{index+1}</div>))}
        </div>

        <textarea
          id="editor-textarea"
          ref={copyhightlight}
          className="editor__codearea"
          disabled={look}
          value={inputtext}
          onChange={(e) => {
            setInput(e.target.value);
          }}
         onKeyDown={linenumber}
        />

        <button onClick={check}>RUN</button>

        <iframe title="editor__result" className="result__iframe" id="result">
          {" "}
        </iframe>
      </div>
    </>
  );
}

export default Editor;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Nav({ handlelook, copyhightlight }) {
  const [toggle, settoggle] = useState(false);

  function copyText() {
    copyhightlight.current?.select();
    let copyone = copyhightlight.current?.value;

    window.navigator.clipboard.writeText(copyone);
  }

  function saved() {
    alert("Your code is saved ");
  }
  function hlook() {
    handlelook();
    settoggle(!toggle);
  }

  return (
    <>
      <nav className="nav">
        <h3 className="nav__name">ReactPad</h3>
        <li>
          {" "}
          <ul onClick={copyText}>copy</ul>
          <ul onClick={saved}>save</ul>
          {toggle === false ? (
            <ul onClick={hlook}>lock</ul>
          ) : (
            <ul onClick={hlook}>unlock</ul>
          )}
        </li>
      </nav>
    </>
  );
}

export default Nav;

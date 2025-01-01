import React from "react";
import "./Form.css";
export default function Form(props) {
  return (
    <>
      <section className="defuser"></section>
      <section className="mainContainer">
        <form>
          <h1>get in touch</h1>
          <label>Email</label>
          <input type="email" />
          <label>Description</label>
          <input type="email" />
        </form>
        <button
          onClick={() => {
            props.closeClicked(true);
          }}
        ></button>
      </section>
    </>
  );
}

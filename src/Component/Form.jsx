import React, {useState} from "react";

const Form = () => {
    const changeInput = (e) => {
        console.log(e.target.value)
    }
  return (
    <>
      <form action="" style={{ marginTop: "2rem" }}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter your name" onChange={(e) => changeInput(e)} />
        </div>
      </form>
    </>
  );
};

export default Form;

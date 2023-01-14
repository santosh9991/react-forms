import { useEffect, useRef, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    valueChangeHandler: enteredNameHandler,
    inputBlurHandler: nameInputBlurHandler,
    hasError:nameInputError,reset
  } = useInput((value)=>{if(value==undefined){value=''}
                      return value.trim() !==''});
 let formIsValid=false
  if(enteredNameIsValid){
    formIsValid=true
  }
  const submitHandler = (event)=>{
    event.preventDefault();
    if(!enteredNameIsValid){
      return;
    }
    reset()
  }


  const nameInputClasses = nameInputError?"form-control invalid":"form-control"
  // console.log("nameInputIsInValid",nameInputIsInValid);
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  type='text' id='name' onChange= {enteredNameHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
      </div>
      {nameInputError && <p>Entered valid name</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

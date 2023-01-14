import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName]=useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)
  const enteredNameIsValid = enteredName.trim() !==''
  const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched
  const enteredNameHandler=(event)=>{
    setEnteredName(event.target.value)
  }
  const nameInputBlurHandler= event=>{
    setEnteredNameIsTouched(true);
  }
  const submitHandler = (event)=>{
    event.preventDefault();
    setEnteredNameIsTouched(true)
    if(!enteredNameIsValid){
      return;
    }
    setEnteredName('');
    setEnteredNameIsTouched(false)
  }


  const nameInputClasses = nameInputIsInValid?"form-control invalid":"form-control"
  console.log("nameInputIsInValid",nameInputIsInValid);
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange= {enteredNameHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
      </div>
      {nameInputIsInValid && <p>Entered valid name</p>}
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

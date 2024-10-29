import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {

  const [isValid,setISValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setISValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length === 0){
      setISValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={isValid ? 'form-control' : 'form-control invalid'}>
        <label >Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

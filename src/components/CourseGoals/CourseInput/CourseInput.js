import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components';
import './CourseInput.css';

//#region dynamic-style ways 
  // The are multi ways to style components in react 
  // the regular way when we use css file with normal css selectors then 
  // If have a class for example with name [.form-control] that in one component in entier page 
  // If there other components with the same class name then will conflict because the css files for components is combined togther 
  // and there are not scobed so ... there are another ways that become to solve this issus :

  // * 1- by using the backage [styled-components] this backage is declear an object followed by any html elements that we need to applied style in it 
  //     like that were we used in this proeject then followed by string litealer [``] and in it but css code that we need to use and also we can add some logic 
  //    `by passing some props like we do in this project and accourding to it excute some css expersion this solve the proplem of dublicate classes name and 
  //     conflict duto un-scoped css files and also have some logic that offers for us not write more in-line style in tags and passing logic to css
//#endregion

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-wight:bold;
    display: block;
    margin-bottom: 0.5rem;
    color:${props => (props.invalid ? 'red':'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red': '#ccc')};
    background:${props=>(props.invalid ? 'red':'black')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

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

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className={`form-control ${!isValid ? 'invalid':''}`}>
  //       <label >Course Goal</label>
  //       <input type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
  //     </div> 
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );
  
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label >Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
      </FormControl> 
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

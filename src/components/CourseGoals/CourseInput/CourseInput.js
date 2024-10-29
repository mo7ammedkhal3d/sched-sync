import React, { useState } from 'react';
// import styled from 'styled-components';
import styles from './CourseInput.module.css'
import Button from '../../UI/Button/Button';
// import './CourseInput.css';

//#region dynamic-style ways 
  // The are multi ways to style components in react 
  // the regular way when we use css file with normal css selectors then 
  // If have a class for example with name [.form-control] that in one component in entier page 
  // If there other components with the same class name then will conflict because the css files for components is combined togther 
  // and there are not scobed so ... there are another ways that become to solve this issus :

  // * 1- By using the backage [styled-components] this backage is declear an object followed by any html elements that we need to applied style in it 
  //     like that were we used in this proeject then followed by string litealer [``] and in it but css code that we need to use and also we can add some logic 
  //    `by passing some props like we do in this project and accourding to it excute some css expersion this solve the proplem of dublicate classes name and 
  //     conflict duto un-scoped css files and also have some logic that offers for us not write more in-line style in tags and passing logic to css
  //     In addition we can also applied media-query like we do in this project

  // * 2- By using modules chat-gpt "In React, module styles refer to CSS Modules, 
  //      a popular way to style components with scoped, locally-scoped styles. CSS Modules
  //       allow you to create CSS files where the class names are locally scoped by default
  //      , avoiding conflicts between class names across different components.
  //        Advantages of CSS Modules in React
  //       #Avoid Style Conflicts: With locally scoped classes, you don’t need to worry about accidentally overriding styles globally.
  //       #Enhanced Readability: Each component has its CSS file, making the code more modular and easier to maintain.
  //       #Conditional Styling: It’s easy to toggle classes based on component state, providing more control over the styling.
  //       CSS Modules work out-of-the-box with tools like Create React App (CRA) and can be manually configured in Webpack if you’re using a custom React setup.
  //       Would you like to know more about CSS Modules with a specific framework or how to implement conditional styles in complex components?"

//#endregion



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
  
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl invalid={!isValid}>
  //       <label >Course Goal</label>
  //       <input type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
  //     </FormControl> 
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  return (
    <form onSubmit={formSubmitHandler}>
      <div  className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label >Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
      </div> 
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

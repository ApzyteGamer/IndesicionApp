import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please Add An Option To Get Started!</p>}
     {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;
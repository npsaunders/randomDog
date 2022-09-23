import React from "react";

//props is actually a function, passed from the Cards component, called getnewurl.  Since the Dog component needs
//the URL, which can't be obtained directly from the Button component, the Card component will
//be holding the state and will pass the URL to the Dog component.
//
const Button = (props) => {

  const handleClickButton = () => {
    props.getnewurl();
  }

  //When the button is clicked, call the handleClickButton function which in turn calls the
  //passed in getnewurl function and returns a new, random url based on the API call
  return (
    <div className="buttonContainer">
      <button id="urlButton" onClick={handleClickButton}>Get Dog Picture</button>
    </div>
  )
};

export default Button;
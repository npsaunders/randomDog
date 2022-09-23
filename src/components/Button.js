import React from "react";

const Button = (props) => {

  // Need to set the state of the url after the button is clicked.
  //this will be passed back to the
  const [newUrl, setUrl] = React.useState(null);



  const handleClickButton = () => {
    props.getnewurl(newUrl);
  }

  return (
    <button onClick={handleClickButton}>Get Dog Picture</button>
  )
};

export default Button;
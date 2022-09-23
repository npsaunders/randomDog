import React from "react";
import Button from "./Button.js";
import Dog from "./Dog.js";

function Card(props) {

  // State to hold the URL that is returned after clicking the Button
  // Set the initial state to null so nothing loads (url will be null)
  const [url, setUrl] = React.useState(null)

  // Function to get the url when the component with the Button is clicked
  // This can then be passed to the Dog component.
  const getNewUrl = async () => {

    // Make fetch request and store the response (URL)
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Url state to the url. The URL value, from the API call, is found by the message key
    setUrl(data.message);
  };

  // Use our Components in Card's returned JSX
  // Pass the getUrl function as a prop called newurl
  return (
    <>
      This is Card
      <Button getnewurl={getNewUrl} />
      <Dog url={url} />
    </>
  )
};

export default Card;
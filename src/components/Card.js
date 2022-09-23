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
  // Pass the getNewUrl function as a prop with a key called getnewurl
  const loaded = () => {
    return (
      <div className="card">
        This is Card
        <Button getnewurl={getNewUrl} />
        <Dog url={url} />
      </div>
    )
  };

  //On intial launch of the app, there is no URL
  const loading = () => {
    return (
      <div className="loadingContainer">
        <h3>No Dog Picture Loaded</h3>
        <Button getnewurl={getNewUrl} />
      </div>
    )
  }

  //If the app has just loaded, there is no url so only show the text
  return url ? loaded() : loading();
};

export default Card;
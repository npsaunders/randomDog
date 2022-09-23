function Dog({ url }) {

  return (
    <div className="dogContainer">
      <img className="dogImg" src={url} alt="random dog" />
    </div >
  )
};

export default Dog;
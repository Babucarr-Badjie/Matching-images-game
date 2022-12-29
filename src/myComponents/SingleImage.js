import "./SingleImage.css";

export default function SingleImage({ image, handleChoice, flipped }) {
  // step 8: create the handleChoiceClick function
  const handleChoiceClick = () => {
    handleChoice(image);
  };
  return (
    <div className="image">
      {/* step 15: applied a flipped class */}
      <div className={flipped ? "flipped" : ""}>
        <img className="front-side" src={image.src} alt="card front" />
        <img
          className="back-side"
          src="/images/cover.png"
          alt="back"
          //step 7: attached onclick event to the backside image
          onClick={handleChoiceClick}
        />
      </div>
    </div>
  );
}

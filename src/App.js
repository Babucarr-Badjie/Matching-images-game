import { useEffect, useState } from "react";
import "./App.css";
import SingleImage from "./myComponents/SingleImage";

// step 1: create th array of characters
// step 11. add a match property to each image
const characterImages = [
  { src: "/images/babu-2.jpg", matched: false },
  { src: "/images/kristy-1.jpg", matched: false },
  { src: "/images/sallah-2.jpg", matched: false },
  { src: "/images/mei-2.jpg", matched: false },
  { src: "/images/footballer-1.jpg", matched: false },
  { src: "/images/alieu.jpg", matched: false },
];

function App() {
  // step 3: create the state to store images
  const [images, setImages] = useState([]);
  const [turns, setTurns] = useState(0);

  // step 6: crete user choices state
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // disabled state
  const [disabled, setDisabled] = useState(false);

  // step 2: shuffle the images
  const shuffleImages = () => {
    const shuffledImages = [...characterImages, ...characterImages]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({ ...image, id: Math.random() }));

    // step 20: reset the choices when a user restart the game
    setChoiceOne(null);
    setChoiceTwo(null);

    // step 4: update the states
    setImages(shuffledImages);
    setTurns(0);
  };

  // console.log(images, turns);

  // step 8: handle a choice function
  const handleChoice = (image) => {
    // console.log(image);
    choiceOne ? setChoiceTwo(image) : setChoiceOne(image);
  };

  // step 9: reset choices & increase turns.
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // step 19: start the game automatically
  useEffect(() => {
    shuffleImages();
  }, []);

  // step 10: Compare the two choices made by the user
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        console.log("match");

        // step 12: update the matched property to true when the images matched
        setImages((prevImages) => {
          return prevImages.map((image) => {
            if (image.src === choiceOne.src) {
              return { ...image, matched: true };
            } else {
              return image;
            }
          });
        });
        resetTurns();
      } else {
        console.log("not a match");
        // step 16: set a timeout of reseting an image when not match
        setTimeout(() => resetTurns(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  console.log(images);

  return (
    <div className="App">
      <h1>Matching Characters</h1>
      <p>Flip the cards to match characters</p>
      <button onClick={shuffleImages}>Start new game</button>

      {/* step 5: display the images in the browser in grid */}
      <div className="image-grid">
        {images.map((image) => (
          <SingleImage
            key={image.id}
            image={image}
            handleChoice={handleChoice}
            // step 13: flipping the images (three senarious to match the images)
            flipped={
              image === choiceOne || image === choiceTwo || image.matched
            }
            // step 17: disabling flipping the cards
            disabled={disabled}
          />
        ))}
      </div>

      {/* step 18: Display the number of turns  */}
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;

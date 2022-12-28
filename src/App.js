import { useState } from "react";
import "./App.css";
import SingleImage from "./myComponents/SingleImage";

// step 1: create th array of characters
const characterImages = [
  { src: "/images/babu-1.jpg" },
  { src: "/images/kristy.jpg" },
  { src: "/images/sallah-1.jpg" },
  { src: "/images/mei-1.jpg" },
  { src: "/images/footballer-1.jpg" },
  { src: "/images/roadmap.jpg" },
];

function App() {
  // step 3: create the state to store images
  const [images, setImages] = useState([]);
  const [turns, setTurns] = useState(0);

  // step 2: shuffle the images
  const shuffleImages = () => {
    const shuffledImages = [...characterImages, ...characterImages]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({ ...image, id: Math.random() }));

    // step 4: update the states
    setImages(shuffledImages);
    setTurns(0);
  };

  console.log(images, turns);
  return (
    <div className="App">
      <h1>Matching Characters</h1>
      <p>Flip the cards to match characters</p>
      <button onClick={shuffleImages}>Start new game</button>

      {/* step 5: display the images in the browser in grid */}
      <div className="image-grid">
        {images.map((image) => (
          <SingleImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;

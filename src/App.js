import { useState } from "react";
import "./App.css";

// step 1: create th array of characters
const characterImages = [
  { src: "/images/helmet-1.png" },
  { src: "/images/potion-1.png" },
  { src: "/images/ring-1.png" },
  { src: "/images/scroll-1.png" },
  { src: "/images/shield-1.png" },
  { src: "/images/sword-1.png" },
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
          <div className="image" key={image.id}>
            <div>
              <img className="front" src={image.src} alt="front-img" />
              <img
                className="backside"
                src="/images/cover.png"
                alt="back-img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

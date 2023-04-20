import { useState, useEffect } from "react";
import "./App.css";

import meowth from "./assets/meowth.png";
import squirtle from "./assets/squirtle.png";
import psyduck from "./assets/psyduck.png";
import jigglypuff from "./assets/jigglypuff.png";
import bulbasaur from "./assets/bulbasaur.png";
import pikachu from "./assets/pikachu.png";
import zubat from "./assets/zubat.png";
import caterpie from "./assets/caterpie.png";
import eevee from "./assets/eevee.png";
import bellsprout from "./assets/bellsprout.png";
import pidgey from "./assets/pidgey.png";
import weedle from "./assets/weedle.png";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(null);
  const [images, setImages] = useState([]);
  const [clickedImages, setClickedImages] = useState([]);

  useEffect(() => {
    const imagesArray = [
      meowth,
      squirtle,
      psyduck,
      jigglypuff,
      bulbasaur,
      pikachu,
      zubat,
      caterpie,
      eevee,
      bellsprout,
      pidgey,
      weedle,
    ];
    const shuffleArray = imagesArray.sort(() => Math.random() - 0.5);
    setImages(shuffleArray);
  }, []);

  const handleImageClick = (e) => {
    if (clickedImages.includes(e.target.src)) {
      setScore(0);
      setClickedImages([]);
      setBestScore(Math.max(bestScore, score));
    } else {
      setClickedImages((prevClickedImage) => [
        ...prevClickedImage,
        e.target.src,
      ]);
      setScore(score + 1);
      const shuffleArray = images.sort(() => Math.random() - 0.5);
      setImages(shuffleArray);
    }
  };

  return (
    <div className="App">
      <div className="score">
        <h1>Score: {score}</h1>
        <h2>Best Score: {bestScore}</h2>
      </div>
      {score === images.length && (
        <div className="overlay">
          <div className="congrats">
            <h1>Congratulations!</h1>
            <button onClick={() => window.location.reload()}>Play Again</button>
          </div>
        </div>
      )}
      <div className="container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={image} onClick={handleImageClick} />
        ))}
      </div>
    </div>
  );
}

export default App;

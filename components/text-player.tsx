"use client";
import React, { useEffect, useState } from "react";

interface TextPlayerProps {
  textArray: string[];
  durationInSeconds: number;
}

const TextPlayer: React.FC<TextPlayerProps> = ({
  textArray,
  durationInSeconds,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(textArray[0]);
  const [countdown, setCountdown] = useState(durationInSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      // Decrease countdown timer
      setCountdown((prevCountdown) => prevCountdown - 1);

      // When countdown reaches 0, move to the next text
      if (countdown === 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setCountdown(durationInSeconds);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, durationInSeconds, textArray]);

  useEffect(() => {
    setCurrentText(textArray[currentIndex]);
  }, [currentIndex, textArray]);

  return (
    <div>
      <h2>Text Player</h2>
      <div>
        <p>{currentText}</p>
        <p>Countdown: {countdown} seconds</p>
      </div>
    </div>
  );
};

function App() {
  const textArray = ["Text 1", "Text 2", "Text 3"];
  const durationInSeconds = 5;

  return (
    <div className="App">
      <TextPlayer textArray={textArray} durationInSeconds={durationInSeconds} />
    </div>
  );
}

export default App;

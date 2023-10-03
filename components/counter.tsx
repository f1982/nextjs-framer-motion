"use client";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  duration: number; // Duration in seconds
  onComplete?: () => void; // Callback when countdown is complete
}

export const Countdown: React.FC<CountdownProps> = ({
  duration,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      onComplete?.();
    }

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsRemaining
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <p>Countdown: {formatTime(timeLeft)}</p>
    </div>
  );
};

export function CountdownPlayer() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count === 0 && (
        <Countdown
          duration={10}
          onComplete={() => {
            console.log("on finished");
            setCount(1);
          }}
        />
      )}
    </div>
  );
}

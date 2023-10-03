"use client";

import { QuizData } from "@/app/quiz/single/page";
import React, { useEffect, useState } from "react";
import { QuoteData } from "../quote/quote-present";
import QuizPresent from "./quiz-single";

interface QuizPlayerProps {
  data: QuizData[];
}

export default function QuizPlayer(props: QuizPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [current, setCurrent] = useState<QuizData | null>(null);

  const [duration, setDuration] = useState<number>(5);

  console.log("Rendering QuizPlayer component");

  const handleNext = () => {
    console.log("handleNext");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === props.data.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? props.data.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleFinished = () => {
    // setDuration(5);
    setTimeout(() => {
      handleNext();
    }, 100);
  };

  // useEffect(() => {
  //   handleNext();
  // }, [duration]);

  // useEffect(() => {
  //   let t = setTimeout(() => {
  //     handleNext();
  //   }, 3000);
  //   return () => clearTimeout(t);
  // }, [currentIndex]);

  return (
    <div>
      <div>QuizPlayer: {currentIndex}</div>
      <div>duration: {duration}</div>
      <QuizPresent
        duration={duration}
        data={props.data[currentIndex]}
        onTimeUp={handleFinished}
      ></QuizPresent>
    </div>
  );
}

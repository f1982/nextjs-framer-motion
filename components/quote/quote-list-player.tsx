"use client";

import { useEffect, useState } from "react";
import QuotePresent, { QuoteData } from "./quote-present";

const bgVideoUrls = [
  "/quote/tunnel_-_22370 (540p).mp4",
  "/quote/abstract_-_65410 (540p).mp4",
  "/quote/neon_-_21368 (720p).mp4",
  "/quote/surface_-_36637 (720p).mp4",
];

const bgImageUrls = [
  "/quote/astronomy-1867616_1280.jpg",
  "/quote/black-1072366_1280.jpg",
  "/quote/earth-1756274_1280.jpg",
  "/quote/forest-3622519_1280.jpg",
  "/quote/sunset-1373171_1280.jpg",
  "/quote/forest-3119826_1920.jpg",
  "/quote/thunderstorm-3625405_1920.jpg",
  "/quote/eclipse-1492818_1920.jpg",
];

import React from "react";
import { AnimatedWord } from "./animated-words";

export default function QuotePlayer() {
  const quotes: QuoteData[] = [
    {
      paragraph: `111Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.`,
      author: "Martin Luther King",
    },
    {
      paragraph: `222Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.`,
      author: "222Martin Luther King",
    },

    {
      paragraph: `333Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.`,
      author: "333Martin Luther King",
    },
    {
      paragraph: `44Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.`,
      author: "44Martin Luther King",
    },
  ];

  return <QuoteListPlayer quotes={quotes}></QuoteListPlayer>;
}

export function QuoteListPlayer({ quotes }: { quotes: QuoteData[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [current, setCurrent] = useState<QuoteData | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === quotes.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? quotes.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let t = setTimeout(() => {
      // setCurrentIndex((value) => value + 1);
      handleNext();
    }, 10000);
    return () => clearTimeout(t);
  }, [currentIndex]);

  return (
    <>
      {/* <h1>{currentIndex} - </h1>
      <br /> */}
      {/* <p>{quotes[currentIndex].paragraph}</p> */}
      {/* <AnimatedWord
        text={quotes[currentIndex].paragraph}
        className="md:text-4xl text-2xl md:leading-loose italic font-extrabold drop-shadow-lg"
        // animation={animations}
        delay={6000}
        callback={() => {
          console.log("hide finished");
        }}
      /> */}

      <QuotePresent
        quote={quotes[currentIndex]}
        imageUrls={["/quote/martin-luther-king.png", "/quote/lao_zi.png"]}
        musicUrls={["/quote/forest-lullaby-110624.mp3"]}
        backgroundUrls={bgImageUrls}
        // callback={() => {
        //   console.log("quote list callback currentIndex", currentIndex);
        //   if (currentIndex < quotes.length - 1) {
        //     setCurrentIndex((value) => value + 1);
        //   }
        // }}
      />
    </>
  );
}

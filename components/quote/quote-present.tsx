"use client";

import React, { useEffect, useState } from "react";
import { AnimatedWord } from "./animated-words";
import { AnimatedText } from "./animated-char";
import { QuoteBackground } from "./quote-background";
import { AudioPlayer } from "./audio-player";

interface QuoteProps {
  quote: string;
  prefix?: string;
  author?: string;
  background?: string[];
  music?: string;
  animation?: object;
}

const animations = {
  hidden: {
    opacity: 0,
    y: 80,
    x: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
};

export default function QuoteStandard(props: QuoteProps) {
  const [quote, setQuote] = useState<string[]>([]);

  useEffect(() => {
    function getQuote(q: string) {
      const sentences = q.split(".");
      return sentences.map((s, i) => {
        return i < sentences.length - 1 ? s.trim() + "." : s.trim();
      });
    }
    setQuote(getQuote(props.quote));
  }, []);

  return (
    <div className="relative flex-1 w-full bg-black">
      <QuoteBackground />
      <AudioPlayer />
      <div className=" absolute w-full h-full flex-1 flex flex-col justify-center items-center gap-6 text-white">
        <div className="mt-9">LAW NO.3</div>
        <div className="w-full max-w-6xl md:p-9 p-3 flex-1 flex flex-col justify-center items-center">
          <AnimatedWord
            text={quote}
            className="md:text-5xl text-xl leading-12 font-extrabold drop-shadow-lg"
            animation={animations}
            repeatDelay={10000}
          />
          <AnimatedText
            showDelay={5000}
            text={["By Mary Kay Ash"]}
            className="mt-6 max-w-3xl md:text-3xl text-md w-full text-right drop-shadow-lg"
            repeatDelay={15000}
          />
        </div>
        <div className="text-right mb-6">100 LAWS from Quotes.com</div>
      </div>
    </div>
  );
}

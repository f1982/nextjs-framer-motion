import React from "react";
import { AnimatedWord } from "./animated-words";
import { AnimatedText } from "./animated-text";

const videoBgUrl = "surface_-_36637 (720p).mp4";

export default function QuoteStandard() {
  function getQuote() {
    const quote = `Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.`;
    const sentences = quote.split(".");
    return sentences.map((s, i) => {
      return i < sentences.length - 1 ? s.trim() + "." : s.trim();
    });
    // return sentences;
  }

  const animations = {
    hidden: {
      opacity: 0,
      y: 40,
      x: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative flex-1 w-full bg-black">
      <video className="absolute w-auto h-full" autoPlay loop muted>
        <source src={videoBgUrl} type="video/mp4" />
      </video>
      <div className=" absolute w-full h-full flex-1 flex flex-col justify-center items-center gap-6 text-white">
        <div className="mt-9">LAW NO.3</div>
        <div className="max-w-6xl flex-1 flex flex-col justify-center items-center">
          <AnimatedWord
            text={getQuote()}
            className="text-5xl leading-12 font-extrabold"
            animation={animations}
            repeatDelay={10000}
          />
          <div className="mt-6">
            <AnimatedText
              text={["Mary Kay Ash"]}
              className="text-3xl font-light"
              repeatDelay={10000}
            />
          </div>
        </div>
        <div className="text-right">100 LAWS from Quotes.com</div>
      </div>
    </div>
  );
}

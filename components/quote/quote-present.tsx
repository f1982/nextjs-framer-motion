"use client";

import { sample } from "lodash";
import { useEffect, useState } from "react";
import { AnimatedText } from "./animated-char";
import { AnimatedWord } from "./animated-words";
import { AudioPlayer } from "./audio-player";
import { BackgroundPlayer, CornerImage } from "./quote-background";

export interface QuoteData {
  paragraph: string;
  author?: string;
  from?: string;
  category?: string;
  tag?: string;
  explanation?: string;
  url?: string;
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

interface QuotePresentProps {
  quote: QuoteData;
  prefix?: string;
  author?: string;
  backgroundUrls?: string[];
  imageUrls?: string[];
  musicUrls?: string[];
  animation?: object;
  delay?: number;
}

export default function QuotePresent(props: QuotePresentProps) {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [bgUrl, setBgUrl] = useState<string | undefined>("");
  const [musicUrl, setMusicUrl] = useState<string | undefined>("");

  useEffect(() => {
    if (props.imageUrls) {
      setImageUrl(sample(props.imageUrls));
    }
    if (props.backgroundUrls) {
      setBgUrl(sample(props.backgroundUrls));
    }
    if (props.musicUrls) {
      setMusicUrl(sample(props.musicUrls));
    }
  }, []);

  return (
    <div className="relative flex-1 w-full bg-black">
      {imageUrl && <CornerImage url={imageUrl} />}
      {bgUrl && <BackgroundPlayer bgUrl={bgUrl} />}
      <QuoteText
        paragraph={props.quote.paragraph}
        author={props.quote.author}
      />
      {musicUrl && <AudioPlayer url={musicUrl} />}
    </div>
  );
}

export function QuoteText({
  paragraph,
  author = "",
  header = "",
  footer = "",
}: {
  paragraph: string;
  author?: string;
  header?: string;
  footer?: string;
}) {
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    function getSentences(q: string) {
      const sentences = q.split(".");
      return sentences.map((s, i) => {
        return i < sentences.length - 1 ? s.trim() + "." : s.trim();
      });
    }

    setSentences(getSentences(paragraph));
  }, []);

  return (
    <div className="absolute w-full h-full flex-1 flex flex-col justify-center items-center gap-6 text-white">
      <div className="mt-9">{header}</div>
      <div className="w-full max-w-6xl md:p-9 p-3 flex-1 flex flex-col justify-center items-center">
        <AnimatedWord
          text={paragraph}
          className="md:text-4xl text-2xl md:leading-loose italic font-extrabold drop-shadow-lg"
          animation={animations}
          delay={10000}
          callback={() => {
            console.log("hide finished");
          }}
        />
        <AnimatedText
          showDelay={5000}
          text={["By " + author]}
          className="my-6 max-w-3xl md:text-3xl text-md w-full text-right drop-shadow-lg"
          delay={5000}
        />
      </div>
      <div className="text-right mb-6">{footer}</div>
    </div>
  );
}

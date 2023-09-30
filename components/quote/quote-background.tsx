"use client";

import { motion } from "framer-motion";
import { sample } from "lodash";
import React from "react";

// const videoBgUrl = "surface_-_36637 (720p).mp4";
// const videoBgUrl = "abstract_-_65410 (540p).mp4";
const videoUrls = [
  "tunnel_-_22370 (540p).mp4",
  "abstract_-_65410 (540p).mp4",
  "neon_-_21368 (720p).mp4",
  "surface_-_36637 (720p).mp4",
];

const imageUrls = [
  "astronomy-1867616_1280.jpg",
  "black-1072366_1280.jpg",
  "earth-1756274_1280.jpg",
  "forest-3622519_1280.jpg",
  "sunset-1373171_1280.jpg",
  "forest-3119826_1920.jpg",
  "thunderstorm-3625405_1920.jpg",
  "eclipse-1492818_1920.jpg",
];

export function QuoteBackground() {
  const imgBgUrl = sample(imageUrls);
  const cornerImgUrl = "martin-luther-king.png";
  // const cornerImgUrl = "lao_zi.png";

  const imageUrl = sample(imageUrls)!;
  const videoBgUrl = sample(videoUrls)!;
  // return <ImageBackground url={imageUrl} />;
  // return <VideoBackground url={videoBgUrl} />;
  return (
    <>
      <BackgroundPlayer bgUrl={videoBgUrl} cornerImageUrl={cornerImgUrl} />
    </>
  );
}

export function VideoBackground({ url }: { url: string }) {
  return (
    <video className="absolute w-full h-full object-cover" autoPlay loop muted>
      <source src={url} type="video/mp4" />
    </video>
  );
}

export function ImageBackground({ url }: { url: string }) {
  return (
    <div
      className="absolute w-full h-full bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("/${url}")`,
      }}
    ></div>
  );
}

{
  /* <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  /> */
}

export function CornerImage({ url }: { url: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute md:w-2/5 w-4/5 md:h-full h-2/3 bg-no-repeat bg-contain right-0 bottom-0 bg-right-bottom z-50"
      style={{
        backgroundImage: `url("/${url}")`,
      }}
    ></motion.div>
  );
}

export function BackgroundPlayer({
  bgUrl,
  cornerImageUrl,
}: {
  bgUrl: string;
  cornerImageUrl: string;
}) {
  return (
    <>
      {bgUrl.indexOf("mp4") === -1 ? (
        <ImageBackground url={bgUrl} />
      ) : (
        <VideoBackground url={bgUrl} />
      )}
      {cornerImageUrl && <CornerImage url={cornerImageUrl} />}
    </>
  );
}

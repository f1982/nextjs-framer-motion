import QuoteStandard from "@/components/quote/quote-present";

const videoUrls = [
  "/quote/tunnel_-_22370 (540p).mp4",
  "/quote/abstract_-_65410 (540p).mp4",
  "/quote/neon_-_21368 (720p).mp4",
  "/quote/surface_-_36637 (720p).mp4",
];

const imageUrls = [
  "/quote/astronomy-1867616_1280.jpg",
  "/quote/black-1072366_1280.jpg",
  "/quote/earth-1756274_1280.jpg",
  "/quote/forest-3622519_1280.jpg",
  "/quote/sunset-1373171_1280.jpg",
  "/quote/forest-3119826_1920.jpg",
  "/quote/thunderstorm-3625405_1920.jpg",
  "/quote/eclipse-1492818_1920.jpg",
];

export default function Page() {
  return (
    <QuoteStandard
      quote={`Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.`}
      imageUrls={["/quote/martin-luther-king.png"]}
      musicUrls={["/quote/forest-lullaby-110624.mp3"]}
      backgroundUrls={videoUrls}
    />
  );
}

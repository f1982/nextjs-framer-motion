export function AudioPlayer({ url }: { url?: string }) {
  return (
    <audio controls autoPlay loop className="absolute left-3 top-3 z-99">
      {/* <source src="horse.ogg" type="audio/ogg" /> */}
      <source src={url} type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
  );
}

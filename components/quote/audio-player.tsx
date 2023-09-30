export function AudioPlayer({
  url = "forest-lullaby-110624.mp3",
}: {
  url?: string;
}) {
  return (
    <audio controls autoPlay loop className="absolute left-3 bottom-3">
      {/* <source src="horse.ogg" type="audio/ogg" /> */}
      <source src={url} type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
  );
}

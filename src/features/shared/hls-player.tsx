import Hls from "hls.js";
import { useEffect, useRef } from "preact/hooks";

interface IProps {
  url: string
}

export default function HlsPlayer({ url }: IProps) {
  const player = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (player) {
      let hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(player.current);
    }
  }, []);

  return (
    <video
      ref={player}
      controls
      className="h-auto w-full rounded-sm"
    >
      <track kind="captions" />
    </video>
  );
}

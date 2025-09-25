"use client";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react"; // icons, install lucide-react if you don’t already have it

export default function MusicWidget() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/homegrown.mp3" preload="auto" />
      <div
        className="fixed flex items-center gap-3 bottom-6 right-6 bg-black text-white p-4 rounded-2xl shadow-xl cursor-pointer hover:scale-110 transition-transform"
        onClick={togglePlay}
        >
        {playing ? <Pause size={24} /> : <Play size={24} />}
        <div className="flex flex-col">
            <p className="text-2xl">Homegrown</p>
            <p className="text-sm">Jimmy Weeks</p>
        </div>
      </div>
    </>
  );
}

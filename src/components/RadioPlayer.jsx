import React, { useRef, useState } from "react";

const RadioPlayer = () => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h3 className="mb-4">اذاعة القرآن الكريم من القاهرة </h3>
      <input
        type="button"
        className="btn btn-secondary  px-3  text-info text-white border border-info rounded mb-4 py-2  fs-5"
        value={isPlaying ? "إيقاف الراديو" : "تشغيل الراديو"}
        onClick={togglePlay}
      />
      <audio
        ref={audioRef}
        src="http://n0e.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABhn4ooesAwi61_PFd7tLF2A"
      ></audio>
    </div>
  );
};

export default RadioPlayer;

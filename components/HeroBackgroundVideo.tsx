"use client";

import { useEffect } from "react";

export default function HeroBackgroundVideo() {
  useEffect(() => {
    const heroVideo = document.querySelector<HTMLVideoElement>(".heroVideo");

    if (!heroVideo) {
      return;
    }

    heroVideo.muted = true;
    heroVideo.defaultMuted = true;

    const forcePlay = async () => {
      try {
        await heroVideo.play();
      } catch {
        // Swallow autoplay errors; browsers may gate playback until user gesture.
      }
    };

    window.addEventListener("load", forcePlay);

    const handleVisibility = () => {
      if (!document.hidden) {
        void forcePlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    heroVideo.addEventListener("pause", forcePlay);

    void forcePlay();

    return () => {
      window.removeEventListener("load", forcePlay);
      document.removeEventListener("visibilitychange", handleVisibility);
      heroVideo.removeEventListener("pause", forcePlay);
    };
  }, []);

  return (
    <div className="heroVideoWrap" aria-label="Decorative ambient alpine night video background">
      <video
        className="heroVideo"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        tabIndex={-1}
      >
        <source
          src="https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/AIWR%20Hero%20Vid.mp4"
          type="video/mp4"
        />
        Calm nighttime alpine landscape used as a decorative background video.
      </video>

      <div className="heroVideoShield" aria-hidden="true" />
    </div>
  );
}

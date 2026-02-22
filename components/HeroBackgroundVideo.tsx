"use client";

import { useEffect, useMemo, useState } from "react";

const HERO_VIDEO_URLS = [
  "https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/AIWR%20Hero%20Vid.mp4",
  "https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/AIWR Hero Vid.mp4",
  "https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/AIWR%20Hero%20Vid.mp4?download=1",
] as const;

export default function HeroBackgroundVideo() {
  const [sourceIndex, setSourceIndex] = useState(0);
  const activeSource = useMemo(() => HERO_VIDEO_URLS[sourceIndex] ?? HERO_VIDEO_URLS[0], [sourceIndex]);

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
  }, [activeSource]);

  const handleVideoError = () => {
    setSourceIndex((current) => (current < HERO_VIDEO_URLS.length - 1 ? current + 1 : current));
  };

  return (
    <div className="heroVideoWrap" aria-label="Decorative ambient alpine night video background">
      <video
        className="heroVideo"
        src={activeSource}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        crossOrigin="anonymous"
        tabIndex={-1}
        onError={handleVideoError}
      >
        Calm nighttime alpine landscape used as a decorative background video.
      </video>

      <div className="heroVideoShield" aria-hidden="true" />
    </div>
  );
}

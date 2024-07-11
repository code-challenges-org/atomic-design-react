import { useState } from 'react';

import { PlayIcon } from './assets/PlayIcon';

export interface VideoProps {
  description: string;
  videoURL: string;
  thumbnail: string;
}

export const Video = ({ description, videoURL, thumbnail }: VideoProps) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <div className="flex-1 w-full mx-auto xl:mt-0">
      {isPlayingVideo ? (
        <>
          <video
            className="rounded-[4px] w-full max-h-[384.66px]"
            controls
            autoPlay
            muted
          >
            <source src={videoURL} type="video/mp4" />
          </video>
        </>
      ) : (
        <div className="relative flex justify-center items-center h-[14.0625rem] md:h-[24.0413rem]">
          <img
            className="rounded-lg w-full md:h-[384.66px]"
            src={thumbnail}
            alt={description}
          />

          <div className="absolute inset-0 bg-black opacity-80 rounded-[4px]" />

          <button
            className="absolute m-auto"
            onClick={() => setIsPlayingVideo(true)}
          >
            <PlayIcon />
          </button>
        </div>
      )}
    </div>
  );
};

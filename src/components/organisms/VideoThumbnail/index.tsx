import { useState } from 'react';

import { Video, VideoProps } from '@/components/atoms/Video';
import { Thumbnail, ThumbnailProps } from '@/components/molecules/Thumbnail';

export type VideoThumbnailProps = Omit<ThumbnailProps, 'onClickPlayButton'> &
  VideoProps;

export const VideoThumbnail = (props: VideoThumbnailProps) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const videoProps: VideoProps = {
    videoURL: props.videoURL,
  };

  const thumbnailProps: ThumbnailProps = {
    description: props.description,
    imageURL: props.imageURL,
    onClickPlayButton: () => setIsPlayingVideo(true),
  };

  if (isPlayingVideo) {
    return <Video {...videoProps} />;
  }

  return <Thumbnail {...thumbnailProps} />;
};

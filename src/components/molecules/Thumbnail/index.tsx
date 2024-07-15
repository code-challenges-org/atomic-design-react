import { Image } from '@/components/atoms/Image';
import { Button } from '@/components/atoms/Button';

import { PlayIcon } from './assets/PlayIcon';

export interface ThumbnailProps {
  imageURL: string;
  description: string;
  onClickPlayButton: () => void;
}

export const Thumbnail = (props: ThumbnailProps) => {
  return (
    <div className="relative flex justify-center items-center h-[14.0625rem] md:h-[24.0413rem]">
      <Image
        src={props.imageURL}
        alt={props.description}
        className="rounded-[4px] w-full md:h-[24.0413rem]"
      />

      <div className="absolute inset-0 bg-black opacity-80 rounded-[4px]" />

      <Button className="absolute m-auto" onClick={props.onClickPlayButton}>
        <PlayIcon />
      </Button>
    </div>
  );
};

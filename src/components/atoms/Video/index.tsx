export interface VideoProps {
  videoURL: string;
}

export const Video = ({ videoURL }: VideoProps) => {
  return (
    <>
      <video
        className="rounded-[4px] w-full"
        controls
        autoPlay
        muted
        data-testid="video"
      >
        <source data-testid="video-source" src={videoURL} type="video/mp4" />
      </video>
    </>
  );
};

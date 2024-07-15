import {
  VideoThumbnail,
  VideoThumbnailProps,
} from '@/components/organisms/VideoThumbnail';

const mock: VideoThumbnailProps = {
  videoURL: 'https://media.graphassets.com/AIewTc4QtSfGobASZScE',
  description:
    'Capa do eBook, escrito Design para Devs com um programador em frente ao computador',
  imageURL: 'https://media.graphassets.com/I7TeV9zVSBiR8bkitszw',
};

function App() {
  return (
    <div className="flex flex-col gap-5 h-screen justify-center items-center">
      <h1 className="text-zinc-50 text-3xl font-bold">Atomic Design Example</h1>

      <div className="w-full mt-8 md:max-w-[50rem] md:mx-auto">
        <VideoThumbnail {...mock} />
      </div>
    </div>
  );
}

export default App;

import { act, fireEvent, render, screen } from '@testing-library/react';

import { VideoTestIDs } from '@/components/atoms/Video/Video.test';

import { VideoThumbnail, VideoThumbnailProps } from '.';

const mock: VideoThumbnailProps = {
  imageURL: 'https://www.cdn.com/image.png',
  description: 'Loren ipsum dolor',
  videoURL: 'https://www.cdn.com/video.mp4',
};

const { getByRole, getByTestId } = screen;

describe('<VideoThumbnail />', () => {
  beforeEach(() => {
    render(<VideoThumbnail {...mock} />);
  });

  it('should render Thumbnail component', () => {
    const thumbnail = getByRole('img', { name: mock.description });

    expect(thumbnail).toBeInTheDocument();
  });

  it('should render Video on click Thumbnail button', () => {
    const button = getByRole('button');

    fireEvent.click(button);

    act(() => {
      const video = getByTestId(VideoTestIDs.VIDEO);

      expect(video).toBeInTheDocument();
    });
  });
});

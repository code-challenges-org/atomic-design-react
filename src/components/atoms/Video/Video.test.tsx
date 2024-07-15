import { render, screen } from '@testing-library/react';

import { Video, VideoProps } from '.';

const { getByTestId } = screen;

export enum VideoTestIDs {
  VIDEO = 'video',
  SOURCE = 'video-source',
}

const mock: VideoProps = {
  videoURL: 'https://media.graphassets.com/AIewTc4QtSfGobASZScE',
};

describe('<Video />', () => {
  beforeEach(() => {
    render(<Video {...mock} />);
  });

  it('should render video with controls', () => {
    const video = getByTestId(VideoTestIDs.VIDEO);

    expect(video).toHaveAttribute('controls');
  });

  it('should render video with auto play', () => {
    const video = getByTestId(VideoTestIDs.VIDEO);

    expect(video).toHaveAttribute('autoPlay');
  });

  it('should render source with correct src value', () => {
    const source = getByTestId(VideoTestIDs.SOURCE);

    expect(source).toHaveAttribute('src', mock.videoURL);
  });
});

import { fireEvent, render, screen } from '@testing-library/react';

import { Thumbnail, ThumbnailProps } from '.';

const mock: ThumbnailProps = {
  description: 'Loren ipsum dolor',
  imageURL: 'https://www.cdn.com/image.png',
  onClickPlayButton: jest.fn(),
};

const { getByRole, getByLabelText } = screen;

describe('<Thumbnail />', () => {
  beforeEach(() => {
    render(<Thumbnail {...mock} />);
  });

  it('should render image', () => {
    const image = getByRole('img', { name: mock.description });

    expect(image).toBeInTheDocument();
  });

  it('should render button', () => {
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should call function on click button', () => {
    const button = getByRole('button');

    fireEvent.click(button);

    expect(mock.onClickPlayButton).toHaveBeenCalled();
  });

  it('should render icon', () => {
    const icon = getByLabelText('Ícone representando o inicio da reprodução');

    expect(icon).toBeInTheDocument();
  });
});

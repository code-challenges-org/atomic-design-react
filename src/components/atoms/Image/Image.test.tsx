import { render, screen } from '@testing-library/react';

import { Image, ImageProps } from '.';

const mock: ImageProps = {
  src: 'https://www.cdn.com/image.png',
  alt: 'Loren ipsum dolor',
  className: 'custom-class',
};

describe('<Image />', () => {
  beforeEach(() => {
    render(<Image {...mock} />);
  });

  it('should render image', () => {
    const image = screen.getByRole('img', { name: mock.alt });

    expect(image).toHaveAttribute('src', mock.src);
  });

  it('should render with custom class', () => {
    const image = screen.getByRole('img', { name: mock.alt });

    expect(image).toHaveClass('custom-class');
  });
});

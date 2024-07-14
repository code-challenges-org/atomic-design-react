import { screen, render } from '@testing-library/react';

import { Button } from '.';

describe('<Button />', () => {
  it('should render button', () => {
    render(<Button>Children</Button>);

    const button = screen.getByRole('button', { name: 'Children' });

    expect(button).toBeInTheDocument();
  });

  it('should render with custom class', () => {
    render(<Button className="custom-class">Children</Button>);

    const button = screen.getByRole('button', { name: 'Children' });

    expect(button).toHaveClass('custom-class');
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import Book from './Book.jsx';

describe('Book component', () => {
  const books = {
    books: [
      {
        id: 1,
        title: 'Test Book',
        author: 'Test Author',
        price: 10.99,
        image: '',
        description: 'Test description',
      },
    ],
  };

  it('should increase quantity when the increment button is clicked', () => {
    render(<Book books={books} />);
    const incrementButton = screen.getByText('▲');
    fireEvent.click(incrementButton);
    const quantityInput = screen.getByDisplayValue('2');
    expect(quantityInput).toBeInTheDocument();
  });

  it('should decrease quantity when the decrement button is clicked', () => {
    render(<Book books={books} />);
    const decrementButton = screen.getByText('▼');
    fireEvent.click(decrementButton);
    const quantityInput = screen.getByDisplayValue('1');
    expect(quantityInput).toBeInTheDocument();
  });

  it('should update the total cost when the quantity is changed', () => {
    render(<Book books={books} />);
    const incrementButton = screen.getByText('▲');
    fireEvent.click(incrementButton);
    const totalCost = screen.getByText('21.98');
    expect(totalCost).toBeInTheDocument();
  });
});

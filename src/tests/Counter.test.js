// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const h2 = screen.getByText(/Counter/i);
  expect(h2).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const startingZero = screen.getByText(/0/i);
  expect(startingZero).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const plus = screen.getByText('+');
  fireEvent.click(plus);
  const count = screen.getByText(/1/i);
  expect(count).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const minus = screen.getByText('-');
  fireEvent.click(minus);
  const count = screen.getByText(/-1/i);
  expect(count).toBeInTheDocument();
});

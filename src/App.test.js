import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('when user clicks on close zoo or open zoo button, text on screen changes', () => {
  render(<App />);
  const closeZooButton = screen.queryByText(/Close zoo/i);
  const openZooButton = screen.queryByText(/Open zoo/i);

  fireEvent.click(closeZooButton);

  const closedZooEl = screen.queryByText('I am never going to financially recover from this');
  expect(closedZooEl).toBeInTheDocument();

  fireEvent.click(openZooButton);

  const openZooEl = screen.queryByText('My name is Joe Exotic and we are open for business');
  expect(openZooEl).toBeInTheDocument();
});
